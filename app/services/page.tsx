import React from 'react';
import Link from 'next/link';
import { Building, Hammer, Shield, Paintbrush, Layers, Check, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const serviceItems = [
    {
      icon: <Building size={32} />,
      title: "Building Construction",
      tagline: "Complete Construction Solutions",
      desc: "We provide complete construction solutions for residential, commercial, and institutional projects with an absolute dedication to structural integrity.",
      subServices: [
        "Residential Buildings",
        "Commercial Buildings",
        "Renovations & Extensions",
        "Project Management",
        "Building Maintenance"
      ]
    },
    {
      icon: <Hammer size={32} />,
      title: "Roofing Solutions",
      tagline: "Modern & Durable Roofing Systems",
      desc: "Tailored to suit different architectural designs and client requirements, our roofing setups combine aesthetic elegance with long-term weather endurance.",
      subServices: [
        "Modern Roofing Systems & Installation",
        "Light Gauge Steel (LGS) Roofing Structures",
        "Asphalt Shingles & Stone-Coated Roofing Tiles",
        "Corrugated Sheets & Roof Waterproofing Solutions",
        "Roof Repairs & Maintenance"
      ]
    },
    {
      icon: <Shield size={32} />,
      title: "APP Membrane Waterproofing",
      tagline: "Advanced Leak Protection Systems",
      desc: "We specialize in high-grade waterproofing systems utilizing premium APP Membrane and professional Primer applications.",
      subServices: [
        "Concrete Roof Waterproofing",
        "Flat Roof Waterproofing Solutions",
        "Balconies & Terraces Protection",
        "Basement Waterproofing Layouts",
        "Water Leak Protection Systems"
      ]
    },
    {
      icon: <Paintbrush size={32} />,
      title: "Interior Décor & Fit-Outs",
      tagline: "Functional & Elegant Finishing Solutions",
      desc: "We transform interior corporate and residential spaces through specialized structural adjustments and premium artisan finishing touches.",
      subServices: [
        "Kitchen Cabinet & Wardrobe Design / Installation",
        "Office Layout, Partitioning & Office Fit-Outs",
        "Gypsum Ceiling Installation & TV Wall Units",
        "Painting, Wall Finishes & Decorative Finishes",
        "Comprehensive Interior Renovations"
      ]
    },
    {
      icon: <Layers size={32} />,
      title: "Exhibition & Custom Trade Booths",
      tagline: "Enhancing Brand Visibility",
      desc: "We design and fabricate custom exhibition stands and high-impact promotional displays configured specifically to maximize customer engagement.",
      subServices: [
        "Exhibition Booth Design",
        "Trade Show Booth Fabrication",
        "Promotional Display Stands & Product Units",
        "Event Branding Structures",
        "Corporate Exhibition Setups"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-amber-500 selection:text-white antialiased">
      
      {/* BRAND HEADER BANNER - Blended with the body background */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-4 text-center relative">
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-none">
            Our Services Portfolio
          </h1>
          <p className="text-amber-600 font-bold tracking-[0.25em] text-xs sm:text-sm uppercase">
            Building Quality • Creating Value
          </p>
        </div>
      </section>

      {/* CORE RESTRUCTURED LAYOUT - Alternating rows with massive font breathing room */}
      <section className="py-24 max-w-6xl mx-auto px-4 space-y-28">
        
        {serviceItems.map((srv, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index} 
              className={`flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-slate-200 last:border-0`}
            >
              {/* Left Column: Core Service Definition and Big Fonts */}
              <div className={`w-full lg:col-span-5 space-y-5 ${!isEven ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="bg-slate-950 text-amber-400 p-3.5 rounded-xl shadow-lg shrink-0">
                    {srv.icon}
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200">
                    Division 0{index + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                    {srv.title}
                  </h2>
                  <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
                    {srv.tagline}
                  </p>
                </div>

                <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              {/* Right Column: High-Readability Expanded Checklist Sheet */}
              <div className={`w-full lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm ${!isEven ? 'lg:order-1' : ''}`}>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                  Specialized Capabilities &amp; Operations
                </h3>
                <ul className="space-y-4">
                  {srv.subServices.map((sub, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-4 text-base sm:text-lg text-slate-800 font-medium pb-3 border-b border-slate-50 last:border-0 last:pb-0">
                      <Check size={20} className="text-emerald-600 shrink-0 mt-1" />
                      <span className="font-medium tracking-tight text-slate-900">{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          );
        })}

        {/* RESTRUCTURED VALUE ADVERTISEMENT AREA - NO CARD WRAPPER */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-12">
          <div className="space-y-2">
            <span className="text-amber-600 font-bold tracking-widest text-xs uppercase block">Work With Professionals</span>
            <h4 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">Ready to Launch Your Structural Layout?</h4>
          </div>
          <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            Our teams are fully deployed across Ruiru and the wider region, providing quality materials, competitive pricing, and guaranteed customer satisfaction.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="bg-slate-950 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded uppercase transition-all inline-flex items-center gap-3 text-sm tracking-wide shadow-md"
            >
              <span>Get Free Consultation Estimate</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}