import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Mail, Calendar } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      <section className="bg-[#0A192F] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2444_1px,transparent_1px),linear-gradient(to_bottom,#0f2444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Corporate Communications Hub</h1>
          <p className="text-amber-400 font-semibold tracking-widest text-xs sm:text-sm uppercase">
            Your Trusted Partner in Construction and Finishing Solutions
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12 space-y-10">
          
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl font-black text-slate-950 tracking-tight">Office Connections & Inquiries</h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Have architectural drafts, landscape layouts, or custom brand booth specifications? Reach out directly using our official operational communication channels below.
            </p>
          </div>

          {/* Contact Methods Grid Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <a href="tel:0742254007" className="border border-slate-200 hover:border-amber-500/40 rounded-xl p-6 flex items-start gap-4 transition-colors group bg-slate-50/50">
              <div className="w-10 h-10 bg-slate-950 text-amber-400 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                <Phone size={18} />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Lines</p>
                <p className="text-lg font-bold text-slate-950 group-hover:text-amber-600 transition-colors">0742254007</p>
                <p className="text-xs text-slate-500 font-light">Available for site estimation requests.</p>
              </div>
            </a>

            <div className="border border-slate-200 rounded-xl p-6 flex items-start gap-4 bg-slate-50/50">
              <div className="w-10 h-10 bg-slate-950 text-amber-400 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                <MapPin size={18} />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Head Office</p>
                <p className="text-lg font-bold text-slate-950">Nairobi, Kenya</p>
                <p className="text-xs text-slate-500 font-light">Serving the wider regional framework.</p>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 flex items-start gap-4 bg-slate-50/50">
              <div className="w-10 h-10 bg-slate-950 text-amber-400 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                <Clock size={18} />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Operating Windows</p>
                <p className="text-base font-bold text-slate-950">Mon – Sat: 8:00 AM – 5:00 PM</p>
                <p className="text-xs text-slate-500 font-light">Closed on Sundays and public holidays.</p>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 flex items-start gap-4 bg-slate-50/50">
              <div className="w-10 h-10 bg-slate-950 text-amber-400 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                <Calendar size={18} />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Site Surveys</p>
                <p className="text-base font-bold text-slate-950">Bookings on Request</p>
                <p className="text-xs text-slate-500 font-light">Field evaluations booked 48 hours in advance.</p>
              </div>
            </div>
          </div>

          {/* Core Footer Compliance Alert */}
          <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600" /> Fully Licensed & Registered Contractor Entity
            </span>
            <span>KEGO Builders © 2026</span>
          </div>

        </div>
      </section>

    </div>
  );
}