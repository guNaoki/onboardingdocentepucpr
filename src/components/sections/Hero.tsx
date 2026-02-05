import { FaLeaf, FaPlay } from 'react-icons/fa6';
import { FadeIn, ScaleIn } from '@/components/ui/MotionWrapper';

export default function Hero() {
  return (
    <section className="relative py-24 mb-10 text-white bg-[url('/images/puc.png')] bg-cover bg-center bg-fixed">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40 dark:from-black/95 dark:via-black/80 dark:to-black/60 z-10" />
      
      <div className="container mx-auto px-5 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div className="space-y-6">
            <FadeIn direction="down" delay={0.1}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[0.75rem] font-bold uppercase text-rose-100 hover:scale-105 hover:bg-white/25 transition-all duration-300 cursor-default">
                <FaLeaf className="inline mr-1" /> Turma de 2026
              </span>
            </FadeIn>
            
            <ScaleIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] hover:text-white hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-400 cursor-default">
                Bem-vindo<br />à Equipe.
              </h1>
            </ScaleIn>

            <FadeIn delay={0.3}>
              <p className="text-lg font-light text-gray-300 max-w-[500px]">
                Estamos entusiasmados por tê-lo em nossa comunidade acadêmica. Preparamos este espaço para ajudá-lo a se instalar, conectar-se com colegas e encontrar tudo o que você precisa para um semestre de sucesso.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.4}>
            <div className="group relative h-[300px] rounded-2xl bg-[#1f2937] overflow-hidden bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center border border-white/10 shadow-[0_10_30px_rgba(0,0,0,0.5)] hover:scale-[1.02] hover:shadow-[0_20_40px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-500">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="w-[70px] h-[70px] rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/95 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300">
                  <FaPlay className="text-white ml-1 group-hover:text-puc-red transition-colors" />
                </div>
                <h3 className="text-xl font-bold">Comece por aqui</h3>
                <p className="text-gray-300 text-[0.8rem]">intro de 2 min</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}