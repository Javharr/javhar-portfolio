import { motion } from 'framer-motion';

export function Personal() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 w-full mx-auto border-t border-white/5 relative z-10 bg-[#0A0A0B]/60 backdrop-blur-md">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-8">Personal Outlook</div>
          <p className="text-xl md:text-3xl font-light leading-relaxed text-white/80">
            "What interests me most is building systems where software interacts with the real world through robotics, aerospace technologies, and intelligent automation. I enjoy environments focused on experimentation, fast learning, and solving practical engineering problems."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
