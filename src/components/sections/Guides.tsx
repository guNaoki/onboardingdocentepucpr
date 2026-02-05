'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa6';
import GuideCard from '@/components/ui/GuideCard';
import { guidesData } from '@/lib/data';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';

export default function Guides() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-5 py-10" id="guias">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <ScaleIn direction="left" className="flex-1">
          <Link href="/guias">
            <h2 className="text-3xl font-bold mb-2 inline-block relative group cursor-pointer hover:text-puc-red dark:hover:text-rose-400 text-text-dark dark:text-white transition-colors duration-300">
              Guias Rápidos
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-puc-red transition-all duration-300 group-hover:w-full"></span>
            </h2>
          </Link>
          <p className="text-text-gray dark:text-gray-400">Tutoriais essenciais para iniciar suas atividades</p>
        </ScaleIn>
        
        <FadeIn delay={0.2} direction="right">
          <Link href="/guias" className="text-sm font-bold text-puc-red dark:text-rose-400 hover:underline flex items-center gap-2">
            Ver todos <FaArrowRight />
          </Link>
        </FadeIn>
      </div>

      {/* Mobile View: Vertical Stack (List) */}
      <div className="flex flex-col gap-3 md:hidden">
        <StaggerContainer>
          {guidesData.slice(0, 4).map((guide, index) => (
            <StaggerItem key={index}>
              <Link 
                href={`/guias/${guide.id}`}
                className="flex items-center p-4 bg-white dark:bg-gray-900 border border-border-color dark:border-gray-800 rounded-xl active:bg-rose-50 dark:active:bg-gray-800 transition-colors shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-gray-800 flex items-center justify-center text-puc-red dark:text-rose-400 mr-4 flex-shrink-0">
                  <guide.icon />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-text-dark dark:text-gray-100 text-sm">{guide.title}</h3>
                  <p className="text-xs text-text-gray dark:text-gray-400 line-clamp-1">{guide.description}</p>
                </div>
                <FaArrowRight className="text-gray-300 dark:text-gray-600 text-sm" />
              </Link>
            </StaggerItem>
          ))}
          <FadeIn delay={0.4} className="text-center mt-2">
            <Link href="/guias" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Ver lista completa
            </Link>
          </FadeIn>
        </StaggerContainer>
      </div>

      {/* Desktop View: Horizontal Carousel */}
      <div className="relative hidden md:flex items-center gap-4">
        <button 
          onClick={() => scroll('left')}
          className="w-12 h-12 flex-shrink-0 bg-white dark:bg-gray-900 border border-border-color dark:border-gray-800 rounded-full flex items-center justify-center shadow-card hover:bg-puc-red hover:text-white dark:hover:bg-rose-600 dark:text-white hover:scale-110 transition-all duration-200 z-10 cursor-pointer"
        >
          <FaChevronLeft />
        </button>
        
        <StaggerContainer 
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2 scroll-smooth w-full"
        >
          <div ref={scrollRef} className="flex gap-6 w-full">
            {guidesData.map((guide, index) => (
              <StaggerItem key={index} className="flex-shrink-0">
                <Link href={`/guias/${guide.id}`}>
                  <GuideCard 
                    title={guide.title} 
                    description={guide.description} 
                    Icon={guide.icon} 
                  />
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <button 
          onClick={() => scroll('right')}
          className="w-12 h-12 flex-shrink-0 bg-white dark:bg-gray-900 border border-border-color dark:border-gray-800 rounded-full flex items-center justify-center shadow-card hover:bg-puc-red hover:text-white dark:hover:bg-rose-600 dark:text-white hover:scale-110 transition-all duration-200 z-10 cursor-pointer"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}