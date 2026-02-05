import { IconType } from 'react-icons';

interface GuideCardProps {
  title: string;
  description: string;
  Icon: IconType;
}

export default function GuideCard({ title, description, Icon }: GuideCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-900 border border-border-color dark:border-gray-800 rounded-radius p-6 flex flex-col transition-all duration-300 min-w-[280px] max-w-[280px] hover:-translate-y-1 hover:shadow-hover dark:hover:shadow-black/50 hover:border-puc-red dark:hover:border-puc-red h-full">
      <div className="bg-rose-50 dark:bg-rose-900/20 w-[50px] h-[50px] flex items-center justify-center rounded-xl mb-4 transition-colors duration-300">
        <Icon className="text-puc-red dark:text-rose-400 text-2xl" />
      </div>
      <h3 className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-puc-red dark:group-hover:text-rose-400 text-text-dark dark:text-gray-100">
        {title}
      </h3>
      <p className="text-xs text-text-gray dark:text-gray-400 mb-5 flex-grow">
        {description}
      </p>
      <button className="w-full py-2.5 rounded-lg border border-puc-red bg-transparent text-puc-red dark:text-rose-400 dark:border-rose-400 font-semibold text-xs cursor-pointer transition-all duration-200 hover:bg-puc-red hover:text-white dark:hover:bg-rose-500 dark:hover:text-white dark:hover:border-rose-500">
        Acessar Guia
      </button>
    </div>
  );
}