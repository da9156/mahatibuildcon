'use client';
import { useState } from 'react';
import { ChevronDown, MapPin, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    q: 'What types of properties do you deal in?',
    a: 'We assist customers with residential properties, plots, land, shops, commercial spaces and selected pre-leased opportunities.'
  },
  {
    q: 'Do you help with property site visits?',
    a: 'Yes. Once you shortlist a suitable property, you can contact our team to schedule a site visit.'
  },
  {
    q: 'Can I contact Mahati Buildcon if I am looking to sell my property?',
    a: 'Yes. Share your property details with us and our team can discuss the next steps.'
  },
  {
    q: 'Do you operate only in Nashik?',
    a: 'Mahati Buildcon is primarily focused on property opportunities in Nashik and surrounding areas.'
  },
  {
    q: 'Do you provide investment guidance?',
    a: 'We can help you understand available property opportunities based on factors such as location, property type and intended use. Investment decisions should be made after appropriate due diligence.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-32 bg-[var(--color-mahati-off-white)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-mahati-navy)] mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  initial={false}
                  className={`border border-gray-200 rounded-2xl overflow-hidden bg-white transition-shadow duration-300 ${openIndex === index ? 'shadow-lg shadow-[var(--color-mahati-navy)]/5 border-transparent' : 'shadow-sm hover:shadow-md'}`}
                >
                  <button 
                    className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className={`font-semibold text-lg pr-4 transition-colors ${openIndex === index ? 'text-[var(--color-mahati-gold)]' : 'text-[var(--color-mahati-navy)]'}`}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-[var(--color-mahati-navy)]" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-6">
                          <p className="text-gray-500 font-light leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            id="contact" 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[var(--color-mahati-navy)] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden flex flex-col justify-center shadow-[0_20px_50px_rgba(11,35,69,0.2)]"
          >
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[var(--color-mahati-gold)] opacity-20 rounded-full blur-[80px]"></div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">Let&apos;s Find Your Next Property</h2>
            <p className="text-gray-300 mb-12 relative z-10 text-lg font-light">
              Whether you&apos;re looking to buy, sell or invest, our team is ready to understand your requirements.
            </p>
            
            <div className="space-y-8 mb-12 relative z-10">
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mr-6 border border-white/10 group-hover:bg-[var(--color-mahati-gold)]/20 transition-colors">
                  <MapPin className="w-6 h-6 text-[var(--color-mahati-gold)]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">Location</p>
                  <p className="font-semibold text-xl">Proudly Serving Nashik</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mr-6 border border-white/10 group-hover:bg-[var(--color-mahati-gold)]/20 transition-colors">
                  <Phone className="w-6 h-6 text-[var(--color-mahati-gold)]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">Phone</p>
                  <p className="font-semibold text-xl">9503749316</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 relative z-10 mt-auto">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+919503749316" 
                className="flex-1 bg-[var(--color-mahati-gold)] hover:bg-[var(--color-mahati-warm-gold)] text-[var(--color-mahati-navy)] py-4 rounded-xl font-bold transition-colors text-center flex items-center justify-center shadow-lg shadow-[var(--color-mahati-gold)]/20"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919503749316" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white text-white hover:text-[var(--color-mahati-navy)] py-4 rounded-xl font-bold transition-all duration-300 text-center flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-green-400" />
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
