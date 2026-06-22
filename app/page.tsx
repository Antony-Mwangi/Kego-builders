import React from 'react';
import Link from 'next/link';
import { 
  Paintbrush, 
  Home, 
  Briefcase, 
  Hammer, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Award, 
  ChevronRight, 
  CheckCircle2,
  Phone,
  MapPin
} from 'lucide-react';


export default function HomePage() {
  return (
    <div className="selection:bg-amber-500 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative bg-[#0A192F] text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2444_1px,transparent_1px),linear-gradient(to_bottom,#0f2444_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              Your Premium Construction Partner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Building Spaces.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                Creating Lifestyles.
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Building your tomorrow, today. From concept to completion, we build with passion, delivering structures that inspire and quality that lasts.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/services" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-8 py-3.5 rounded shadow-lg shadow-amber-500/20 transition-all text-center flex items-center justify-center gap-2 group text-sm">
                Explore Services
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="border-2 border-slate-700 hover:border-amber-500 hover:text-amber-400 px-8 py-3.5 rounded font-semibold text-center transition-all bg-slate-900/40 text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#0A192F] border border-slate-800/80 p-8 rounded-xl shadow-2xl relative">
            <h3 className="text-xl font-bold mb-5 text-amber-400 tracking-tight">Our Commitments</h3>
            <ul className="space-y-4">
              {[
                "We build more than structures",
                "We deliver quality that lasts",
                "We create spaces you'll love"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-medium text-sm sm:text-base">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-800 text-center lg:text-left">
              <p className="text-xs text-amber-500 uppercase tracking-widest font-bold">Trusted Partner</p>
              <p className="text-sm text-gray-400 italic font-light mt-1">"Your Trusted Partner in Construction and Finishing Solutions"</p>
            </div>
          </div>
        </div>
      </section>

      {/* MID CORE STATS BAR */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { metric: "100%", desc: "Quality Workmanship" },
            { metric: "Timely", desc: "Project Delivery" },
            { metric: "Affordable", desc: "Pricing Scale" },
            { metric: "Experienced", desc: "Engineering Team" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">{stat.metric}</p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE SERVICES SNIPPET SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4🎒">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase">Core Expertise</h2>
          <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What We Bring to the Site
          </p>
          <div className="h-1 w-16 bg-amber-500 mx-auto rounded mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="bg-slate-900 text-amber-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Home size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">Residential Construction</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Modern luxury layout frameworks, family units, and premium housing structural foundations.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-600 uppercase mt-6 block">Spaces that feel like home</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="bg-slate-900 text-amber-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Briefcase size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">Commercial Layouts</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Optimized office spaces, industrial layouts, and business property developments.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-600 uppercase mt-6 block">Spaces that drive success</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="bg-slate-900 text-amber-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Paintbrush size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">Interior Décor & Finishing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Modern interior finishing, gypsum ceiling structures, custom texture painting, and layouts.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-600 uppercase mt-6 block">Designing spaces that inspire</span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-950 hover:text-amber-600 transition-colors group">
            <span>View All Professional Services</span>
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-[#0A192F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-2">Our Advantages</h2>
            <p className="text-3xl font-extrabold">Why Choose KEGO Builders?</p>
            <div className="h-1 w-12 bg-amber-500 mx-auto rounded mt-3"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {[
              { icon: <Layers size={28} />, name: "Modern Designs" },
              { icon: <Award size={28} />, name: "Premium Quality" },
              { icon: <Clock size={28} />, name: "On Time Delivery" },
              { icon: <ShieldCheck size={28} />, name: "Trust & Transparency" },
              { icon: <CheckCircle2 size={28} />, name: "Client Satisfaction" }
            ].map((adv, idx) => (
              <div key={idx} className={`bg-slate-900/60 p-6 rounded-lg border border-slate-800/80 space-y-3 flex flex-col items-center justify-center ${idx === 4 ? 'col-span-2 lg:col-span-1' : ''}`}>
                <div className="text-amber-400">{adv.icon}</div>
                <h4 className="font-bold text-xs sm:text-sm tracking-wide">{adv.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INLINE CONTACT ZONE COMPONENT CALL */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-5 bg-gradient-to-br from-slate-950 to-[#0A192F] text-white p-8 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-amber-400">Let's Connect</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Ready to transform your physical location parameters? Reach out directly via our scheduling desk.
              </p>
              <div className="space-y-3 pt-4 text-sm">
                <a href="tel:0742254007" className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors">
                  <Phone size={16} className="text-amber-500" />
                  <span>0742254007</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={16} className="text-amber-500" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-8">KEGO BUILDERS 2026</p>
          </div>
        
        </div>
      </section>

    </div>
  );
}