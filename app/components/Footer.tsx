"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, ArrowRight, Shield } from 'lucide-react';

export default function Footer() {
  return (
    /* Changed bg-[#030712] to bg-[#121214] and adjusted borders for cohesion */
    <footer className="bg-[#121214] text-gray-400 text-sm border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Profile */}
        <div className="md:col-span-5 space-y-5">
          <div className="flex items-center gap-3">
            {/* UNENCLOSED LOGO WRAPPER MATCHING THE RE-STYLED HEADER */}
            <div className="relative w-16 h-16 flex items-center justify-center transition-transform duration-300">
              <Image 
                src="/logo.png" 
                alt="KEGO Builders Logo" 
                fill
                className="object-contain"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="text-xl font-black tracking-tight text-white leading-none">
                KEGO
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-amber-500 font-black mt-1 leading-none">
                BUILDERS
              </span>
            </div>
          </div>
          
          <p className="text-gray-400 font-light leading-relaxed text-xs sm:text-sm max-w-sm">
            Your trusted partner in modern structural spaces, premium residential developments, luxury interior transformations, and architectural roofing systems.
          </p>
          <div className="flex items-center gap-2 text-xs text-amber-400/90 font-bold">
            <Shield size={14} className="text-amber-500" />
            <span>Fully Licensed & Insured Contractor</span>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-amber-500 font-black text-xs uppercase tracking-widest">Quick Navigation</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: "Home Profile", path: "/" },
              { label: "About Identity", path: "/about" },
              { label: "Our Services", path: "/services" },
              { label: "Contact Desk", path: "/contact" }
            ].map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="hover:text-amber-400 font-medium transition-colors flex items-center gap-1.5 group text-gray-400">
                  <ArrowRight size={12} className="text-slate-700 group-hover:text-amber-500 transition-colors" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info Contacts */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-amber-500 font-black text-xs uppercase tracking-widest">Corporate Contacts</h4>
          <div className="space-y-4 pt-1">
            <a href="tel:0742254007" className="flex items-center gap-3 hover:text-amber-400 transition-colors group">
              {/* Swapped inner box background to a subtle grey tone for depth */}
              <div className="w-9 h-9 rounded bg-slate-800/40 border border-slate-700/60 flex items-center justify-center group-hover:border-amber-500/30 transition-colors">
                <Phone size={14} className="text-amber-500" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-black tracking-wider">Call Directly</p>
                <p className="text-sm font-bold text-gray-200">0742254007</p>
              </div>
            </a>
            <div className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded bg-slate-800/40 border border-slate-700/60 flex items-center justify-center">
                <MapPin size={14} className="text-amber-500" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-black tracking-wider">Office Operations</p>
                <p className="text-sm font-bold text-gray-200">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Adjusted base copyright layer to sit elegantly below the main charcoal tier */}
      <div className="border-t border-slate-800/40 bg-[#0b0b0c] py-6 px-4 text-center text-xs text-gray-500 font-semibold uppercase tracking-wider">
        © 2026 KEGO Builders. All Rights Reserved. Built with Premium Standards.
      </div>
    </footer>
  );
}