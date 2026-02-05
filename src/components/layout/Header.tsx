'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaRegBell } from 'react-icons/fa6';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border-color py-4 transition-all duration-300">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-lg text-text-dark hover:scale-105 transition-transform duration-300">
          <Image 
            src="/images/puc-pr-logo.png" 
            alt="PUCPR Logo" 
            width={40} 
            height={40} 
            className="h-10 w-auto object-contain"
          />
          <span className="hidden sm:inline">Onboarding Docente</span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none">
            <li>
              <Link 
                href="/"
                className="text-sm font-medium text-text-gray relative pb-1 hover:text-puc-red group transition-colors duration-300"
              >
                Boas-vindas
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-puc-red transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/guias"
                className="text-sm font-medium text-text-gray relative pb-1 hover:text-puc-red group transition-colors duration-300"
              >
                Guias
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-puc-red transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/documentos"
                className="text-sm font-medium text-text-gray relative pb-1 hover:text-puc-red group transition-colors duration-300"
              >
                Documentos
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-puc-red transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/noticias"
                className="text-sm font-medium text-text-gray relative pb-1 hover:text-puc-red group transition-colors duration-300"
              >
                Notícias
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-puc-red transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/suporte"
                className="text-sm font-medium text-text-gray relative pb-1 hover:text-puc-red group transition-colors duration-300"
              >
                Suporte
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-puc-red transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <FaRegBell className="text-gray-500 cursor-pointer hover:rotate-15 hover:text-puc-red transition-all duration-300" size={20} />
          <div className="w-[35px] h-[35px] rounded-full bg-gray-200 overflow-hidden cursor-pointer hover:scale-110 border-2 border-transparent hover:border-puc-red transition-all duration-300">
            <Image 
              src="/images/avatar-devfest.png" 
              alt="User Avatar" 
              width={35} 
              height={35} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
