'use client';

import { Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-[var(--color-mahati-navy)] pt-32 pb-48 overflow-hidden">
      {/* Background Image / Video Mockup */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[var(--color-mahati-navy)]/85 mix-blend-multiply z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/assets/bg landing page.png" 
          alt="Premium Real Estate Nashik"
          className="w-full h-full object-cover"
        />
      </div>
      
      <motion.div 
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          FIND YOUR PROPERTY IN NASHIK.<br />
          <span className="text-[var(--color-mahati-gold)]">BUILD YOUR FUTURE WITH CONFIDENCE.</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          Discover residential, land and commercial property opportunities with a local real-estate partner focused on transparent guidance and your long-term goals.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#properties" 
            className="w-full sm:w-auto bg-[var(--color-mahati-gold)] hover:bg-[var(--color-mahati-warm-gold)] text-[var(--color-mahati-navy)] px-8 py-4 rounded-full font-bold text-base transition-colors text-center shadow-lg shadow-[var(--color-mahati-gold)]/20"
          >
            Explore Properties
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919503749316" 
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-[var(--color-mahati-navy)] px-8 py-4 rounded-full font-bold text-base transition-all duration-300 text-center"
          >
            Talk to an Expert
          </motion.a>
        </motion.div>
        
        <motion.p 
          variants={itemVariants}
          className="text-sm tracking-[0.3em] text-[var(--color-mahati-warm-gold)] font-bold uppercase"
        >
          Buy • Sell • Invest
        </motion.p>

        {/* Search Panel */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 bg-white/95 backdrop-blur-xl rounded-2xl p-6 lg:p-8 shadow-2xl max-w-5xl mx-auto text-left relative z-10 transform translate-y-12 border border-white/50"
        >
          <h3 className="text-xl font-heading font-bold text-[var(--color-mahati-navy)] mb-6">What are you looking for?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider">I&apos;m Looking To</label>
              <select className="bg-gray-50/50 border border-gray-200 rounded-xl p-3.5 text-[var(--color-mahati-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)]/50 transition-shadow appearance-none">
                <option>Buy</option>
                <option>Rent</option>
                <option>Invest</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider">Property Type</label>
              <select className="bg-gray-50/50 border border-gray-200 rounded-xl p-3.5 text-[var(--color-mahati-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)]/50 transition-shadow appearance-none">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Plots & Land</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider">Location</label>
              <select className="bg-gray-50/50 border border-gray-200 rounded-xl p-3.5 text-[var(--color-mahati-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)]/50 transition-shadow appearance-none">
                <option>Any Location in Nashik</option>
                <option>Gangapur Road</option>
                <option>Trimbak Road</option>
                <option>Nashik Road</option>
              </select>
            </div>
            <div className="flex items-end">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[var(--color-mahati-navy)] hover:bg-[#081a33] text-white rounded-xl p-3.5 font-semibold transition-colors flex justify-center items-center h-[52px]"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Properties
              </motion.button>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-3 items-center">
            <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Popular:</span>
            <span className="text-xs bg-gray-50 text-gray-600 px-4 py-1.5 rounded-full cursor-pointer hover:bg-[var(--color-mahati-gold)]/10 hover:text-[var(--color-mahati-navy)] transition-colors border border-gray-100">2 BHK in Nashik</span>
            <span className="text-xs bg-gray-50 text-gray-600 px-4 py-1.5 rounded-full cursor-pointer hover:bg-[var(--color-mahati-gold)]/10 hover:text-[var(--color-mahati-navy)] transition-colors border border-gray-100">Residential Plots</span>
            <span className="text-xs bg-gray-50 text-gray-600 px-4 py-1.5 rounded-full cursor-pointer hover:bg-[var(--color-mahati-gold)]/10 hover:text-[var(--color-mahati-navy)] transition-colors border border-gray-100">Commercial Spaces</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
