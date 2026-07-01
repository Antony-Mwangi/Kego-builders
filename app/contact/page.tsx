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

          {/* Facebook Connection */}
          <a 
            href="https://www.facebook.com/profile.php?id=61591402535971" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-start gap-4 transition-all group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-2"
          >
            <div className="w-12 h-12 bg-[#1877F2] text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-[#1877F2] uppercase tracking-widest">Facebook Community</p>
              <p className="text-base font-black text-slate-950 group-hover:text-[#1877F2] transition-colors">KEGO Builders</p>
              <p className="text-xs text-slate-500 font-light">Follow our latest project timelines and community updates.</p>
            </div>
          </a>

          {/* Instagram Connection */}
          <a 
            href="https://www.instagram.com/kegobuilders?igsh=MW0xZ243bjB2dm1kbQ==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-start gap-4 transition-all group focus:outline-none focus:ring-2 focus:ring-pink-600 rounded-lg p-2"
          >
            <div className="w-12 h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-[#ee2a7b] uppercase tracking-widest">Instagram Feed</p>
              <p className="text-base font-black text-slate-950 group-hover:text-[#ee2a7b] transition-colors">@kegobuilders</p>
              <p className="text-xs text-slate-500 font-light">Explore high-resolution galleries of our structural portfolio.</p>
            </div>
          </a>

          {/* X (Twitter) Connection */}
          <a 
            href="https://x.com/KEGOBUILDERS" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-start gap-4 transition-all group focus:outline-none focus:ring-2 focus:ring-slate-950 rounded-lg p-2"
          >
            <div className="w-12 h-12 bg-slate-950 text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">X Profile</p>
              <p className="text-base font-black text-slate-950 group-hover:text-amber-600 transition-colors">@kegobuilders</p>
              <p className="text-xs text-slate-500 font-light">Read real-time corporate updates and industry briefs.</p>
            </div>
          </a>

          {/* TikTok Portal */}
          <a 
            href="https://vm.tiktok.com/ZS964Av6NG9PF-NlcdW/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-start gap-4 transition-all group focus:outline-none focus:ring-2 focus:ring-slate-950 rounded-lg p-2"
          >
            <div className="w-12 h-12 bg-slate-950 text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.62 4.14.94.99 2.27 1.58 3.66 1.7v3.52c-1.34-.02-2.67-.4-3.82-1.12-.47-.29-.89-.64-1.26-1.04v5.71c.02 1.34-.23 2.69-.76 3.92-.72 1.63-2.01 2.96-3.62 3.68-1.51.68-3.23.86-4.83.51-1.63-.35-3.11-1.29-4.14-2.63-1.12-1.44-1.66-3.26-1.53-5.07.19-2.22 1.41-4.25 3.3-5.41 1.25-.77 2.71-1.14 4.17-1.07v3.52c-.88-.13-1.8.12-2.5.67-.78.61-1.2 1.6-1.14 2.59.07.97.6 1.86 1.43 2.37.82.51 1.85.57 2.72.16.82-.39 1.41-1.17 1.57-2.07.09-.54.07-1.09.07-1.63V0h.25z"/>
              </svg>
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">TikTok Portal</p>
              <p className="text-base font-black text-slate-950 group-hover:text-amber-600 transition-colors">@kegobuilders</p>
              <p className="text-xs text-slate-500 font-light">Watch behind-the-scenes video reels of active builds.</p>
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