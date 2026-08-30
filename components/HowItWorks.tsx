'use client';

import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Tell Us Your Requirement',
      desc: 'Share your preferred location, property type and budget.'
    },
    {
      num: '02',
      title: 'Explore Suitable Properties',
      desc: 'Our team helps you discover properties that match your requirements.'
    },
    {
      num: '03',
      title: 'Visit & Evaluate',
      desc: 'Schedule a site visit and understand the property, location and surrounding area.'
    },
    {
      num: '04',
      title: 'Make an Informed Decision',
      desc: 'Get the information and guidance you need for your next step.'
    },
    {
      num: '05',
      title: 'Move Forward With Confidence',
      desc: 'We support you throughout the process and help coordinate the next steps.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: "spring" as const, bounce: 0.4 } }
  };

  return (
    <section className="py-32 bg-[var(--color-mahati-off-white)] border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-[var(--color-mahati-gold)] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-mahati-navy)] mb-6">Your Property Journey, Simplified</h2>
          <p className="text-gray-500 text-lg font-light">A clear, transparent process to help you find the right property without the usual complexity.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-mahati-off-white)] via-[var(--color-mahati-gold)] to-[var(--color-mahati-off-white)] origin-left z-0"
          />
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div variants={item} key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-[0_10px_30px_rgba(201,151,43,0.2)] group-hover:border-[var(--color-mahati-gold)] flex items-center justify-center text-3xl font-heading font-bold text-[var(--color-mahati-navy)] mb-8 transition-colors duration-300 relative">
                  <div className="absolute inset-2 rounded-full border border-dashed border-gray-200 group-hover:border-transparent transition-colors duration-300" />
                  {step.num}
                </div>
                <h4 className="text-xl font-heading font-bold text-[var(--color-mahati-navy)] mb-4">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
