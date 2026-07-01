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

      <article className="bg-white dark:bg-gray-900 border border-border-color dark:border-gray-800 rounded-2xl p-8 md:p-12 shadow-sm text-text-dark dark:text-white transition-colors duration-300">
        <header className="mb-10 pb-8 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-rose-100 dark:bg-rose-950/40 p-3 rounded-lg">
              <guide.icon className="text-puc-red dark:text-rose-400 text-3xl" />
            </div>
            <span className="text-sm font-bold text-puc-red dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 px-3 py-1 rounded-full uppercase tracking-wider">
              Tutorial
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-text-dark dark:text-white leading-tight">
            {guide.title}
          </h1>
          
          <p className="text-xl text-text-gray dark:text-gray-400 leading-relaxed">
            {guide.description}
          </p>

          <div className="flex gap-4 mt-8">
            <button className="flex items-center gap-2 text-sm font-semibold text-text-gray dark:text-gray-400 hover:text-puc-red dark:hover:text-rose-400 transition-colors">
              <FaPrint /> Imprimir
            </button>
            <button className="flex items-center gap-2 text-sm font-semibold text-text-gray dark:text-gray-400 hover:text-puc-red dark:hover:text-rose-400 transition-colors">
              <FaShareNodes /> Compartilhar
            </button>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-text-dark dark:text-gray-200">
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
