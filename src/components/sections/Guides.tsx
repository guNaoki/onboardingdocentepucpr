'use client';

import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaPenToSquare, FaLaptopCode, FaFilePen, FaTableList, FaUsersViewfinder } from 'react-icons/fa6';
import GuideCard from '@/components/ui/GuideCard';

const guides = [
  {
    title: "Criação do Plano de Ensino",
    description: "Passo a passo para estruturar e submeter seu plano no sistema.",
    Icon: FaPenToSquare
  },
  {
    title: "Dominando o Canvas LMS",
    description: "Configure sua sala de aula virtual e publique materiais.",
    Icon: FaLaptopCode
  },
  {
    title: "Aplicação de Provas",
    description: "Regras, agendamento e ferramentas para avaliação segura.",
    Icon: FaFilePen
  },
  {
    title: "Portal do Professor",
    description: "Como lançar frequências, notas e gerenciar diários.",
    Icon: FaTableList
  },
  {
    title: "Engajamento em Sala",
    description: "Técnicas e ferramentas para aumentar a participação.",
    Icon: FaUsersViewfinder
  }
];

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
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 inline-block relative group cursor-default hover:text-puc-red hover:translate-x-2 transition-all duration-300">
          Guias Rápidos
          <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-puc-red transition-all duration-300 group-hover:w-full"></span>
        </h2>
        <p className="text-text-gray">Tutoriais essenciais para iniciar suas atividades</p>
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
          {guides.map((guide, index) => (
            <GuideCard key={index} {...guide} />
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
