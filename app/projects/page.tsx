"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImage {
  id: number;
  src: string;
  alt: string;
}

const projectImages: ProjectImage[] = [
  { id: 1, src: '/image4.jpeg', alt: 'Construction project image 1' },
  { id: 2, src: '/image5.jpeg', alt: 'Construction project image 2' },
  { id: 3, src: '/image6.jpeg', alt: 'Construction project image 3' },
  { id: 4, src: '/image7.jpeg', alt: 'Construction project image 4' },
  { id: 5, src: '/image1.jpeg', alt: 'Construction project image 5' },
  { id: 6, src: '/image8.jpeg', alt: 'Construction project image 6' },
  { id: 7, src: '/image9.jpeg', alt: 'Construction project image 7' },
  { id: 8, src: '/image10.jpeg', alt: 'Construction project image 8' },
  { id: 9, src: '/image11.jpeg', alt: 'Construction project image 9' },
  { id: 10, src: '/image12.jpeg', alt: 'Construction project image 10' },
  { id: 11, src: '/image13.jpeg', alt: 'Construction project image 11' },
  { id: 12, src: '/image14.jpeg', alt: 'Construction project image 12' },
  { id: 13, src: '/image15.jpeg', alt: 'Construction project image 13' },
  { id: 14, src: '/image16.jpeg', alt: 'Construction project image 14' },
  { id: 15, src: '/image17.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image18.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image19.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image20.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image21.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image22.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image23.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image24.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image25.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image26.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image27.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image28.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image29.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image30.jpeg', alt: 'Construction project image 15' },
  { id: 15, src: '/image31.jpeg', alt: 'Construction project image 15' },

];

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  // Navigate to the next image (loops back to start)
  const handleNext = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = projectImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % projectImages.length;
    setSelectedImage(projectImages[nextIndex]);
  }, [selectedImage]);

  // Navigate to the previous image (loops to the end)
  const handlePrev = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = projectImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
    setSelectedImage(projectImages[prevIndex]);
  }, [selectedImage]);

  // Handle global keyboard inputs
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
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Visual Portfolio Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectImages.map((image) => (
            <div 
              key={image.id} 
              onClick={() => setSelectedImage(image)}
              className="relative aspect-[4/3] w-full bg-slate-100 rounded-xl overflow-hidden shadow-sm border border-slate-200 group cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              {/* Interactive Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 bg-white/95 rounded-full text-slate-800 transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
                  <Maximize2 size={22} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for Fullscale View */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Left Arrow Button */}
          <button
            className="absolute left-4 lg:left-8 z-50 p-2.5 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 rounded-full border border-slate-700/50 backdrop-blur transition-all hidden md:block"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <button 
              className="absolute -top-12 right-0 sm:right-4 text-white hover:text-slate-300 flex items-center gap-1 text-sm font-semibold tracking-wide bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-700/50 backdrop-blur"
              onClick={() => setSelectedImage(null)}
            >
              <X size={16} /> CLOSE
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="object-contain max-w-full max-h-[80vh] rounded-lg shadow-2xl select-none animate-fade-in"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>

          {/* Right Arrow Button */}
          <button
            className="absolute right-4 lg:right-8 z-50 p-2.5 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 rounded-full border border-slate-700/50 backdrop-blur transition-all hidden md:block"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </main>
  );
}