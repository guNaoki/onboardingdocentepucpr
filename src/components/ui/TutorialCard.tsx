'use client';

import { Guide } from '@/lib/data';
import { FaArrowRight, FaClock } from 'react-icons/fa6';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TutorialCardProps {
  guide: Guide;
  isHighPriority?: boolean;
}

export default function TutorialCard({ guide, isHighPriority = false }: TutorialCardProps) {
  const priorityStyles = {
    essencial: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
    recomendado: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    avancado: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800"
  };

  return (
    <Link href={`/guias/${guide.id}`}>
      <div className={cn(
        "group h-full flex flex-col p-6 rounded-3xl transition-all duration-300 border shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-900",
        isHighPriority 
          ? "border-red-200 dark:border-red-900/50 ring-1 ring-red-50 dark:ring-0" 
          : "border-gray-100 dark:border-gray-800 hover:border-red-200 dark:hover:border-red-900"
      )}>
        <div className="flex justify-between items-start mb-6">
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110",
            isHighPriority ? "bg-red-600 text-white" : "bg-gray-50 dark:bg-gray-800 text-red-600"
          )}>
            <guide.icon className="text-xl" />
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <span className={cn(
              "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
              priorityStyles[guide.priority]
            )}>
              {guide.priority}
            </span>
            <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 text-xs font-medium">
              <FaClock className="text-[10px]" />
              {guide.duration}
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-red-600 transition-colors">
          {guide.title}
        </h3>
        
        {/* WCAG compliant contrast: text-gray-600 for secondary text on light backgrounds */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow mb-6">
          {guide.description}
        </p>

        <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider transition-all group-hover:gap-3">
          Acessar Tutorial <FaArrowRight />
        </div>
      </div>
    </Link>
  );
}
