'use client';

import { useState, useMemo } from 'react';
import { guidesData, GuideCategory } from '@/lib/data';
import TutorialCard from '@/components/ui/TutorialCard';
import { FaMagnifyingGlass, FaArrowLeft, FaRoute } from 'react-icons/fa6';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import { cn } from '@/lib/utils';

export default function KnowledgeCenter() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | GuideCategory>('all');

  const tabs: { id: 'all' | GuideCategory; label: string }[] = [
    { id: 'all', label: 'Todos os Passos' },
    { id: 'preparacao', label: 'Preparação' },
    { id: 'interacao', label: 'Interação e Engajamento' },
    { id: 'avaliacao', label: 'Ciclo de Avaliação' },
  ];

  const filteredGuides = useMemo(() => {
    return guidesData.filter(guide => {
      const matchesSearch = guide.title.toLowerCase().includes(search.toLowerCase()) || 
                           guide.description.toLowerCase().includes(search.toLowerCase());
      const matchesTab = activeTab === 'all' || guide.category === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [search, activeTab]);

  const essentialGuides = useMemo(() => {
    return guidesData.filter(g => g.priority === 'essencial').slice(0, 3);
  }, []);

  return (
    <div className="container mx-auto px-5 py-10 min-h-screen">
      {/* Header UX: Clear context and easy navigation back */}
      <FadeIn>
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 mb-8 transition-colors text-sm font-medium">
          <FaArrowLeft /> Voltar para o Início
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
              Central de Conhecimento
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Guias práticos organizados pela sua jornada no semestre. Do primeiro plano de ensino ao fechamento das notas.
            </p>
          </div>
          
          {/* Search Bar - Hick's Law: Providing a fast way to find specific items */}
          <div className="relative w-full md:w-80 group">
            <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" />
            <input 
              type="text"
              placeholder="O que você precisa resolver agora?"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </FadeIn>

      {/* Dynamic Highlight: Essential items for quick onboarding */}
      {search === '' && activeTab === 'all' && (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center text-red-600">
              <FaRoute className="text-xl" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Para Começar Agora (Essenciais)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {essentialGuides.map((guide) => (
              <TutorialCard key={guide.id} guide={guide} isHighPriority />
            ))}
          </div>
        </section>
      )}

      {/* Journey Tabs - Cognitive ease through visual grouping */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-100 dark:border-gray-800 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300",
              activeTab === tab.id
                ? "bg-red-600 text-white shadow-lg shadow-red-900/20"
                : "bg-transparent text-gray-500 hover:text-red-600 hover:bg-gray-50 dark:hover:bg-gray-800"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Results Grid */}
      {filteredGuides.length > 0 ? (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide) => (
            <StaggerItem key={guide.id}>
              <TutorialCard guide={guide} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="text-center py-20 bg-gray-50 dark:bg-gray-900/50 rounded-[2rem] border-2 border-dashed border-gray-100 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 font-medium italic">
            Nenhum tutorial encontrado para "{search}". Tente outros termos.
          </p>
        </div>
      )}
    </div>
  );
}
