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
  MessageSquare,
  HardHat,
  Briefcase
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="selection:bg-amber-500 selection:text-white bg-slate-50 min-h-screen relative antialiased">
      
      {/* BRAND HERO SECTION - Blends cleanly into bg-slate-50 without box wrappers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Hero Left Content Text Block */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded text-xs font-bold tracking-wider uppercase max-w-full text-wrap text-left">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse shrink-0"></span>
              Construction Company Nairobi &amp; Exhibition Specialists
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-950">
              Building Quality.<br />
              <span className="text-amber-600">Creating Value.</span>
            </h1>
            
            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Based at Kamakis Bypass, Ruiru, KEGO Builders stands out among premier <span className="text-slate-950 font-medium">Building Contractors Kenya</span> trusts. We specialize in commercial building construction, custom corporate exhibition trade booths, elegant interior fit-outs, and elite finishing solutions nationwide.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link 
                href="/projects" 
                className="bg-slate-950 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded uppercase transition-all text-center flex items-center justify-center gap-2 group text-xs tracking-wider shadow-md w-full sm:w-auto"
              >
                <span>View Our Project Photos</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/254742254007" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-slate-300 hover:border-slate-950 text-slate-800 hover:text-slate-950 px-8 py-4 rounded font-bold text-center transition-all bg-white text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto"
              >
                <MessageSquare size={16} className="text-emerald-600 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start order-1 lg:order-2">
            <div className="relative h-64 sm:h-80 lg:h-[360px] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <Image 
                src="/building.jpeg"
                alt="KEGO Builders Residential Construction & Trade Show Projects" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Featured Portfolio</p>
                <p className="text-sm font-bold text-white tracking-tight">Commercial Builds &amp; Custom Exhibition Hubs</p>
              </div>
            </div>
            
            {/* Guarantee Matrix List Column */}
            <div className="space-y-6 sm:pt-4">
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Our Core Assurances</h3>
                <ul className="space-y-3.5">
                  {[
                    "Complete Structural Integrity",
                    "Premium Selected Materials",
                    "Custom Costume Display Engineering",
                    "On-Time Project & Event Delivery"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-slate-800 text-sm font-semibold tracking-tight">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 border-t border-slate-200">
                <p className="text-[10px] text-amber-700 uppercase tracking-widest font-bold">Operations Base</p>
                <p className="text-sm text-slate-600 font-light mt-0.5">Kamakis Bypass, Ruiru, Kenya</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* METRIC VALUE GRID BAR */}
      <section className="border-y border-slate-200 py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { metric: "100%", desc: "Quality Workmanship" },
            { metric: "On-Time", desc: "Expo & Site Readiness" },
            { metric: "Competitive", desc: "Pricing Frameworks" },
            { metric: "Innovative", desc: "Exhibition & Build Designs" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">{stat.metric}</p>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider px-1">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORPORATE IDENTITY / WHO WE ARE SPLIT */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block">Who We Are</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                Reliable Engineering, Built to Last.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              At KEGO Builders, we fuse robust technical knowledge with modern architecture to deliver standard-setting spaces. Whether laying major commercial foundations or configuring dynamic exhibition trade booths, our focus remains on master-level craftsmanship and long-term asset value.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="bg-slate-950 text-amber-400 w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <HardHat size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950 uppercase tracking-wide">Expert Oversight</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-light mt-0.5">Supervised by qualified structural developers.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-slate-950 text-amber-400 w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950 uppercase tracking-wide">Turnkey Deliveries</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-light mt-0.5">Handling everything from supply to implementation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-[340px] w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <Image 
              src="/image30.jpeg" 
              alt="KEGO Builders Onsite Operational Excellence" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES CHECKLIST MATRIX SECTION */}
      <section className="py-20 border-t border-slate-200 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="space-y-2 max-w-3xl text-left">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block">Core Operations</span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
            Specialized Building &amp; Structural Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">
            From foundations to premium exhibition spaces, we stand as a top-tier <span className="text-slate-950 font-medium">Construction Company Nairobi</span> client networks rely on for long-term value.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* Row 1: Building Construction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start pb-8 border-b border-slate-200">
            <div className="lg:col-span-8 flex items-start gap-4">
              <div className="bg-slate-950 text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                <Building size={22} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-950 tracking-tight">Building Construction</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  As prominent <span className="text-slate-950 font-medium">Building Contractors Kenya</span>, we manage residential complexes, commercial spaces, and structural industrial projects seamlessly.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pt-2 lg:text-right text-left pl-16 lg:pl-0">
              <span className="inline-block text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200 uppercase tracking-wider">
                Premium Engineering
              </span>
            </div>
          </div>

          {/* Row 2: Exhibition Booths */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start pb-8 border-b border-slate-200">
            <div className="lg:col-span-8 flex items-start gap-4">
              <div className="bg-slate-950 text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                <Shirt size={22} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-950 tracking-tight">Exhibition Costume Booths</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  Tailored corporate exhibition costume trade booths &amp; finishing solutions designed to capture brand authority at major expos, fashion showcases, and conventions.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pt-2 lg:text-right text-left pl-16 lg:pl-0">
              <span className="inline-block text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200 uppercase tracking-wider">
                Experiential Trade Hubs
              </span>
            </div>
          </div>

          {/* Row 3: Roofing Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start pb-8 border-b border-slate-200">
            <div className="lg:col-span-8 flex items-start gap-4">
              <div className="bg-slate-950 text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                <Hammer size={22} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-950 tracking-tight">Modern Roofing Systems</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  Trusted <span className="text-slate-950 font-medium">Roofing Contractors Kenya</span> specializing in Light Gauge Steel (LGS) framework, elegant stone-coated tiles, and asphalt shingles.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pt-2 lg:text-right text-left pl-16 lg:pl-0">
              <span className="inline-block text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200 uppercase tracking-wider">
                Truss &amp; Tile Installation
              </span>
            </div>
          </div>

          {/* Row 4: Waterproofing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start pb-2">
            <div className="lg:col-span-8 flex items-start gap-4">
              <div className="bg-slate-950 text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                <Shield size={22} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-950 tracking-tight">APP Membrane Waterproofing</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  End-to-end industrial structural sealing delivered by our premier <span className="text-slate-950 font-medium">Waterproofing Services Nairobi</span> branch to completely stop concrete leaks.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pt-2 lg:text-right text-left pl-16 lg:pl-0">
              <span className="inline-block text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200 uppercase tracking-wider">
                Leak Proof Protection
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* PORTFOLIO IMAGE DISPLAY MATRIX */}
      <section className="py-24 border-t border-slate-200 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 text-left">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block">Visual Proof</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Our Projects Are Our Best Proof</h2>
            <p className="text-sm text-slate-500 font-light max-w-md">
              Take a look at true craftsmanship engineered by top building, roofing, and waterproofing contractors across Kenya.
            </p>
          </div>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-xs text-amber-700 hover:text-amber-600 font-bold uppercase tracking-wider transition-colors pt-2"
          >
            <span>Launch Full Image Gallery</span>
            <ChevronRight size={14} />
          </Link>
        </div>

        {/* Flat Image Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { keyword: "Building Contractors Kenya", img: "/image1.jpeg" },
            { keyword: "Exhibition Trade Booths", img: "/image2.jpeg" },
            { keyword: "Waterproofing Services Nairobi", img: "/image3.jpeg" }
          ].map((item, index) => (
            <div key={index} className="space-y-3 text-left">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                <Image 
                  src={item.img} 
                  alt={`${item.keyword} Teaser - KEGO Builders`}
                  fill 
                  className="object-cover"
                />
              </div>
              <span className="inline-block text-xs font-bold text-slate-950 uppercase tracking-wider pl-1">
                {item.keyword}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* COMPACT CORPORATE VALUES STRIP */}
      <section className="py-16 border-t border-slate-200 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-10 text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block">Our Advantages</span>
            <h3 className="text-xl font-extrabold text-slate-950 tracking-tight">Why Choose KEGO Builders?</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Layers size={20} />, name: "Innovative Designs" },
              { icon: <Award size={20} />, name: "Quality Materials" },
              { icon: <Clock size={20} />, name: "Timely Project & Expo Setup" },
              { icon: <ShieldCheck size={20} />, name: "Experienced Engineering" },
              { icon: <CheckCircle2 size={20} />, name: "Guaranteed Satisfaction" }
            ].map((adv, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="text-amber-600 shrink-0">{adv.icon}</div>
                <h4 className="font-semibold text-xs sm:text-sm tracking-tight text-slate-900">{adv.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT INFO FOOTER DIVIDER DESK */}
      <section className="py-20 border-t border-slate-200 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left">
          
          {/* Contact Left Matrix */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-black tracking-tight text-slate-950">Let's Connect</h3>
              <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">
                Ready to transform your architectural parameters, consult premium <span className="text-slate-950 font-medium">Roofing Contractors Kenya</span> networks, or launch a trade show exhibit? Let's connect.
              </p>
            </div>
            
            <div className="space-y-4 text-sm font-medium">
              <a href="tel:0742254007" className="flex items-center gap-3 text-slate-800 hover:text-amber-600 transition-colors w-fit break-all sm:break-normal">
                <Phone size={18} className="text-amber-600 shrink-0" />
                <span className="tracking-tight font-bold">0742 254 007 / 0728 753 833</span>
              </a>
              <div className="flex items-center gap-3 text-slate-800">
                <MapPin size={18} className="text-amber-600 shrink-0" />
                <span className="tracking-tight">Kamakis Bypass, Ruiru, Kenya</span>
              </div>
            </div>
            
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pt-4">
              KEGO BUILDERS • Premium Structural Solutions
            </p>
          </div>
          
          {/* Contact Estimate Action Desk Right */}
          <div className="md:col-span-5 space-y-4 md:pt-2">
            <h4 className="text-slate-950 font-extrabold text-lg tracking-tight">Need Immediate Estimates?</h4>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              We process blueprints, billing inquiries, and exhibition floor specifications daily.
            </p>
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="bg-slate-950 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded uppercase transition-all inline-flex items-center gap-3 text-xs tracking-wider shadow-md w-full sm:w-auto justify-center"
              >
                <span>Launch Call &amp; Contact Desk</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FLOATING WHATSAPP CALL TO ACTION */}
      <a 
        href="https://wa.me/254742254007?text=Hello%20KEGO%20Builders%2C%20I%20am%20inquiring%20about%20your%20construction%2C%20roofing%2C%20and%20exhibition%20booth%20services."
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"
        aria-label="Connect on WhatsApp"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.93 0c3.166.001 6.143 1.233 8.384 3.474 2.24 2.24 3.469 5.213 3.468 8.379-.003 6.582-5.338 11.93-11.872 11.93-2.01 0-3.987-.512-5.747-1.489L0 24zm5.822-3.477l.319.19c1.691.1 3.328.455 4.912.456 5.483 0 9.943-4.456 9.946-9.943.002-2.656-1.032-5.153-2.903-7.025C16.279 2.33 13.785 1.294 11.13 1.294c-5.488 0-9.947 4.457-9.95 9.945-.001 2.122.554 4.194 1.608 5.992l.213.364-1.062 3.879 3.94-1.033z"/>
        </svg>
      </a>

    </div>
  );
}