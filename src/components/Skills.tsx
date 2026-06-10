import { motion } from 'motion/react';
import { skillsData } from '../data';

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-8 border border-white/10 px-3 py-1 w-fit">
          CAPABILITIES
        </div>
        <h2 className="text-3xl md:text-5xl font-light mb-16 text-white tracking-tight">Technical & Analytical Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {skillsData.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col"
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-6 font-semibold pb-4 border-b border-white/10">
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.skills.map(skill => (
                  <li key={skill} className="text-white/70 font-light text-sm md:text-base flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3 group-hover:bg-white/60 transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
