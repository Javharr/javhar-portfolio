import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-white/5 relative">
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_left_center,_rgba(255,255,255,0.02),_transparent_50%)]"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-8 border border-white/10 px-3 py-1 w-fit">
          ABOUT ME
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="text-3xl md:text-5xl font-light mb-8 text-white tracking-tight leading-tight">
              Engineering <span className="italic font-serif opacity-80">mindset</span>, <br />
              startup <span className="italic font-serif opacity-80">drive.</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-white/50 font-light leading-relaxed text-sm md:text-base">
            <p>
              I am passionate about building technologies that connect hardware, software, and intelligent systems. My background started with robotics and engineering projects, where I worked on drones, aerospace initiatives, and STEM competitions.
            </p>
            <p>
              Over time, my interests expanded toward automation, systems analysis, AI-related technologies, and software development workflows. I enjoy environments focused on experimentation, problem-solving, and innovation.
            </p>
            <p>
              Alongside technical projects, I have also coordinated STEM initiatives for hundreds of students and participated in international competitions involving engineering and technology.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
