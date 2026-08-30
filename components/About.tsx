'use client';

import { motion } from 'motion/react';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about-us" className="py-32 bg-[var(--color-mahati-navy)] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-[var(--color-mahati-gold)] text-xs font-bold tracking-widest uppercase mb-6">
              About Mahati Buildcon
            </span>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
              More Than Property. <br/>
              <span className="text-[var(--color-mahati-gold)]">It&apos;s About What&apos;s Next.</span>
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed font-light">
              Mahati Buildcon is a Nashik-focused real estate business helping individuals, families and investors discover property opportunities across residential, land and commercial segments.
            </p>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
              We believe that finding the right property should be a clear, informed and comfortable experience. Our approach is built around understanding your requirements, presenting suitable opportunities and providing transparent guidance throughout the property journey.
            </p>
            
            <motion.blockquote 
              whileHover={{ x: 5 }}
              className="border-l-4 border-[var(--color-mahati-gold)] pl-8 py-3 my-10 bg-gradient-to-r from-white/5 to-transparent rounded-r-2xl"
            >
              <p className="text-2xl font-heading italic text-white leading-snug">
                "Your property decision today can shape your tomorrow."
              </p>
            </motion.blockquote>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <motion.div variants={item} className="w-full h-64 rounded-[2rem] overflow-hidden border border-white/10 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/Customer Satisfaction.png" alt="Customer Satisfaction" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-mahati-navy)]/80 to-transparent mix-blend-multiply" />
            </motion.div>
            <motion.div variants={item} className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <h4 className="text-2xl font-heading font-bold mb-3 text-[var(--color-mahati-gold)]">Our Vision</h4>
              <p className="text-gray-300 leading-relaxed font-light">
                To become a trusted name in Nashik&apos;s real estate ecosystem by creating long-term relationships through transparency, service and local expertise.
              </p>
            </motion.div>
            
            <motion.div variants={item} className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <h4 className="text-2xl font-heading font-bold mb-3 text-[var(--color-mahati-gold)]">Our Mission</h4>
              <p className="text-gray-300 leading-relaxed font-light">
                To make property discovery simpler, more transparent and more accessible for buyers, sellers and investors.
              </p>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
