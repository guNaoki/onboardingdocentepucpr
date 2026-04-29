'use client';

import { FaEnvelope } from 'react-icons/fa6';

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Inscrito com sucesso!');
  };

  return (
    <div className="h-full p-8 bg-[#B71C1C] text-white rounded-3xl shadow-sm border border-[#8B1414] overflow-hidden relative">
      {/* Subtle Background Effects */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-[50px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
          <FaEnvelope className="text-xl" />
        </div>

        <h2 className="text-2xl font-bold mb-3 leading-tight">
          Fique por dentro das novidades
        </h2>
        
        <p className="text-white/80 text-sm mb-8 leading-relaxed flex-grow">
          Assine nossa newsletter para receber tutoriais práticos, novos modelos de documentos e as principais notícias da nossa comunidade acadêmica direto no seu e-mail.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <input 
            type="email" 
            placeholder="Seu e-mail @pucpr.br" 
            required 
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/10 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/30 transition-all text-sm"
          />
          <button 
            type="submit" 
            className="w-full bg-white text-[#B71C1C] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 active:scale-95 text-sm"
          >
            Inscrever-se
          </button>
        </form>
      </div>
    </div>
  );
}
