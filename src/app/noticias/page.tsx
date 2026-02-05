import Link from 'next/link';
import Image from 'next/image';
import { newsData } from '@/lib/data';
import { FaArrowLeft, FaCalendarDays } from 'react-icons/fa6';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';

export default function NewsPage() {
  return (
    <div className="container mx-auto px-5 py-10 min-h-screen">
      <FadeIn>
        <Link href="/" className="inline-flex items-center gap-2 text-text-gray dark:text-gray-400 hover:text-puc-red dark:hover:text-rose-400 mb-8 transition-colors">
          <FaArrowLeft /> Voltar para Home
        </Link>
        
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-text-dark dark:text-white">Institucional & Notícias</h1>
          <p className="text-lg text-text-gray dark:text-gray-400 max-w-2xl">Acompanhe as novidades, eventos e comunicados oficiais da PUCPR.</p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <StaggerItem key={news.id}>
            <Link 
              href={`/noticias/${news.id}`}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-border-color dark:border-gray-800 shadow-sm hover:shadow-hover dark:hover:shadow-black/50 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={news.image} 
                  alt={news.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-puc-red dark:text-rose-400 shadow-sm">
                  {news.author}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-text-gray dark:text-gray-400 mb-3">
                  <FaCalendarDays className="text-puc-red dark:text-rose-400" />
                  {news.date}
                </div>
                
                <h2 className="text-xl font-bold mb-3 text-text-dark dark:text-white group-hover:text-puc-red dark:group-hover:text-rose-400 transition-colors line-clamp-2">
                  {news.title}
                </h2>
                
                <p className="text-text-gray dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                  {news.description}
                </p>
                
                <span className="text-sm font-semibold text-puc-red dark:text-rose-400 underline decoration-transparent group-hover:decoration-puc-red dark:group-hover:decoration-rose-400 transition-all">
                  Ler matéria completa
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
