"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, HardHat, ShieldCheck, ArrowUpRight, Layers } from 'lucide-react';

interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  scope: string;
  description: string;
}

const projectImages: ProjectImage[] = [
  { 
    id: 1, 
    src: '/image4.jpeg', 
    alt: 'Premium Residential Villa structural project', 
    title: 'Premium Residential Villa', 
    scope: 'Structural Engineering & Masonry',
    description: 'Main Residence: A large, modern multi-story luxury home featuring a multilayered hipped roof, neutral-toned stucco exterior finishes, expansive glass windows, and strong ground-level pillar support. Outdoor Pavilion: A matching detached gazebo lounge in the foreground with an open-sided structural design, matching roof shingles, and solid pillars, ideal for outdoor entertainment.' 
  },
  { 
    id: 2, 
    src: '/image5.jpeg', 
    alt: 'Commercial Office Space structural fit out', 
    title: 'Commercial Corporate Complex', 
    scope: 'Commercial Interior Framing',
    description: 'Roofing Material: Dark composite or asphalt shingles installed in a clean, uniform finish. Design Style: Multi-pitched hipped roof configuration with multiple intersecting planes, providing strong architectural depth and watershed efficiency.Details: Features a prominent central chimney stack and wide overhangs with continuous fascia trim lining the roof perimeter.' 
  },
  { 
    id: 3, 
    src: '/image6.jpeg', 
    alt: 'Luxury Living Space Finishes tiling ceiling design', 
    title: 'Luxury Residential Interior Finishes', 
    scope: 'Premium Interior Finishing',
    description: 'Structure Type: A luxury framed luxury tent camp or glamping eco-lodge unit built on an elevated timber platform deck. Roofing & Framework: Features a tensioned green canvas stretch roof with dual high peaks and deep overhangs supported by sturdy wooden poles. Framing & Openings: Accented with warm timber frames, large glass-paneled sliding doors, and mesh screen windows, complete with an external wooden access ramp and entry steps.' 
  },
  { 
    id: 4, 
    src: '/image7.jpeg', 
    alt: 'Architectural Roofing Truss Layout structural system', 
    title: 'Architectural Structural Roofing', 
    scope: 'Roofing Systems & Steel Fabrication',
    description: 'This striking residential project features a bold, high-pitched hip roof finished with rich red shingle tiles that instantly elevate the homes architectural profile. The deep, warm red hue creates a striking contrast against the raw stone and concrete framework, bringing a sense of timeless elegance and warmth to the structure. Engineered with precision, the expansive roof planes feature clean lines and steep slopes designed for superior weather resistance and optimal drainage.' 
  },
  { 
    id: 5, 
    src: '/image1.jpeg', 
    alt: 'Structural Concrete Pouring Slab Foundation works', 
    title: 'Heavy Structural Concrete Pouring', 
    scope: 'Substructure & Civil Foundations',
    description: 'This luxury multi-story residence features a sophisticated dark brown or charcoal shingle roof that adds a sharp, modern contrast to the crisp white trim and light grey exterior walls. Designed with a clean multi-hipped configuration, the roof lines intersect smoothly to create a balanced, expansive profile across the varying wings of the home.' 
  },
  { 
    id: 6, 
    src: '/image8.jpeg', 
    alt: 'Modern Canopy Framework structural steel portal', 
    title: 'Modern Roofing', 
    scope: 'Exterior Structural Additions',
    description: 'Design and construction of an architectural exterior portal canopy framework. Built utilizing structural hollow steel sections combined with specialized masonry anchor connections, engineered to safely counter strong localized wind load forces and dead load stresses.' 
  },
  { 
    id: 7, 
    src: '/image9.jpeg', 
    alt: 'Bespoke Window Layout lintel reinforce panel', 
    title: 'Contemporary Gable-Roof Villa Construction', 
    scope: 'Structural Alterations & Masonry',
    description: 'This architectural showcase highlights a striking residential build featuring a dramatic, high-pitched multi-gable roof finished in dark slate tiles with crisp white fascia lining. The upper structural framing presents an open-gable design, while the lower level incorporates robust stone masonry walls, elegant front pillars, and detailed entry framing.' 
  },
  { 
    id: 8, 
    src: '/image10.jpeg', 
    alt: 'Perimeter Wall Masonry stone finish security wall', 
    title: 'Contemporary Multi-Level Residential Framing & Roofing', 
    scope: 'Civil Works & Security Masonry',
    description: 'This expansive double-story construction showcases a sophisticated multi-pitched dark shingle roof featuring prominent triangular dormer gables with crisp white framing and detailed window openings. Currently in the structural phase, the robust masonry walls are coated in a smooth grey render.' 
  },
  { 
    id: 9, 
    src: '/image11.jpeg', 
    alt: 'Custom Plastering Detail smooth wall screed finishing', 
    title: 'Luxury Multi-Gable Red Shingle Roof Installation', 
    scope: 'Interior & Exterior Plastering',
    description: 'This large double-story residential project features an elaborate, high-pitched multi-hipped and gabled roof finished in rich red composite shingle tiles that create a striking visual centerpiece. The roof design incorporates multiple intersecting planes, clean valley lines, and several prominent dormer gables trimmed with crisp white fascia boards.' 
  },
  { 
    id: 10, 
    src: '/image12.jpeg', 
    alt: 'Multi Vehicle Carport shade cantilever posts structural steel', 
    title: 'Castlesque Multi-Cone Red Shingle Roof Construction', 
    scope: 'Structural Steel Components',
    description: 'This striking architectural build features a magnificent arrangement of steep, cone-shaped turret roofs finished in premium red asphalt shingles. The vibrant red shingle textures crown the circular masonry towers, lending a grand, castle-like silhouette to the expansive multi-story estate.' 
  },
  { 
    id: 11, 
    src: '/image13.jpeg', 
    alt: 'Foundation Footing Stage steel tie mesh excavation ground', 
    title: 'Steel Truss Framing and Roof Decking Installation', 
    scope: 'Substructure Civil Engineering',
    description: 'This in-progress shot captures the heavy-duty structural phase of a complex roofing system, featuring an intricate network of lightweight galvanized steel trusses and purlins. Workers on site are actively handling plywood or OSB roof decking boards over the structural frame.' 
  },
  { 
    id: 12, 
    src: '/image14.jpeg', 
    alt: 'Staircase Structural Framing cast in place concrete forms', 
    title: 'Contemporary Double-Story Concrete Build', 
    scope: 'Bespoke Concrete Engineering',
    description: 'This large double-story residential construction showcases a clean, modern architectural design featuring a dark hipped shingle roof with crisp, layered concrete fascia bands and cornices. The structure is currently in the plastering and exterior finishing stage.' 
  },
  { 
    id: 13, 
    src: '/image15.jpeg', 
    alt: 'External Paint Coatings texturized protective layer wall', 
    title: 'Classic Stone Villa with Brown Shingle Dormer Roof', 
    scope: 'Exterior Specialty Finishing',
    description: 'This charming residential construction showcases a sturdy natural stone masonry body crowned by an expansive, steep hip roof finished in textured brown architectural shingles. The design features multiple triangular dormer gables trimmed in crisp white framing with ventilation windows.' 
  },
  { 
    id: 14, 
    src: '/image16.jpeg', 
    alt: 'Guttering Drainage Systems roof water pipes downspouts', 
    title: 'Custom Hexagonal Gazebo with Tiered Shingle Roof', 
    scope: 'Roofing Plumbing & Drainage',
    description: 'This distinct circular masonry gazebo and garden pavilion features a unique multi-tiered, pagoda-style conical roof finished in textured brown architectural shingles with clean white fascia board separation lines. The structure is built with robust stone masonry walls.' 
  },
  { 
    id: 15, 
    src: '/image17.jpeg', 
    alt: 'Site Preparation Works site clearing datum alignment survey', 
    title: 'Timber Roof Framing and Gazebo Construction', 
    scope: 'Civil Earthworks & Surveys',
    description: 'This construction-stage image highlights the intricate timber roof framing of a circular stone gazebo or garden pavilion. The structure features a conical network of radial wooden rafters and purlins anchored to a reinforced concrete ring beam.' 
  },
  { 
    id: 16, 
    src: '/image18.jpeg', 
    alt: 'Bathroom Floor Tiling wet area liquid waterproofing porcelain', 
    title: 'Dark Shingle Roof Installation', 
    scope: 'Specialized Waterproofing & Tiling',
    description: 'This detailed overhead view highlights a complex multi-hipped architectural roof system finished with neat, dark grey asphalt shingles. The layout features precise intersecting roof planes, clean ridge caps, and a deeply recessed valley designed for optimal water drainage.' 
  },
  { 
    id: 17, 
    src: '/image19.jpeg', 
    alt: 'Main Retaining Wall Layout reinforced blocks civil earth retention', 
    title: 'Modern Multi-Story Shingle Roof Villa', 
    scope: 'Civil Engineering & Structural Control',
    description: 'This large double-story residential construction features an extensive, low-pitch hipped roof finished in uniform dark architectural shingles. The exterior is styled with crisp concrete cornices, detailed fascia bands, and raw masonry walls awaiting final finishes.' 
  },
  { 
    id: 18, 
    src: '/image20.jpeg', 
    alt: 'Modern Living Area Fit Out drywall acoustics framing', 
    title: 'Steel Truss Framing and Roof Decking Installation', 
    scope: 'Acoustic Commercial Fit-Outs',
    description: 'This in-progress shot captures the heavy-duty structural phase of a complex roofing system, featuring an intricate network of lightweight galvanized steel trusses and purlins. Workers on site are actively handling plywood or OSB roof decking boards.' 
  },
  { 
    id: 19, 
    src: '/image21.jpeg', 
    alt: 'Bespoke Joinery Details custom carpentry timber fitment', 
    title: 'Structural Steel Truss Framing Phase', 
    scope: 'Premium Millwork & Fit-Outs',
    description: 'This active construction stage captures the framing of a large residential property, featuring an intricate overhead network of lightweight galvanized steel trusses and structural beams. Set atop a multi-tiered concrete lintel and pillar framework with scaffolding in place.' 
  },
  { 
    id: 20, 
    src: '/image22.jpeg', 
    alt: 'Driveway Paving Project interlocking paving blocks ground civil', 
    title: 'Steel Roof Truss Framing', 
    scope: 'External Civil Groundwork',
    description: 'This construction-stage image showcases the professional installation of a lightweight galvanized steel roof truss and purlin framework atop a solid stone masonry structure. The precision-engineered metal skeleton forms a clean, hip-roof profile.' 
  },
  { 
    id: 21, 
    src: '/image23.jpeg', 
    alt: 'Balcony Guardrail Assembly stainless steel core drilled safety glass', 
    title: 'Shingle Roofing Installation on Steel Framing', 
    scope: 'Architectural Metalwork & Safety',
    description: 'This active construction phase captures workers laying dark architectural shingles directly over a precision-engineered galvanized steel truss roof framework. Set atop a solid stone masonry structure with a clean white fascia trim.' 
  },
  { 
    id: 22, 
    src: '/image24.jpeg', 
    alt: 'Main Gate Framework Design rolling track automated perimeter', 
    title: 'Shingle Roofing Installation on Steel Framing', 
    scope: 'Structural Metal Structures',
    description: 'This active construction phase captures workers laying dark architectural shingles directly over a precision-engineered galvanized steel truss roof framework. Set atop a solid stone masonry structure with a clean white fascia trim.' 
  },
  { 
    id: 23, 
    src: '/image25.jpeg', 
    alt: 'Indoor Kitchen Countertop Tiling marble edge alignment mitre', 
    title: 'Modern Two-Story Residential Build with Dark Shingle Roof', 
    scope: 'High-End Kitchen Masonry',
    description: 'This in-progress double-story residential construction showcases a sophisticated, low-pitch hipped roof entirely finished in dark architectural shingles. The sleek roofline features a clean white fascia board trim and a centralized triangular dormer gable.' 
  },
  { 
    id: 24, 
    src: '/image26.jpeg', 
    alt: 'Structural Floor Deck Slab rib block floor deck system layout', 
    title: 'Precision Steel Roof Truss Framework', 
    scope: 'Suspended Slab Structural Framing',
    description: 'This construction-phase capture highlights the robust, precision-engineered framework of lightweight galvanized steel trusses erected atop solid masonry walls. The intricate web of metal rafters, web members, and purlins creates a sturdy, high-pitched gable.' 
  },
  { 
    id: 25, 
    src: '/image27.jpeg', 
    alt: 'Gypsum Board Wall Finishes seamless joint texturing skimming', 
    title: 'Precision Steel Roof Truss Framework', 
    scope: 'High-End Interior Wall Finishes',
    description: 'This construction-phase capture highlights the robust, precision-engineered framework of lightweight galvanized steel trusses erected atop solid masonry walls. The intricate web of metal rafters, web members, and purlins creates a sturdy, high-pitched gable.' 
  },
  { 
    id: 26, 
    src: '/image28.jpeg', 
    alt: 'Electrical Conduit Routing flame retardant pvc pipes masonry', 
    title: 'Galvanized Steel Truss Frame with In-Progress Shingle Roofing', 
    scope: 'First-Fix Mechanical & Electrical Services',
    description: 'This construction site capture shows an expansive, single-story masonry structure featuring a robust framework of lightweight galvanized steel trusses topped with partially installed dark asphalt shingles.' 
  },
  { 
    id: 27, 
    src: '/image29.jpeg', 
    alt: 'Plumbing Supply Network ppr piping thermal fusion welding', 
    title: 'Galvanized Steel Truss Frame with In-Progress Shingle Roofing', 
    scope: 'First-Fix Hydraulic Installations',
    description: 'This wide construction site capture reveals an expansive single-story structure supported by an open concrete pillar framework, topped with a robust lightweight galvanized steel truss system.' 
  },
  { 
    id: 28, 
    src: '/image30.jpeg', 
    alt: 'Roof Facia Trim Install weather tight fascia capping', 
    title: 'Completed Dark Shingle Roof with Integrated Dormers', 
    scope: 'Exterior Structural Roofing Detail',
    description: 'This front elevation view highlights a sprawling single-story structure crowned by a massive, fully shingled dark roof. The expansive roof slope is punctuated by dual triangular gable dormers with clean white trim.' 
  },
  { 
    id: 29, 
    src: '/image31.jpeg', 
    alt: 'Final Site Delivery Handover architectural cleaning inspections', 
    title: 'Precision Engineered Steel Truss Roof Skeleton', 
    scope: 'Quality Control & Project Closeout',
    description: 'This elevated construction site capture showcases the intricate structural framework of lightweight galvanized steel trusses and purlins erected over a reinforced concrete ring beam and masonry wall system.' 
  }
];

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (image: ProjectImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedImage(null), 300);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, handleNext, handlePrev]);

  return (
    <main className="min-h-screen bg-[#121214] py-12 px-4 sm:py-16 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Animated Portfolio Header */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 text-center animate-header">
        <span className="text-xs font-black tracking-[0.4em] text-amber-500 uppercase block mb-3 animate-pulse-subtle">
          CONSTRUCTION EXCELLENCE
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase animate-title">
          OUR PROJECT <span className="text-amber-500">PORTFOLIO</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed animate-subtitle">
          Review our granular, verified build phases detailing premium structural engineering,
          heavy civil masonry setups, and high-end interior final transformations.
        </p>
      </div>

      {/* Animated Portfolio Grid - Cards falling into place */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 perspective-container">
          {projectImages.map((image, index) => {
            // Calculate staggered delays for waterfall effect
            const row = Math.floor(index / 3);
            const col = index % 3;
            const delay = (row * 0.15) + (col * 0.08);
            
            return (
              <div
                key={image.id}
                onClick={() => openModal(image)}
                className="group card-falling"
                style={{
                  animationDelay: `${delay}s`,
                }}
              >
                <div className="flex flex-col bg-[#1a1a1e] rounded-xl overflow-hidden shadow-md border border-slate-800/80 cursor-pointer hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/5 h-full">
                  {/* Image Frame Section */}
                  <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden border-b border-slate-800/60">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end p-4">
                      <div className="p-2.5 bg-amber-500 text-slate-950 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                        <Maximize2 size={14} strokeWidth={3} />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-black tracking-widest text-amber-500 uppercase block transition-all group-hover:translate-x-1">
                        {image.scope}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wide group-hover:text-amber-400 transition-colors flex items-center justify-between gap-2">
                        <span className="line-clamp-1">{image.title}</span>
                        <ArrowUpRight size={16} className="text-slate-600 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm font-normal leading-relaxed pt-1 line-clamp-3 group-hover:text-gray-200 transition-colors">
                        {image.description}
                      </p>
                    </div>
                    
                    <div className="pt-2 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-gray-500 font-bold uppercase tracking-wider transition-colors group-hover:bg-white/5 rounded px-2 py-1 -mx-2">
                      <span>ID: 0{image.id}</span>
                      <span className="text-amber-500/80 group-hover:underline">View Specs</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Animated Lightbox Modal */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black/98 z-50 flex flex-col justify-between p-3 sm:p-4 md:p-6 animate-modal-in"
          onClick={closeModal}
        >
          {/* Top Control Header */}
          <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-12 z-50 animate-slide-down">
            <div className="flex items-center gap-2 text-left">
              <HardHat size={16} className="text-amber-500" />
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider hidden sm:inline">
                KEGO Builders Project Registry / ID-{selectedImage.id}
              </span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider sm:hidden">
                ID-{selectedImage.id}
              </span>
            </div>
            <button
              className="text-white hover:text-amber-400 flex items-center gap-2 text-xs font-black tracking-widest bg-slate-900 px-3 sm:px-4 py-2.5 rounded-lg border border-slate-800 transition-all hover:border-amber-500/50 hover:bg-slate-800 active:scale-95"
              onClick={closeModal}
            >
              <X size={14} strokeWidth={3} /> <span className="hidden sm:inline">CLOSE</span>
            </button>
          </div>

          {/* Master Two-Column Interactive Canvas */}
          <div
            className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-center flex-1 my-3 sm:my-4 gap-4 sm:gap-6 min-h-0 animate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* COLUMN 1: Image Frame Container */}
            <div className="flex-1 relative flex items-center justify-center bg-slate-950 rounded-2xl border border-slate-900/60 p-2 sm:p-4 min-h-0 group transition-colors hover:border-amber-500/30">
              {/* Navigation Buttons */}
              <button
                className="absolute left-2 sm:left-4 z-50 p-2 sm:p-3 text-gray-400 hover:text-amber-400 bg-slate-900/90 hover:bg-slate-800/90 rounded-xl border border-slate-800 transition-all hover:scale-110 active:scale-90 hidden md:block"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                aria-label="Previous image"
              >
                <ChevronLeft size={20} strokeWidth={3} />
              </button>

              <img
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="object-contain max-w-full max-h-[40vh] lg:max-h-[70vh] rounded-lg select-none animate-image-switch"
              />

              <button
                className="absolute right-2 sm:right-4 z-50 p-2 sm:p-3 text-gray-400 hover:text-amber-400 bg-slate-900/90 hover:bg-slate-800/90 rounded-xl border border-slate-800 transition-all hover:scale-110 active:scale-90 hidden md:block"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                aria-label="Next image"
              >
                <ChevronRight size={20} strokeWidth={3} />
              </button>
            </div>

            {/* COLUMN 2: High-Legibility Technical Info Sidebar */}
            <div className="w-full lg:w-[420px] bg-slate-900 rounded-2xl border border-slate-800/80 p-5 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-none animate-info-panel">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <span className="inline-block px-2.5 py-1 text-[10px] font-black tracking-widest text-slate-950 bg-amber-400 rounded uppercase mb-3 hover:scale-105 transition-transform">
                    {selectedImage.scope}
                  </span>
                  <h2 className="text-lg sm:text-2xl font-black text-white uppercase tracking-wide leading-tight">
                    {selectedImage.title}
                  </h2>
                </div>

                <div className="w-12 h-1 bg-amber-500 rounded-full animate-width-grow" />

                <div className="space-y-3 sm:space-y-4">
                  <span className="text-xs font-black tracking-widest text-gray-400 uppercase block flex items-center gap-2">
                    <Layers size={14} /> Technical Specifications
                  </span>
                  <p className="text-gray-200 text-sm sm:text-base font-normal leading-relaxed tracking-normal animate-fade-in">
                    {selectedImage.description}
                  </p>
                </div>
              </div>

              {/* Footer Trust Badge */}
              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-800 flex items-center gap-3 text-xs text-amber-500/90 font-bold animate-fade-in">
                <ShieldCheck size={18} className="text-amber-500 flex-shrink-0" />
                <span>Structural Works Verified Under KEGO Quality Framework</span>
              </div>
            </div>
          </div>

          {/* Mobile Control Strip */}
          <div className="w-full flex md:hidden justify-between items-center gap-4 py-2 z-50 animate-slide-up">
            <button
              className="flex-1 py-3 text-center text-sm font-bold text-white bg-slate-900 border border-slate-800 rounded-xl active:scale-95 transition-transform"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              Previous
            </button>
            <button
              className="flex-1 py-3 text-center text-sm font-bold text-white bg-slate-900 border border-slate-800 rounded-xl active:scale-95 transition-transform"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Custom CSS Animations */}
      <style jsx>{`
        /* Perspective container for 3D falling effect */
        .perspective-container {
          perspective: 1200px;
        }

        /* Falling card animation - rotates and drops into place */
        .card-falling {
          opacity: 0;
          transform: translateY(-100px) rotateX(-15deg) rotateY(5deg) scale(0.9);
          animation: cardFall 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          transform-style: preserve-3d;
        }

        @keyframes cardFall {
          0% {
            opacity: 0;
            transform: translateY(-120px) rotateX(-20deg) rotateY(10deg) scale(0.85);
          }
          60% {
            opacity: 0.9;
            transform: translateY(10px) rotateX(2deg) rotateY(-2deg) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) rotateY(0deg) scale(1);
          }
        }

        /* Header animations */
        @keyframes headerFade {
          from {
            opacity: 0;
            transform: translateY(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-header {
          animation: headerFade 0.8s ease-out both;
        }

        @keyframes titlePop {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          60% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-title {
          animation: titlePop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
        }

        @keyframes subtitleFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-subtitle {
          animation: subtitleFade 0.6s ease-out 0.4s both;
        }

        /* Modal animations */
        @keyframes modalIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(0px);
          }
        }

        .animate-modal-in {
          animation: modalIn 0.4s ease-out both;
        }

        @keyframes modalContent {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-modal-content {
          animation: modalContent 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
        }

        @keyframes imageSwitch {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-image-switch {
          animation: imageSwitch 0.3s ease-out both;
        }

        @keyframes infoPanel {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-info-panel {
          animation: infoPanel 0.5s ease-out 0.15s both;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slideDown 0.4s ease-out both;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.4s ease-out both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out 0.2s both;
        }

        @keyframes widthGrow {
          from {
            width: 0;
          }
          to {
            width: 48px;
          }
        }

        .animate-width-grow {
          animation: widthGrow 0.5s ease-out 0.2s both;
        }

        @keyframes pulseSubtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse-subtle {
          animation: pulseSubtle 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}