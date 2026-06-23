import React from 'react';
import Link from 'next/link';
import { Building, Hammer, Shield, Paintbrush, Layers, Check, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const serviceItems = [
    {
      icon: <Building size={26} />,
      title: "1. Building Construction",
      tagline: "Complete Construction Solutions",
      desc: "We provide complete construction solutions for residential, commercial, and institutional projects with a dedication to structural integrity.",
      subServices: [
        "Residential Buildings",
        "Commercial Buildings",
        "Renovations & Extensions",
        "Project Management",
        "Building Maintenance"
      ]
    },
    {
      icon: <Hammer size={26} />,
      title: "2. Roofing Solutions",
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
      icon: <Shield size={26} />,
      title: "3. APP Membrane Waterproofing",
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
      icon: <Paintbrush size={26} />,
      title: "4. Interior Décor & Fit-Outs",
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
      icon: <Layers size={26} />,
      title: "5. Exhibition & Custom Trade Booths",
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
    <div className="bg-slate-50 min-h-screen selection:bg-amber-500 selection:text-white">
      
      {/* HEADER HERO BANNER */}
      <section className="bg-[#0A192F] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2444_1px,transparent_1px),linear-gradient(to_bottom,#0f2444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Our Services Portfolio</h1>
          <p className="text-amber-400 font-bold tracking-[0.25em] text-xs sm:text-sm uppercase">
            Building Quality • Creating Value
          </p>
        </div>
      </section>

      {/* CORE ITERATION MATRIX GRID */}
      <section className="py-20 max-w-5xl mx-auto px-4 space-y-16">
        <div className="grid grid-cols-1 gap-10">
          {serviceItems.map((srv, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start hover:border-amber-500/20 transition-all duration-300"
            >
              {/* Icon Frame */}
              <div className="bg-slate-950 text-amber-400 p-4 rounded-xl shadow-md shrink-0">
                {srv.icon}
              </div>

              {/* Service Details */}
              <div className="space-y-4 flex-grow w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                    {srv.title}
                  </h3>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 w-fit">
                    {srv.tagline}
                  </span>
                </div>

                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {srv.desc}
                </p>

                {/* Sub-Services Checklist Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {srv.subServices.map((sub, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check size={14} className="text-emerald-600 shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LOWER VALUE ADVERTISEMENT BAR */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4 shadow-sm max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-slate-950">Ready to Launch Your Structural Layout?</h4>
          <p className="text-sm text-slate-600 font-light max-w-md mx-auto leading-relaxed">
            Our teams are fully deployed across Ruiru and the wider region, providing quality materials, competitive pricing, and guaranteed customer satisfaction.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-white px-6 py-3 rounded text-xs font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-2"
            >
              <span>Get Free Consultation Estimate</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}