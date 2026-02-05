import Link from 'next/link';
import { FaGraduationCap, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-puc-red text-white/80 pt-16 pb-5 mt-auto">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold flex items-center gap-2 hover:scale-105 origin-left transition-transform duration-300 cursor-default">
              <FaGraduationCap /> PUC PR
            </h3>
            <p className="text-sm leading-relaxed">
              Facilitando a jornada docente e promovendo a excelência acadêmica desde o primeiro dia.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 hover:tracking-wider transition-all duration-300 cursor-default">
              Institucional
            </h4>
            <ul className="space-y-3 text-sm">
              {['Sobre a Universidade', 'Carreiras', 'Políticas de Privacidade', 'Imprensa'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white hover:underline transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 hover:tracking-wider transition-all duration-300 cursor-default">
              Links Úteis
            </h4>
            <ul className="space-y-3 text-sm">
              {['Canvas LMS', 'WEBprofessor', 'Biblioteca Digital', 'Calendário Acadêmico'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white hover:underline transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 hover:tracking-wider transition-all duration-300 cursor-default">
              Conecte-se
            </h4>
            <div className="flex gap-4">
              {[FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
                <Link 
                  key={index}
                  href="#" 
                  className="w-[35px] h-[35px] bg-white/20 flex items-center justify-center rounded-full text-white hover:bg-white hover:text-puc-red transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-5 text-center text-xs">
          &copy; {new Date().getFullYear()} PUC PR - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
