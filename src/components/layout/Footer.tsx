import Link from 'next/link';
import { FaGraduationCap, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-white/45 dark:bg-black/35 backdrop-blur-lg border-t border-gray-200/40 dark:border-gray-800/50 text-gray-600 dark:text-gray-400 pt-16 pb-6 mt-12 transition-all duration-300">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div className="space-y-4">
            <h3 className="text-[#B71C1C] dark:text-red-500 text-2xl font-bold flex items-center gap-2 hover:scale-105 origin-left transition-transform duration-300 cursor-default">
              <FaGraduationCap /> PUCPR
            </h3>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Facilitando a jornada docente e promovendo a excelência acadêmica desde o primeiro dia.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-5 hover:tracking-wider transition-all duration-300 cursor-default">
              Institucional
            </h4>
            <ul className="space-y-3 text-sm">
              {['Sobre a Universidade', 'Carreiras', 'Políticas de Privacidade', 'Imprensa'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-[#B71C1C] dark:hover:text-red-500 transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-5 hover:tracking-wider transition-all duration-300 cursor-default">
              Links Úteis
            </h4>
            <ul className="space-y-3 text-sm">
              {['Canvas LMS', 'WEBprofessor', 'Biblioteca Digital', 'Calendário Acadêmico'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-[#B71C1C] dark:hover:text-red-500 transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-5 hover:tracking-wider transition-all duration-300 cursor-default">
              Conecte-se
            </h4>
            <div className="flex gap-4">
              {[FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
                <Link 
                  key={index}
                  href="#" 
                  className="w-[35px] h-[35px] bg-gray-150/50 dark:bg-gray-800 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-[#B71C1C] hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200/40 dark:border-gray-800/30 pt-5 text-center text-xs text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} PUCPR - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
