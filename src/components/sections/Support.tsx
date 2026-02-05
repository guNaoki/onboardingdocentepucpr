'use client';

import Link from 'next/link';
import { FaHeart, FaUserTie, FaHandsHoldingCircle, FaHeadset } from 'react-icons/fa6';
import { FadeIn, Float, ScaleIn } from '@/components/ui/MotionWrapper';
import { motion } from 'motion/react';

const supportActions = [
  { icon: FaUserTie, label: <>Falar com<br />RH / Supervisor</>, delay: 0 },
  { icon: FaHandsHoldingCircle, label: <>Falar com<br />PUC Acolhe</>, delay: 0.2 },
  { icon: FaHeadset, label: <>Equipe<br />Onboarding</>, delay: 0.4 },
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
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-100/80 dark:bg-slate-800/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <ScaleIn>
          <div className="w-24 h-24 bg-white dark:bg-gray-900 shadow-lg rounded-full flex items-center justify-center mx-auto mb-8 relative border-4 border-rose-50 dark:border-gray-800 transition-colors duration-300">
            <FaHeart className="text-[#be185d] text-4xl heartbeat" />
          </div>
        </ScaleIn>
        
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-dark dark:text-white tracking-tight">Você não está sozinho.</h2>
          <p className="text-xl text-text-gray dark:text-gray-400 max-w-[700px] mx-auto mb-16 leading-relaxed">
            Ensinar pode ser exigente, e adaptar-se a um novo ambiente leva tempo. 
            <br className="hidden md:block" /> Selecione o canal mais adequado para sua necessidade:
          </p>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-6">
          {supportActions.map((action, index) => (
            <Float key={index} delay={action.delay}>
              <Link 
                href="/suporte" 
                className="relative group flex flex-col items-center justify-center w-[160px] h-[160px] sm:w-[200px] sm:h-[180px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/50 dark:border-gray-800 rounded-3xl transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(190,24,93,0.15)] dark:hover:shadow-[0_20px_40px_rgba(190,24,93,0.15)] hover:border-puc-red/30 dark:hover:border-puc-red/30"
              >
                <div className="bg-rose-50 dark:bg-gray-800 p-4 rounded-2xl mb-4 group-hover:bg-puc-red transition-colors duration-300">
                  <action.icon className="text-3xl text-puc-red dark:text-rose-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm md:text-base font-semibold text-text-dark dark:text-gray-200 leading-tight group-hover:text-puc-red dark:group-hover:text-rose-400 transition-colors">{action.label}</span>
                
                {/* Tooltip hint */}
                <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-text-dark dark:bg-gray-800 text-white text-xs py-1 px-3 rounded-full pointer-events-none transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                  Iniciar Conversa
                </div>
              </Link>
            </Float>
          ))}
        </div>
        
        <FadeIn delay={0.6}>
          <p className="text-xs font-medium mt-12 text-gray-400 uppercase tracking-widest">*Todas as conversas são confidenciais</p>
        </FadeIn>
      </div>
    </section>
  );
}
