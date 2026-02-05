import Link from 'next/link';
import { guidesData } from '@/lib/data';
import { notFound } from 'next/navigation';
import { FaArrowLeft, FaPrint, FaShareNodes } from 'react-icons/fa6';

// Correctly typing params for Next.js 16 dynamic routes
export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guidesData.find((g) => g.id === slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="container mx-auto px-5 py-10 min-h-screen max-w-4xl">
      <Link href="/guias" className="inline-flex items-center gap-2 text-text-gray hover:text-puc-red mb-8 transition-colors">
        <FaArrowLeft /> Voltar para Guias
      </Link>

      <article className="bg-white border border-border-color rounded-2xl p-8 md:p-12 shadow-sm">
        <header className="mb-10 pb-8 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-rose-100 p-3 rounded-lg">
              <guide.icon className="text-puc-red text-3xl" />
            </div>
            <span className="text-sm font-bold text-puc-red bg-rose-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Tutorial
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-text-dark leading-tight">
            {guide.title}
          </h1>
          
          <p className="text-xl text-text-gray leading-relaxed">
            {guide.description}
          </p>

          <div className="flex gap-4 mt-8">
            <button className="flex items-center gap-2 text-sm font-semibold text-text-gray hover:text-puc-red transition-colors">
              <FaPrint /> Imprimir
            </button>
            <button className="flex items-center gap-2 text-sm font-semibold text-text-gray hover:text-puc-red transition-colors">
              <FaShareNodes /> Compartilhar
            </button>
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-text-dark">
          <p className="lead">{guide.fullContent}</p>
          
          {/* Placeholder for real content structure */}
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Introdução</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">2. Passo a Passo</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Acesse o sistema com suas credenciais institucionais.</li>
            <li>Navegue até o menu principal e selecione a opção correspondente.</li>
            <li>Preencha os campos obrigatórios marcados com asterisco (*).</li>
            <li>Revise as informações antes de clicar em "Salvar" ou "Enviar".</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8 rounded-r-lg">
            <p className="text-blue-800 m-0">
              <strong>Dica Importante:</strong> Caso encontre dificuldades técnicas, entre em contato com o suporte imediatamente através do menu de ajuda.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Conclusão</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </article>
    </div>
  );
}
