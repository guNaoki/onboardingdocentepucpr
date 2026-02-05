'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaMagnifyingGlass, FaDownload, FaFilter } from 'react-icons/fa6';
import { allDocuments, documentsCategories } from '@/lib/data';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export default function DocumentsPage() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocs = allDocuments.filter(doc => {
    const matchesCategory = activeCategory === "todos" || doc.category === activeCategory;
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-bg-light min-h-screen">
      <div className="bg-puc-red text-white py-12 pb-24">
        <div className="container mx-auto px-5">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <FaArrowLeft /> Voltar para Home
          </Link>
          <FadeIn>
            <h1 className="text-4xl font-bold mb-2">Central de Documentos</h1>
            <p className="text-white/80 max-w-2xl">Acesse todos os modelos, regulamentos e arquivos institucionais necessários para sua jornada.</p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-5 -mt-16 pb-20">
        <FadeIn delay={0.2} className="bg-white rounded-2xl shadow-xl border border-border-color overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Sidebar / Filters */}
          <aside className="w-full md:w-64 bg-gray-50 border-r border-border-color p-4 md:p-6 flex-shrink-0">
            <h3 className="font-bold text-gray-400 uppercase text-xs tracking-wider mb-4 flex items-center gap-2 hidden md:flex">
              <FaFilter /> Categorias
            </h3>
            
            {/* Horizontal Scroll on Mobile, Vertical Stack on Desktop */}
            <nav className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <button
                onClick={() => setActiveCategory("todos")}
                className={cn(
                  "flex-shrink-0 px-4 py-2 md:py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                  activeCategory === "todos" 
                    ? "bg-puc-red text-white shadow-md" 
                    : "bg-white md:bg-transparent text-text-gray hover:bg-white hover:text-puc-red border border-gray-100 md:border-transparent"
                )}
              >
                Todos os Arquivos
              </button>
              {documentsCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex-shrink-0 px-4 py-2 md:py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between group whitespace-nowrap gap-3",
                    activeCategory === cat.id 
                      ? "bg-white text-puc-red shadow-sm border border-gray-100" 
                      : "bg-white md:bg-transparent text-text-gray hover:bg-white hover:text-puc-red border border-gray-100 md:border-transparent"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <cat.icon className={activeCategory === cat.id ? "text-puc-red" : "text-gray-400 group-hover:text-puc-red"} />
                    {cat.title}
                  </span>
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    activeCategory === cat.id ? "bg-rose-100" : "bg-gray-200"
                  )}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-grow p-6 md:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
              <h2 className="text-xl font-bold text-text-dark">
                {activeCategory === 'todos' ? 'Todos os Arquivos' : documentsCategories.find(c => c.id === activeCategory)?.title}
              </h2>
              
              <div className="relative w-full sm:w-72">
                <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Buscar arquivos..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-puc-red/20 focus:border-puc-red transition-all"
                />
              </div>
            </div>

            {filteredDocs.length > 0 ? (
              <StaggerContainer className="grid grid-cols-1 gap-4">
                {filteredDocs.map(doc => (
                  <StaggerItem key={doc.id}>
                    <motion.div 
                      layout
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="group flex items-center p-4 bg-white border border-gray-100 rounded-xl hover:border-puc-red/30 hover:shadow-hover transition-all duration-300 cursor-pointer"
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0 transition-colors",
                        doc.type === 'pdf' ? 'bg-red-50 text-red-500' : 
                        doc.type === 'word' ? 'bg-blue-50 text-blue-500' : 
                        'bg-orange-50 text-orange-500'
                      )}>
                        <doc.icon />
                      </div>
                      
                      <div className="flex-grow min-w-0 mr-4">
                        <h4 className="font-semibold text-text-dark truncate group-hover:text-puc-red transition-colors">
                          {doc.name}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-text-gray mt-1">
                          <span className="bg-gray-100 px-2 py-0.5 rounded uppercase tracking-wide font-bold text-[0.6rem]">{doc.type}</span>
                          <span className="hidden sm:inline">{doc.size}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:inline"></span>
                          <span className="hidden sm:inline">Atualizado em {doc.date}</span>
                        </div>
                      </div>

                      <button className="p-3 rounded-full text-gray-400 hover:bg-puc-red hover:text-white transition-all opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0">
                        <FaDownload />
                      </button>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-text-gray opacity-60">
                <FaFilter className="text-6xl mb-4 text-gray-300" />
                <p className="text-lg">Nenhum documento encontrado.</p>
                <button onClick={() => {setSearchTerm(""); setActiveCategory("todos")}} className="text-puc-red font-semibold hover:underline mt-2">
                  Limpar filtros
                </button>
              </div>
            )}
          </main>

        </FadeIn>
      </div>
    </div>
  );
}