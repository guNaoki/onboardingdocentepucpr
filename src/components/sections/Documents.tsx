import Link from 'next/link';
import DocumentFolder from '@/components/ui/DocumentFolder';
import { documentsCategories } from '@/lib/data';

export default function Documents() {
  return (
    <section className="container mx-auto px-5 py-10" id="documentos">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <Link href="/documentos">
            <h2 className="text-3xl font-bold mb-2 inline-block relative group cursor-pointer hover:text-puc-red hover:translate-x-2 transition-all duration-300">
              Documentos
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-puc-red transition-all duration-300 group-hover:w-full"></span>
            </h2>
          </Link>
          <p className="text-text-gray">Acesse arquivos importantes organizados por pastas</p>
        </div>
        <Link href="/documentos" className="hidden md:inline-block text-sm font-bold text-puc-red hover:underline">
          Acessar Central de Documentos →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {documentsCategories.map((doc, index) => (
          <Link key={index} href="/documentos">
            <DocumentFolder title={doc.title} filesCount={doc.count} />
          </Link>
        ))}
      </div>
    </section>
  );
}
