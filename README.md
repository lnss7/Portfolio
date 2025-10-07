# My React Vite Project

This project is a portfolio website built using React, TypeScript, and Vite. It utilizes Tailwind CSS for styling, Framer Motion for animations, and React Icons for visual elements.

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or pnpm (recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-react-vite-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd my-react-vite-project
   ```

3. Install the dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Or using pnpm:

   # My React Vite Project

   Projeto portfolio construído com React, TypeScript e Vite. Usa Tailwind CSS para estilização, Framer Motion para animações e MUI para componentes.

   ## Instruções para rodar (em português)

   Siga os passos abaixo para preparar e executar o projeto no seu ambiente local.

   ### Pré-requisitos

   - Node.js (versão 14 ou superior)
   - npm, pnpm ou yarn (qualquer um serve; use o que preferir)

   > Recomendação: use a mesma ferramenta de pacotes que seu time usa (npm é a opção mais comum). O projeto já inclui scripts em `package.json`.

   ### Passos rápidos

   1. Entre na pasta do projeto:

   ```bash
   cd ~/Desktop/my_portfolio1/my-react-vite-project
   ```

   2. Instale dependências (escolha um):

   ```bash
   npm install
   # ou
   pnpm install
   # ou
   yarn
   ```

   3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   pnpm dev
   # ou
   yarn dev
   ```

   Após iniciar, o Vite mostrará a URL local (ex.: http://localhost:5173). Abra-a no navegador. Caso o terminal indique outra porta, use a URL mostrada.

   ### Build de produção

   Para gerar os arquivos otimizados de produção:

   ```bash
   npm run build
   # ou
   pnpm build
   # ou
   yarn build
   ```

   Os arquivos finais serão colocados em `dist/`.

   ### Pré-visualizar a build (opcional)

   Para servir localmente a pasta `dist` e checar a build gerada:

   ```bash
   npm run preview
   # ou
   pnpm preview
   # ou
   yarn preview
   ```

   ### Scripts úteis (do `package.json`)

   - `dev` — inicia o servidor Vite (desenvolvimento)
   - `build` — roda `tsc` e `vite build` (build de produção)
   - `preview` — serve a pasta `dist` gerada para checagem local
   - `lint` — executa ESLint em `src/**/*.{ts,tsx}`

   ### Observações e resolução de problemas

   - Se usar `npm run build` e aparecer erro de TypeScript, execute `npx tsc --noEmit` para ver detalhes.
   - Caso a porta padrão esteja em uso, o Vite normalmente sugere outra porta; use a URL exibida pelo terminal.
   - Se você tiver problemas com cache de dependências, remova `node_modules` e o lockfile (`package-lock.json`, `pnpm-lock.yaml` ou `yarn.lock`) e reinstale.

   ### Estrutura do projeto

   - `src/`: Código-fonte
     - `assets/`: assets (imagens, ícones)
     - `components/`: componentes reutilizáveis
       - `layout/`: cabeçalho, layout
       - `ui/`: componentes de UI (botões animados etc.)
     - `hooks/`: hooks customizados
     - `pages/`: páginas
     - `styles/`: CSS/Tailwind
   - `public/`: arquivos estáticos

   ### Contribuição

   Contribuições são bem-vindas. Abra issues ou PRs para melhorias.

   ## Licença

   MIT
