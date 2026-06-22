import React from 'react';
import Link from 'next/link';
import { Shield, Users, Trophy, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="bg-[#0A192F] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2444_1px,transparent_1px),linear-gradient(to_bottom,#0f2444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">About KEGO Builders</h1>
          <p className="text-amber-400 font-semibold tracking-widest text-xs sm:text-sm uppercase">
            Building Quality • Creating Value
          </p>
        </div>
      </section>

      {/* CORE IDENTITY ESSAY */}
      <section className="py-16 max-w-4xl mx-auto px-4 space-y-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-950">Your Trusted Partner in Construction & Finishing Solutions</h2>
          <p className="text-slate-600 leading-relaxed font-light">
            KEGO Builders represents an engineering and spatial development firm centered around premium structural executions. We handle projects spanning complex residential custom layouts, commercial optimization spaces, performance roofing architectures, and high-impact custom exhibition structure installations.
          </p>
          <p className="text-slate-600 leading-relaxed font-light">
            Our mission is explicitly aligned with a dual focus: delivering uncompromising workmanship parameters while honoring strict budgetary requirements and fast execution deadlines.
          </p>
        </div>

        {/* STATS MATRIX CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
            <div className="text-amber-500 flex justify-center"><Shield size={28} /></div>
            <h4 className="font-bold text-slate-950">Absolute Transparency</h4>
            <p className="text-xs text-slate-500 font-light">Detailed bills of materials without hidden structural inflation metrics.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
            <div className="text-amber-500 flex justify-center"><Users size={28} /></div>
            <h4 className="font-bold text-slate-950">Experienced Management</h4>
            <p className="text-xs text-slate-500 font-light">Highly trained onsite site supervisors ensuring precision tracking variables.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
            <div className="text-amber-500 flex justify-center"><Trophy size={28} /></div>
            <h4 className="font-bold text-slate-950">Premium Quality Work</h4>
            <p className="text-xs text-slate-500 font-light">Delivering robust technical setups that preserve retail value profiles long-term.</p>
          </div>
        </div>

        {/* WORKMANSHIP CONFIRMATION CALLOUT */}
        <div className="bg-slate-900 text-white p-8 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-lg font-bold text-amber-400">Ready to initiate your building blueprint layout?</p>
            <p className="text-xs text-gray-400 font-light">Connect with our engineering staff parameters directly today.</p>
          </div>
          <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded text-xs tracking-wider uppercase whitespace-nowrap transition-colors flex items-center gap-2">
            <span>Consult an Expert</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}