import DocumentFolder from '@/components/ui/DocumentFolder';

const documents = [
  { title: "Contratos & RH", filesCount: 4 },
  { title: "Plano de Ensino", filesCount: 2 },
  { title: "Políticas do Campus", filesCount: 8 },
  { title: "Modelos de Prova", filesCount: 5 },
  { title: "Guias de Inclusão", filesCount: 3 },
];

export default function Documents() {
  return (
    <section className="container mx-auto px-5 py-10" id="documentos">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 inline-block relative group cursor-default hover:text-puc-red hover:translate-x-2 transition-all duration-300">
          Documentos
          <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-puc-red transition-all duration-300 group-hover:w-full"></span>
        </h2>
        <p className="text-text-gray">Acesse arquivos importantes organizados por pastas</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {documents.map((doc, index) => (
          <DocumentFolder key={index} {...doc} />
        ))}
      </div>
    </section>
  );
}
