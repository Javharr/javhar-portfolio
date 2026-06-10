import { useEffect, useState } from 'react';

export function StarsBackground() {
  const [stars, setStars] = useState<{ id: number; left: string; top: string; delay: string; size: string; opacity: number }[]>([]);

  useEffect(() => {
    // Generate stars only on the client side to prevent hydration mismatches
    const generatedStars = Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      // Bias towards smaller stars, a few larger ones
      size: `${Math.random() > 0.9 ? Math.random() * 2 + 1.5 : Math.random() * 1.5 + 0.5}px`,
      opacity: Math.random() * 0.7 + 0.1
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-[#020204]">
      {/* Deep space radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0A0A1F]/30 via-[#020204]/80 to-[#020204] z-0"></div>
      
      {/* Subtle grid pattern for tech context */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] z-0 pointer-events-none"></div>

      {/* Optional: adding some subtle nebulas */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px] mix-blend-screen -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[150px] mix-blend-screen -z-10 animate-pulse" style={{ animationDuration: '12s' }}></div>

      {/* Render the stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white z-10 animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: `${Math.random() * 4 + 2}s`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
