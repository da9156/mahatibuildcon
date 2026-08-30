'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = ['Home', 'Properties', 'Services', 'About Us', 'Nashik Areas', 'Contact'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm border-b border-gray-100 ${
        isScrolled ? 'py-0' : 'py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col py-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/assets/logobgremoved.png" 
                alt="Mahati Buildcon Logo" 
                className="h-14 w-auto object-contain transition-all duration-300 drop-shadow-md"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`}
                className="font-medium text-sm transition-colors duration-300 hover:text-[var(--color-mahati-gold)] text-[var(--color-mahati-navy)]"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://wa.me/919503749316" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center font-medium text-sm transition-colors duration-300 hover:opacity-80 text-green-600"
            >
              <MessageCircle className="w-5 h-5 mr-1" />
              WhatsApp
            </a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919503749316"
              className="px-5 py-2.5 rounded-full font-medium text-sm transition-colors flex items-center shadow-md bg-[var(--color-mahati-navy)] hover:bg-[#081a33] text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Talk to an Expert
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none p-2 text-[var(--color-mahati-navy)]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navLinks.map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[var(--color-mahati-gold)] hover:bg-gray-50 rounded-md"
              >
                {item}
              </Link>
            ))}
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col space-y-4">
              <a 
                href="https://wa.me/919503749316" 
                className="flex items-center justify-center text-green-600 font-medium py-2"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
              <a 
                href="tel:+919503749316"
                className="bg-[var(--color-mahati-navy)] text-white px-5 py-3 rounded-lg font-medium text-center flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Talk to an Expert
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
