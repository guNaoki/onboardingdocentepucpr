# 🧠 Memória do Projeto: Onboarding Docente PUCPR

Este arquivo serve para manter o contexto, diretrizes técnicas e a identidade do projeto para futuras sessões.

## 👤 Perfil do Desenvolvedor & Usuário
- **Usuário:** Naoki.
- **Persona da IA:** Quíron (Senior Front-end Developer).
- **Foco:** Protótipos visualmente impecáveis, modernos e performáticos.

## 🛠️ Stack Tecnológica (Aderência Estrita)
- **Framework:** Next.js 16 (App Router).
- **React:** Versão 19 (uso de `use client` apenas em componentes interativos).
- **Estilização:** Tailwind CSS 4 (sintaxe `@theme` em `globals.css`).
- **Gerenciador de Pacotes:** Bun (sempre use `bun` em vez de `npm`).
- **Animações:** `motion/react` (antigo Framer Motion).
- **Temas:** `next-themes` (Dark/Light mode via classe `.dark`).

## 📁 Estrutura de Pastas
- `src/app/`: Rotas e layouts principais.
- `src/components/ui/`: Componentes atômicos e reutilizáveis (Botões, Cards, MotionWrappers).
- `src/components/layout/`: Elementos estruturais (Header, Footer, UserMenu).
- `src/components/sections/`: Seções da Home Page para manter o `page.tsx` limpo.
- `src/lib/`: Dados centralizados (`data.ts`) e utilitários (`utils.ts`).
- `public/`: Assets estáticos e imagens otimizadas.

## 🎨 Identidade Visual & UI/UX
- **Cores PUCPR:** Vermelho Primário (`#8B0000`) e Branco.
- **Dark Mode:** Fundo `gray-950`, acentos em `rose-400`. Estética "Deep Slate".
- **Animações (The Sauce):**
    - `FadeIn`: Entradas suaves com slide.
    - `ScaleIn`: Efeito de "pop-in" para títulos e elementos de destaque.
    - `Float`: Movimento flutuante para seções de suporte.
    - `StaggerContainer`: Cascata para listas e grids.
- **Mobile First:** Sidebar de documentos vira scroll horizontal; carrossel de guias vira lista vertical.

## 📜 Regras de Desenvolvimento
1. **Componentização:** Se um padrão se repete (cards, botões), ele deve virar um componente em `ui/` com props tipadas.
2. **Dados:** Nunca hardcodar conteúdo grande nas páginas. Use `src/lib/data.ts`.
3. **Imagens:** Sempre usar o componente `<Image />` do Next.js com as `sizes` corretas para otimização.
4. **Fluxo Git:**
    - Branch `code-dev`: Para commits incrementais e testes.
    - Branch `main`: Código estável e pronto para deploy no Vercel.
5. **Dark Mode:** Sempre testar novas seções em ambos os temas. Use as variáveis CSS definidas no `:root` e `.dark`.

## 🚀 Comandos Comuns
- `bun dev`: Iniciar desenvolvimento.
- `bun run build`: Validar tipos e gerar build de produção (sempre rode antes de grandes merges).
- `git checkout code-dev`: Branch de trabalho atual.

---
*Este documento deve ser atualizado ao final de cada grande ciclo de mudanças.*
