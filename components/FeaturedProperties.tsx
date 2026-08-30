'use client';

import { MapPin, Maximize, Building2, CalendarCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const properties = [
  {
    title: 'Premium 2 BHK Apartment',
    price: '₹ 52 Lakhs*',
    location: 'Gangapur Road, Nashik',
    bhk: '2 BHK',
    area: '950 sq.ft.',
    status: 'Ready to Move',
    tags: ['Residential', 'Ready to Move'],
    image: '/assets/Residential.png'
  },
  {
    title: 'Residential NA Plot',
    price: '₹ 38 Lakhs*',
    location: 'Trimbak Road, Nashik',
    bhk: 'Plot',
    area: '2,000 sq.ft.',
    status: 'Clear Title',
    tags: ['Plot', 'Investment'],
    image: '/assets/NA plots.png'
  },
  {
    title: 'Modern Commercial Shop',
    price: '₹ 1.2 Cr*',
    location: 'Nashik Road, Nashik',
    bhk: 'Commercial',
    area: '1,200 sq.ft.',
    status: 'Under Construction',
    tags: ['Commercial', 'Prime Location'],
    image: '/assets/Commercial.png'
  }
];

export default function FeaturedProperties() {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-mahati-navy)] mb-4">Featured Property Opportunities</h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Handpicked properties across Nashik, selected for location, potential and value.
            </p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 md:mt-0 text-[var(--color-mahati-navy)] font-semibold border-b-2 border-[var(--color-mahati-gold)] pb-1 hover:text-[var(--color-mahati-gold)] transition-colors flex items-center group"
          >
            View All Properties
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {properties.map((prop, index) => (
            <motion.div 
              variants={item}
              key={index} 
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <div className="absolute top-5 left-5 z-10 flex gap-2">
                  {prop.tags.map((tag, i) => (
                    <span key={i} className="bg-[var(--color-mahati-navy)]/90 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full font-medium tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={prop.image} 
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-mahati-navy)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="flex items-center text-gray-400 text-sm mb-3 font-medium">
                  <MapPin className="w-4 h-4 mr-1.5 text-[var(--color-mahati-gold)]" />
                  {prop.location}
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--color-mahati-navy)] mb-6 line-clamp-1">{prop.title}</h3>
                
                <div className="text-3xl font-heading font-bold text-[var(--color-mahati-navy)] mb-6">
                  {prop.price}
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2 py-5 border-t border-gray-100 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-500">
                    <Building2 className="w-4 h-4 mr-2 text-[var(--color-mahati-gold)]/70" />
                    {prop.bhk}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Maximize className="w-4 h-4 mr-2 text-[var(--color-mahati-gold)]/70" />
                    {prop.area}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 col-span-2">
                    <CalendarCheck className="w-4 h-4 mr-2 text-[var(--color-mahati-gold)]/70" />
                    {prop.status}
                  </div>
                </div>

                <div className="flex space-x-3 mt-auto">
                  <button className="flex-1 bg-[var(--color-mahati-navy)] hover:bg-[#081a33] text-white py-3 rounded-xl font-medium transition-colors shadow-md">
                    Details
                  </button>
                  <button className="flex-1 bg-white border-2 border-[var(--color-mahati-navy)] text-[var(--color-mahati-navy)] hover:bg-[var(--color-mahati-navy)] hover:text-white py-3 rounded-xl font-medium transition-colors">
                    Enquire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
