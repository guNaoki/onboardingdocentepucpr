import { FaPenToSquare, FaLaptopCode, FaFilePen, FaTableList, FaUsersViewfinder, FaFolder, FaFilePdf, FaFileWord, FaFilePowerpoint, FaBell, FaCalendarCheck, FaCircleExclamation } from 'react-icons/fa6';

// --- Links JIT (Just-In-Time) ---
export const jitLinks = [
  { id: 'magister', title: 'Magister', url: 'https://magister.pucpr.br', description: 'Diário de classe e notas', color: '#B71C1C', image: '/images/magister.png' },
  { id: 'canvas', title: 'Canvas LMS', url: 'https://pucpr.instructure.com', description: 'Ambiente virtual de aprendizagem', color: '#E91E63', image: '/images/canvas.png' },
];

// --- Notificações Acionáveis ---
export const notificationsData = [
  {
    id: 1,
    type: 'warning',
    title: 'Plano de Ensino pendente',
    message: 'O prazo para submissão do plano de Algoritmos encerra em 2 dias.',
    actionLabel: 'Lançar Agora',
    actionUrl: '/guias/plano-de-ensino',
    icon: FaCircleExclamation
  },
  {
    id: 2,
    type: 'info',
    title: 'Treinamento Canvas',
    message: 'Novo módulo de metodologias ativas disponível para sua área.',
    actionLabel: 'Ver Módulo',
    actionUrl: '/guias/canvas-lms',
    icon: FaLaptopCode
  },
  {
    id: 3,
    type: 'success',
    title: 'Diário de Classe',
    message: 'Suas frequências de ontem foram registradas com sucesso.',
    actionLabel: 'Revisar',
    actionUrl: 'https://magister.pucpr.br',
    icon: FaCalendarCheck
  }
];

export type GuideCategory = 'preparacao' | 'interacao' | 'avaliacao';
export type GuidePriority = 'essencial' | 'recomendado' | 'avancado';

export interface Guide {
  id: string;
  title: string;
  description: string;
  fullContent: string;
  icon: any;
  category: GuideCategory;
  priority: GuidePriority;
  duration: string;
}

// --- Guias (Refatorado para Jornada do Docente) ---
export const guidesData: Guide[] = [
  {
    id: "plano-de-ensino",
    category: "preparacao",
    priority: "essencial",
    duration: "5 min",
    title: "Como Criar um Plano de Ensino Nota 10",
    description: "Estruture sua disciplina com foco em competências e metodologias ativas.",
    fullContent: "O Plano de Ensino é o documento norteador da disciplina. Neste guia, você aprenderá a alinhar objetivos de aprendizagem com as competências do curso, definir cronogramas realistas e selecionar bibliografias atualizadas.",
    icon: FaPenToSquare
  },
  {
    id: "configuracao-canvas",
    category: "preparacao",
    priority: "essencial",
    duration: "4 min",
    title: "Configurando sua Turma no Canvas",
    description: "Passo a passo para importar conteúdos e organizar seus módulos iniciais.",
    fullContent: "Antes do semestre começar, certifique-on de que sua sala virtual está pronta. Aprenda a importar o template padrão da PUCPR e organizar as semanas de aula.",
    icon: FaLaptopCode
  },
  {
    id: "canvas-lms",
    category: "interacao",
    priority: "recomendado",
    duration: "Vídeo 6 min",
    title: "Como Engajar Alunos no Canvas",
    description: "Configure sua sala virtual para maximizar a interação e o aprendizado.",
    fullContent: "O Canvas é o nosso Ambiente Virtual de Aprendizagem. Descubra como configurar módulos, criar tarefas, fóruns de discussão e questionários.",
    icon: FaLaptopCode
  },
  {
    id: "metodologias-ativas",
    category: "interacao",
    priority: "recomendado",
    duration: "8 min",
    title: "Aplicando Metodologias Ativas",
    description: "Técnicas práticas para aumentar a participação e o foco dos estudantes.",
    fullContent: "Explore metodologias ativas como Sala de Aula Invertida e Aprendizagem Baseada em Projetos (PBL).",
    icon: FaUsersViewfinder
  },
  {
    id: "aplicacao-provas",
    category: "avaliacao",
    priority: "essencial",
    duration: "5 min",
    title: "Como Aplicar Avaliações com Segurança",
    description: "Regras e ferramentas para garantir a integridade dos exames.",
    fullContent: "As avaliações presenciais e online seguem protocolos rigorosos. Consulte as normas para agendamento de provas e uso de bloqueadores de navegador.",
    icon: FaFilePen
  },
  {
    id: "portal-professor",
    category: "avaliacao",
    priority: "essencial",
    duration: "3 min",
    title: "Lançamento de Notas e Frequências",
    description: "Mantenha seus diários atualizados e evite retrabalho no final do semestre.",
    fullContent: "O Portal do Professor é sua ferramenta administrativa. Mantenha os diários de classe atualizados, lance frequências diariamente e garanta que as notas parciais sejam divulgadas no prazo.",
    icon: FaTableList
  },
  {
    id: "feedback-alunos",
    category: "interacao",
    priority: "avancado",
    duration: "5 min",
    title: "Estratégias de Feedback Contínuo",
    description: "Melhore a percepção de valor dos alunos com feedbacks ágeis e construtivos.",
    fullContent: "O feedback é essencial para o aprendizado. Aprenda a utilizar o SpeedGrader do Canvas para dar retornos personalizados.",
    icon: FaBell
  }
];

