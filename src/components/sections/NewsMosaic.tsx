import Image from 'next/image';

const newsItems = [
  {
    title: "Inovação no Ensino",
    description: "Novas metodologias ativas implementadas em todos os cursos de graduação.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
    size: "large"
  },
  {
    title: "Responsabilidade Social",
    description: "Projetos comunitários em alta.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    size: "small"
  },
  {
    title: "Nossos Valores",
    description: "Ética e excelência.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
    size: "small"
  },
  {
    title: "Vida no Campus",
    description: "Conheça os espaços de convivência e lazer disponíveis para docentes e alunos.",
    image: "/images/puc.png",
    size: "medium"
  }
];

export default function NewsMosaic() {
  return (
    <section className="bg-bg-light py-20" id="noticias">
      <div className="container mx-auto px-5">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-3xl font-bold mb-2 inline-block relative group cursor-default hover:text-puc-red hover:translate-x-2 transition-all duration-300">
            Institucional
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-puc-red transition-all duration-300 group-hover:w-full"></span>
          </h2>
          <p className="text-text-gray">Fique por dentro dos nossos valores e novidades</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 h-auto lg:h-[520px]">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className={`group relative rounded-radius overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                ${item.size === 'large' ? 'lg:col-span-2 lg:row-span-2 h-[300px] lg:h-full' : ''}
                ${item.size === 'medium' ? 'lg:col-span-2 h-[250px] lg:h-full' : ''}
                ${item.size === 'small' ? 'h-[250px] lg:h-full' : ''}
              `}
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
