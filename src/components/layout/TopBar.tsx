'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaMagnifyingGlass, 
  FaXmark, 
  FaBook, 
  FaFileLines, 
  FaNewspaper, 
  FaArrowTurnDown,
  FaChevronDown,
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

export default function TopBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeTab, setActiveTab] = useState<'tudo' | 'guias' | 'documentos' | 'noticias'>('tudo');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Suggestions
  const suggestions = ['Plano de Ensino', 'Canvas', 'Manual do Colaborador', 'PIBIC', 'Suporte'];

  // Keyboard shortcut Ctrl+K to focus input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  // Filter items
  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerms = query.toLowerCase().split(' ').filter(Boolean);

    return allItems.filter(item => {
      const matchText = `${item.title} ${item.subtitle} ${item.category}`.toLowerCase();
      const matchesSearch = searchTerms.every(term => matchText.includes(term));
      
      if (!matchesSearch) return false;
      
      if (!showAdvanced || activeTab === 'tudo') return true;
      if (activeTab === 'guias' && item.type === 'guia') return true;
      if (activeTab === 'documentos' && item.type === 'documento') return true;
      if (activeTab === 'noticias' && item.type === 'noticia') return true;
      
      return false;
    });
  }, [allItems, query, activeTab, showAdvanced]);

  // Keyboard navigation inside dropdown
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const maxIndex = filteredResults.length - 1;
      setSelectedIndex(prev => (prev < maxIndex ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : filteredResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults[selectedIndex]) {
        handleSelectResult(filteredResults[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleSelectResult = (result: SearchResult) => {
    setIsOpen(false);
    setQuery('');
    inputRef.current?.blur();
    router.push(result.url);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    inputRef.current?.focus();
    setIsOpen(true);
  };

  const handleToggleAdvanced = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAdvanced(!showAdvanced);
    setIsOpen(true);
    inputRef.current?.focus();
  };

  // Helper to highlight matching text
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${highlight.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) => 
          regex.test(part) ? (
            <mark key={i} className="bg-yellow-105 dark:bg-yellow-950/60 text-[#B71C1C] dark:text-rose-400 font-semibold px-0.5 rounded-sm">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  // Check if dropdown should be displayed
  const shouldShowDropdown = isOpen && (query.trim() || showAdvanced);

  return (
    <div 
      ref={containerRef}
      className="hidden md:flex flex-col items-center justify-center sticky top-4 z-40 mt-4 mr-5 ml-4 mb-4 transition-all duration-300 w-auto"
    >
      {/* Search Input Bar (Glassmorphic Pill) */}
      <div
        className={cn(
          "flex items-center gap-3 w-full max-w-xl px-5 py-3.5 bg-white/45 dark:bg-black/35 backdrop-blur-lg border border-gray-200/40 dark:border-gray-800/50 rounded-full shadow-sm transition-all duration-350 focus-within:bg-white/95 dark:focus-within:bg-gray-950/95 focus-within:ring-2 focus-within:ring-red-500/10 focus-within:border-red-500/50",
          shouldShowDropdown && "rounded-b-none rounded-t-[2rem] border-b-transparent focus-within:ring-0 focus-within:border-gray-200/40 dark:focus-within:border-gray-800/50"
        )}
      >
        <FaMagnifyingGlass className="text-gray-400 dark:text-gray-500 text-sm flex-shrink-0" />
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setSelectedIndex(0);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Pesquisar guias, documentos, notícias..."
          className="flex-grow bg-transparent border-0 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-0 text-sm py-0.5"
        />

        {query && (
          <button 
            onClick={() => { setQuery(''); setSelectedIndex(0); inputRef.current?.focus(); }}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
            aria-label="Limpar pesquisa"
          >
            <FaXmark className="text-xs" />
          </button>
        )}

        {/* Expand Button replacing Ctrl+K indicator */}
        <button 
          onClick={handleToggleAdvanced}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all cursor-pointer focus:outline-none select-none",
            showAdvanced 
              ? "bg-red-50 dark:bg-red-950/20 border-red-200/50 dark:border-red-900/30 text-[#B71C1C] dark:text-rose-400" 
              : "bg-white/60 dark:bg-black/40 border-gray-200/35 dark:border-gray-850/50 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          )}
          title={showAdvanced ? "Ocultar busca avançada" : "Mostrar busca avançada"}
        >
          <FaSliders className="text-[9px]" />
          <span>{showAdvanced ? "Ocultar" : "Expandir"}</span>
          <FaChevronDown className={cn("text-[8px] transition-transform duration-300", showAdvanced && "rotate-180")} />
        </button>
      </div>

      {/* Autocomplete Dropdown Panel */}
      <AnimatePresence>
        {shouldShowDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[53px] w-full max-w-xl bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border border-t-0 border-gray-200/40 dark:border-gray-800/50 rounded-b-[2rem] shadow-2xl overflow-hidden flex flex-col z-50 pointer-events-auto"
          >
            {/* Advanced Filters Expandable Top Section */}
            {showAdvanced && (
              <div className="p-4 bg-gray-50/40 dark:bg-gray-950/20 border-b border-gray-150 dark:border-gray-900/40 space-y-4">
                {/* Tabs */}
                <div>
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1.5 select-none">
                    Filtro de Categoria
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {(['tudo', 'guias', 'documentos', 'noticias'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                          "px-2.5 py-1 text-xs font-semibold rounded-lg capitalize transition-all focus:outline-none cursor-pointer",
                          activeTab === tab 
                            ? "bg-white dark:bg-gray-800 shadow-sm border border-gray-200/30 dark:border-gray-700/50 text-[#B71C1C] dark:text-rose-450" 
                            : "text-gray-550 hover:text-gray-800 dark:text-gray-450 dark:hover:text-gray-200 border border-transparent"
                        )}
                      >
                        {tab === 'tudo' ? 'Tudo' : tab === 'guias' ? 'Guias' : tab === 'documentos' ? 'Documentos' : 'Notícias'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Suggestions */}
                <div>
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1.5 select-none">
                    Sugestões de Pesquisa
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800 rounded-xl text-xs text-gray-600 dark:text-gray-300 hover:text-[#B71C1C] dark:hover:text-rose-450 hover:border-red-100 dark:hover:border-red-950/30 transition-all focus:outline-none cursor-pointer"
                      >
                        <FaMagnifyingGlass className="text-[8px] opacity-60" />
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Navigation */}
                <div>
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1.5 select-none">
                    Navegação Rápida
                  </span>
                  <div className="grid grid-cols-5 gap-1.5">
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
                        className="px-2 py-1.5 bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-300 text-center hover:text-[#B71C1C] dark:hover:text-rose-450 hover:border-red-100 dark:hover:border-red-950/30 transition-all focus:outline-none cursor-pointer"
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Results Area */}
            <div className="max-h-[360px] overflow-y-auto p-2 custom-scrollbar">
              {query.trim() ? (
                filteredResults.length > 0 ? (
                  <div className="space-y-0.5">
                    {filteredResults.map((result, index) => {
                      const isSelected = index === selectedIndex;
                      return (
                        <div
                          key={`${result.type}-${result.id}`}
                          onMouseEnter={() => setSelectedIndex(index)}
                          onClick={() => handleSelectResult(result)}
                          className={cn(
                            "flex items-center justify-between p-2.5 rounded-2xl cursor-pointer transition-all border border-transparent",
                            isSelected 
                              ? "bg-red-50/70 dark:bg-red-950/20 border-red-100/30 dark:border-red-900/20 text-[#B71C1C] dark:text-rose-450" 
                              : "hover:bg-gray-55/60 dark:hover:bg-gray-900/40"
                          )}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={cn(
                              "p-2 rounded-xl flex-shrink-0 transition-colors",
                              isSelected 
                                ? "bg-red-100/50 dark:bg-red-900/30 text-[#B71C1C] dark:text-rose-450" 
                                : "bg-gray-100 dark:bg-gray-900 text-gray-400 dark:text-gray-500"
                            )}>
                              {result.type === 'guia' && <FaBook className="text-xs" />}
                              {result.type === 'documento' && <FaFileLines className="text-xs" />}
                              {result.type === 'noticia' && <FaNewspaper className="text-xs" />}
                            </div>
                            
                            <div className="min-w-0 flex flex-col">
                              <span className="text-sm font-bold text-gray-900 dark:text-gray-100 truncate">
                                {highlightText(result.title, query)}
                              </span>
                              <span className="text-xs text-gray-400 dark:text-gray-500 truncate mt-0.5">
                                {highlightText(result.subtitle, query)}
                              </span>
                            </div>
                          </div>

                          {isSelected && (
                            <span className="flex items-center gap-1 text-[9px] font-bold text-[#B71C1C] dark:text-rose-450 uppercase tracking-widest pl-2">
                              Ir <FaArrowTurnDown className="rotate-90 text-[8px] opacity-75" />
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <span className="text-xs font-semibold text-gray-450 dark:text-gray-500">
                      Nenhum resultado encontrado para "{query}"
                    </span>
                  </div>
                )
              ) : (
                // Clean Helper Prompt when no text and showing advanced features is enabled
                showAdvanced && (
                  <div className="text-center py-6 select-none">
                    <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500">
                      Digite algo para buscar ou selecione as sugestões acima.
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-gray-50/50 dark:bg-gray-950/40 border-t border-gray-150 dark:border-gray-900/60 flex items-center justify-between text-[10px] text-gray-400 dark:text-gray-500 select-none">
              <div className="flex gap-3">
                <span><kbd className="bg-white dark:bg-gray-900 px-1 py-0.5 rounded border border-gray-200/50 dark:border-gray-800">↓↑</kbd> Navegar</span>
                <span><kbd className="bg-white dark:bg-gray-900 px-1 py-0.5 rounded border border-gray-200/50 dark:border-gray-800">Enter</kbd> Abrir</span>
                <span><kbd className="bg-white dark:bg-gray-900 px-1 py-0.5 rounded border border-gray-200/50 dark:border-gray-800">ESC</kbd> Fechar</span>
              </div>
              <span className="font-semibold">Onboarding Docente</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
