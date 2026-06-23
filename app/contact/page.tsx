import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Mail, Calendar } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen selection:bg-amber-500 selection:text-white">
      
      {/* BRAND HEADER BANNER */}
      <section className="bg-[#0A192F] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2444_1px,transparent_1px),linear-gradient(to_bottom,#0f2444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Contact Us</h1>
          <p className="text-amber-400 font-bold tracking-[0.25em] text-xs sm:text-sm uppercase">
            Building Quality • Creating Value
          </p>
        </div>
      </section>

      {/* CORE DIRECT CONTACT PLATFORM */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-8 sm:p-12 space-y-10">
          
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold tracking-wider text-amber-600 uppercase bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
              Operations Desk
            </span>
            <h2 className="text-2xl font-black text-slate-950 tracking-tight"> Get In Touch with KEGO Builders</h2>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              Whether you need to review house structural frameworks, deploy specialized roofing panels, execute flat concrete roof waterproofing, or fabricate branding exhibition structures, our estimators are available. 
            </p>
          </div>

          {/* CHANNELS GRID MATRIX */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Primary Phone Line (Direct Call) */}
            <a 
              href="tel:0742254007" 
              className="border border-slate-200 hover:border-amber-500/30 rounded-xl p-5 flex items-start gap-4 transition-all bg-slate-50/40 group focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <div className="w-10 h-10 bg-slate-950 text-amber-400 rounded-lg flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Phone size={18} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Primary Operations</p>
                <p className="text-base font-black text-slate-950 group-hover:text-amber-600 transition-colors">0742 254 007</p>
                <p className="text-xs text-slate-500 font-light">Tap to call our primary estimation desk.</p>
              </div>
            </a>

            {/* WhatsApp Integration (Direct App Launch) */}
            <a 
              href="https://wa.me/254742254007" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-slate-200 hover:border-emerald-500/30 rounded-xl p-5 flex items-start gap-4 transition-all bg-slate-50/40 group focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                {/* Reusing lucide Phone icon styled appropriately for WhatsApp context */}
                <Phone size={18} /> 
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">WhatsApp Instant Chat</p>
                <p className="text-base font-black text-slate-950 group-hover:text-emerald-600 transition-colors">0742 254 007</p>
                <p className="text-xs text-slate-500 font-light">Tap to chat or send blueprints instantly.</p>
              </div>
            </a>

            {/* Secondary Phone Line (Direct Call) */}
            <a 
              href="tel:0728753833" 
              className="border border-slate-200 hover:border-amber-500/30 rounded-xl p-5 flex items-start gap-4 transition-all bg-slate-50/40 group focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <div className="w-10 h-10 bg-slate-950 text-amber-400 rounded-lg flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Phone size={18} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Secondary Hotline</p>
                <p className="text-base font-black text-slate-950 group-hover:text-amber-600 transition-colors">0728 753 833</p>
                <p className="text-xs text-slate-500 font-light">Alternative channel for support desks.</p>
              </div>
            </a>

            {/* Corporate Email (Direct App Launch) */}
            <a 
              href="mailto:info@kegobuilders.co.ke" 
              className="border border-slate-200 hover:border-amber-500/30 rounded-xl p-5 flex items-start gap-4 transition-all bg-slate-50/40 group focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <div className="w-10 h-10 bg-slate-950 text-amber-400 rounded-lg flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Mail size={18} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Digital Desk</p>
                <p className="text-sm font-black text-slate-950 group-hover:text-amber-600 transition-colors break-all">info@kegobuilders.co.ke</p>
                <p className="text-xs text-slate-500 font-light">Tap to compose email and attach documents.</p>
              </div>
            </a>

            {/* Corporate Location */}
            <div className="border border-slate-200 rounded-xl p-5 flex items-start gap-4 bg-slate-50/40">
              <div className="w-10 h-10 bg-slate-950 text-amber-400 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                <MapPin size={18} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Office Location</p>
                <p className="text-base font-black text-slate-950">Kamakis Bypass, Ruiru, Kenya</p>
                <p className="text-xs text-slate-500 font-light">Main headquarters and management unit.</p>
              </div>
            </div>

            {/* Working Timeline Info */}
            <div className="border border-slate-200 rounded-xl p-5 flex items-start gap-4 bg-slate-50/40">
              <div className="w-10 h-10 bg-slate-950 text-amber-400 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                <Clock size={18} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Business Timeline</p>
                <p className="text-sm font-bold text-slate-950">Monday – Saturday</p>
                <p className="text-xs text-slate-500 font-light">Standard onsite project administration loops.</p>
              </div>
            </div>

          </div>

          {/* COMPLIANCE ALERT FOOTER INFO */}
          <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-semibold">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600" /> Professional Grade Workmanship Guaranteed
            </span>
            <span className="tracking-wide uppercase text-[10px] text-amber-600 font-bold">"Building Quality • Creating Value"</span>
          </div>

        </div>
      </section>

    </div>
  );
}