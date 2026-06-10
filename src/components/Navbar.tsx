import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#020204]/70 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-b border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex items-center justify-between">
        <a href="#home" className="text-xl font-medium tracking-tighter uppercase text-white">
          JAVHAR<span className="text-white/30">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-light tracking-wide uppercase text-white/60">
          <a href="#about" className="hover:text-white transition-opacity">About</a>
          <a href="#skills" className="hover:text-white transition-opacity">Skills</a>
          <a href="#experience" className="hover:text-white transition-opacity">Experience</a>
          <a href="#portfolio" className="hover:text-white transition-opacity">Works</a>
          <a href="#contact" className="hover:text-white transition-opacity">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
