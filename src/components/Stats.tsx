import { motion } from 'framer-motion';

export function Stats() {
  const stats = [
    { value: "20+", label: "Countries Competed Against" },
    { value: "150+", label: "Teams in Competition" },
    { value: "45km", label: "Stratosphere Launch" },
    { value: "400+", label: "Students Coordinated" },
  ];

  return (
    <section className="py-12 md:py-24 px-6 md:px-12 w-full mx-auto relative border-t border-white/5 bg-[#0D0D0F]/40 backdrop-blur-sm z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col gap-2 p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-sm hover:bg-white/[0.04] hover:border-white/10 transition-colors"
            >
              <div className="text-3xl md:text-5xl font-light text-white tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-white/40 font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
