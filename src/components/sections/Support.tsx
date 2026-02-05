'use client';

import Link from 'next/link';
import { FaHeart, FaUserTie, FaHandsHoldingCircle, FaHeadset } from 'react-icons/fa6';

const supportActions = [
  { icon: FaUserTie, label: <>Falar com<br />RH / Supervisor</> },
  { icon: FaHandsHoldingCircle, label: <>Falar com<br />PUC Acolhe</> },
  { icon: FaHeadset, label: <>Equipe<br />Onboarding</> },
];

export default function Support() {
  return (
    <section className="bg-white py-24 text-center group/section transition-colors duration-500 hover:bg-rose-50/30" id="suporte">
      <div className="container mx-auto px-5">
        <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <FaHeart className="text-[#be185d] text-3xl heartbeat group-hover/section:animate-[heartbeat_0.6s_infinite]" />
        </div>
        
        <h2 className="text-4xl font-bold mb-4 text-text-dark">Você não está sozinho.</h2>
        <p className="text-lg text-text-gray max-w-[600px] mx-auto mb-10">
          Ensinar pode ser exigente, e adaptar-se a um novo ambiente leva tempo. Selecione o canal mais adequado para sua necessidade:
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {supportActions.map((action, index) => (
            <Link 
              key={index}
              href="/suporte" 
              className="relative group flex flex-col items-center justify-center w-full sm:w-[180px] h-[140px] bg-white border border-border-color rounded-2xl transition-all duration-300 shadow-card hover:-translate-y-1 hover:shadow-hover hover:border-puc-red hover:bg-rose-50/50"
            >
              <action.icon className="text-3xl text-puc-red mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
              <span className="text-sm font-medium leading-tight">{action.label}</span>
              
              {/* Tooltip hint */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-text-dark text-white px-3 py-1 rounded text-[0.7rem] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none whitespace-nowrap">
                Clique para iniciar
              </div>
            </Link>
          ))}
        </div>
        <p className="text-[0.7rem] mt-8 text-gray-400">*Todas as conversas são confidenciais.</p>
      </div>
    </section>
  );
}
