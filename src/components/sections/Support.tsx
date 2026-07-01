'use client';

import Link from 'next/link';
import { FaHeart, FaUserTie, FaHandsHoldingCircle, FaHeadset, FaChevronRight, FaEnvelope } from 'react-icons/fa6';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import { motion } from 'motion/react';

const supportActions = [
  { 
    icon: FaUserTie, 
    label: "RH / Supervisor", 
    description: "Contratos, benefícios, carga horária e suporte administrativo direto com sua coordenação.",
    color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/20",
    hoverColor: "hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-blue-500/5",
    badge: "Administrativo",
    badgeStyle: "bg-blue-100/60 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    email: "rh@pucpr.br"
  },
  { 
    icon: FaHandsHoldingCircle, 
    label: "PUC Acolhe", 
    description: "Apoio psicopedagógico, bem-estar e acolhimento especializado para a docência e estudantes.",
    color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/20",
    hoverColor: "hover:border-emerald-300 dark:hover:border-emerald-800 hover:shadow-emerald-500/5",
    badge: "Bem-estar",
    badgeStyle: "bg-emerald-100/60 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    email: "pucacolhe@pucpr.br"
  },
  { 
    icon: FaHeadset, 
    label: "Equipe Onboarding", 
    description: "Suporte técnico com sistemas acadêmicos, salas de aula, capacitações e integração geral.",
    color: "text-[#B71C1C] dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900/20",
    hoverColor: "hover:border-rose-300 dark:hover:border-rose-800 hover:shadow-rose-500/5",
    badge: "Suporte Técnico",
    badgeStyle: "bg-rose-100/60 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
    email: "onboarding@pucpr.br"
  },
];

export default function Support() {
  return (
    <div className="relative overflow-hidden p-6 md:p-10 bg-white/45 dark:bg-gray-950/40 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] border border-white/20 dark:border-gray-800/30 shadow-sm transition-all duration-300" id="suporte">
      {/* Decorative ambient light gradient in the background */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-rose-500/5 dark:bg-rose-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* Left Column: Welcome / Pulse Interaction */}
        <div className="lg:col-span-4 flex flex-col justify-center text-left space-y-6">
          <div>
            <motion.div 
              className="w-16 h-16 bg-rose-50 dark:bg-rose-950/40 rounded-2xl flex items-center justify-center mb-6 border border-rose-100 dark:border-rose-900/20 cursor-pointer shadow-sm relative group"
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-2xl bg-rose-500/15 dark:bg-rose-500/25 animate-ping opacity-75 group-hover:animate-none"></div>
              <FaHeart className="text-[#B71C1C] dark:text-rose-500 text-3xl heartbeat z-10" />
            </motion.div>
            
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-4">
              Estamos aqui para apoiar você
            </h2>
            <p className="text-sm md:text-base font-light text-gray-500 dark:text-gray-400 leading-relaxed">
              Sabemos que começar uma nova jornada acadêmica envolve aprendizados e adaptações. Nossa equipe está sempre pronta para ajudar nas suas necessidades profissionais, administrativas ou emocionais.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
            <span className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-[11px] font-bold text-gray-500 dark:text-gray-400 rounded-full border border-gray-100 dark:border-gray-700">Atendimento Humanizado</span>
            <span className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-[11px] font-bold text-gray-500 dark:text-gray-400 rounded-full border border-gray-100 dark:border-gray-700">Suporte Imediato</span>
          </div>
        </div>

        {/* Right Column: Interactive Grid of Support Channels */}
        <div className="lg:col-span-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {supportActions.map((action, index) => (
              <StaggerItem key={index} className="h-full">
                <motion.div 
                  className={`h-full flex flex-col justify-between p-6 bg-white/40 dark:bg-gray-800/25 border border-gray-100/50 dark:border-gray-800/30 rounded-3xl transition-shadow ${action.hoverColor} group shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]`}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div>
                    {/* Header with Icon and Badge */}
                    <div className="flex justify-between items-center mb-6">
                      <motion.div 
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all ${action.color}`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <action.icon className="text-xl" />
                      </motion.div>
                      
                      <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${action.badgeStyle}`}>
                        {action.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#B71C1C] dark:group-hover:text-rose-400 transition-colors">
                      {action.label}
                    </h3>
                    
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                      {action.description}
                    </p>
                  </div>

                  {/* Links / Contact Actions */}
                  <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800/60">
                    <a 
                      href={`mailto:${action.email}`} 
                      className="flex items-center gap-2 text-[11px] font-semibold text-gray-400 hover:text-[#B71C1C] dark:hover:text-rose-400 transition-colors"
                    >
                      <FaEnvelope className="text-xs" />
                      <span>{action.email}</span>
                    </a>
                    
                    <Link 
                      href="/suporte" 
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#B71C1C] dark:text-rose-400 group/link transition-all"
                    >
                      Iniciar contato 
                      <FaChevronRight className="text-[9px] transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </div>
  );
}
