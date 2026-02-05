import { IconType } from 'react-icons';

interface GuideCardProps {
  title: string;
  description: string;
  Icon: IconType;
}

export default function GuideCard({ title, description, Icon }: GuideCardProps) {
  return (
    <div className="group bg-white border border-border-color rounded-radius p-6 flex flex-col transition-all duration-300 min-w-[280px] max-w-[280px] hover:-translate-y-1 hover:shadow-hover hover:border-puc-red">
      <div className="bg-rose-50 w-[50px] h-[50px] flex items-center justify-center rounded-xl mb-4 transition-colors duration-300">
        <Icon className="text-puc-red text-2xl" />
      </div>
      <h3 className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-puc-red">
        {title}
      </h3>
      <p className="text-xs text-text-gray mb-5 flex-grow">
        {description}
      </p>
      <button className="w-full py-2.5 rounded-lg border border-puc-red bg-transparent text-puc-red font-semibold text-xs cursor-pointer transition-all duration-200 hover:bg-puc-red hover:text-white">
        Acessar Guia
      </button>
    </div>
  );
}
