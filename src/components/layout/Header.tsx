'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRegBell, FaBars, FaXmark } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { UserMenu } from './UserMenu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Boas-vindas', path: '/' },
    { name: 'Guias', path: '/guias' },
    { name: 'Documentos', path: '/documentos' },
    { name: 'Notícias', path: '/noticias' },
    { name: 'Suporte', path: '/suporte' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-border-color dark:border-gray-800 py-4 transition-all duration-300">
      <div className="container mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-text-dark dark:text-white hover:scale-105 transition-transform duration-300 z-50">
          <Image 
            src="/images/puc-pr-logo.png" 
            alt="PUCPR Logo" 
            width={40} 
            height={40} 
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="hidden sm:inline">Onboarding Docente</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.path}
                  className={cn(
                    "text-sm font-medium relative pb-1 transition-colors duration-300 group",
                    pathname === item.path ? "text-puc-red" : "text-text-gray dark:text-gray-400 hover:text-puc-red dark:hover:text-puc-red"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-puc-red transition-all duration-300",
                    pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  )}></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 z-50">
          <FaRegBell className="text-gray-500 dark:text-gray-400 cursor-pointer hover:rotate-15 hover:text-puc-red transition-all duration-300" size={20} />
          
          <UserMenu />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl text-text-dark dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[73px] bg-white dark:bg-gray-950 z-40 flex flex-col p-5 md:hidden"
          >
            <nav className="flex flex-col gap-6 mt-4">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={item.path}
                    className={cn(
                      "text-2xl font-bold block py-2 border-b border-gray-100 dark:border-gray-800",
                      pathname === item.path ? "text-puc-red" : "text-text-dark dark:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-10 text-center text-gray-400 text-sm"
            >
              <p>PUC PR - Onboarding Docente</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}