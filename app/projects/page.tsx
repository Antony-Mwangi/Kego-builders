"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, HardHat, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  scope: string;       // Project scope categorization
  description: string;
}

const projectImages: ProjectImage[] = [
  { 
    id: 1, 
    src: '/image4.jpeg', 
    alt: 'Premium Residential Villa structural project', 
    title: 'Premium Residential Villa', 
    scope: 'Structural Engineering & Masonry',
    description: 'Execution of complete substructure and superstructure masonry frameworks for a luxury multi-story family estate. Project involved complex formwork assembly for cantilevered floor slabs, high-tensile rebar reinforcement configuration, and the precise casting of architectural concrete columns designed to accommodate extensive floor-to-ceiling perimeter glazing systems.' 
  },
  { 
    id: 2, 
    src: '/image5.jpeg', 
    alt: 'Commercial Office Space structural fit out', 
    title: 'Commercial Corporate Complex', 
    scope: 'Commercial Interior Framing',
    description: 'A comprehensive internal structural partition project engineered for dynamic corporate floor plans. Features integrated steel studs, sound-dampening high-density insulation layers, structural column support adjustments, and multi-tier utility rough-ins tailored seamlessly for modern corporate technology infrastructures.' 
  },
  { 
    id: 3, 
    src: '/image6.jpeg', 
    alt: 'Luxury Living Space Finishes tiling ceiling design', 
    title: 'Luxury Residential Interior Finishes', 
    scope: 'Premium Interior Finishing',
    description: 'Premium interior architectural detailing utilizing laser-aligned large format porcelain tiles with precision expansion joints. The scope includes hand-applied gypsum plaster skimming, floating architectural bulkhead ceiling installations, and hidden accent pockets calibrated for custom perimeter LED ambient environments.' 
  },
  { 
    id: 4, 
    src: '/image7.jpeg', 
    alt: 'Architectural Roofing Truss Layout structural system', 
    title: 'Architectural Structural Roofing', 
    scope: 'Roofing Systems & Steel Fabrication',
    description: 'Engineering, fabrication, and installation of a heavy-gauge clear-span steel roof truss system. The framework was treated with anti-corrosive primer coatings before being clad with high-performance, weather-insulated trapezoidal roof profiles engineered for maximum sound attenuation and thermal efficiency.' 
  },
  { 
    id: 5, 
    src: '/image1.jpeg', 
    alt: 'Structural Concrete Pouring Slab Foundation works', 
    title: 'Heavy Structural Concrete Pouring', 
    scope: 'Substructure & Civil Foundations',
    description: 'Precision formwork layout planning and heavy reinforcing mesh assembly for a load-bearing suspended floor slab. Implemented strict vibrational compaction methods during the concrete pour phase to ensure uniform aggregate distribution, eliminate internal voids, and achieve maximum target structural MPa density.' 
  },
  { 
    id: 6, 
    src: '/image8.jpeg', 
    alt: 'Modern Canopy Framework outdoor cantilever entrance', 
    title: 'Modern Entrance Canopy Framework', 
    scope: 'Exterior Structural Additions',
    description: 'Design and construction of an architectural exterior portal canopy framework. Built utilizing structural hollow steel sections combined with specialized masonry anchor connections, engineered to safely counter strong localized wind load forces and dead load stresses.' 
  },
  { 
    id: 7, 
    src: '/image9.jpeg', 
    alt: 'Bespoke Window Layout lintel reinforce panels', 
    title: 'Panoramic Structural Window Openings', 
    scope: 'Structural Alterations & Masonry',
    description: 'Retrofitting and casting high-load pre-stressed concrete lintels to facilitate panoramic window integrations. Structural openings were reinforced with vertical tied columns to redistribute dead loads from overhead masonry walls down to the primary footing pads without settlement crack risks.' 
  },
  { 
    id: 8, 
    src: '/image10.jpeg', 
    alt: 'Perimeter Wall Masonry stone finish security wall', 
    title: 'Dressed Stone Perimeter Barrier', 
    scope: 'Civil Works & Security Masonry',
    description: 'Construction of a heavy perimeter security masonry barrier utilizing machine-cut, hand-dressed natural stones. Incorporates deep structural strip footings, intermediate concrete columns for lateral stabilization, integrated weep holes for ground hydrostatic relief, and conduits for security system integration.' 
  },
  { 
    id: 9, 
    src: '/image11.jpeg', 
    alt: 'Custom Plastering Detail smooth wall screed finishing', 
    title: 'Precision Structural Plastering', 
    scope: 'Interior & Exterior Plastering',
    description: 'Application of multi-coat premium internal wall plastering over concrete masonry block work. Utilizing a controlled sand-cement-lime ratio mix to prevent shrink cracking, the surface was troweled down using laser guidelines to produce a completely plumb, flawless level-5 paint finish surface.' 
  },
  { 
    id: 10, 
    src: '/image12.jpeg', 
    alt: 'Multi Vehicle Carport shade cantilever posts structural steel', 
    title: 'Engineered Multi-Vehicle Carport', 
    scope: 'Structural Steel Components',
    description: 'Fabrication of an open-bay parking protection facility utilizing heavy-duty universal columns anchored deep into engineered independent concrete block basements. Features a durable framework integrated with commercial grade weather-resistant canvas shade sails.' 
  },
  { 
    id: 11, 
    src: '/image13.jpeg', 
    alt: 'Foundation Footing Stage steel tie mesh excavation ground', 
    title: 'Reinforced Foundation Footings', 
    scope: 'Substructure Civil Engineering',
    description: 'Deep structural excavation, ground soil compaction testing, and anti-termite chemical ground treatment application. Steel reinforcing cages were tied manually on-site following detailed engineering blueprints to establish deep pad and strip footing systems.' 
  },
  { 
    id: 12, 
    src: '/image14.jpeg', 
    alt: 'Staircase Structural Framing cast in place concrete forms', 
    title: 'Cast-in-Place Monolithic Staircase', 
    scope: 'Bespoke Concrete Engineering',
    description: 'Intricate custom timber formwork assembly and structural steel tying for a geometric, cast-in-place concrete staircase layout. Engineered with precise riser and tread calculations to guarantee safe structural navigation and effortless modern aesthetic values.' 
  },
  { 
    id: 13, 
    src: '/image15.jpeg', 
    alt: 'External Paint Coatings texturized protective layer wall', 
    title: 'All-Weather Exterior Texturized Coating', 
    scope: 'Exterior Specialty Finishing',
    description: 'Application of high-performance architectural texturized acrylic coating systems across outer masonry elevations. The multi-layer specification provides long-term UV protection, elastomeric bridging of micro-fissures, and exceptional water-shedding performance against tropical elements.' 
  },
  { 
    id: 14, 
    src: '/image16.jpeg', 
    alt: 'Guttering Drainage Systems roof water pipes downspouts', 
    title: 'High-Capacity Stormwater Management', 
    scope: 'Roofing Plumbing & Drainage',
    description: 'Integration of heavy-duty, seamless commercial gutter systems calibrated to efficiently manage high-volume tropical storm runoff. Outfitted with heavy PVC downspouts connected directly into sub-surface perimeter drainage lines and masonry soak-away pits.' 
  },
  { 
    id: 15, 
    src: '/image17.jpeg', 
    alt: 'Site Preparation Works site clearing datum alignment survey', 
    title: 'Comprehensive Civil Site Preparation', 
    scope: 'Civil Earthworks & Surveys',
    description: 'Initial site mobilization stage comprising comprehensive land clearing, mechanical topsoil excavation, and the establishment of an immutable benchmark datum point by optical surveying instruments to guide all subsequent structural elevations accurately.' 
  },
  { 
    id: 16, 
    src: '/image18.jpeg', 
    alt: 'Bathroom Floor Tiling wet area liquid waterproofing porcelain', 
    title: 'Wet-Area Wet Room Engineering', 
    scope: 'Specialized Waterproofing & Tiling',
    description: 'Application of multi-layer elastomeric liquid waterproofing membranes across floor slabs and vertical shower walls. Covered by precision-cut vitrified porcelain tiles laid out with water-resistant antimicrobial grouting systems to prevent capillary leakage.' 
  },
  { 
    id: 17, 
    src: '/image19.jpeg', 
    alt: 'Main Retaining Wall Layout reinforced blocks civil earth retention', 
    title: 'Reinforced Earth Retaining Structure', 
    scope: 'Civil Engineering & Structural Control',
    description: 'Structural block retaining barrier designed to stabilize sloping topographical terrains. Constructed using solid concrete blocks filled with high-strength grout and rebar doweled securely directly into a wide, heavily reinforced baseline footing foundation.' 
  },
  { 
    id: 18, 
    src: '/image20.jpeg', 
    alt: 'Modern Living Area Fit Out drywall acoustics framing', 
    title: 'Interior Architectural Drywall Layouts', 
    scope: 'Acoustic Commercial Fit-Outs',
    description: 'Erection of premium interior acoustic drywall partition configurations. Incorporates internal mineral-wool acoustic batting, multi-layered tapered-edge fire-rated plasterboards, and professional taping services to deliver perfectly seamless smooth walls.' 
  },
  { 
    id: 19, 
    src: '/image21.jpeg', 
    alt: 'Bespoke Joinery Details custom carpentry timber fitment', 
    title: 'Custom Architectural Joinery Integration', 
    scope: 'Premium Millwork & Fit-Outs',
    description: 'On-site installation and precision micro-shimming of bespoke heavy cabinetry layouts. All anchoring channels are structurally fastened directly behind drywall frameworks using heavy-duty hidden steel brackets to support significant vertical weight stresses.' 
  },
  { 
    id: 20, 
    src: '/image22.jpeg', 
    alt: 'Driveway Paving Project interlocking paving blocks ground civil', 
    title: 'Heavy Duty Interlocking Pavements', 
    scope: 'External Civil Groundwork',
    description: 'Execution of a multi-vehicle driveway profile utilizing heavy-duty 80mm interlocking concrete paving blocks. Laid above a thoroughly rolled sub-grade base, a crusher-run layer, and a laser-screened quarry sand bed layer to completely eliminate tracking risks.' 
  },
  { 
    id: 21, 
    src: '/image23.jpeg', 
    alt: 'Balcony Guardrail Assembly stainless steel core drilled safety glass', 
    title: 'Stainless-Steel Structural Balustrades', 
    scope: 'Architectural Metalwork & Safety',
    description: 'Fabrication and core-drilling of grade-316 stainless steel handrail structures along structural balconies. Designed with rigid baseplates chemical-anchored directly into the concrete floor deck to easily exceed standard building code edge-impact testing.' 
  },
  { 
    id: 22, 
    src: '/image24.jpeg', 
    alt: 'Main Gate Framework Design rolling track automated perimeter', 
    title: 'Heavy Duty Perimeter Gate Engineering', 
    scope: 'Structural Metal Structures',
    description: 'Structural design and installation of a heavy vehicular access sliding gate. The main structural columns are cast deeply inside subterranean concrete footings and outfitted with precision-machined heavy-duty internal steel guide wheels on a track system.' 
  },
  { 
    id: 23, 
    src: '/image25.jpeg', 
    alt: 'Indoor Kitchen Countertop Tiling marble edge alignment mitre', 
    title: 'Premium Solid Surface Worktops', 
    scope: 'High-End Kitchen Masonry',
    description: 'Bespoke mitred edging installation of premium quartz slab surfaces across solid brick under-structures. Features reinforced structural support profiles beneath sink cut-outs to protect the natural stone format from localized pressure fracturing.' 
  },
  { 
    id: 24, 
    src: '/image26.jpeg', 
    alt: 'Structural Floor Deck Slab rib block floor deck system layout', 
    title: 'Rib-and-Block Structural Floor Decking', 
    scope: 'Suspended Slab Structural Framing',
    description: 'Assembly of a composite rib-and-block intermediate flooring deck system. Features pre-stressed structural concrete lintels interspersed with hollow core filler blocks, completely overlaid with high-tensile mesh fabric in preparation for the finishing concrete casting.' 
  },
  { 
    id: 25, 
    src: '/image27.jpeg', 
    alt: 'Gypsum Board Wall Finishes seamless joint texturing skimming', 
    title: 'Level 5 Interior Wall Skimming', 
    scope: 'High-End Interior Wall Finishes',
    description: 'Multi-stage application of specialized interior skimming joint compounds over raw gypsum boards. Every phase undergoes intense directional light inspections and hand sanding routines to create a smooth surface ready for deep high-gloss paints.' 
  },
  { 
    id: 26, 
    src: '/image28.jpeg', 
    alt: 'Electrical Conduit Routing flame retardant pvc pipes masonry', 
    title: 'Sub-Surface Electrical Conduit Layouts', 
    scope: 'First-Fix Mechanical & Electrical Services',
    description: 'Strategic chasing and tracking of heavy-duty flame-retardant PVC electrical conduit pipelines inside structural masonry layouts. All junction and switch box containers are laser-leveled and deep flush-mounted before final plastering work.' 
  },
  { 
    id: 27, 
    src: '/image29.jpeg', 
    alt: 'Plumbing Supply Network ppr piping thermal fusion welding', 
    title: 'High-Pressure PPR Plumbing Networks', 
    scope: 'First-Fix Hydraulic Installations',
    description: 'Installation of a residential hydraulic distribution grid using premium random copolymer polypropylene (PPR) pipelines joined via thermal fusion welding techniques. System underwent rigorous hydrostatic pressure testing for 24 hours to verify complete joint integrity.' 
  },
  { 
    id: 28, 
    src: '/image30.jpeg', 
    alt: 'Roof Facia Trim Install weather tight fascia capping', 
    title: 'Architectural Fascia & Eaves Finishing', 
    scope: 'Exterior Structural Roofing Detail',
    description: 'Alignment and installation of architectural heavy-gauge pre-painted aluminum fascia trim cap structures along timber rafter endings. Designed to offer structural weather-tight shielding against water penetration into the internal attic roof framework.' 
  },
  { 
    id: 29, 
    src: '/image31.jpeg', 
    alt: 'Final Site Delivery Handover architectural cleaning inspections', 
    title: 'Comprehensive Project Handover Stage', 
    scope: 'Quality Control & Project Closeout',
    description: 'Executing final deep programmatic post-construction cleanup workflows, thorough structural stress testing check-out rounds, full services validation auditing, and the collection of comprehensive building documentation logs for final client delivery.' 
  }
];

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  const handleNext = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = projectImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % projectImages.length;
    setSelectedImage(projectImages[nextIndex]);
  }, [selectedImage]);

  const handlePrev = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = projectImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
    setSelectedImage(projectImages[prevIndex]);
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handleNext, handlePrev]);

  return (
    <main className="min-h-screen bg-[#121214] py-16 px-4 sm:px-6 lg:px-8">
      {/* Portfolio Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="text-xs font-black tracking-[0.4em] text-amber-500 uppercase block mb-3">CONSTRUCTION EXCELLENCE</span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          OUR PROJECT <span className="text-amber-500">PORTFOLIO</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          Review our granular, verified build phases detailing premium structural engineering, heavy civil masonry setups, and high-end interior final transformations.
        </p>
      </div>

      {/* Visual Portfolio Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectImages.map((image) => (
            <div 
              key={image.id} 
              onClick={() => setSelectedImage(image)}
              className="flex flex-col bg-[#1a1a1e] rounded-xl overflow-hidden shadow-md border border-slate-800/80 group cursor-pointer hover:border-amber-500/30 transition-all duration-300"
            >
              {/* Image Frame Section */}
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden border-b border-slate-800/60">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Clean Hover Hint Layer */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end p-4">
                  <div className="p-2.5 bg-amber-500 text-slate-950 rounded-lg shadow-lg">
                    <Maximize2 size={14} strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* Explicitly Visible Text Content (No longer hidden behind hover layouts) */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-black tracking-widest text-amber-500 uppercase block">
                    {image.scope}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wide group-hover:text-amber-400 transition-colors flex items-center justify-between gap-2">
                    <span>{image.title}</span>
                    <ArrowUpRight size={16} className="text-slate-600 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-normal leading-relaxed pt-1 line-clamp-4 group-hover:text-gray-200 transition-colors">
                    {image.description}
                  </p>
                </div>
                
                <div className="pt-2 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                  <span>ID: 0{image.id}</span>
                  <span className="text-amber-500/80 group-hover:underline">View Blueprint Specs</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TWO-COLUMN LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/98 z-50 flex flex-col justify-between p-4 md:p-6"
          onClick={() => setSelectedImage(null)}
        >
          {/* Top Control Header */}
          <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-12 z-50">
            <div className="flex items-center gap-2 text-left">
              <HardHat size={16} className="text-amber-500" />
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                KEGO Builders Project Registry / ID-{selectedImage.id}
              </span>
            </div>
            <button 
              className="text-white hover:text-amber-400 flex items-center gap-2 text-xs font-black tracking-widest bg-slate-900 px-4 py-2.5 rounded-lg border border-slate-800 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={14} strokeWidth={3} /> CLOSE
            </button>
          </div>

          {/* Master Two-Column Interactive Canvas */}
          <div 
            className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-center flex-1 my-4 gap-6 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* COLUMN 1: Image Frame Container */}
            <div className="flex-1 relative flex items-center justify-center bg-slate-950 rounded-2xl border border-slate-900/60 p-4 min-h-0 group">
              {/* Left Navigation Hotkey button */}
              <button
                className="absolute left-4 z-50 p-3 text-gray-400 hover:text-amber-400 bg-slate-900/90 hover:bg-slate-800 rounded-xl border border-slate-800 transition-all hidden md:block opacity-0 group-hover:opacity-100"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} strokeWidth={3} />
              </button>

              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="object-contain max-w-full max-h-[40vh] lg:max-h-[70vh] rounded-lg select-none animate-in fade-in zoom-in-95 duration-200"
              />

              {/* Right Navigation Hotkey button */}
              <button
                className="absolute right-4 z-50 p-3 text-gray-400 hover:text-amber-400 bg-slate-900/90 hover:bg-slate-800 rounded-xl border border-slate-800 transition-all hidden md:block opacity-0 group-hover:opacity-100"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                aria-label="Next image"
              >
                <ChevronRight size={24} strokeWidth={3} />
              </button>
            </div>

            {/* COLUMN 2: High-Legibility Technical Info Sidebar Panel */}
            <div className="w-full lg:w-[420px] bg-slate-900 rounded-2xl border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-2.5 py-1 text-[10px] font-black tracking-widest text-slate-950 bg-amber-400 rounded uppercase mb-3">
                    {selectedImage.scope}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide leading-tight">
                    {selectedImage.title}
                  </h2>
                </div>

                <div className="w-12 h-1 bg-amber-500 rounded-full" />

                {/* Extremely clear, deep text layout */}
                <div className="space-y-4">
                  <span className="text-xs font-black tracking-widest text-gray-400 uppercase block">
                    Technical Specifications
                  </span>
                  <p className="text-gray-200 text-sm sm:text-base font-normal leading-relaxed tracking-normal">
                    {selectedImage.description}
                  </p>
                </div>
              </div>

              {/* Footer Trust badge inside info panel */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-3 text-xs text-amber-500/90 font-bold">
                <ShieldCheck size={18} className="text-amber-500 flex-shrink-0" />
                <span>Structural Works Verified Under KEGO Quality Framework</span>
              </div>
            </div>
          </div>

          {/* Simple Mobile Control Strip */}
          <div className="w-full flex md:hidden justify-between items-center gap-4 py-2 z-50">
            <button
              className="flex-1 py-3 text-center text-sm font-bold text-white bg-slate-900 border border-slate-800 rounded-xl active:bg-slate-800"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              Previous
            </button>
            <button
              className="flex-1 py-3 text-center text-sm font-bold text-white bg-slate-900 border border-slate-800 rounded-xl active:bg-slate-800"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </main>
  );
}