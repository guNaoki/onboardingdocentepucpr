import { FaPenToSquare, FaLaptopCode, FaFilePen, FaTableList, FaUsersViewfinder, FaFolder, FaFilePdf, FaFileWord, FaFilePowerpoint } from 'react-icons/fa6';

// --- Guias ---
export const guidesData = [
  {
    id: "plano-de-ensino",
    title: "Criação do Plano de Ensino",
    description: "Passo a passo para estruturar e submeter seu plano no sistema.",
    fullContent: "O Plano de Ensino é o documento norteador da disciplina. Neste guia, você aprenderá a alinhar objetivos de aprendizagem com as competências do curso, definir cronogramas realistas e selecionar bibliografias atualizadas. O sistema acadêmico permite a importação de planos anteriores para facilitar o preenchimento.",
    icon: FaPenToSquare
  },
  {
    id: "canvas-lms",
    title: "Dominando o Canvas LMS",
    description: "Configure sua sala de aula virtual e publique materiais.",
    fullContent: "O Canvas é o nosso Ambiente Virtual de Aprendizagem. Descubra como configurar módulos, criar tarefas, fóruns de discussão e questionários. Aprenda também a utilizar o SpeedGrader para correções ágeis e fornecer feedback multimídia aos alunos.",
    icon: FaLaptopCode
  },
  {
    id: "aplicacao-provas",
    title: "Aplicação de Provas",
    description: "Regras, agendamento e ferramentas para avaliação segura.",
    fullContent: "As avaliações presenciais e online seguem protocolos rigorosos. Consulte as normas para agendamento de provas, uso de bloqueadores de navegador (LockDown Browser) e procedimentos para alunos com necessidades especiais.",
    icon: FaFilePen
  },
  {
    id: "portal-professor",
    title: "Portal do Professor",
    description: "Como lançar frequências, notas e gerenciar diários.",
    fullContent: "O Portal do Professor é sua ferramenta administrativa. Mantenha os diários de classe atualizados, lance frequências diariamente e garanta que as notas parciais sejam divulgadas dentro dos prazos estipulados pelo calendário acadêmico.",
    icon: FaTableList
  },
  {
    id: "engajamento",
    title: "Engajamento em Sala",
    description: "Técnicas e ferramentas para aumentar a participação.",
    fullContent: "Explore metodologias ativas como Sala de Aula Invertida e Aprendizagem Baseada em Projetos (PBL). Conheça ferramentas como Kahoot, Mentimeter e Padlet que estão disponíveis institucionalmente para dinamizar suas aulas.",
    icon: FaUsersViewfinder
  }
];

// --- Documentos ---
export const documentsCategories = [
  { id: "rh", title: "Contratos & RH", icon: FaFolder, count: 4 },
  { id: "plano", title: "Plano de Ensino", icon: FaFolder, count: 2 },
  { id: "politicas", title: "Políticas do Campus", icon: FaFolder, count: 8 },
  { id: "provas", title: "Modelos de Prova", icon: FaFolder, count: 5 },
  { id: "inclusao", title: "Guias de Inclusão", icon: FaFolder, count: 3 },
];

export const allDocuments = [
  { id: 1, name: "Manual do Colaborador.pdf", category: "rh", type: "pdf", size: "2.4 MB", date: "01/02/2026", icon: FaFilePdf },
  { id: 2, name: "Calendário de Pagamentos 2026.pdf", category: "rh", type: "pdf", size: "1.1 MB", date: "15/01/2026", icon: FaFilePdf },
  { id: 3, name: "Modelo de Plano de Ensino.docx", category: "plano", type: "word", size: "450 KB", date: "10/01/2026", icon: FaFileWord },
  { id: 4, name: "Regulamento Disciplinar Discente.pdf", category: "politicas", type: "pdf", size: "3.2 MB", date: "20/01/2026", icon: FaFilePdf },
  { id: 5, name: "Template de Prova Padrão A4.docx", category: "provas", type: "word", size: "120 KB", date: "05/02/2026", icon: FaFileWord },
  { id: 6, name: "Diretrizes de Acessibilidade.pptx", category: "inclusao", type: "ppt", size: "5.6 MB", date: "28/01/2026", icon: FaFilePowerpoint },
  // Adicione mais mock documents conforme necessário
];

// --- Notícias ---
export const newsData = [
  {
    id: "inovacao-ensino",
    title: "Inovação no Ensino",
    description: "Novas metodologias ativas implementadas em todos os cursos de graduação.",
    fullContent: "A PUCPR está liderando uma revolução pedagógica. A partir deste semestre, 100% dos cursos de graduação incorporarão pelo menos 30% de carga horária dedicada a metodologias ativas. Os docentes receberão treinamento especializado e suporte contínuo do CrEAre (Centro de Ensino e Aprendizagem).",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
    date: "04 Fev 2026",
    author: "Diretoria Acadêmica",
    size: "large"
  },
  {
    id: "responsabilidade-social",
    title: "Responsabilidade Social",
    description: "Projetos comunitários em alta.",
    fullContent: "Nossos projetos de extensão alcançaram a marca histórica de 50 comunidades atendidas. Convidamos todos os novos docentes a submeterem propostas de intervenção social que alinhem o conhecimento técnico de suas áreas com as necessidades da população local.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    date: "02 Fev 2026",
    author: "Comunicação Institucional",
    size: "small"
  },
  {
    id: "nossos-valores",
    title: "Nossos Valores",
    description: "Ética e excelência.",
    fullContent: "A missão Marista é o coração da nossa universidade. Promovemos a excelência acadêmica não apenas técnica, mas humana. A ética, a solidariedade e o compromisso com a verdade são pilares que devem permear todas as relações em sala de aula.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
    date: "30 Jan 2026",
    author: "Reitoria",
    size: "small"
  },
  {
    id: "vida-campus",
    title: "Vida no Campus",
    description: "Conheça os espaços de convivência e lazer disponíveis para docentes e alunos.",
    fullContent: "O campus é um organismo vivo. Aproveite os novos espaços de coworking na biblioteca, a academia reformada no bloco de esportes e as áreas verdes de convivência. O bem-estar da nossa comunidade é prioridade.",
    image: "/images/puc.png",
    date: "25 Jan 2026",
    author: "Gestão de Campus",
    size: "medium"
  }
];
