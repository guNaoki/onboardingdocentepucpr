import Link from 'next/link';
import Image from 'next/image';
import { newsData } from '@/lib/data';
import { FaArrowLeft, FaCalendarDays } from 'react-icons/fa6';

export default function NewsPage() {
  return (
    <div className="container mx-auto px-5 py-10 min-h-screen">
      <Link href="/" className="inline-flex items-center gap-2 text-text-gray hover:text-puc-red mb-8 transition-colors">
        <FaArrowLeft /> Voltar para Home
      </Link>
      
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 text-text-dark">Institucional & Notícias</h1>
        <p className="text-lg text-text-gray max-w-2xl">Acompanhe as novidades, eventos e comunicados oficiais da PUCPR.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <Link 
            key={news.id} 
            href={`/noticias/${news.id}`}
            className="group bg-white rounded-2xl overflow-hidden border border-border-color shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative h-48 overflow-hidden">
              <Image 
                src={news.image} 
                alt={news.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-puc-red shadow-sm">
                {news.author}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-xs text-text-gray mb-3">
                <FaCalendarDays className="text-puc-red" />
                {news.date}
              </div>
              
              <h2 className="text-xl font-bold mb-3 text-text-dark group-hover:text-puc-red transition-colors line-clamp-2">
                {news.title}
              </h2>
              
              <p className="text-text-gray text-sm line-clamp-3 mb-6 flex-grow">
                {news.description}
              </p>
              
              <span className="text-sm font-semibold text-puc-red underline decoration-transparent group-hover:decoration-puc-red transition-all">
                Ler matéria completa
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
