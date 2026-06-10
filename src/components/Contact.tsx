import { motion } from 'motion/react';
import { Mail, ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-8 md:py-8 px-6 md:px-12 w-full mx-auto border-t border-white/5 bg-[#0D0D0F]/80 backdrop-blur-md pb-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-2">Availability</div>
            <h2 className="text-2xl md:text-4xl font-light mb-3 text-white leading-tight">Let's build <br/><span className="italic font-serif opacity-80">together.</span></h2>
            <a href="mailto:bohodirovjavhar@gmail.com" className="inline-flex items-center gap-2 text-white/50 hover:text-white transform transition-all group text-sm">
              <span className="font-light border-b border-white/30 group-hover:border-white pb-1">bohodirovjavhar@gmail.com</span>
              <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </div>
          
          <div className="flex gap-6 text-xs font-light tracking-wide uppercase opacity-60 mt-4 md:mt-0">
            <a href="https://t.me/javxarr" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              Telegram
            </a>
            <a href="https://linkedin.com/in/javhar-bokhodirov-636bb52ab" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              LinkedIn
            </a>
          </div>
        </motion.div>
        
        <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4 text-white/30">
          <div className="flex gap-4 text-[10px] font-light text-white/40">
            <span>TypeScript</span>
            <span className="opacity-30">/</span>
            <span>React</span>
            <span className="opacity-30">/</span>
            <span>Node.js</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Personal Portfolio
          </span>
        </div>
      </div>
    </section>
  );
}
