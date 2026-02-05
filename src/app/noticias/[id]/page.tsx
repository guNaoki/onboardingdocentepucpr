import Link from 'next/link';
import Image from 'next/image';
import { newsData } from '@/lib/data';
import { notFound } from 'next/navigation';
import { FaArrowLeft, FaCalendarDays, FaUser } from 'react-icons/fa6';

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = newsData.find((n) => n.id === id);

  if (!news) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-bg-light">
      {/* Hero Header */}
      <div className="relative h-[400px] w-full">
        <Image 
          src={news.image} 
          alt={news.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white container mx-auto">
          <Link href="/noticias" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm font-semibold backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full w-fit">
            <FaArrowLeft /> Voltar para Notícias
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-shadow">{news.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-200">
            <span className="flex items-center gap-2"><FaCalendarDays /> {news.date}</span>
            <span className="flex items-center gap-2"><FaUser /> {news.author}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 py-12 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto prose prose-lg prose-red">
          <p className="lead font-medium text-xl text-text-gray mb-8 border-l-4 border-puc-red pl-4">
            {news.description}
          </p>
          
          <div className="text-text-dark space-y-6">
            <p>{news.fullContent}</p>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <blockquote>
              "A educação é a arma mais poderosa que você pode usar para mudar o mundo."
            </blockquote>
            
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
