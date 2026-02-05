"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { FaUser, FaGear, FaRightFromBracket, FaMoon, FaSun } from "react-icons/fa6"
import { cn } from "@/lib/utils"

export function UserMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const menuRef = React.useRef<HTMLDivElement>(null)

  // Close on click outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const menuItems = [
    { icon: FaUser, label: "Meu Perfil" },
    { icon: FaGear, label: "Configurações" },
  ]

  return (
    <div className="relative" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-transparent hover:border-puc-red transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-puc-red/50"
      >
        <Image 
          src="/images/avatar-devfest.png" 
          alt="User Avatar" 
          width={40} 
          height={40} 
          className="w-full h-full object-cover"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
              <p className="font-bold text-text-dark dark:text-white">Quíron</p>
              <p className="text-xs text-text-gray dark:text-gray-400">quiron@pucpr.br</p>
            </div>

            {/* Menu Items */}
            <div className="p-2 space-y-1">
              {menuItems.map((item, idx) => (
                <button
                  key={idx}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-text-dark dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-left"
                >
                  <item.icon className="text-gray-400 dark:text-gray-500" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="p-2 border-t border-gray-100 dark:border-gray-800">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-left font-medium">
                <FaRightFromBracket />
                Sair
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
