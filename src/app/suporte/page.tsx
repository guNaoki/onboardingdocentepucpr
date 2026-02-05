import Link from 'next/link';
import { FaArrowLeft, FaUserTie, FaHandsHoldingCircle, FaHeadset, FaChevronDown } from 'react-icons/fa6';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import { cn } from '@/lib/utils';

export default function SupportPage() {
  return (
    <div className="container mx-auto px-5 py-10 min-h-screen">
      <FadeIn>
        <Link href="/" className="inline-flex items-center gap-2 text-text-gray dark:text-gray-400 hover:text-puc-red dark:hover:text-rose-400 mb-8 transition-colors">
          <FaArrowLeft /> Voltar para Home
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-text-dark dark:text-white">Central de Suporte</h1>
          <p className="text-lg text-text-gray dark:text-gray-400 max-w-2xl mx-auto">
            Estamos aqui para ajudar. Escolha o canal de atendimento mais adequado para sua necessidade ou consulte nossas perguntas frequentes.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { 
            icon: FaUserTie, 
            title: "RH / Supervisor", 
            desc: "Dúvidas contratuais, benefícios e gestão de carreira.", 
            action: "Agendar Reunião",
            color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
          },
          { 
            icon: FaHandsHoldingCircle, 
            title: "PUC Acolhe", 
            desc: "Apoio psicopedagógico e bem-estar docente.", 
            action: "Solicitar Acolhimento",
            color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"
          },
          { 
            icon: FaHeadset, 
            title: "Suporte Técnico", 
            desc: "Problemas com Canvas, login ou equipamentos.", 
            action: "Abrir Chamado",
            color: "bg-rose-50 dark:bg-rose-900/20 text-puc-red dark:text-rose-400"
          },
        ].map((item, idx) => (
          <StaggerItem key={idx}>
            <div className="bg-white dark:bg-gray-900 border border-border-color dark:border-gray-800 rounded-2xl p-8 text-center transition-all hover:shadow-hover dark:hover:shadow-black/50 hover:-translate-y-1 hover:border-puc-red dark:hover:border-rose-500 group h-full flex flex-col items-center">
              <div className={cn("w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors", item.color)}>
                <item.icon className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-dark dark:text-white">{item.title}</h3>
              <p className="text-text-gray dark:text-gray-400 mb-8 min-h-[50px]">{item.desc}</p>
              <button className="mt-auto bg-white dark:bg-transparent text-puc-red dark:text-rose-400 border border-puc-red dark:border-rose-400 px-6 py-2 rounded-full font-semibold hover:bg-puc-red hover:text-white dark:hover:bg-rose-500 dark:hover:text-white dark:hover:border-rose-500 transition-all w-full">
                {item.action}
              </button>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.4} className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center text-text-dark dark:text-white">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {[
            "Como acesso meu e-mail institucional?",
            "Onde encontro o calendário acadêmico atualizado?",
            "Como solicitar crachá de estacionamento?",
            "Qual o prazo para lançamento de notas?"
          ].map((faq, i) => (
            <details key={i} className="group bg-white dark:bg-gray-900 border border-border-color dark:border-gray-800 rounded-lg overflow-hidden cursor-pointer">
              <summary className="flex justify-between items-center p-5 font-medium text-text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                {faq}
                <FaChevronDown className="text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-5 pt-0 text-text-gray dark:text-gray-400 border-t border-transparent group-open:border-gray-100 dark:group-open:border-gray-800">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </details>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
