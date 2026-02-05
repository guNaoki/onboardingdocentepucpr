import Link from 'next/link';
import { FaArrowLeft, FaUserTie, FaHandsHoldingCircle, FaHeadset, FaChevronDown } from 'react-icons/fa6';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';

export default function SupportPage() {
  return (
    <div className="container mx-auto px-5 py-10 min-h-screen">
      <FadeIn>
        <Link href="/" className="inline-flex items-center gap-2 text-text-gray hover:text-puc-red mb-8 transition-colors">
          <FaArrowLeft /> Voltar para Home
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-text-dark">Central de Suporte</h1>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Estamos aqui para ajudar. Escolha o canal de atendimento mais adequado para sua necessidade ou consulte nossas perguntas frequentes.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { icon: FaUserTie, title: "RH / Supervisor", desc: "Dúvidas contratuais, benefícios e gestão de carreira.", action: "Agendar Reunião" },
          { icon: FaHandsHoldingCircle, title: "PUC Acolhe", desc: "Apoio psicopedagógico e bem-estar docente.", action: "Solicitar Acolhimento" },
          { icon: FaHeadset, title: "Suporte Técnico", desc: "Problemas com Canvas, login ou equipamentos.", action: "Abrir Chamado" },
        ].map((item, idx) => (
          <StaggerItem key={idx}>
            <div className="bg-white border border-border-color rounded-2xl p-8 text-center transition-all hover:shadow-hover hover:-translate-y-1 hover:border-puc-red group h-full flex flex-col items-center">
              <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-puc-red transition-colors">
                <item.icon className="text-3xl text-puc-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-text-gray mb-8 min-h-[50px]">{item.desc}</p>
              <button className="mt-auto bg-white text-puc-red border border-puc-red px-6 py-2 rounded-full font-semibold hover:bg-puc-red hover:text-white transition-all w-full">
                {item.action}
              </button>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.4} className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {[
            "Como acesso meu e-mail institucional?",
            "Onde encontro o calendário acadêmico atualizado?",
            "Como solicitar crachá de estacionamento?",
            "Qual o prazo para lançamento de notas?"
          ].map((faq, i) => (
            <details key={i} className="group bg-white border border-border-color rounded-lg overflow-hidden cursor-pointer">
              <summary className="flex justify-between items-center p-5 font-medium text-text-dark hover:bg-gray-50 transition-colors">
                {faq}
                <FaChevronDown className="text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-5 pt-0 text-text-gray border-t border-transparent group-open:border-gray-100">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </details>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}