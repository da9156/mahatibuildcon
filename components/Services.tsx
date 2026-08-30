'use client';

import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: 'Property Buying',
      desc: 'Tell us what you\'re looking for and we\'ll help you identify suitable opportunities based on your location, budget and requirements.',
      link: 'Find a Property'
    },
    {
      title: 'Property Selling',
      desc: 'Looking to sell your property? Connect with our team to discuss positioning, potential buyers and the next steps.',
      link: 'Sell Your Property'
    },
    {
      title: 'Investment Advisory',
      desc: 'Explore property opportunities with a focus on location, potential, usability and long-term value.',
      link: 'Explore Investment Opportunities'
    },
    {
      title: 'Site Visit Assistance',
      desc: 'Shortlist a property and schedule a visit at a convenient time with our guided support.',
      link: 'Schedule a Visit'
    },
    {
      title: 'Commercial Property',
      desc: 'Explore shops, offices, commercial spaces and pre-leased opportunities for business and investment purposes.',
      link: 'Explore Commercial'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-mahati-off-white)] to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gray-50 border border-gray-100 text-[var(--color-mahati-navy)] text-xs font-bold tracking-widest uppercase mb-6">
            Comprehensive Support
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-mahati-navy)] mb-6 leading-tight">Our Real Estate Services</h2>
          <p className="text-gray-500 text-lg leading-relaxed font-light">
            Whether you&apos;re buying, selling or investing, Mahati Buildcon provides practical support throughout your property journey.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              variants={item}
              key={index}
              className="bg-white p-10 rounded-[2rem] hover:bg-[var(--color-mahati-navy)] hover:shadow-2xl transition-all duration-500 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] group flex flex-col h-full"
            >
              <h3 className="text-2xl font-heading font-bold text-[var(--color-mahati-navy)] group-hover:text-white mb-4 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-300 mb-10 font-light leading-relaxed transition-colors duration-300 flex-grow">{service.desc}</p>
              <a href="#contact" className="inline-flex items-center text-[var(--color-mahati-navy)] font-semibold group-hover:text-[var(--color-mahati-gold)] transition-colors mt-auto">
                {service.link} <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
