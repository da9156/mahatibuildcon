'use client';

import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function NashikAreas() {
  const areas = [
    { name: 'Gangapur Road', desc: 'Premium developments and lifestyle-focused communities.' },
    { name: 'Trimbak Road', desc: 'Growing corridor offering diverse investment opportunities.' },
    { name: 'Nashik Road', desc: 'Well-connected location with established activity.' },
    { name: 'College Road', desc: 'Prominent urban area with strong commercial presence.' },
    { name: 'Indira Nagar', desc: 'Established residential destination with great amenities.' },
    { name: 'Pathardi Phata', desc: 'Developing residential and connectivity-focused growth corridor.' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="nashik-areas" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12"
          >
            <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-1.5 mb-8">
              <MapPin className="w-4 h-4 text-[var(--color-mahati-gold)]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[var(--color-mahati-navy)]">Local Expertise</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-mahati-navy)] mb-6 leading-tight">
              Discover Nashik
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light">
              Explore property opportunities across one of Maharashtra&apos;s fastest-evolving cities. From established neighborhoods to emerging growth corridors, explore property opportunities across Nashik with local guidance from Mahati Buildcon.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--color-mahati-navy)] hover:bg-[#081a33] text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-[0_10px_20px_rgba(11,35,69,0.15)] flex items-center group"
            >
              Explore Nashik Properties
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full lg:w-7/12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {areas.map((area, index) => (
                <motion.div 
                  variants={item}
                  key={index} 
                  className="bg-[var(--color-mahati-off-white)] border border-gray-100 p-8 rounded-3xl hover:bg-white hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 group cursor-default"
                >
                  <h4 className="text-xl font-heading font-bold text-[var(--color-mahati-navy)] mb-3 group-hover:text-[var(--color-mahati-gold)] transition-colors">
                    {area.name}
                  </h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
