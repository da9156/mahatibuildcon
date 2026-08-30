'use client';

import { Shield, Eye, Map, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: Map,
    title: 'Local Market Knowledge',
    description: 'Nashik-focused insights to help you make informed decisions across neighborhoods and evolving property corridors.'
  },
  {
    icon: Eye,
    title: 'Transparency in Every Deal',
    description: 'Clear communication about property details, pricing, documentation and processes without hidden surprises.'
  },
  {
    icon: Shield,
    title: 'Trust at Every Step',
    description: 'Reliable guidance throughout your property journey, from initial discovery to final transaction coordination.'
  },
  {
    icon: HeartHandshake,
    title: 'Support Beyond the Visit',
    description: 'Your requirements come first. We\'re here to assist from your first enquiry through the next steps of your property ownership.'
  }
];

export default function WhyMahati() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative py-32 bg-[var(--color-mahati-navy)] text-white overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
      <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[var(--color-mahati-gold)]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-[var(--color-mahati-gold)] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Why Mahati Buildcon
          </span>
          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">A Better Way to Find Property</h3>
          <p className="text-gray-300 text-lg font-light leading-relaxed">
            We believe that finding the right property should be a clear, informed and comfortable experience built on a foundation of trust.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                variants={item}
                key={index} 
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--color-mahati-gold)]/20 transition-all duration-500">
                  <Icon className="w-7 h-7 text-[var(--color-mahati-gold)]" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-4">{reason.title}</h4>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
