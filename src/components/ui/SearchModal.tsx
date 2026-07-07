'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaMagnifyingGlass, 
  FaXmark, 
  FaBook, 
  FaFileLines, 
  FaNewspaper, 
  FaKeyboard,
  FaArrowTurnDown,
  FaChevronDown,
  FaArrowLeft,
  FaSliders
} from 'react-icons/fa6';
import { motion, AnimatePresence } from 'motion/react';
import { guidesData, allDocuments, newsData } from '@/lib/data';
import { cn } from '@/lib/utils';

interface SearchResult {
  id: string | number;
  title: string;
  subtitle: string;
  type: 'guia' | 'documento' | 'noticia';
  url: string;
  category?: string;
}

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeTab, setActiveTab] = useState<'tudo' | 'guias' | 'documentos' | 'noticias'>('tudo');
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Listen to open-search custom event (triggered by mobile header search button)
  useEffect(() => {
    const handleOpen = () => {
      // Only open mobile search overlay on smaller screens
      if (window.innerWidth < 768) {
        setIsOpen(true);
        setQuery('');
        setSelectedIndex(0);
        setShowAdvanced(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('open-search', handleOpen);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-search', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Suggestions / Quick tags
  const suggestions = ['Plano de Ensino', 'Canvas', 'Manual do Colaborador', 'PIBIC', 'Suporte'];

  // Map and filter search items
  const allItems = useMemo(() => {
    const guides: SearchResult[] = guidesData.map(g => ({
      id: g.id,
      title: g.title,
      subtitle: g.description,
      type: 'guia',
      url: `/guias/${g.id}`,
      category: 'Guias e Tutoriais'
    }));

    const docs: SearchResult[] = allDocuments.map(d => ({
      id: d.id,
      title: d.name,
      subtitle: `${d.sector} • ${d.size} • Atualizado em ${d.lastUpdated}`,
      type: 'documento',
      url: '/documentos',
      category: 'Documentos e Modelos'
    }));

    const news: SearchResult[] = newsData.map(n => ({
      id: n.id,
      title: n.title,
      subtitle: `${n.author} • ${n.date}`,
      type: 'noticia',
      url: `/noticias/${n.id}`,
      category: 'Notícias e Eventos'
    }));

    return [...guides, ...docs, ...news];
  }, []);

  // Filter items based on query and activeTab
  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerms = query.toLowerCase().split(' ').filter(Boolean);

    return allItems.filter(item => {
      const matchText = `${item.title} ${item.subtitle} ${item.category}`.toLowerCase();
      const matchesSearch = searchTerms.every(term => matchText.includes(term));
      
      if (!matchesSearch) return false;
      
      // If advanced mode is off, search globally; if on, respect activeTab
      if (!showAdvanced || activeTab === 'tudo') return true;
      if (activeTab === 'guias' && item.type === 'guia') return true;
      if (activeTab === 'documentos' && item.type === 'documento') return true;
      if (activeTab === 'noticias' && item.type === 'noticia') return true;
      
      return false;
    });
  }, [allItems, query, activeTab, showAdvanced]);

  // Reset selected index when query or tab changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, activeTab, showAdvanced]);

  // Keyboard navigation within results
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || filteredResults.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredResults.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredResults.length) % filteredResults.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleSelectResult(filteredResults[selectedIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex]);

  // Auto-scroll to selected item
  useEffect(() => {
    if (resultsContainerRef.current) {
      const activeElement = resultsContainerRef.current.querySelector('[data-active="true"]');
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  const handleSelectResult = (result: SearchResult) => {
    setIsOpen(false);
    router.push(result.url);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    inputRef.current?.focus();
  };

  // Helper function to highlight matching text
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return <span>{text}</span>;
    
    const regex = new RegExp(`(${highlight.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return (
      <span>
        {parts.map((part, i) => 
          regex.test(part) ? (
            <mark key={i} className="bg-yellow-100 dark:bg-yellow-950/60 text-[#B71C1C] dark:text-rose-400 font-semibold px-0.5 rounded-sm">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center md:pt-[10vh] px-0 md:px-4">
          {/* Backdrop (hidden on mobile, modal is full-screen) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-sm cursor-pointer hidden md:block"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 360 }}
            className="relative w-full h-full md:h-auto md:max-w-2xl bg-white dark:bg-gray-950 border-0 md:border border-gray-200/50 dark:border-gray-800/80 rounded-none md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-screen md:max-h-[75vh]"
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 px-4 md:px-6 py-4 md:py-5 border-b border-gray-150 dark:border-gray-850 bg-white dark:bg-gray-950 z-10">
              {/* Back button on mobile */}
              <button 
                onClick={() => setIsOpen(false)}
                className="md:hidden p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 focus:outline-none"
                aria-label="Voltar"
              >
                <FaArrowLeft className="text-base" />
              </button>

              <FaMagnifyingGlass className="text-gray-400 dark:text-gray-500 text-base md:text-lg flex-shrink-0 hidden md:block" />
              
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar..."
                className="flex-grow bg-transparent border-0 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-0 text-base py-1"
              />

              {query && (
                <button 
                  onClick={() => setQuery('')}
                  className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Limpar pesquisa"
                >
                  <FaXmark className="text-sm" />
                </button>
              )}

              {/* Expand/Collapse Button (for extra tools) */}
              <button 
                onClick={() => setShowAdvanced(!showAdvanced)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border focus:outline-none cursor-pointer",
                  showAdvanced 
                    ? "bg-red-50 dark:bg-red-950/20 border-red-200/50 dark:border-red-900/30 text-[#B71C1C] dark:text-rose-400 shadow-sm" 
                    : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-900/60 dark:hover:bg-gray-900 border-gray-200/40 dark:border-gray-800 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                )}
                title={showAdvanced ? "Ocultar ferramentas extras" : "Mostrar sugestões e filtros rápidos"}
              >
                <FaSliders className="text-[10px]" />
                <span className="hidden xs:inline">{showAdvanced ? "Ocultar" : "Expandir"}</span>
                <FaChevronDown className={cn("text-[9px] transition-transform duration-300", showAdvanced && "rotate-180")} />
              </button>

              <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-gray-100 dark:bg-gray-900 border border-gray-200/20 dark:border-gray-800 rounded-lg text-[10px] font-bold text-gray-400 dark:text-gray-500 select-none">
                ESC
              </div>
            </div>

            {/* Advanced Expanding Panel */}
            <AnimatePresence>
              {showAdvanced && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden border-b border-gray-150 dark:border-gray-900 bg-gray-50/50 dark:bg-gray-950/20 z-0 flex-shrink-0"
                >
                  <div className="p-4 space-y-4">
                    {/* Category Tab Filters */}
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2">
                        Filtro de Categoria
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {(['tudo', 'guias', 'documentos', 'noticias'] as const).map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                              "px-3 py-1.5 text-xs font-semibold rounded-lg capitalize transition-all focus:outline-none cursor-pointer",
                              activeTab === tab 
                                ? "bg-white dark:bg-gray-800 shadow-sm border border-gray-200/30 dark:border-gray-700/50 text-[#B71C1C] dark:text-rose-450" 
                                : "text-gray-500 hover:text-gray-750 dark:text-gray-400 dark:hover:text-gray-250 border border-transparent"
                            )}
                          >
                            {tab === 'tudo' ? 'Tudo' : tab === 'guias' ? 'Guias' : tab === 'documentos' ? 'Documentos' : 'Notícias'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Suggestions Tags */}
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2">
                        Sugestões de Pesquisa
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {suggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800 rounded-xl text-xs text-gray-600 dark:text-gray-300 hover:text-[#B71C1C] dark:hover:text-rose-400 hover:border-red-100 dark:hover:border-red-950/30 transition-all focus:outline-none active:scale-[0.98] cursor-pointer"
                          >
                            <FaMagnifyingGlass className="text-[9px] opacity-60" />
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quick Navigation links */}
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2">
                        Navegação Rápida
                      </span>
                      <div className="grid grid-cols-2 xs:grid-cols-3 gap-2">
                        {[
                          { name: 'Início', path: '/' },
                          { name: 'Guias', path: '/guias' },
                          { name: 'Documentos', path: '/documentos' },
                          { name: 'Notícias', path: '/noticias' },
                          { name: 'Suporte', path: '/suporte' },
                        ].map((link) => (
                          <button
                            key={link.path}
                            onClick={() => { setIsOpen(false); router.push(link.path); }}
                            className="px-3 py-2 bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-300 text-center hover:text-[#B71C1C] dark:hover:text-rose-400 hover:border-red-100 dark:hover:border-red-950/30 transition-all focus:outline-none cursor-pointer"
                          >
                            {link.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results Area */}
            <div 
              ref={resultsContainerRef}
              className="flex-grow overflow-y-auto p-3 custom-scrollbar min-h-[200px]"
            >
              {!query.trim() ? (
                // Minimalist Default / Empty State
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-4 text-[#B71C1C] dark:text-rose-400"
                  >
                    <FaMagnifyingGlass className="text-xl" />
                  </motion.div>
                  <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">
                    O que deseja procurar?
                  </h4>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 max-w-xs">
                    Comece a digitar para encontrar guias práticos, modelos de planos, regulamentos ou notícias docentes.
                  </p>
                  {!showAdvanced && (
                    <button 
                      onClick={() => setShowAdvanced(true)}
                      className="mt-5 text-xs text-[#B71C1C] hover:text-[#8B1414] dark:text-rose-400 dark:hover:text-rose-300 font-bold flex items-center gap-1 focus:outline-none"
                    >
                      <FaSliders className="text-[10px]" /> Mostrar ferramentas de auxílio
                    </button>
                  )}
                </div>
              ) : filteredResults.length > 0 ? (
                // Results List
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest px-2 pb-1 block">
                    Resultados Encontrados ({filteredResults.length})
                  </span>
                  
                  {filteredResults.map((result, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                      <motion.div
                        key={`${result.type}-${result.id}`}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: Math.min(index * 0.04, 0.2) }}
                        data-active={isSelected}
                        onClick={() => handleSelectResult(result)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={cn(
                          "flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all border border-transparent",
                          isSelected 
                            ? "bg-red-50/70 dark:bg-red-950/20 border-red-100/30 dark:border-red-900/20 text-[#B71C1C] dark:text-rose-450" 
                            : "hover:bg-gray-50/60 dark:hover:bg-gray-900/40"
                        )}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          {/* Icon wrapper */}
                          <div className={cn(
                            "p-2.5 rounded-xl flex-shrink-0 transition-colors",
                            isSelected 
                              ? "bg-red-100/50 dark:bg-red-900/30 text-[#B71C1C] dark:text-rose-400" 
                              : "bg-gray-105 dark:bg-gray-900 text-gray-400 dark:text-gray-500"
                          )}>
                            {result.type === 'guia' && <FaBook className="text-sm" />}
                            {result.type === 'documento' && <FaFileLines className="text-sm" />}
                            {result.type === 'noticia' && <FaNewspaper className="text-sm" />}
                          </div>
                          
                          <div className="min-w-0 flex flex-col">
                            <span className="text-sm font-bold text-gray-900 dark:text-gray-100 truncate">
                              {highlightText(result.title, query)}
                            </span>
                            <span className={cn(
                              "text-xs mt-0.5 truncate",
                              isSelected ? "text-[#B71C1C]/80 dark:text-rose-400/80" : "text-gray-400 dark:text-gray-500"
                            )}>
                              {highlightText(result.subtitle, query)}
                            </span>
                          </div>
                        </div>

                        {isSelected && (
                          <motion.span 
                            layoutId="searchIndicator"
                            className="flex items-center gap-1 text-[10px] font-bold text-[#B71C1C] dark:text-rose-450 uppercase tracking-widest pl-3 flex-shrink-0"
                          >
                            Ir <FaArrowTurnDown className="rotate-90 text-[9px] opacity-75" />
                          </motion.span>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                // No Results
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-14 h-14 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-4">
                    <FaXmark className="text-gray-400 text-lg" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">
                    Nenhum resultado encontrado
                  </h4>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 max-w-xs">
                    Não encontramos correspondência para "{query}". Remova filtros ou utilize outros termos de busca.
                  </p>
                </div>
              )}
            </div>

            {/* Helper Shortcut Footer (Hidden on Mobile) */}
            <div className="px-6 py-4 bg-gray-50/50 dark:bg-gray-950/40 border-t border-gray-150 dark:border-gray-900/60 hidden md:flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 select-none">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800 rounded text-[10px]">↓↑</kbd> Navegar
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800 rounded text-[10px]">Enter</kbd> Ir
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800 rounded text-[10px]">ESC</kbd> Fechar
                </span>
              </div>
              <span className="font-semibold text-gray-400/80">
                PUCPR Onboarding
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
