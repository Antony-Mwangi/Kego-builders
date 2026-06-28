import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen selection:bg-amber-500 selection:text-white antialiased">
      
      {/* BRAND HEADER SECTION - Blended smoothly with the page body */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-4 text-center relative">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold tracking-widest text-amber-700 bg-amber-50 px-3 py-1.5 rounded border border-amber-200 uppercase">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
            Let's Build Together
          </h1>
          <p className="text-slate-500 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase">
            Building Quality • Creating Value
          </p>
        </div>
      </section>

      {/* CORE DIRECT CONTACT PLATFORM */}
      <section className="py-12 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Architectural Intent & Copy */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block">
              Operations Desk
            </span>
            <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
              Contact KEGO Builders
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Whether you need to review house structural frameworks, deploy specialized roofing panels, execute flat concrete roof waterproofing, or fabricate branding exhibition structures, our estimators are available.
          </p>
          <div className="pt-6 border-t border-slate-200 space-y-4 text-slate-500 font-semibold text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-emerald-600 shrink-0" /> 
              <span>Professional Grade Workmanship Guaranteed</span>
            </div>
            <p className="tracking-wide uppercase text-[11px] text-amber-600 font-bold">
              Kamakis Bypass, Ruiru, Kenya
            </p>
          </div>
        </div>

        {/* Right Column: High-Readability Communications Mesh */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
          
          {/* Primary Phone Line */}
          <a 
            href="tel:0742254007" 
            className="flex items-start gap-4 transition-all group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-2"
          >
            <div className="w-12 h-12 bg-slate-950 text-amber-400 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Phone size={20} />
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Primary Operations</p>
              <p className="text-base font-black text-slate-950 group-hover:text-amber-600 transition-colors">0742 254 007</p>
              <p className="text-xs text-slate-500 font-light leading-tight">Tap to call our primary estimation desk.</p>
            </div>
          </a>

          {/* WhatsApp Integration */}
          <a 
            href="https://wa.me/254742254007" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-start gap-4 transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-2"
          >
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Phone size={20} /> 
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">WhatsApp Instant Chat</p>
              <p className="text-base font-black text-slate-950 group-hover:text-emerald-600 transition-colors">0742 254 007</p>
              <p className="text-xs text-slate-500 font-light leading-tight">Tap to chat or send blueprints instantly.</p>
            </div>
          </a>

          {/* Secondary Phone Line */}
          <a 
            href="tel:0728753833" 
            className="flex items-start gap-4 transition-all group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-2"
          >
            <div className="w-12 h-12 bg-slate-950 text-amber-400 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Phone size={20} />
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Secondary Hotline</p>
              <p className="text-base font-black text-slate-950 group-hover:text-amber-600 transition-colors">0728 753 833</p>
              <p className="text-xs text-slate-500 font-light">Alternative channel for support desks.</p>
            </div>
          </a>

          {/* Corporate Email */}
          <a 
            href="mailto:info@kegobuilders.co.ke" 
            className="flex items-start gap-4 transition-all group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-2"
          >
            <div className="w-12 h-12 bg-slate-950 text-amber-400 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Mail size={20} />
            </div>
            <div className="space-y-0.5 min-w-0">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Digital Desk</p>
              <p className="text-sm font-black text-slate-950 group-hover:text-amber-600 transition-colors truncate break-all">info@kegobuilders.co.ke</p>
              <p className="text-xs text-slate-500 font-light">Tap to attach corporate blueprints.</p>
            </div>
          </a>

          {/* Corporate Location */}
          <div className="flex items-start gap-4 p-2">
            <div className="w-12 h-12 bg-slate-950 text-amber-400 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
              <MapPin size={20} />
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Office Location</p>
              <p className="text-base font-black text-slate-950">Kamakis Bypass, Ruiru, Kenya</p>
              <p className="text-xs text-slate-500 font-light">Main headquarters and management unit.</p>
            </div>
          </div>

          {/* Working Timeline Info */}
          <div className="flex items-start gap-4 p-2">
            <div className="w-12 h-12 bg-slate-950 text-amber-400 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
              <Clock size={20} />
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Business Timeline</p>
              <p className="text-base font-black text-slate-950">Monday – Saturday</p>
              <p className="text-xs text-slate-500 font-light">Standard onsite project administration loops.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}