'use client';

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Inscrito com sucesso!');
  };

  return (
    <section className="container mx-auto px-5 my-10 mb-24">
      <div className="relative bg-gradient-to-br from-puc-red to-puc-red-hover text-white rounded-[20px] p-10 md:p-16 text-center overflow-hidden shadow-2xl">
        {/* Decorative circle */}
        <div className="absolute -top-32 -right-16 w-[300px] h-[300px] bg-white/5 rounded-full pointer-events-none" />
        
        <h2 className="text-3xl font-bold mb-4 relative z-10">Tenha os Guias Sempre à Mão</h2>
        <p className="text-white/90 max-w-[600px] mx-auto mb-8 relative z-10">
          Inscreva-se para receber todos os tutoriais rápidos e atualizações diretamente no seu e-mail, para consultar quando precisar.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto relative z-10">
          <input 
            type="email" 
            placeholder="Seu e-mail institucional" 
            required 
            className="flex-grow px-6 py-4 rounded-full border-none outline-none text-text-dark text-base shadow-lg focus:ring-2 focus:ring-black/20"
          />
          <button 
            type="submit" 
            className="bg-[#111827] text-white px-8 py-4 rounded-full font-bold transition-all duration-200 hover:bg-black hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Receber Material
          </button>
        </form>
      </div>
    </section>
  );
}
