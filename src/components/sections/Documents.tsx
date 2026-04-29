'use client';

import { useState } from 'react';
import Link from 'next/link';
import { allDocuments, documentsCategories } from '@/lib/data';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import { FaFilter, FaClock, FaBuilding } from 'react-icons/fa6';

export default function Documents() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredDocuments = activeCategory === 'all' 
    ? allDocuments.slice(0, 6) 
    : allDocuments.filter(doc => doc.category === activeCategory);

  return (
    <section className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm" id="documentos">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Documentos e Modelos</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Tudo o que você precisa para formalizar suas atividades em um só lugar.</p>
        </div>
        <Link href="/documentos" className="text-xs font-bold text-[#B71C1C] hover:underline uppercase tracking-wider">
          Ver todos os documentos →
        </Link>
      </div>

      {/* Metadata-driven filtering UI */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button 
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
            activeCategory === 'all' 
              ? 'bg-[#B71C1C] text-white border-[#B71C1C]' 
              : 'bg-gray-50 dark:bg-gray-800 text-gray-500 border-gray-100 dark:border-gray-700 hover:bg-gray-100'
          }`}
        >
          Todos
        </button>
        {documentsCategories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
              activeCategory === cat.id 
                ? 'bg-[#B71C1C] text-white border-[#B71C1C]' 
                : 'bg-gray-50 dark:bg-gray-800 text-gray-500 border-gray-100 dark:border-gray-700 hover:bg-gray-100'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocuments.map((doc, index) => (
          <div key={doc.id} className="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center text-gray-400 group-hover:text-[#B71C1C] shadow-sm transition-colors">
                <doc.icon className="text-xl" />
              </div>
              <div className="overflow-hidden">
                <h4 className="font-bold text-gray-900 dark:text-white text-sm truncate">{doc.name}</h4>
                <p className="text-[10px] text-gray-400 font-medium">{doc.size} • {doc.type.toUpperCase()}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-1.5">
                <FaClock className="text-[10px] text-gray-300" />
                <span className="text-[10px] font-bold text-gray-500">{doc.lastUpdated}</span>
              </div>
              <div className="flex items-center gap-1.5 justify-end text-right">
                <FaBuilding className="text-[10px] text-gray-300" />
                <span className="text-[10px] font-bold text-gray-500 truncate">{doc.sector}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
