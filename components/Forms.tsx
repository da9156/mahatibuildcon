'use client';

import { motion } from 'motion/react';

export default function Forms() {
  return (
    <section className="py-32 bg-[var(--color-mahati-off-white)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Sell Your Property Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 lg:p-12 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <h3 className="text-3xl font-heading font-bold text-[var(--color-mahati-navy)] mb-4">Want to Sell Your Property?</h3>
            <p className="text-gray-500 mb-10 font-light text-lg">Let us help you connect your property with the right potential buyers in Nashik.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Full Name" className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)]/40 focus:border-transparent transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="tel" placeholder="Phone Number" className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)]/40 focus:border-transparent transition-all" />
                <input type="email" placeholder="Email Address" className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)]/40 focus:border-transparent transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Property Location" className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)]/40 focus:border-transparent transition-all" />
                <select className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)]/40 focus:border-transparent transition-all appearance-none">
                  <option value="" disabled selected>Property Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Plot / Land</option>
                </select>
              </div>
              <div>
                <input type="text" placeholder="Expected Price" className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)]/40 focus:border-transparent transition-all" />
              </div>
              <div>
                <textarea placeholder="Additional Details" rows={3} className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)]/40 focus:border-transparent transition-all"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button" 
                className="w-full bg-[var(--color-mahati-navy)] hover:bg-[#081a33] text-white font-bold py-4.5 rounded-xl transition-colors shadow-md"
              >
                List Your Property With Us
              </motion.button>
            </form>
          </motion.div>

          {/* Buyer Requirement Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--color-mahati-navy)] p-10 lg:p-12 rounded-[2rem] border border-[#1a427a] shadow-[0_20px_50px_rgba(11,35,69,0.15)] relative overflow-hidden flex flex-col"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-mahati-gold)]/10 rounded-bl-full pointer-events-none blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-heading font-bold text-white mb-4">Can&apos;t Find What You&apos;re Looking For?</h3>
              <p className="text-gray-300 mb-10 font-light text-lg">Tell us what you need. Our team will help you identify suitable property opportunities.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)] focus:border-transparent transition-all backdrop-blur-sm" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)] focus:border-transparent transition-all backdrop-blur-sm" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select className="w-full bg-[#122e54] border border-white/10 rounded-xl p-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)] focus:border-transparent transition-all appearance-none">
                    <option value="" disabled selected>I&apos;m Looking To</option>
                    <option>Buy</option>
                    <option>Rent</option>
                    <option>Invest</option>
                  </select>
                  <select className="w-full bg-[#122e54] border border-white/10 rounded-xl p-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)] focus:border-transparent transition-all appearance-none">
                    <option value="" disabled selected>Property Type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Plot / Land</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Preferred Location" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)] focus:border-transparent transition-all backdrop-blur-sm" />
                  <input type="text" placeholder="Budget" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-mahati-gold)] focus:border-transparent transition-all backdrop-blur-sm" />
                </div>
                <div className="pt-4 mt-auto">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button" 
                    className="w-full bg-[var(--color-mahati-gold)] hover:bg-[var(--color-mahati-warm-gold)] text-[var(--color-mahati-navy)] font-bold py-4.5 rounded-xl transition-colors shadow-lg shadow-[var(--color-mahati-gold)]/20"
                  >
                    Submit Requirement
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
