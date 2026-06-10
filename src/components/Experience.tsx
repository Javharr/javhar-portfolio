import { motion } from 'motion/react';
import { experienceData } from '../data';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-8 border border-white/10 px-3 py-1 w-fit">
          EXPERIENCE
        </div>
        <h2 className="text-3xl md:text-5xl font-light mb-16 text-white tracking-tight">Professional Journey</h2>
        
        <div className="space-y-0 relative before:absolute before:inset-0 before:ml-2 md:before:ml-[16.5rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-8"
            >
               {/* Timeline Dot */}
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/30 bg-transparent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2 group-hover:border-white transition-colors duration-300">
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-300"></div>
              </div>
              
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] ml-10 md:ml-0 p-6 md:p-8 bg-[#141416]/40 backdrop-blur-sm border border-white/5 group-hover:border-white/20 transition-colors duration-300 rounded-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                   <h3 className="text-xl font-light text-white">{exp.role}</h3>
                   <span className="text-[10px] uppercase tracking-widest text-white/40 whitespace-nowrap px-2 py-1 bg-white/5 border border-white/5">{exp.period}</span>
                </div>
                <h4 className="text-sm font-light uppercase tracking-wide text-white/50 mb-4">{exp.company}</h4>
                <div className="text-sm text-white/40 leading-relaxed font-light space-y-4">
                  {Array.isArray(exp.description) ? (
                    exp.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
