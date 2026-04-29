import Link from 'next/link';
import Image from 'next/image';
import { newsData } from '@/lib/data';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';

export default function NewsMosaic() {
  return (
    <div className="py-8" id="noticias">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            Novidades na Comunidade
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">O que está acontecendo na PUCPR e na nossa vida acadêmica.</p>
        </div>
        <Link href="/noticias" className="text-xs font-bold text-[#B71C1C] hover:underline uppercase tracking-wider">
          Ver todas as notícias →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[450px]">
        {newsData.map((item, index) => (
          <div 
            key={index} 
            className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border border-gray-100 dark:border-gray-800 shadow-sm
              ${item.size === 'large' ? 'lg:col-span-2 lg:row-span-2 min-h-[300px]' : ''}
              ${item.size === 'medium' ? 'lg:col-span-2 min-h-[200px]' : ''}
              ${item.size === 'small' ? 'min-h-[200px]' : ''}
            `}
          >
            <Link href={`/noticias/${item.id}`} className="block w-full h-full">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{item.date}</span>
                  {('tag' in item) && (
                    <span className="text-[9px] font-bold bg-red-600 text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">
                      {item.tag as string}
                    </span>
                  )}
                </div>
                <h3 className="text-white text-lg font-bold mb-1 leading-tight group-hover:text-rose-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 text-xs line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
