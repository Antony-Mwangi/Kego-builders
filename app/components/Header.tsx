"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    /* Sticky positioning with crisp shadow layout */
    <header className="sticky top-0 z-50 w-full shadow-2xl">
      
      {/* TOP INFO BAR (Solid Pitch Black) */}
      <div className="bg-black text-gray-300 text-xs sm:text-sm py-2.5 px-4 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a href="tel:0742254007" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <Phone size={14} className="text-amber-500" />
              <span className="font-semibold tracking-wide">0742254007</span>
            </a>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={14} className="text-amber-500" />
              <span className="font-medium">Nairobi, Kenya</span>
            </div>
          </div>
          <div className="text-amber-400 font-bold tracking-widest text-[10px] uppercase sm:block hidden">
            Building Dreams. Creating Reality.
          </div>
        </div>
      </div>

      {/* CORE NAVIGATION (Solid Pitch Black) */}
      <div className="bg-black border-b border-neutral-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 h-28 flex justify-between items-center">
          
          {/* Brand Logo Only - Repositioned and Maximized */}
          <Link href="/" className="flex items-center justify-center group h-full select-none z-10">
            {/* LARGE OVERLAPPING LOGO WRAPPER */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 -my-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/logo3.jpeg" 
                alt="KEGO Builders Logo" 
                fill
                priority
                className="object-contain mix-blend-screen bg-transparent"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider uppercase">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`transition-colors py-2 relative tracking-widest ${
                  isActive(item.href) ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Link */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-6 py-3 rounded text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-amber-500/20 flex items-center gap-2 group"
            >
              Get In Touch
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-gray-400 hover:text-white md:hidden transition-colors focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={28} className="text-amber-400" /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Flyout (Solid Pitch Black) */}
        {isOpen && (
          <div className="md:hidden bg-black border-b border-neutral-900 px-4 pt-2 pb-6 space-y-3 absolute top-full left-0 w-full shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md font-bold text-sm tracking-wide uppercase ${
                  isActive(item.href) ? 'bg-amber-500/10 text-amber-400 border-l-4 border-amber-500' : 'text-gray-300 hover:bg-neutral-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-1">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold py-3.5 rounded-md text-center block text-xs uppercase tracking-widest shadow-lg"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}