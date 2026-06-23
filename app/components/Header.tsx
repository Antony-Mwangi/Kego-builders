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
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="bg-[#030712] text-gray-300 text-xs sm:text-sm py-2.5 px-4 border-b border-amber-500/10">
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

      {/* CORE NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#0A192F]/95 backdrop-blur-md border-b border-slate-800/80 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 h-24 flex justify-between items-center">
          
          {/* Brand Logo & Typography */}
          <Link href="/" className="flex items-center gap-4 group">
            {/* ENLARGED LOGO CONTAINER */}
            <div className="relative w-16 h-16 flex items-center justify-center bg-slate-900 rounded-lg border-2 border-slate-700/80 p-1 shadow-inner group-hover:border-amber-500 transition-colors duration-300">
              <Image 
                src="/kegologo.jpeg" 
                alt="KEGO Builders Logo" 
                fill
                priority
                className="object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            {/* Typography Styled & Spaced Cleanly */}
            <div className="flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-100 to-amber-500 leading-none">
                KEGO
              </span>
              <span className="text-[11px] tracking-[0.4em] uppercase text-amber-500/90 font-black mt-1.5 leading-none">
                BUILDERS
              </span>
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

        {/* Mobile Flyout */}
        {isOpen && (
          <div className="md:hidden bg-[#0A192F] border-b border-slate-800/90 px-4 pt-2 pb-6 space-y-3 absolute top-full left-0 w-full shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md font-bold text-sm tracking-wide uppercase ${
                  isActive(item.href) ? 'bg-amber-500/10 text-amber-400 border-l-4 border-amber-500' : 'text-gray-300 hover:bg-slate-800/60'
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
      </header>
    </>
  );
}