'use client';

import { ScaleIn } from '@/components/ui/MotionWrapper';
import { FaEnvelope } from 'react-icons/fa6';

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Inscrito com sucesso!');
  };

  return (
    <section className="container mx-auto px-5 my-10 mb-24">
      <ScaleIn>
        <div className="relative bg-slate-900 dark:bg-slate-950 text-white rounded-[24px] p-8 md:p-16 text-center overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Subtle Background Effects */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-rose-500/10 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-indigo-300 border border-white/10 shadow-inner">
              <FaEnvelope className="text-2xl" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Tenha os Guias Sempre à Mão
            </h2>
            
            <p className="text-gray-300 max-w-[600px] mx-auto mb-10 text-lg leading-relaxed">
              Inscreva-se para receber tutoriais atualizados, novos modelos de documentos e avisos institucionais diretamente no seu e-mail.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-[500px] relative">
              <input 
                type="email" 
                placeholder="Seu e-mail institucional (@pucpr.br)" 
                required 
                className="flex-grow px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-inner"
              />
              <button 
                type="submit" 
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg shadow-white/5"
              >
                Receber Material
              </button>
            </form>

            <p className="mt-6 text-xs text-gray-500">
              Respeitamos sua privacidade. Cancele a inscrição a qualquer momento.
            </p>
          </div>
        </div>
      </ScaleIn>
    </section>
  );
}