// --- Documentos ---
export const documentsCategories = [
  { id: "rh", title: "Contratos & RH", icon: FaFolder, count: 4 },
  { id: "plano", title: "Modelos Pedagógicos", icon: FaFolder, count: 2 },
  { id: "politicas", title: "Regulamentos e Normas", icon: FaFolder, count: 8 },
  { id: "provas", title: "Avaliação e Provas", icon: FaFolder, count: 5 },
  { id: "inclusao", title: "Inclusão e Diversidade", icon: FaFolder, count: 3 },
];

export const allDocuments = [
  { 
    id: 1, 
    name: "Manual do Colaborador 2026.pdf", 
    category: "rh", 
    type: "pdf", 
    size: "2.4 MB", 
    lastUpdated: "12/03/2026", 
    sector: "Recursos Humanos",
    icon: FaFilePdf 
  },
  { 
    id: 2, 
    name: "Calendário de Pagamentos 1º Semestre.pdf", 
    category: "rh", 
    type: "pdf", 
    size: "1.1 MB", 
    lastUpdated: "15/01/2026", 
    sector: "Financeiro",
    icon: FaFilePdf 
  },
  { 
    id: 3, 
    name: "Template de Plano de Ensino - Matriz 2026.docx", 
    category: "plano", 
    type: "word", 
    size: "450 KB", 
    lastUpdated: "10/02/2026", 
    sector: "Diretoria Acadêmica",
    icon: FaFileWord 
  },
  { 
    id: 4, 
    name: "Regulamento Disciplinar Atualizado.pdf", 
    category: "politicas", 
    type: "pdf", 
    size: "3.2 MB", 
    lastUpdated: "20/01/2026", 
    sector: "Secretaria Acadêmica",
    icon: FaFilePdf 
  },
  { 
    id: 5, 
    name: "Manual de Elaboração de Itens de Prova.pdf", 
    category: "provas", 
    type: "pdf", 
    size: "1.5 MB", 
    lastUpdated: "05/03/2026", 
    sector: "CrEAre",
    icon: FaFilePdf 
  },
  { 
    id: 6, 
    name: "Guia de Adaptação Curricular.pptx", 
    category: "inclusao", 
    type: "ppt", 
    size: "5.6 MB", 
    lastUpdated: "28/01/2026", 
    sector: "Núcleo de Apoio Psicopedagógico",
    icon: FaFilePowerpoint 
  },
];

// --- Notícias e Eventos Acadêmicos ---
export const newsData = [
  {
    id: "submissao-projetos-pibic",
    title: "Editais PIBIC 2026",
    description: "Abertas as submissões para projetos de Iniciação Científica. Prazo final em 15 de Junho.",
    fullContent: "O Programa Institucional de Bolsas de Iniciação Científica (PIBIC) está com inscrições abertas...",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
    date: "10 Mai 2026",
    author: "Diretoria de Pesquisa",
    size: "large",
    tag: "Prazo"
  },
  {
    id: "congresso-docente",
    title: "Congresso de Excelência Docente",
    description: "Inscreva-se para compartilhar suas práticas pedagógicas inovadoras.",
    fullContent: "O congresso anual de docentes da PUCPR busca celebrar as melhores práticas...",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
    date: "05 Mai 2026",
    author: "CrEAre",
    size: "small",
    tag: "Evento"
  },
  {
    id: "plano-desenvolvimento",
    title: "Plano de Desenvolvimento Docente",
    description: "Ciclo de feedbacks do PDD inicia na próxima semana. Veja o cronograma.",
    fullContent: "O PDD é fundamental para o crescimento contínuo de nossa comunidade acadêmica...",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
    date: "02 Mai 2026",
    author: "RH Acadêmico",
    size: "small",
    tag: "Aviso"
  },
  {
    id: "festival-comunidade",
    title: "Festival da Comunidade",
    description: "Data confirmada para o evento de integração no campus Curitiba.",
    fullContent: "Prepare-se para um dia de lazer, cultura e integração com seus colegas...",
    image: "/images/puc.png",
    date: "28 Abr 2026",
    author: "Cultura e Esporte",
    size: "medium",
    tag: "Integração"
  }
];
