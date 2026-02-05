import Link from 'next/link';
import { guidesData } from '@/lib/data';
import { FaArrowLeft } from 'react-icons/fa6';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-5 py-10 min-h-screen">
      <FadeIn>
        <Link href="/" className="inline-flex items-center gap-2 text-text-gray dark:text-gray-400 hover:text-puc-red dark:hover:text-rose-400 mb-8 transition-colors">
          <FaArrowLeft /> Voltar para Home
        </Link>
        
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4 text-text-dark dark:text-white">Guias Rápidos</h1>
          <p className="text-lg text-text-gray dark:text-gray-400">Tutoriais essenciais para dominar as ferramentas e processos acadêmicos.</p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guidesData.map((guide) => (
          <StaggerItem key={guide.id}>
            <Link 
              href={`/guias/${guide.id}`}
              className="group bg-white dark:bg-gray-900 border border-border-color dark:border-gray-800 rounded-radius p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-hover dark:hover:shadow-black/50 hover:border-puc-red dark:hover:border-rose-500 h-full"
            >
              <div className="bg-rose-50 dark:bg-rose-900/20 w-14 h-14 flex items-center justify-center rounded-xl mb-6 transition-colors duration-300 group-hover:bg-puc-red dark:group-hover:bg-rose-500">
                <guide.icon className="text-puc-red dark:text-rose-400 text-2xl group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-puc-red dark:group-hover:text-rose-400 text-text-dark dark:text-white transition-colors">
                {guide.title}
              </h2>
              <p className="text-text-gray dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                {guide.description}
              </p>
              <span className="text-sm font-semibold text-puc-red dark:text-rose-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                Ler Guia Completo <span className="text-lg">→</span>
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
