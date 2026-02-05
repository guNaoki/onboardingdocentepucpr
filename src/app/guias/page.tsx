import Link from 'next/link';
import { guidesData } from '@/lib/data';
import { FaArrowLeft } from 'react-icons/fa6';

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-5 py-10 min-h-screen">
      <Link href="/" className="inline-flex items-center gap-2 text-text-gray hover:text-puc-red mb-8 transition-colors">
        <FaArrowLeft /> Voltar para Home
      </Link>
      
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-text-dark">Guias Rápidos</h1>
        <p className="text-lg text-text-gray">Tutoriais essenciais para dominar as ferramentas e processos acadêmicos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guidesData.map((guide) => (
          <Link 
            key={guide.id} 
            href={`/guias/${guide.id}`}
            className="group bg-white border border-border-color rounded-radius p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-hover hover:border-puc-red"
          >
            <div className="bg-rose-50 w-14 h-14 flex items-center justify-center rounded-xl mb-6 transition-colors duration-300 group-hover:bg-puc-red">
              <guide.icon className="text-puc-red text-2xl group-hover:text-white transition-colors" />
            </div>
            <h2 className="text-xl font-bold mb-3 group-hover:text-puc-red transition-colors">
              {guide.title}
            </h2>
            <p className="text-text-gray mb-6 flex-grow leading-relaxed">
              {guide.description}
            </p>
            <span className="text-sm font-semibold text-puc-red flex items-center gap-2 group-hover:gap-3 transition-all">
              Ler Guia Completo <span className="text-lg">→</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
