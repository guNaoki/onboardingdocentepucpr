import { FadeIn, ScaleIn } from '@/components/ui/MotionWrapper';

export default function Hero() {
  return (
    <section className="h-full p-6 md:p-12 bg-white/45 dark:bg-gray-950/45 backdrop-blur-md rounded-3xl border border-white/20 dark:border-gray-800/30 shadow-sm flex flex-col justify-center">
      <div className="max-w-3xl space-y-6">
        
        
        <ScaleIn delay={0.2}>
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 dark:text-white">
            Aqui na <span className="text-[#B71C1C]">PUCPR</span> é<br />mais simples para você!
          </h1>
        </ScaleIn>

        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg font-light text-gray-700 dark:text-white/75 leading-relaxed">
            Preparamos este espaço para que você encontre tudo o que precisa para suas aulas e sua carreira em um só lugar, de forma direta e sem complicações.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
