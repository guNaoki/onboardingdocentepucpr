'use client';

import Link from 'next/link';
import { FaHeart, FaUserTie, FaHandsHoldingCircle, FaHeadset } from 'react-icons/fa6';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';

const supportActions = [
  { 
    icon: FaUserTie, 
    label: "RH / Supervisor", 
    color: "text-blue-600 dark:text-blue-400",
  },
  { 
    icon: FaHandsHoldingCircle, 
    label: "PUC Acolhe", 
    color: "text-emerald-600 dark:text-emerald-400",
  },
  { 
    icon: FaHeadset, 
    label: "Onboarding", 
    color: "text-[#B71C1C] dark:text-rose-400",
  },
];

export default function Support() {
  return (
    <div className="h-full p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm" id="suporte">
      <div className="mb-6">
        <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/20 rounded-2xl flex items-center justify-center mb-4">
          <FaHeart className="text-[#B71C1C] text-2xl heartbeat" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Estamos aqui para você</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Seja para tirar uma dúvida rápida ou buscar orientação, nossa equipe está pronta para te apoiar em cada etapa da sua jornada docente.
        </p>
      </div>

      <div className="space-y-3">
        {supportActions.map((action, index) => (
          <Link 
            key={index}
            href="/suporte" 
            className="group flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <action.icon className={`text-xl ${action.color}`} />
              <span className="font-bold text-sm text-gray-900 dark:text-gray-100">{action.label}</span>
            </div>
            <span className="text-xs font-bold text-gray-300 group-hover:text-[#B71C1C] transition-colors">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
