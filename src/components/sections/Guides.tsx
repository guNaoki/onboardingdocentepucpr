'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import GuideCard from '@/components/ui/GuideCard';
import { guidesData } from '@/lib/data';

export default function Guides() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-5 py-10" id="guias">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <Link href="/guias">
            <h2 className="text-3xl font-bold mb-2 inline-block relative group cursor-pointer hover:text-puc-red hover:translate-x-2 transition-all duration-300">
              Guias Rápidos
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-puc-red transition-all duration-300 group-hover:w-full"></span>
            </h2>
          </Link>
          <p className="text-text-gray">Tutoriais essenciais para iniciar suas atividades</p>
        </div>
        <Link href="/guias" className="hidden md:inline-block text-sm font-bold text-puc-red hover:underline">
          Ver todos →
        </Link>
      </div>

      <div className="relative flex items-center gap-4">
        <button 
          onClick={() => scroll('left')}
          className="w-11 h-11 flex-shrink-0 bg-white border border-border-color rounded-full flex items-center justify-center shadow-card hover:bg-puc-red hover:text-white hover:scale-110 transition-all duration-200 z-10 cursor-pointer"
        >
          <FaChevronLeft />
        </button>
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-2 px-1 scroll-smooth"
        >
          {guidesData.map((guide, index) => (
            <Link key={index} href={`/guias/${guide.id}`}>
              <GuideCard 
                title={guide.title} 
                description={guide.description} 
                Icon={guide.icon} 
              />
            </Link>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="w-11 h-11 flex-shrink-0 bg-white border border-border-color rounded-full flex items-center justify-center shadow-card hover:bg-puc-red hover:text-white hover:scale-110 transition-all duration-200 z-10 cursor-pointer"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
