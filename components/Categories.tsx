'use client';

import { Home, Map, TreePine, Store, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

const categories = [
  {
    title: 'Residential',
    icon: Home,
    description: 'Comfortable residential properties for families, professionals and first-time buyers.',
    cta: 'Explore Residential'
  },
  {
    title: 'Plots',
    icon: Map,
    description: 'Find strategically located plots for building your future home or long-term investment.',
    cta: 'Explore Plots'
  },
  {
    title: 'Land',
    icon: TreePine,
    description: 'Explore land opportunities for farming, weekend homes and long-term investment.',
    cta: 'Explore Land'
  },
  {
    title: 'Commercial',
    icon: Store,
    description: 'Discover commercial properties positioned for business growth and investment potential.',
    cta: 'Explore Commercial'
  },
  {
    title: 'Pre-Leased',
    icon: Briefcase,
    description: 'Explore income-generating commercial properties with existing lease arrangements.',
    cta: 'View Opportunities'
  }
];

export default function Categories() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="properties" className="pt-48 pb-24 bg-[var(--color-mahati-off-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-mahati-navy)] mb-4">Explore Properties</h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Whether you&apos;re buying your first home, searching for land, or looking for a commercial investment, explore property opportunities suited to your goals.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            // Center the last item if it's on a row by itself in a 3-col grid
            const isLastOdd = index === categories.length - 1 && index % 3 === 1;
            
            return (
              <motion.div 
                variants={item}
                whileHover={{ y: -8 }}
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100/50 group flex flex-col ${isLastOdd ? 'lg:col-start-2' : ''}`}
              >
                <div className="w-16 h-16 bg-[var(--color-mahati-off-white)] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--color-mahati-navy)] transition-colors duration-500">
                  <Icon className="w-8 h-8 text-[var(--color-mahati-gold)]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[var(--color-mahati-navy)] mb-4">{category.title}</h3>
                <p className="text-gray-500 mb-8 flex-grow leading-relaxed font-light">{category.description}</p>
                <button className="text-[var(--color-mahati-navy)] font-semibold flex items-center group-hover:text-[var(--color-mahati-gold)] transition-colors mt-auto">
                  {category.cta} 
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >→</motion.span>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
