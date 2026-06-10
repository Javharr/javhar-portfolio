import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.03),_transparent_40%)]"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="inline-block px-3 py-1 mb-6 text-[10px] tracking-[0.2em] border border-white/20 uppercase w-fit text-white/40 font-semibold backdrop-blur-sm bg-white/5">
          PORTFOLIO
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-none mb-6 text-white">
          Javhar <br />
          <span className="italic font-serif opacity-80">Bokhodirov.</span>
        </h1>
        
        <div className="text-white/50 text-lg md:text-2xl max-w-2xl font-light leading-relaxed mb-12 space-y-4">
          <p>
            Building at the intersection of robotics, scalable software, and intelligent systems.
          </p>
        </div>
        
        <div className="flex gap-6 items-center">
          <a href="#portfolio" className="px-8 py-4 bg-white text-black text-sm font-medium uppercase tracking-widest hover:bg-white/90 transition-colors">
            View Work
          </a>
          <a href="#contact" className="text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors text-white/80">
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.a 
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-3 text-white/30 hover:text-white transition-colors group"
      >
        <span className="text-[10px] tracking-widest uppercase opacity-60">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
      </motion.a>
    </section>
  );
}

