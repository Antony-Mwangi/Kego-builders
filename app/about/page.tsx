import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Users, 
  Trophy, 
  Clock, 
  Sparkles, 
  Building, 
  Hammer, 
  Layers, 
  Paintbrush, 
  Maximize,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function AboutPage() {
  const specializedServices = [
    {
      icon: <Building size={22} />,
      title: "1. Building Construction",
      points: ["Residential Buildings", "Commercial Buildings", "Renovations & Extensions", "Project Management", "Building Maintenance"]
    },
    {
      icon: <Hammer size={22} />,
      title: "2. Roofing Solutions",
      points: ["Modern Roofing Systems", "Roof Installation", "Light Gauge Steel (LGS)", "Asphalt Shingles & Tiles", "Repairs & Maintenance"]
    },
    {
      icon: <Layers size={22} />,
      title: "3. APP Membrane Waterproofing",
      points: ["Concrete Roofs & Flat Roofs", "Balconies & Terraces", "Basement Waterproofing", "Primer Applications", "Water Leak Protection"]
    },
    {
      icon: <Paintbrush size={22} />,
      title: "4. Interior Décor & Fit-Outs",
      points: ["Gypsum Ceiling & TV Units", "Kitchen Cabinets & Wardrobes", "Office Layout & Partitioning", "Painting & Decorative Finishes", "Interior Renovations"]
    },
    {
      icon: <Maximize size={22} />,
      title: "5. Exhibition & Custom Booths",
      points: ["Exhibition Booth Design", "Trade Show Fabrication", "Promotional Display Stands", "Product Display Units", "Event Branding Structures"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-amber-500 selection:text-white">
      
      {/* BRAND HEADER BANNER */}
      <section className="bg-[#0A192F] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2444_1px,transparent_1px),linear-gradient(to_bottom,#0f2444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">About KEGO Builders</h1>
          <p className="text-amber-400 font-bold tracking-[0.25em] text-xs sm:text-sm uppercase">
            Building Quality • Creating Value
          </p>
        </div>
      </section>

      {/* CORE PROFILE VALUE PROPOSITION */}
      <section className="py-16 max-w-6xl mx-auto px-4 space-y-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold tracking-wider text-amber-600 uppercase bg-amber-50 px-3 py-1 rounded border border-amber-200">
              Corporate Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">
              Professional Construction & Finishing Solutions
            </h2>
            <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
              Based at <strong>Kamakis Bypass, Ruiru, Kenya</strong>, KEGO Builders is a premier professional engineering and spatial contracting company. We specialize in comprehensive structural building construction, modern roofing systems, high-end interior structural fit-outs, advanced waterproofing systems, and custom brand exhibition booth design fabrication.
            </p>
            <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
              Our core corporate culture is explicitly anchored around delivering uncompromising quality workmanship, highly innovative architectural designs, timely project completion matrices, and exceptional client relationship management across every mandate we execute.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-4 border border-slate-800 shadow-xl">
            <h3 className="text-lg font-bold text-amber-400 tracking-tight border-b border-slate-800 pb-2">Why Choose Us</h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                "Professional & Experienced Team",
                "Quality Materials & Workmanship",
                "Highly Competitive Pricing Structures",
                "Strict Timely Project Delivery",
                "Customer Satisfaction Guaranteed",
                "Innovative Custom Engineering Solutions"
              ].map((value, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-amber-500 shrink-0" />
                  <span className="text-gray-200 font-light text-xs sm:text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DETAILED SERVICES MATRIX GRID */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xs font-bold tracking-widest text-amber-600 uppercase">Our Capabilities</h3>
            <p className="text-2xl font-extrabold text-slate-950 sm:text-3xl tracking-tight">Full Service Architectural Portfolio</p>
            <div className="h-1 w-12 bg-amber-500 mx-auto rounded mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-amber-500/20 transition-all ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="bg-slate-950 text-amber-400 w-10 h-10 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {service.icon}
                </div>
                <h4 className="font-extrabold text-slate-950 text-base tracking-tight mb-3">
                  {service.title}
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 font-light">
                  {service.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM REDIRECT BOARD */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 text-white p-8 rounded-xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-lg font-bold text-amber-400">Have a pending blueprint structural requirement?</p>
            <p className="text-xs text-gray-400 font-light">Get a modern, durable structure tailored to your budget parameters.</p>
          </div>
          <Link href="/contact" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-6 py-3 rounded text-xs tracking-wider uppercase transition-all flex items-center gap-2 whitespace-nowrap">
            <span>Contact Ruiru HQ</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}