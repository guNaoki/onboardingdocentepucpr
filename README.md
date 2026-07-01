# PUCPR Onboarding Docente - Next.js Migration

Este projeto é uma modernização da interface de Onboarding Docente da PUCPR, convertida de um protótipo estático (HTML/CSS) para uma aplicação web robusta utilizando o ecossistema mais recente do React.

## 🚀 Tecnologias Utilizadas

- **Next.js 16 (App Router)**: Framework principal para uma experiência de navegação rápida e otimizada.
- **React 19**: Utilizando as mais novas APIs do React para gerenciamento de componentes e interatividade.
- **Tailwind CSS 4**: Estilização moderna com a nova sintaxe de variáveis de CSS e configuração simplificada via `@theme`.
- **TypeScript**: Tipagem estática para garantir maior segurança e manutenibilidade do código.
- **Bun**: Gerenciador de pacotes ultra-rápido para instalação de dependências e execução do projeto.
- **Lucide React & React Icons**: Conjunto de ícones consistentes e leves.

## 🛠️ Principais Mudanças e Melhorias

1. **Componentização**: O código antes repetitivo foi transformado em componentes React reutilizáveis (ex: `GuideCard`, `DocumentFolder`, `TutorialCard`).
2. **Arquitetura de Pastas**: Organização seguindo padrões profissionais de projetos Next.js:
   - `src/components/ui`: Componentes atômicos de interface (Ex: wrappers de animação, cards de tema).
   - `src/components/layout`: Elementos estruturais persistentes (`Sidebar` com suporte a recolhimento e menu mobile responsivo, `Footer`).
   - `src/components/sections`: Grandes blocos funcionais (Hero, Guias, Notícias, Reuniões, Suporte).
3. **Engine de Background Full-Bleed**:
   - Criação de um wrapper de fundo dinâmico e responsivo que cobre toda a largura da tela (inclusive atrás da barra lateral translúcida) na seção Hero.
   - Uso de `ResizeObserver` no cliente para medir dinamicamente a altura do conteúdo e aplicar a mesma altura ao background de forma fluida em qualquer tamanho de janela.
4. **Otimizações Mobile & UX**:
   - **Scroll-Lock**: Bloqueio de rolagem do body quando o menu lateral mobile está aberto para uma experiência sem vazamento de foco.
   - **Prevenção de Transbordo (Overflow)**: Correção do carrossel horizontal de guias para alinhar com o espaçamento lateral da página (`px-5`), evitando barras de rolagem indesejadas no corpo do site.
   - **Padding & Bordas Fluidas**: Ajuste de preenchimento (`p-6`) e arredondamentos (`rounded-[2rem]`) para maximizar a área de leitura em celulares.
5. **Acessibilidade e Modo Escuro (Dark Mode)**:
   - Suporte completo e correções de contraste em páginas internas (Guias e Detalhes de Notícias) adicionando `dark:prose-invert` e `dark:bg-gray-900`.
   - Evitou-se o bug de contraste de "texto claro em fundo claro" nas visualizações detalhadas.
6. **Performance**: 
   - Uso da tag `<Image />` do Next.js para otimização automática de imagens.
   - Carregamento inteligente de fontes via `next/font`.
   - Gerenciamento limpo e otimizado de animações usando `motion` (Framer Motion).

## 📦 Como Executar o Projeto

Certifique-se de ter o [Bun](https://bun.sh/) ou o [Node.js](https://nodejs.org/) instalado.

1. Instale as dependências:
   ```bash
   bun install
   # ou
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   bun dev
   # ou
   npm run dev
   ```

3. Para gerar a versão de produção e testar localmente:
   ```bash
   bun run build && bun start
   # ou
   npm run build && npm start
   ```

## 🚀 Implantação (Deployment)

O projeto está totalmente configurado e otimizado para ser implantado na **Vercel** com apenas alguns cliques, conectando o repositório GitHub correspondente.

---
Desenvolvido com foco em excelência acadêmica, acessibilidade de contraste (WCAG) e facilitação da jornada docente da PUCPR.
