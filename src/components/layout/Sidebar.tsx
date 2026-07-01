'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaBars, 
  FaXmark, 
  FaHouse, 
  FaBook, 
  FaFileLines, 
  FaNewspaper, 
  FaCircleQuestion,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa6';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../ui/ThemeToggle';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const navLinks = [
    { name: 'Boas-vindas', path: '/', icon: FaHouse },
    { name: 'Guias', path: '/guias', icon: FaBook },
    { name: 'Documentos', path: '/documentos', icon: FaFileLines },
    { name: 'Notícias', path: '/noticias', icon: FaNewspaper },
    { name: 'Suporte', path: '/suporte', icon: FaCircleQuestion },
  ];

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-border-color dark:border-gray-800 py-4 px-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-text-dark dark:text-white">
          <Image 
            src="/images/puc-pr-logo.png" 
            alt="PUCPR Logo" 
            width={32} 
            height={32} 
            className="h-8 w-auto object-contain"
          />
          <span>Onboarding</span>
        </Link>
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-2xl text-text-dark dark:text-white"
        >
          {isMobileOpen ? <FaXmark /> : <FaBars />}
        </button>
      </header>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? '80px' : '280px' }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        className={cn(
          "hidden md:flex flex-col sticky top-4 h-[calc(100vh-2rem)] bg-white/45 dark:bg-black/35 backdrop-blur-lg border border-gray-200/40 dark:border-gray-800/50 rounded-[2.2rem] z-50 my-4 ml-4 shadow-sm",
          isCollapsed ? "items-center" : "items-start"
        )}
      >
        {/* Logo Section */}
        <div className={cn(
          "w-full flex items-center transition-all duration-300 border-b border-gray-200/10 dark:border-gray-800/20",
          isCollapsed ? "p-3 justify-center" : "p-6 justify-between"
        )}>
          <Link href="/" className="flex items-center gap-3 font-bold text-text-dark dark:text-white overflow-hidden whitespace-nowrap">
            <Image 
              src="/images/puc-pr-logo.png" 
              alt="PUCPR Logo" 
              width={40} 
              height={40} 
              className="min-w-[40px] h-10 w-auto object-contain"
            />
            {!isCollapsed && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg"
              >
                Onboarding
              </motion.span>
            )}
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow w-full px-3 mt-6">
          <ul className="space-y-2 list-none">
            {navLinks.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className={cn(
                      "flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group relative z-10",
                      isActive 
                        ? "text-[#B71C1C]" 
                        : "text-text-gray dark:text-gray-400 hover:text-[#B71C1C]"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSidebarTab"
                        className="absolute inset-0 bg-red-50/60 dark:bg-red-950/20 rounded-xl -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <item.icon className={cn(
                      "text-xl min-w-[24px] z-20",
                      isActive ? "text-[#B71C1C]" : "group-hover:text-[#B71C1C]"
                    )} />
                    {!isCollapsed && (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-semibold whitespace-nowrap z-20"
                      >
                        {item.name}
                      </motion.span>
                    )}
                    {isCollapsed && (
                      <div className="absolute left-full ml-6 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl">
                        {item.name}
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div className={cn(
          "w-full mt-auto border-t border-gray-200/20 dark:border-gray-800/30 flex flex-col gap-4",
          isCollapsed ? "p-3 items-center" : "p-6 items-start"
        )}>
          <div className={cn("flex items-center w-full", isCollapsed ? "justify-center" : "gap-4")}>
            <ThemeToggle />
            {!isCollapsed && <span className="text-sm font-medium text-text-gray dark:text-gray-400">Tema</span>}
          </div>
          
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              "flex items-center rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-900/40 text-text-gray dark:text-gray-400 transition-all w-full p-2.5",
              isCollapsed ? "justify-center" : "gap-4"
            )}
          >
            {isCollapsed ? <FaChevronRight className="text-lg" /> : <FaChevronLeft className="text-lg" />}
            {!isCollapsed && <span className="text-sm font-medium">Recolher</span>}
          </button>
        </div>
      </motion.aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-[280px] h-full bg-white dark:bg-gray-950 p-6 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-10">
                <Link href="/" className="flex items-center gap-3 font-bold text-text-dark dark:text-white">
                  <Image 
                    src="/images/puc-pr-logo.png" 
                    alt="PUCPR Logo" 
                    width={40} 
                    height={40} 
                    className="h-10 w-auto object-contain"
                  />
                  <span className="text-lg">Onboarding</span>
                </Link>
                <button 
                  onClick={() => setIsMobileOpen(false)}
                  className="text-2xl text-text-dark dark:text-white"
                >
                  <FaXmark />
                </button>
              </div>

              <nav className="flex-grow">
                <ul className="space-y-4 list-none">
                  {navLinks.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.path}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-2xl font-bold transition-all",
                          pathname === item.path 
                            ? "bg-red-50 dark:bg-red-950/30 text-[#B71C1C]" 
                            : "text-text-dark dark:text-white"
                        )}
                      >
                        <item.icon className="text-xl" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto pt-6 border-t border-border-color dark:border-gray-800 flex justify-between items-center">
                <span className="text-sm font-bold text-text-gray dark:text-gray-400">Modo Escuro</span>
                <ThemeToggle />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
