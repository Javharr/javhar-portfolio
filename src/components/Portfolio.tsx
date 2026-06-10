import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const images = [project.imageUrl, ...(project.images || [])];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-[#141416]/40 backdrop-blur-sm border border-white/5 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]"
    >
      <div className="overflow-hidden mb-8 relative bg-[#0A0A0B]/50 aspect-video border border-white/5">
        <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImageIndex}
            src={images[currentImageIndex]} 
            alt={`${project.title} image ${currentImageIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white z-20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white z-20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {images.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/30'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-light text-white transition-colors tracking-wide">{project.title}</h3>
      </div>
      
      <div className="text-sm text-white/50 leading-relaxed font-light mb-8 space-y-4">
        {Array.isArray(project.description) ? (
          project.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))
        ) : (
          <p>{project.description}</p>
        )}
      </div>

      <div className="flex flex-col gap-6 mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className="text-[9px] uppercase tracking-[0.15em] px-2 py-1 bg-white/[0.03] text-white/60 border border-white/[0.05]">
              {tech}
            </span>
          ))}
        </div>
        
        {project.link && (
          <div className="pt-2">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors group/btn pb-1 border-b border-transparent hover:border-white/30 w-fit"
            >
              Visit Project 
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
            </a>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white/30 group-hover:w-full transition-all duration-700"></div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-8 border border-white/10 px-3 py-1 w-fit">
          PROJECTS
        </div>
        <h2 className="text-3xl md:text-5xl font-light mb-16 text-white tracking-tight">Key Initiatives</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {portfolioData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
