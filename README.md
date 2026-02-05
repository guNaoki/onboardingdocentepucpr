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

1. **Componentização**: O código antes repetitivo foi transformado em componentes React reutilizáveis (ex: `GuideCard`, `DocumentFolder`).
2. **Arquitetura de Pastas**: Organização seguindo padrões profissionais:
   - `src/components/ui`: Componentes atômicos de interface.
   - `src/components/layout`: Elementos estruturais como Header e Footer.
   - `src/components/sections`: Grandes blocos da página (Hero, Guias, Notícias).
3. **Performance**: 
   - Uso da tag `<Image />` do Next.js para otimização automática de imagens.
   - Carregamento inteligente de fontes via `next/font`.
4. **Interatividade**: Implementação de carrossel nativo em React e animações CSS otimizadas para interações de suporte (heartbeat).
5. **Estilização Dinâmica**: Migração de variáveis globais de CSS para o motor do Tailwind 4, mantendo a identidade visual da PUCPR (Vermelho e Branco).

## 📦 Como Executar o Projeto

Certifique-se de ter o [Bun](https://bun.sh/) instalado.

1. Instale as dependências:
   ```bash
   bun install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   bun dev
   ```

3. Para gerar a versão de produção:
   ```bash
   bun run build
   ```

---
Desenvolvido com foco em excelência acadêmica e facilitação da jornada docente.
