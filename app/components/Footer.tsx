import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, ArrowRight, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030712] text-gray-400 text-sm border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Profile */}
        <div className="md:col-span-5 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-500 rounded flex items-center justify-center text-slate-950 font-black text-lg">
              K
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white">KEGO BUILDERS</span>
              <span className="text-[9px] tracking-[0.2em] text-amber-500 uppercase font-bold">Quality • Value</span>
            </div>
          </div>
          <p className="text-gray-400 font-light leading-relaxed text-xs sm:text-sm max-w-sm">
            Your trusted partner in modern structural spaces, premium residential developments, luxury interior transformations, and architectural roofing systems.
          </p>
          <div className="flex items-center gap-2 text-xs text-amber-400/80 font-medium">
            <Shield size={14} />
            <span>Fully Licensed & Insured Contractor</span>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest text-amber-500">Quick Navigation</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home Profile", path: "/" },
              { label: "About Identity", path: "/about" },
              { label: "Our Services", path: "/services" },
              { label: "Project Portfolio", path: "/projects" },
              { label: "Contact Desk", path: "/contact" }
            ].map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group text-gray-400">
                  <ArrowRight size={12} className="text-slate-700 group-hover:text-amber-500 transition-colors" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info Contacts */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest text-amber-500">Corporate Contacts</h4>
          <div className="space-y-3 pt-1">
            <a href="tel:0742254007" className="flex items-center gap-3 hover:text-amber-400 transition-colors group">
              <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/30">
                <Phone size={14} className="text-amber-500" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Call Directly</p>
                <p className="text-sm font-semibold text-gray-200">0742254007</p>
              </div>
            </a>
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center">
                <MapPin size={14} className="text-amber-500" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Office Operations</p>
                <p className="text-sm font-semibold text-gray-200">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-900/60 bg-[#02040a] py-6 px-4 text-center text-xs text-gray-500 font-medium">
        © 2026 KEGO Builders. All Rights Reserved. Built with Premium Standards.
      </div>
    </footer>
  );
}