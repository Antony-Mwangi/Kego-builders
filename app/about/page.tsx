import React from 'react';
import Link from 'next/link';
import { 
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
      icon: <Building size={24} />,
      title: "Building Construction",
      description: "Comprehensive management of modern structural frameworks from excavation to final delivery.",
      points: ["Residential Buildings", "Commercial Buildings", "Renovations & Extensions", "Project Management", "Building Maintenance"]
    },
    {
      icon: <Hammer size={24} />,
      title: "Roofing Solutions",
      description: "Precision-engineered overhead truss systems designed for absolute aesthetic appeal and weather durability.",
      points: ["Modern Roofing Systems", "Roof Installation", "Light Gauge Steel (LGS)", "Asphalt Shingles & Tiles", "Repairs & Maintenance"]
    },
    {
      icon: <Layers size={24} />,
      title: "APP Membrane Waterproofing",
      description: "Advanced multi-layer moisture barriers built to prevent flat concrete leaks permanently.",
      points: ["Concrete Roofs & Flat Roofs", "Balconies & Terraces", "Basement Waterproofing", "Primer Applications", "Water Leak Protection"]
    },
    {
      icon: <Paintbrush size={24} />,
      title: "Interior Décor & Fit-Outs",
      description: "High-end bespoke cabinetry and premium partition layout structures to transform raw indoor spaces.",
      points: ["Gypsum Ceiling & TV Units", "Kitchen Cabinets & Wardrobes", "Office Layout & Partitioning", "Painting & Decorative Finishes", "Interior Renovations"]
    },
    {
      icon: <Maximize size={24} />,
      title: "Exhibition & Custom Booths",
      description: "Experiential brand fabrication engineered to stand out at conventions and corporate expos.",
      points: ["Exhibition Booth Design", "Trade Show Fabrication", "Promotional Display Stands", "Product Display Units", "Event Branding Structures"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-amber-500 selection:text-white antialiased">
      
      {/* BRAND HEADER SECTION - Open air, matching body background */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-4 text-center relative">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold tracking-widest text-amber-700 bg-amber-50 px-3 py-1.5 rounded border border-amber-200 uppercase">
            Corporate Profile
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 leading-none">
            About KEGO Builders
          </h1>
          <p className="text-slate-500 font-bold tracking-[0.25em] text-xs sm:text-sm uppercase">
            Building Quality • Creating Value
          </p>
        </div>
      </section>

      {/* CORE PROFILE VALUE PROPOSITION */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-28">
        
        {/* Profile Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block">
              Corporate Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Professional Construction &amp; Finishing Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Based at <strong>Kamakis Bypass, Ruiru, Kenya</strong>, KEGO Builders is a premier professional engineering and spatial contracting company. We specialize in comprehensive structural building construction, modern roofing systems, high-end interior structural fit-outs, advanced waterproofing systems, and custom brand exhibition booth design fabrication.
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Our core corporate culture is explicitly anchored around delivering uncompromising quality workmanship, highly innovative architectural designs, timely project completion matrices, and exceptional client relationship management across every mandate we execute.
            </p>
          </div>

          {/* Guidelines Matrix - Remade with open typography checklist formatting instead of a box container */}
          <div className="lg:col-span-5 space-y-5 lg:pt-8">
            <h3 className="text-sm font-bold text-slate-950 tracking-wider uppercase pb-2 border-b border-slate-200">
              Why Choose Us
            </h3>
            <ul className="space-y-3.5">
              {[
                "Professional & Experienced Team",
                "Quality Materials & Workmanship",
                "Highly Competitive Pricing Structures",
                "Strict Timely Project Delivery",
                "Customer Satisfaction Guaranteed",
                "Innovative Custom Engineering Solutions"
              ].map((value, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-amber-600 shrink-0" />
                  <span className="text-slate-700 font-medium text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CORE CAPABILITIES GRID SECTION */}
        <div className="space-y-16">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block">Our Capabilities</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Full Service Architectural Portfolio</h3>
          </div>

          <div className="space-y-16">
            {specializedServices.map((service, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-slate-200 last:border-0 last:pb-0"
              >
                {/* Left side: Icon Frame, Division Title */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-950 text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 uppercase">
                      Division 0{index + 1}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-slate-950 text-xl tracking-tight">
                      {service.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Right side: Clean, Open Check Matrix */}
                <div className="lg:col-span-7 lg:pt-2">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-slate-800 text-sm sm:text-base font-medium tracking-tight">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM REDIRECT BOARD - CARD COMPONENT REMOVED */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <p className="text-lg font-black text-slate-950">Have a pending blueprint structural requirement?</p>
            <p className="text-sm text-slate-500 font-light">Get a modern, durable structure tailored to your budget parameters.</p>
          </div>
          <div className="shrink-0 pt-2 md:pt-0">
            <Link 
              href="/contact" 
              className="bg-slate-950 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded uppercase transition-all inline-flex items-center gap-3 text-sm tracking-wide shadow-md"
            >
              <span>Contact Ruiru HQ</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}