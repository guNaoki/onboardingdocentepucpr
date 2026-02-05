'use client';

import Link from 'next/link';
import { FaHeart, FaUserTie, FaHandsHoldingCircle, FaHeadset } from 'react-icons/fa6';
import { FadeIn, Float, ScaleIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const supportActions = [
  { 
    icon: FaUserTie, 
    label: "RH / Supervisor", 
    message: "Dúvidas sobre seu contrato, benefícios ou progressão de carreira? Estamos prontos para orientar sua jornada administrativa.",
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    delay: 0 
  },
  { 
    icon: FaHandsHoldingCircle, 
    label: "PUC Acolhe", 
    message: "Um espaço seguro para escuta e apoio psicológico. Se o estresse bater ou precisar conversar, nossa equipe de acolhimento está aqui.",
    color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    delay: 0.2 
  },
  { 
    icon: FaHeadset, 
    label: "Equipe Onboarding", 
    message: "Somos seus facilitadores diretos. Do primeiro dia ao final do semestre, conte conosco para qualquer dúvida sobre a cultura e processos da PUC.",
    color: "bg-rose-50 dark:bg-rose-900/20 text-puc-red dark:text-rose-400",
    featured: true,
    delay: 0.4 
  },
];

export default function Support() {
  return (
    <section className="relative py-24 text-center overflow-hidden dark:bg-gray-950 transition-colors duration-300" id="suporte">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-950 transition-colors duration-300">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-100/50 dark:bg-rose-900/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <ScaleIn>
          <div className="w-20 h-20 bg-white dark:bg-gray-900 shadow-xl rounded-full flex items-center justify-center mx-auto mb-8 border border-gray-100 dark:border-gray-800">
            <FaHeart className="text-[#be185d] text-4xl heartbeat" />
          </div>
        </ScaleIn>
        
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-dark dark:text-white tracking-tight">Você não está sozinho.</h2>
          <p className="text-xl text-text-gray dark:text-gray-400 max-w-[750px] mx-auto mb-16 leading-relaxed">
            Sabemos que o início em uma nova instituição traz muitos desafios. Criamos canais diretos para garantir que você tenha <span className="text-puc-red dark:text-rose-400 font-semibold">suporte humano e confidencial</span> em cada passo.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportActions.map((action, index) => (
            <StaggerItem key={index}>
              <Float delay={action.delay}>
                <Link 
                  href="/suporte" 
                  className={cn(
                    "relative group flex flex-col p-8 bg-white dark:bg-gray-900 border rounded-[32px] transition-all duration-300 text-left h-full",
                    action.featured 
                      ? "border-puc-red/30 shadow-[0_20px_40px_rgba(139,0,0,0.08)] dark:shadow-none ring-4 ring-rose-50 dark:ring-rose-900/10" 
                      : "border-gray-100 dark:border-gray-800 shadow-sm hover:border-puc-red/20"
                  )}
                >
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110", action.color)}>
                    <action.icon className="text-2xl" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-text-dark dark:text-white">{action.label}</h3>
                    {action.featured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-puc-red text-white px-2 py-0.5 rounded-full">
                        Destaque
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-text-gray dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                    {action.message}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-puc-red dark:text-rose-400 group-hover:gap-3 transition-all">
                    Entrar em contato <span>→</span>
                  </div>
                </Link>
              </Float>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <FadeIn delay={0.6}>
          <div className="mt-16 flex items-center justify-center gap-2 text-text-gray dark:text-gray-500 text-sm">
            <FaHeart className="text-puc-red/40" />
            <p>Sua privacidade e bem-estar são nossa prioridade máxima.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
