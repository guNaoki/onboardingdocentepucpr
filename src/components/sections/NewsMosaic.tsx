import Link from 'next/link';
import Image from 'next/image';
import { newsData } from '@/lib/data';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';

export default function NewsMosaic() {
  return (
    <section className="bg-bg-light dark:bg-gray-950 py-20 transition-colors duration-300" id="noticias">
      <div className="container mx-auto px-5">
        <FadeIn className="mb-10 text-center sm:text-left flex justify-between items-end">
          <div>
            <Link href="/noticias">
              <h2 className="text-3xl font-bold mb-2 inline-block relative group cursor-pointer hover:text-puc-red dark:hover:text-rose-400 text-text-dark dark:text-white transition-all duration-300">
                Institucional
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-puc-red transition-all duration-300 group-hover:w-full"></span>
              </h2>
            </Link>
            <p className="text-text-gray dark:text-gray-400">Fique por dentro dos nossos valores e novidades</p>
          </div>
          <Link href="/noticias" className="hidden md:inline-block text-sm font-bold text-puc-red dark:text-rose-400 hover:underline">
            Ver todas as notícias →
          </Link>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 h-auto lg:h-[520px]">
          {newsData.map((item, index) => (
            <StaggerItem 
              key={index} 
              className={`group relative rounded-radius overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:shadow-none dark:border dark:border-gray-800
                ${item.size === 'large' ? 'lg:col-span-2 lg:row-span-2 h-[300px] lg:h-full' : ''}
                ${item.size === 'medium' ? 'lg:col-span-2 h-[250px] lg:h-full' : ''}
                ${item.size === 'small' ? 'h-[250px] lg:h-full' : ''}
              `}
            >
              <Link href={`/noticias/${item.id}`} className="block w-full h-full">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-bold mb-1 drop-shadow-md group-hover:text-rose-100 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {item.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
