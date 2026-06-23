
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  MapPin,
  Building,
  Shield
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="selection:bg-amber-500 selection:text-white bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-[#0A192F] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2444_1px,transparent_1px),linear-gradient(to_bottom,#0f2444_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Context Left */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              Professional Construction &amp; Finishing Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Building Quality.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                Creating Value.
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Based at Kamakis Bypass, Ruiru, we specialize in building construction, modern roofing systems, elegant interior fit-outs, and advanced APP membrane waterproofing solutions across Kenya.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/services" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-8 py-3.5 rounded shadow-lg shadow-amber-500/20 transition-all text-center flex items-center justify-center gap-2 group text-sm">
                Explore Services Portfolio
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="border-2 border-slate-700 hover:border-amber-500 hover:text-amber-400 px-8 py-3.5 rounded font-semibold text-center transition-all bg-slate-900/40 text-sm">
                Contact Estimator Desk
              </Link>
            </div>
          </div>

          {/* Housing Image & Copy Grid Right */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            <div className="relative h-64 sm:h-auto min-h-[320px] rounded-xl overflow-hidden shadow-2xl border border-slate-800">
              <Image 
                src="/building.jpeg"
                alt="KEGO Builders Residential Construction Project" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Featured Construction</p>
                <p className="text-sm font-semibold text-white">Modern Multi-Family &amp; Residential Projects</p>
              </div>
            </div>
            
            <div className="bg-slate-900/80 border border-slate-800/80 p-6 rounded-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-amber-400 tracking-tight">Our Core Assurances</h3>
                <ul className="space-y-3">
                  {[
                    "Complete Structural Integrity",
                    "Premium Selected Materials",
                    "Guaranteed Customer Satisfaction",
                    "Timely Project Delivery Loop"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-xs font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] text-amber-500 uppercase tracking-widest font-bold">Location Base</p>
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
            { metric: "Timely", desc: "Project Completion" },
            { metric: "Competitive", desc: "Pricing Frameworks" },
            { metric: "Innovative", desc: "Design Solutions" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">{stat.metric}</p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE SERVICES SNIPPET SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase">Core Operations</h2>
          <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What We Bring to the Site
          </p>
          <div className="h-1 w-16 bg-amber-500 mx-auto rounded mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="bg-slate-900 text-amber-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Building size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">1. Building Construction</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Residential, commercial, and institutional construction engineering, structural renovations, and maintenance.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 w-fit mt-6 block">
              Residential &amp; Commercial
            </span>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="bg-slate-900 text-amber-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Hammer size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">2. Roofing Solutions</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Light Gauge Steel (LGS) structures, asphalt shingles, stone-coated tiles, and architectural roof adjustments.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 w-fit mt-6 block">
              Modern Roofing Systems
            </span>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="bg-slate-900 text-amber-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Shield size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">3. APP Membrane Waterproofing</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Flat concrete roof waterproofing, basement water mitigation barriers, terraces, and leak prevention frameworks.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 w-fit mt-6 block">
              Advanced Protection
            </span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-950 hover:text-amber-600 transition-colors group">
            <span>View All Services Matrix</span>
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
              { icon: <Layers size={28} />, name: "Innovative Designs" },
              { icon: <Award size={28} />, name: "Quality Materials" },
              { icon: <Clock size={28} />, name: "Timely Project Delivery" },
              { icon: <ShieldCheck size={28} />, name: "Experienced Engineering" },
              { icon: <CheckCircle2 size={28} />, name: "Guaranteed Satisfaction" }
            ].map((adv, idx) => (
              <div key={idx} className={`bg-slate-900/60 p-6 rounded-lg border border-slate-800/80 space-y-3 flex flex-col items-center justify-center ${idx === 4 ? 'col-span-2 lg:col-span-1' : ''}`}>
                <div className="text-amber-400">{adv.icon}</div>
                <h4 className="font-bold text-xs sm:text-sm tracking-wide text-white">{adv.name}</h4>
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
                Ready to transform your structural architectural parameters or launch a new building project? Contact our estimation unit directly.
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
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-8">KEGO BUILDERS • Building Quality • Creating Value</p>
          </div>
          
          <div className="md:col-span-5 bg-slate-900 p-8 flex flex-col justify-center items-center text-center space-y-4">
            <h4 className="text-white font-bold text-lg">Need Immediate Estimates?</h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              We process blueprints, billing inquiries, and site metric requests standardly.
            </p>
            <Link href="/contact" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold py-3 rounded uppercase tracking-wider transition-all shadow-md">
              Launch Call &amp; Chat App Links
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}