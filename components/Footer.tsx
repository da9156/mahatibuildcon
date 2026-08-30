'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#071730] text-white pt-20 pb-10 border-t-4 border-[var(--color-mahati-gold)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6 lg:pr-8">
            <div className="bg-white inline-block p-4 rounded-xl shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/assets/logo.png" 
                alt="Mahati Buildcon Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light mt-4">
              <span className="text-[var(--color-mahati-gold)] font-medium block mb-2">Your Property. Your Future. Our Guidance.</span>
              Helping you discover property opportunities across Nashik with a focus on trust and transparent guidance.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Properties', 'Services', 'About Us', 'Nashik Areas', 'FAQs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-[var(--color-mahati-gold)] hover:pl-2 transition-all duration-300 text-sm font-light flex items-center"
                  >
                    <span className="text-xs mr-2 text-[var(--color-mahati-gold)] opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0">▹</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Column */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-6">Property</h4>
            <ul className="space-y-3">
              {['Residential', 'Plots', 'Land', 'Commercial', 'Pre-Leased'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#properties"
                    className="text-gray-400 hover:text-[var(--color-mahati-gold)] hover:pl-2 transition-all duration-300 text-sm font-light flex items-center"
                  >
                    <span className="text-xs mr-2 text-[var(--color-mahati-gold)] opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0">▹</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-5">
              <li className="text-gray-400 text-sm flex items-center group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 group-hover:bg-[var(--color-mahati-gold)]/20 transition-colors">
                  <span className="text-[var(--color-mahati-gold)]">📞</span> 
                </div>
                <a href="tel:+919503749316" className="hover:text-white transition-colors font-light">9503749316</a>
              </li>
              <li className="text-gray-400 text-sm flex items-center group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 group-hover:bg-[var(--color-mahati-gold)]/20 transition-colors">
                  <span className="text-[var(--color-mahati-gold)]">📍</span> 
                </div>
                <span className="font-light">Proudly Serving Nashik</span>
              </li>
              <li className="pt-4">
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-mahati-gold)] hover:text-[var(--color-mahati-navy)] transition-all duration-300">
                    Ig
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-mahati-gold)] hover:text-[var(--color-mahati-navy)] transition-all duration-300">
                    Fb
                  </a>
                  <a href="https://wa.me/919503749316" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-mahati-gold)] hover:text-[var(--color-mahati-navy)] transition-all duration-300">
                    Wa
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
          <p>© 2026 Mahati Buildcon. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[var(--color-mahati-gold)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--color-mahati-gold)] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
