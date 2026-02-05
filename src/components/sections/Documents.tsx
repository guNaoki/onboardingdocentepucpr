import Link from 'next/link';
import DocumentFolder from '@/components/ui/DocumentFolder';
import { documentsCategories } from '@/lib/data';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';

export default function Documents() {
  return (
    <section className="container mx-auto px-5 py-10" id="documentos">
      <FadeIn className="mb-8 flex justify-between items-end">
        <div>
          <Link href="/documentos">
            <h2 className="text-3xl font-bold mb-2 inline-block relative group cursor-pointer hover:text-puc-red dark:hover:text-rose-400 text-text-dark dark:text-white transition-all duration-300">
              Documentos
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-puc-red transition-all duration-300 group-hover:w-full"></span>
            </h2>
          </Link>
          <p className="text-text-gray dark:text-gray-400">Acesse arquivos importantes organizados por pastas</p>
        </div>
        <Link href="/documentos" className="hidden md:inline-block text-sm font-bold text-puc-red dark:text-rose-400 hover:underline">
          Acessar Central de Documentos →
        </Link>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {documentsCategories.map((doc, index) => (
          <StaggerItem key={index}>
            <Link href="/documentos" className="block h-full">
              <DocumentFolder title={doc.title} filesCount={doc.count} />
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
