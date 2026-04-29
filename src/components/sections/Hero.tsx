import { FadeIn, ScaleIn } from '@/components/ui/MotionWrapper';

export default function Hero() {
  return (
    <section className="container mx-auto py-12">
      <div className="max-w-3xl">
        <div className="space-y-6">
          <FadeIn direction="down" delay={0.1}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#B71C1C]/10 border border-[#B71C1C]/20 text-[0.75rem] font-bold uppercase text-[#B71C1C] cursor-default">
              Bem-vindo à PUCPR
            </span>
          </FadeIn>
          
          <ScaleIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 dark:text-white">
              Aqui na PUCPR é<br />mais simples para você!
            </h1>
          </ScaleIn>

          <FadeIn delay={0.3}>
            <p className="text-lg font-light text-gray-600 dark:text-gray-400">
              Preparamos este espaço para que você encontre tudo o que precisa para suas aulas e sua carreira em um só lugar, de forma direta e sem complicações.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
