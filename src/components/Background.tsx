import { useEffect, useRef } from 'react';

/**
 * LiDAR-style point-cloud terrain drawn on a 2D canvas.
 * The terrain drifts slowly under a perspective camera, a scan line sweeps across it,
 * and the camera leans toward the pointer. Static frame when reduced motion is preferred.
 */
export function Background() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const css = getComputedStyle(document.documentElement);
    const ink = css.getPropertyValue('--color-ink').trim() || '#16181b';
    const accent = css.getPropertyValue('--color-accent').trim() || '#c2410c';

    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    let raf = 0;
    let running = true;
    const pointer = { x: 0, y: 0 };
    const cam = { x: 0, y: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const small = w < 768;
      cols = small ? 70 : 130;
      rows = small ? 70 : 120;
    };

    // Smooth layered "terrain" height, continuous in z so the drift never jumps.
    const height = (x: number, z: number, t: number) =>
      0.6 * Math.sin(x * 0.7 + z * 0.3 + t * 0.04) * Math.cos(z * 0.45 - x * 0.2) +
      0.32 * Math.sin(x * 1.25 - z * 0.8 + 1.7) +
      0.14 * Math.cos(x * 1.9 + z * 1.4 + t * 0.06);

    // Alpha buckets keep fillStyle changes cheap.
    const BUCKETS = 7;
    const inkBuckets: number[][] = Array.from({ length: BUCKETS }, () => []);
    const hotBuckets: number[][] = Array.from({ length: BUCKETS }, () => []);

    const draw = (time: number) => {
      const t = reduce ? 0 : time / 1000;
      cam.x += (pointer.x - cam.x) * 0.04;
      cam.y += (pointer.y - cam.y) * 0.04;

      ctx.clearRect(0, 0, w, h);
      for (const b of inkBuckets) b.length = 0;
      for (const b of hotBuckets) b.length = 0;

      const spanX = 22;
      const depth = 26;
      const drift = t * 0.35;
      const yaw = Math.sin(t * 0.03) * 0.12 + cam.x * 0.12;
      const pitch = 0.3 + cam.y * 0.05;
      const camH = 1.9;
      const f = Math.max(w, h) * 0.7;
      const cx = w / 2;
      const cy = h * 0.42;
      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const cosP = Math.cos(pitch);
      const sinP = Math.sin(pitch);

      // Scan line sweeps across x and wraps.
      const scan = depth + 2 - ((t * 2.2) % (depth + 6));

      for (let j = 0; j < rows; j++) {
        const z = 1.2 + Math.pow(j / (rows - 1), 1.6) * depth;
        const wz = z + drift;
        // spread each row across the visible frustum so dot density stays even on screen
        const half = Math.min(spanX, (w / 2 / f) * (z + 2) * 1.8 + 1);
        for (let i = 0; i < cols; i++) {
          const x = (i / (cols - 1) - 0.5) * half * 2;
          const y = height(x * 0.42, wz * 0.42, t) * 1.5;

          // rotate around Y, then pitch the camera down
          const rx = x * cosY - z * sinY;
          const rz = x * sinY + z * cosY;
          const ry = y - camH;
          const py = ry * cosP + rz * sinP; // camera-space up
          const pz = rz * cosP - ry * sinP; // camera-space depth
          if (pz < 0.3) continue;

          const sx = cx + (rx * f) / pz;
          const sy = cy - (py * f) / pz;
          if (sx < -4 || sx > w + 4 || sy < -4 || sy > h + 4) continue;

          const fade = Math.min(1, (depth - z) / (depth * 0.5));
          if (fade <= 0) continue;

          const d = Math.abs(z - scan);
          const band = 0.5 + z * 0.05;
          const hot = d < band ? 1 - d / band : 0;
          const lift = (y + 1) / 2; // 0..1, ridges a little darker
          const a = fade * (0.3 + lift * 0.4);

          if (hot > 0.05 && fade > 0.25) {
            const k = Math.min(BUCKETS - 1, Math.floor(hot * BUCKETS));
            hotBuckets[k].push(sx, sy, Math.max(1.2, Math.min(3.2, (1 + hot) * (5 / pz + 0.4))));
          } else {
            const k = Math.min(BUCKETS - 1, Math.floor(a * 1.5 * BUCKETS));
            inkBuckets[k].push(sx, sy, Math.max(0.9, Math.min(2.6, 7 / pz)));
          }
        }
      }

      ctx.fillStyle = ink;
      for (let k = 0; k < BUCKETS; k++) {
        const pts = inkBuckets[k];
        if (!pts.length) continue;
        ctx.globalAlpha = ((k + 0.5) / BUCKETS) * 0.7;
        for (let p = 0; p < pts.length; p += 3) {
          const s = pts[p + 2];
          ctx.fillRect(pts[p] - s / 2, pts[p + 1] - s / 2, s, s);
        }
      }
      ctx.fillStyle = accent;
      for (let k = 0; k < BUCKETS; k++) {
        const pts = hotBuckets[k];
        if (!pts.length) continue;
        ctx.globalAlpha = 0.25 + ((k + 0.5) / BUCKETS) * 0.75;
        for (let p = 0; p < pts.length; p += 3) {
          const s = pts[p + 2];
          ctx.fillRect(pts[p] - s / 2, pts[p + 1] - s / 2, s, s);
        }
      }
      ctx.globalAlpha = 1;

      if (running && !reduce) raf = requestAnimationFrame(draw);
    };

    const onPointer = (e: PointerEvent) => {
      pointer.x = (e.clientX / w) * 2 - 1;
      pointer.y = (e.clientY / h) * 2 - 1;
    };
    const onVisibility = () => {
      running = !document.hidden;
      cancelAnimationFrame(raf);
      if (running && !reduce) raf = requestAnimationFrame(draw);
    };
    const onResize = () => {
      resize();
      if (reduce) draw(0);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointer, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <div aria-hidden className="no-print pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#faf8f3_0%,_#efebe3_60%,_#e8e3d9_100%)]" />
      <canvas ref={ref} className="absolute inset-0" />
      <p className="absolute bottom-5 left-6 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/70 2xl:flex">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        LiDAR terrain scan · live
      </p>
    </div>
  );
}
