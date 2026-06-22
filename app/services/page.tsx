import React from 'react';
import Link from 'next/link';
import { Home, Briefcase, Paintbrush, Hammer, Layers, Check, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const serviceItems = [
    {
      icon: <Home size={26} />,
      title: "Residential Spaces",
      tagline: "Spaces that feel like home",
      desc: "Comprehensive home architectural construction, modern multi-family units, private custom updates, and residential landscape property development from structural grading onwards."
    },
    {
      icon: <Briefcase size={26} />,
      title: "Commercial Layouts",
      tagline: "Spaces that drive success",
      desc: "Strategic retail structural setups, premium office fit-outs, industrial spaces, corporate facility upgrades, and architectural spatial planning focused on efficiency."
    },
    {
      icon: <Paintbrush size={26} />,
      title: "Interior Décor & Finishing",
      tagline: "Designing spaces that inspire",
      desc: "Modern interior spatial finishing, custom gypsum ceiling designs, architectural partition modeling, premium texturized painting applications, and global aesthetic makeovers."
    },
    {
      icon: <Hammer size={26} />,
      title: "Professional Roofing Services",
      tagline: "Strong roofs, safe homes",
      desc: "Complete luxury home roof installations, commercial metal sheet placement, structural structural repair, leak protection systems, and weather insulation implementations."
    },
    {
      icon: <Layers size={26} />,
      title: "Exhibition & Custom Booths",
      tagline: "Your Vision. Our Expertise.",
      desc: "Innovative brand display units, structural trade show exhibition stands, corporate pop-up marketing structures, promotional kiosks, and temporary event frameworks."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HEADER HERO BANNER */}
      <section className="bg-[#0A192F] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2444_1px,transparent_1px),linear-gradient(to_bottom,#0f2444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Professional Services Matrix</h1>
          <p className="text-amber-400 font-semibold tracking-widest text-xs sm:text-sm uppercase">
            From Concept to Completion, We Build with Passion.
          </p>
        </div>
      </section>

      {/* CORE ITERATION MATRIX GRID */}
      <section className="py-20 max-w-5xl mx-auto px-4 space-y-12">
        <div className="grid grid-cols-1 gap-8">
          {serviceItems.map((srv, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start hover:border-amber-500/30 transition-colors">
              <div className="bg-slate-950 text-amber-400 p-4 rounded-xl shadow-md shrink-0">
                {srv.icon}
              </div>
              <div className="space-y-3 flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">{srv.title}</h3>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 w-fit">
                    {srv.tagline}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  {srv.desc}
                </p>
                <div className="pt-2 flex items-center gap-6 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600" /> Premium Materials</span>
                  <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600" /> Certified Engineers</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LOWER VALUE ADVERTISEMENT BAR */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4 shadow-sm max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-slate-950">Require a Custom Non-Standard Layout Built?</h4>
          <p className="text-sm text-slate-600 font-light max-w-md mx-auto">
            Our planning desk regularly produces specialized structural drawings tailored to unique engineering parameters.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-white px-6 py-3 rounded text-xs font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-2">
              <span>Initiate Estimate Protocol</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}