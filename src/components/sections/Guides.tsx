'use client';

import Link from 'next/link';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa6';
import { guidesData } from '@/lib/data';
import TutorialCard from '../ui/TutorialCard';

export default function Guides() {
  // Highlight only the 3 most essential/first steps on the homepage
  const essentialGuides = guidesData.filter(g => g.priority === 'essencial').slice(0, 3);

  return (
    <div className="p-6 md:p-8" id="guias">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-red-600 hidden md:block"></span>
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest">Início da Jornada</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
            Passos essenciais para o seu sucesso
          </h2>
        </div>
        
        <Link 
          href="/guias" 
          className="hidden md:flex items-center gap-2 text-sm font-bold text-red-600 hover:gap-3 transition-all"
        >
          Ver jornada completa <FaChevronRight className="text-[10px]" />
        </Link>
      </div>

      {/* 
          UX Strategy: Horizontal Carousel on Mobile (Scroll Snap)
          Prevents vertical fatigue and allows the user to see "peek" of the next card, 
          indicating interactivity (Signifiers).
      */}
      <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
        <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 no-scrollbar snap-x snap-mandatory scroll-smooth">
          {essentialGuides.map((guide) => (
            <div 
              key={guide.id} 
              className="min-w-[85%] sm:min-w-[45%] md:min-w-full snap-center first:pl-0 last:pr-6 md:last:pr-0"
            >
              <TutorialCard guide={guide} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 md:hidden">
        <Link 
          href="/guias" 
          className="flex items-center justify-center gap-3 w-full py-4 bg-red-600 text-white rounded-2xl font-bold shadow-lg shadow-red-900/10 active:scale-[0.98] transition-all"
        >
          Ver jornada completa
          <FaArrowRight />
        </Link>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
