import { FaFolder } from 'react-icons/fa6';

interface DocumentFolderProps {
  title: string;
  filesCount: number;
}

export default function DocumentFolder({ title, filesCount }: DocumentFolderProps) {
  return (
    <div className="group bg-white border border-border-color rounded-radius p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-hover hover:border-puc-red cursor-pointer overflow-hidden relative">
      <div className="text-5xl text-amber-400 mb-4 inline-block transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:text-amber-500">
        <FaFolder />
      </div>
      <h3 className="text-sm font-semibold mb-1 transition-colors duration-300 group-hover:text-puc-red">
        {title}
      </h3>
      <p className="text-[0.7rem] text-text-gray">
        {filesCount} arquivos
      </p>
      
      {/* Tooltip hint equivalent from original CSS */}
      <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 bg-text-dark text-white px-3 py-1 rounded text-[0.7rem] opacity-0 group-hover:opacity-100 group-hover:translate-y-[35px] transition-all duration-300 pointer-events-none whitespace-nowrap">
        Clique para abrir
      </div>
    </div>
  );
}
