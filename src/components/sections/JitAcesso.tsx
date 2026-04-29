'use client';

import { jitLinks } from '@/lib/data';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FadeIn } from '@/components/ui/MotionWrapper';
import Image from 'next/image';

export default function JitAcesso() {
  return (
    <div className="h-full flex flex-col justify-between p-6 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Atalhos Úteis</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          Os sistemas que você mais usa, reunidos para facilitar sua rotina.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        {jitLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-transparent hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: !link.image ? link.color : 'transparent' }}
              >
                {link.image ? (
                  <Image 
                    src={link.image} 
                    alt={link.title} 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                ) : (
                  <span className="text-white font-bold text-xl">{link.title[0]}</span>
                )}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100">{link.title}</h4>
                <p className="text-xs text-gray-500">{link.description}</p>
              </div>
            </div>
            <FaExternalLinkAlt className="text-gray-300 group-hover:text-puc-red transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
}
