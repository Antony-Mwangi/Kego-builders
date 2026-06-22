import React from 'react';
import Link from 'next/link';
import { LayoutGrid, ArrowUpRight, HardHat, Building } from 'lucide-react';

export default function ProjectsPage() {
  const customProjects = [
    { title: "Luxury Residential Villa Upgrade", scope: "Residential Fit-Out", location: "Runda, Nairobi" },
    { title: "Corporate Headquarters Spatial Partitioning", scope: "Commercial Layout", location: "Westlands, Corporate Zone" },
    { title: "Architectural Gypsum Ceiling & Finishing Realization", scope: "Interior Décor & Finishing", location: "Kilimani Estate" },
    { title: "Industrial Storage Facility Structural Roof Integration", scope: "Professional Roofing", location: "Mombasa Road Industrial Area" },
    { title: "International Trade Show Double-Storey Brand Booth", scope: "Exhibition & Custom Booths", location: "KICC Expo Center" },
    { title: "Premium Multi-Unit Residential Complex Structural Frame", scope: "Residential Construction", location: "Syokimau Region" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* SECTION BANNER */}
      <section className="bg-[#0A192F] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2444_1px,transparent_1px),linear-gradient(to_bottom,#0f2444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Project Portfolio Gallery</h1>
          <p className="text-amber-400 font-semibold tracking-widest text-xs sm:text-sm uppercase">
            Quality Workmanship • Customer Satisfaction Guaranteed
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customProjects.map((proj, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between group">
              
              {/* Graphic Placeholder Canvas simulating architectural work */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 h-48 flex flex-col justify-between relative text-white">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                <div className="flex justify-between items-start relative z-10">
                  <span className="text-[10px] font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400 px-2 py-1 rounded uppercase tracking-wider">
                    {proj.scope}
                  </span>
                  <Building size={16} className="text-slate-700 group-hover:text-amber-500 transition-colors" />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium relative z-10">
                  <HardHat size={14} className="text-amber-500" />
                  <span>Site Clearance Finalized</span>
                </div>
              </div>

              {/* Information Typography Block */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-950 tracking-tight leading-snug group-hover:text-amber-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{proj.location}</p>
                </div>
                
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-950 uppercase tracking-wider">
                  <span>Project Verified</span>
                  <ArrowUpRight size={14} className="text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM REDIRECT TO DIRECT CONTACT INTERACTION */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-slate-800 space-y-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2444_1px,transparent_1px)] bg-[size:6rem] opacity-20"></div>
          <h4 className="text-2xl sm:text-3xl font-black tracking-tight relative z-10">Have an Upcoming Structural Build Requirement?</h4>
          <p className="text-sm text-gray-400 font-light max-w-md mx-auto leading-relaxed relative z-10">
            Let's build your tomorrow, today. Get in touch with our estimators to secure your production calendar slot.
          </p>
          <div className="pt-4 relative z-10">
            <Link href="/contact" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-8 py-3.5 rounded text-xs tracking-wider uppercase transition-colors inline-block">
              Request On-Site Estimate Review
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}