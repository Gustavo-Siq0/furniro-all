# Furniro All

Aplicação de e-commerce para móveis e decoração, construída com React, TypeScript e Vite. O projeto inclui catálogo de produtos, carrinho, página individual de produto, checkout e autenticação simples com JWT usando um backend em JSON Server.

## Índice

- [Visão geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando a aplicação](#executando-a-aplicação)
- [Autenticação e autorização](#autenticação-e-autorização)
- [Fluxo de uso](#fluxo-de-uso)
- [Scripts disponíveis](#scripts-disponíveis)
- [Contribuição](#contribuição)

## Visão geral

A Furniro All simula uma loja de móveis com foco em experiência visual moderna e navegação simples. O sistema permite:

- visualizar produtos em destaque;
- acessar a página de shop;
- abrir detalhes do produto;
- adicionar itens ao carrinho;
- realizar cadastro e login;
- acessar áreas protegidas como checkout e contato apenas quando autenticado;
- sair da sessão com logout.

## Tecnologias

- React 19
- TypeScript
- Vite
- React Router DOM
- Zustand
- JSON Server
- JWT (jsonwebtoken)
- bcryptjs
- Lucide React
- React Hot Toast

## Funcionalidades

- Catálogo de produtos com páginas e filtros visuais
- Página individual do produto
- Carrinho de compras
- Layout responsivo
- Cadastro de usuário
- Login com autenticação JWT
- Proteção de rotas para checkout e contato
- Redirecionamento para a página antes solicitada após o login
- Logout com remoção do token do localStorage
- API fake em JSON Server para simular persistência de usuários e produtos

## Estrutura do projeto

```text
furniro-all/
├── db.json
├── index.html
├── package.json
├── README.md
├── server.mjs
├── public/
├── src/
│   ├── api/
│   │   ├── auth.ts
│   │   ├── http.ts
│   │   └── products.ts
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── store/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── App.css
│   ├── auth.ts
│   ├── index.css
│   └── main.tsx
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 18 ou superior
- npm

## Instalação

1. Clone o projeto
2. Acesse a pasta do projeto
3. Instale as dependências:

```bash
npm install
```

## Executando a aplicação

Você precisará abrir dois processos em terminais separados:

### 1) Backend JSON Server com autenticação JWT

```bash
npm run server
```

Esse comando inicia o servidor em:

```text
http://localhost:3001
```

### 2) Frontend Vite

Em outro terminal:

```bash
npm run dev
```

A aplicação ficará disponível em algo como:

```text
http://localhost:5175
```

## Autenticação e autorização

O projeto implementa uma autenticação simples baseada em JWT.

### Fluxo

- O usuário acessa `/single-up` para criar uma conta.
- O cadastro envia os dados para `/register` no backend.
- O backend salva o usuário no `db.json` com a senha criptografada via `bcryptjs`.
- O login envia e-mail e senha para `/login`.
- Se as credenciais forem válidas, o backend retorna um `accessToken`.
- O token é armazenado no `localStorage`.
- As rotas protegidas são verificadas no frontend com `isAuthenticated()`.

### Rotas protegidas

- `/checkout`
- `/contact`

Se um usuário não autenticado tentar acessar uma dessas páginas, será redirecionado automaticamente para `/login`.

### Redirecionamento pós-login

Quando o usuário tenta entrar em uma rota protegida sem estar logado, ele é enviado para a página de login com o estado da rota original. Ao concluir o login com sucesso, ele é redirecionado para a página que tentou acessar.

## Fluxo de uso

1. Acesse a home da loja.
2. Navegue pelo catálogo e selecione um produto.
3. Adicione itens ao carrinho.
4. Tente acessar o checkout.
5. Será redirecionado para login.
6. Crie uma conta ou faça login.
7. Depois de autenticado, acesse checkout e contato normalmente.
8. Use o botão de logout para encerrar a sessão.

## Scripts disponíveis

No arquivo `package.json`, os scripts principais são:

```bash
npm run dev
```
Inicia o frontend em modo de desenvolvimento.

```bash
npm run server
```
Inicia o backend de autenticação e mock da API.

```bash
npm run build
```
Gera a build de produção.

```bash
npm run preview
```
Previsualiza o build gerado.

```bash
npm run lint
```
Executa a checagem de lint do projeto.

## Contribuição

Contribuições são bem-vindas. Para propor melhorias:

1. Crie uma branch de desenvolvimento.
2. Faça suas alterações.
3. Valide com build/lint.
4. Abra um pull request descrevendo as mudanças.

## Observações

- O projeto usa um mock de backend em JSON Server, então é ideal para protótipos, estudos e desenvolvimento local.
- Os dados de usuários ficam em `db.json` dentro do campo `users`.
- O token JWT é gerado no servidor e persistido no cliente via `localStorage`.

## Licença

Este projeto foi desenvolvido para fins de estudo e demonstração de arquitetura front-end com autenticação.

