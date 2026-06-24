"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Hammer, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Award, 
  ChevronRight, 
  CheckCircle2,
  Phone,
  MapPin,
  Building,
  Shield,
  Shirt,
  MessageSquare
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="selection:bg-amber-500 selection:text-white bg-slate-50 min-h-screen relative">
      
      {/* HERO SECTION - OPTIMIZED FOR SEO RANKING */}
      <section className="relative bg-[#0A192F] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2444_1px,transparent_1px),linear-gradient(to_bottom,#0f2444_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Context Left */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              Construction Company Nairobi &amp; Exhibition Specialists
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Building Quality.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                Creating Value.
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Based at Kamakis Bypass, Ruiru, KEGO Builders stands out among premier <span className="text-white font-medium">Building Contractors Kenya</span> trusts. We specialize in commercial building construction, custom corporate exhibition costume trade booths, elegant interior fit-outs, and elite finishing solutions nationwide.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/projects" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-8 py-3.5 rounded shadow-lg shadow-amber-500/20 transition-all text-center flex items-center justify-center gap-2 group text-sm">
                View Our Project Photos
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/254742254007" target="_blank" rel="noopener noreferrer" className="border-2 border-slate-700 hover:border-emerald-500 hover:text-emerald-400 px-8 py-3.5 rounded font-semibold text-center transition-all bg-slate-900/40 text-sm flex items-center justify-center gap-2">
                <MessageSquare size={16} className="text-emerald-500" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Housing Image & Copy Grid Right */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            <div className="relative h-64 sm:h-auto min-h-[320px] rounded-xl overflow-hidden shadow-2xl border border-slate-800">
              <Image 
                src="/building.jpeg"
                alt="KEGO Builders Residential Construction & Trade Show Projects" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Featured Portfolio</p>
                <p className="text-sm font-semibold text-white">Commercial Builds &amp; Custom Exhibition Hubs</p>
              </div>
            </div>
            
            <div className="bg-slate-900/80 border border-slate-800/80 p-6 rounded-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-amber-400 tracking-tight">Our Core Assurances</h3>
                <ul className="space-y-3">
                  {[
                    "Complete Structural Integrity",
                    "Premium Selected Materials",
                    "Custom Costume Display Engineering",
                    "On-Time Project & Event Delivery"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-xs font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] text-amber-500 uppercase tracking-widest font-bold">Operations Base</p>
                <p className="text-xs text-gray-400 font-light mt-0.5">Kamakis Bypass, Ruiru, Kenya</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MID CORE STATS BAR */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { metric: "100%", desc: "Quality Workmanship" },
            { metric: "On-Time", desc: "Expo & Site Readiness" },
            { metric: "Competitive", desc: "Pricing Frameworks" },
            { metric: "Innovative", desc: "Exhibition & Build Designs" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">{stat.metric}</p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE SERVICES SECTION WITH STRONGER CONTENT & SEO KEYWORDS */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase">Core Operations</h2>
          <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Specialized Building &amp; Structural Solutions
          </p>
          <p className="text-sm text-slate-500 font-light max-w-xl mx-auto">
            From foundations to premium exhibition spaces, we stand as a top-tier <span className="text-slate-900 font-medium">Construction Company Nairobi</span> client networks rely on for long-term value.
          </p>
          <div className="h-1 w-16 bg-amber-500 mx-auto rounded mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service 1: Building Construction */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="bg-slate-900 text-amber-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Building size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Building Construction</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                As prominent <span className="text-slate-950 font-medium">Building Contractors Kenya</span>, we manage residential complexes, commercial spaces, and structural industrial projects seamlessly.
              </p>
            </div>
            <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 w-fit mt-6 block">
              Premium Engineering
            </span>
          </div>

          {/* Service 2: Exhibition Costume Booths */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="bg-slate-900 text-amber-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Shirt size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Exhibition Costume Booths</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Tailored corporate exhibition costume trade booths &amp; finishing solutions designed to capture brand authority at major expos, fashion showcases, and conventions.
              </p>
            </div>
            <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 w-fit mt-6 block">
              Experiential Trade Hubs
            </span>
          </div>

          {/* Service 3: Roofing Solutions */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="bg-slate-900 text-amber-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Hammer size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Modern Roofing Systems</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Trusted <span className="text-slate-950 font-medium">Roofing Contractors Kenya</span> specializing in Light Gauge Steel (LGS) framework, elegant stone-coated tiles, and asphalt shingles.
              </p>
            </div>
            <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 w-fit mt-6 block">
              Truss &amp; Tile Installation
            </span>
          </div>

          {/* Service 4: Waterproofing Solutions */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="bg-slate-900 text-amber-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Shield size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">APP Membrane Waterproofing</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                End-to-end industrial structural sealing delivered by our premier <span className="text-slate-950 font-medium">Waterproofing Services Nairobi</span> branch to completely stop concrete leaks.
              </p>
            </div>
            <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 w-fit mt-6 block">
              Leak Proof Protection
            </span>
          </div>
        </div>
      </section>

      {/* PORTFOLIO VISUAL TEASER (PHOTOS HIGHLIGHT SECTION WITHOUT DESCRIPTIONS) */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">Visual Proof</h2>
              <p className="text-3xl font-extrabold tracking-tight">Our Projects Are Our Best Proof</p>
              <p className="text-xs text-slate-400 font-light max-w-md">
                Take a look at true craftsmanship engineered by top building, roofing, and waterproofing contractors across Kenya.
              </p>
            </div>
            <Link href="/projects" className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs text-amber-400 font-bold px-5 py-3 rounded uppercase tracking-wider transition-all">
              Launch Full Image Gallery
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* Image Showcase Matrix Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { keyword: "Building Contractors Kenya", img: "/image1.jpeg" },
              { keyword: "Exhibition Trade Booths", img: "/image2.jpeg" },
              { keyword: "Waterproofing Services Nairobi", img: "/image3.jpeg" }
            ].map((item, index) => (
              <div key={index} className="group relative h-80 rounded-xl overflow-hidden border border-slate-800 shadow-lg bg-slate-950">
                <Image 
                  src={item.img} 
                  alt={`${item.keyword} Teaser - KEGO Builders`}
                  fill 
                  className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                    {item.keyword}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION — ZERO SHAKE & MULTI-FOCUS */}
      <section className="bg-[#0A192F] text-white py-20 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-2">Our Advantages</h2>
            <p className="text-3xl font-extrabold tracking-tight">Why Choose KEGO Builders?</p>
            <div className="h-1 w-12 bg-amber-500 mx-auto rounded mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center transform-gpu backface-hidden">
            {[
              { icon: <Layers size={28} />, name: "Innovative Designs" },
              { icon: <Award size={28} />, name: "Quality Materials" },
              { icon: <Clock size={28} />, name: "Timely Project & Expo Setup" },
              { icon: <ShieldCheck size={28} />, name: "Experienced Engineering" },
              { icon: <CheckCircle2 size={28} />, name: "Guaranteed Satisfaction" }
            ].map((adv, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/60 p-6 rounded-lg border border-slate-800/80 space-y-3 flex flex-col items-center justify-center transform-gpu backface-hidden"
              >
                <div className="text-amber-400">{adv.icon}</div>
                <h4 className="font-bold text-xs sm:text-sm tracking-wide text-white antialiased">{adv.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INLINE CONTACT ZONE */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-7 bg-gradient-to-br from-slate-950 to-[#0A192F] text-white p-8 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-amber-400">Let's Connect</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Ready to transform your architectural parameters, consult premium <span className="text-white font-medium">Roofing Contractors Kenya</span> networks, or launch a trade show exhibit? Let's connect.
              </p>
              <div className="space-y-3 pt-4 text-sm">
                <a href="tel:0742254007" className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors w-fit">
                  <Phone size={16} className="text-amber-500" />
                  <span className="font-semibold">0742 254 007 / 0728 753 833</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={16} className="text-amber-500" />
                  <span>Kamakis Bypass, Ruiru, Kenya</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-8">KEGO BUILDERS • Premium Structural Solutions</p>
          </div>
          
          <div className="md:col-span-5 bg-slate-900 p-8 flex flex-col justify-center items-center text-center space-y-4">
            <h4 className="text-white font-bold text-lg">Need Immediate Estimates?</h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              We process blueprints, billing inquiries, and exhibition floor specifications daily.
            </p>
            <Link href="/contact" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold py-3 rounded uppercase tracking-wider transition-all shadow-md">
              Launch Call &amp; Contact Desk
            </Link>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP CALL TO ACTION */}
      <a 
        href="https://wa.me/254742254007?text=Hello%20KEGO%20Builders%2C%20I%20am%20inquiring%20about%20your%20construction%2C%20roofing%2C%20and%20exhibition%20booth%20services."
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
        aria-label="Connect on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.93 0c3.166.001 6.143 1.233 8.384 3.474 2.24 2.24 3.469 5.213 3.468 8.379-.003 6.582-5.338 11.93-11.872 11.93-2.01 0-3.987-.512-5.747-1.489L0 24zm5.822-3.477l.319.19c1.691.1 3.328.455 4.912.456 5.483 0 9.943-4.456 9.946-9.943.002-2.656-1.032-5.153-2.903-7.025C16.279 2.33 13.785 1.294 11.13 1.294c-5.488 0-9.947 4.457-9.95 9.945-.001 2.122.554 4.194 1.608 5.992l.213.364-1.062 3.879 3.94-1.033z"/>
        </svg>
        <span className="absolute right-14 bg-slate-950 text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded shadow border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:inline-block">
          Chat With Estimator
        </span>
      </a>

    </div>
  );
}