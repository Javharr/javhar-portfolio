import { motion } from 'motion/react';
import { achievementsData } from '../data';

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-8 border border-white/10 px-3 py-1 w-fit">
          ACHIEVEMENTS & COMPETITIONS
        </div>
        <h2 className="text-3xl md:text-5xl font-light mb-16 text-white tracking-tight">Milestones & Recognition</h2>
        
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {achievementsData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col relative overflow-hidden bg-[#141416]/40 backdrop-blur-sm border border-white/5 group hover:border-white/20 transition-all duration-300 p-8 md:p-12 shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 group-hover:bg-white/40 transition-colors"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 transform group-hover:translate-x-1 transition-transform duration-300">
                <div>
                  <h3 className="text-2xl md:text-3xl font-light mb-3 text-white">{item.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-white/40 mb-2">
                    <span className="text-white/70">{item.event}</span>
                    {item.location && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <span>{item.location}</span>
                      </>
                    )}
                  </div>
                </div>
                <span className="text-4xl md:text-6xl font-serif italic text-white/10 group-hover:text-white/20 transition-colors leading-none">
                  {item.year}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 transform group-hover:translate-x-1 transition-transform duration-300">
                <div className="md:col-span-2 space-y-8">
                  <div className="space-y-4">
                    {item.description.map((paragraph, i) => (
                      <p key={i} className="text-sm md:text-base text-white/50 leading-relaxed font-light">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {item.images && item.images.length > 0 && (
                    <div className={`grid gap-4 mt-6 ${item.images.length > 2 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2'}`}>
                      {item.images.map((img, idx) => (
                        <a href={img} target="_blank" rel="noreferrer" key={idx} className="block overflow-hidden relative aspect-[4/3] border border-white/10 group/img shadow-md bg-zinc-900 rounded-sm">
                          <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors z-10 pointer-events-none" />
                          <img 
                            src={img} 
                            alt={`Achievement photo ${idx + 1}`} 
                            className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 transition-all duration-500 scale-100 group-hover/img:scale-105" 
                            referrerPolicy="no-referrer"
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="md:col-span-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4 pb-2 border-b border-white/10 font-semibold">
                    Key Areas
                  </div>
                  <ul className="space-y-3">
                    {item.keyAreas.map((area, i) => (
                      <li key={i} className="text-xs md:text-sm text-white/60 font-light flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3"></span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
