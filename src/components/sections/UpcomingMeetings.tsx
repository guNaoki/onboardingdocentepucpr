import { FaCalendarPlus, FaVideo, FaLocationDot, FaClock } from 'react-icons/fa6';
import { FadeIn } from '@/components/ui/MotionWrapper';

const meetings = [
  {
    id: 1,
    title: "Boas-vindas Reitoria & Missão Marista",
    date: "15 Mai",
    time: "09:00 - 10:30",
    location: "Auditório Bloco Amarelo",
    type: "Presencial",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Workshop: Inovação e Metodologias Ativas",
    date: "18 Mai",
    time: "14:00 - 16:00",
    location: "Link Microsoft Teams",
    type: "Online",
    color: "bg-purple-500"
  },
  {
    id: 3,
    title: "Treinamento: Sistemas Acadêmicos e Magister",
    date: "22 Mai",
    time: "10:00 - 12:00",
    location: "Laboratório de Informática 04",
    type: "Presencial",
    color: "bg-red-600"
  }
];

export default function UpcomingMeetings() {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-10 border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center text-red-600">
          <FaCalendarPlus className="text-2xl" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Próximas Reuniões</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Agende-se para os momentos de integração do Onboarding.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {meetings.map((meeting) => (
          <FadeIn key={meeting.id} delay={meeting.id * 0.1}>
            <div className="group p-6 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-red-100 dark:hover:border-red-900/30 hover:shadow-md transition-all duration-300 bg-gray-50/50 dark:bg-gray-800/30">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-gray-900 dark:text-white leading-none mb-1">{meeting.date.split(' ')[0]}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-red-600">{meeting.date.split(' ')[1]}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase ${meeting.color}`}>
                  {meeting.type}
                </span>
              </div>
              
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-red-600 transition-colors">
                {meeting.title}
              </h3>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <FaClock className="text-gray-400" />
                  {meeting.time}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  {meeting.type === 'Online' ? <FaVideo className="text-gray-400" /> : <FaLocationDot className="text-gray-400" />}
                  <span className="truncate">{meeting.location}</span>
                </div>
              </div>
              
              <button className="mt-6 w-full py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:border-red-600 hover:text-red-600 transition-all">
                Adicionar ao Calendário
              </button>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
