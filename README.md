# Desafio Front-end - MKS Sistemas

O objetivo principal desse teste é avaliar minha capacidade de escrever código limpo, bem testado e reutilizável.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [Getting started](#getting-started)
- [My process](#my-process)
  - [Decisions](#decisions)
  - [Organization](#organization)
  - [Built with](#built-with)
  - [Continued Development](#continued-development)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

O desafio consiste em esenvolver o front-end da solução proposta, Para esse desafio, consumi uma API REST de produtos para exibir a lista de produtos da loja.

A aplicação contem apenas uma página/rota e um carrinho.

1. Loja: A lista de produtos deve ser buscada de nossa API, use um shimmer/skeleton enquanto estiver em loading.

2. Carrinho: O carrinho deve conter todos os produtos selecionados, juntamente com a opção de aumentar a quantidade de cada produto selecionado.

3. Use do Jest e a testing-library para realizar os testes unitários.


#### Funcionalidades

- [x] Carrinho com todas funcionalidades de um ambiente real.
- [x] Skeleton para carregamento de dados da api.
- [x] Feedback ao usuário em caso de sucesso ou erro.
- [x] Testes unitários.
- [x] Responsividade do layout.

### Links

- [Remote repository](https://github.com/trelcray/shopping-cart)

- [Live preview](https://shopping-cart-trelcray.vercel.app)

### Getting started

Você pode utilizar a aplicação disponível na URL de _live preview_ acima. Porém,
caso queira construí-la em sua máquina:

#### Prerequisites

Certifique-se de que sua máquina possui Node 18+ instalado e o gerenciador de
pacotes `npm`.

Certifique-se de ter instalado a extensão do ESlint.

#### Installation

Clone o repositório do projeto para sua máquina.

Using HTTPS:

```bash
https://github.com/trelcray/advice-health.git
```

Using GitHub CLI:

```bash
gh repo clone trelcray/advice-health
```

Navegue para o diretório recém-baixado:

```bash
cd advice-health
```

Instale as dependências do projeto utilizando `npm`:

```bash
npm install
```

#### Development

Para executar o projeto em modo de desenvolvimento, execute o comando:

```bash
npm run dev
```

Isso irá iniciar o servidor de desenvolvimento no endereço
`http://localhost:3000`. Abra seu navegador e cole o endereço para visualizar a
aplicação.

Para executar os teste em ambiente de desenvolvimento.

```bash
npm run test
```

ou

```bash
npm run test:watch
```

#### Building for Production

Para construir o projeto para produção, execute o comando:

```bash
npm run build
```

Isso irá gerar uma versão otimizada e minificada da aplicação na pasta `.next`.

#### Running in Production Mode

Após a construção do projeto, você pode iniciar um servidor em modo de produção
executando o comando:

```bash
npm run start
```

Isso irá iniciar o servidor de produção no mesmo endereço
`http://localhost:3000`. Abra seu navegador e cole o endereço para visualizar a
aplicação otimizada.

## My process

### Decisions

Primeiramente, analisei o escopo do projeto e seus requisitos. Após cuidadosa avaliação, decidi quais tecnologias utilizar e criei a configuração inicial do projeto, incorporando tudo o que havia planejado utilizar.

Em seguida, comecei a desenvolver os componentes e a parte estática da
aplicação. Posteriormente, implementei algumas funcionalidades necessárias e consumi a api. Após concluir essa etapa, criei os testes unitários e realizei o deploy da aplicação na vercel.

### Organization

O Next.js é um framework que possui um padrão de organização de pastas próprio,
o qual passou por uma importante alteração na versão 13.4. No meu projeto, sigo fielmente esses padrões e utilizo a pasta "src" para conter os arquivos específicos do projeto. Além disso, opto por separar as pastas de acordo com as responsabilidades dos componentes. Qualquer recurso que não faça parte do projeto é colocado na raiz do projeto, exceto a pasta "public".

### Built with

#### Technologies, libraries and tools

- React.js
- Next.js
- TypeScript
- Styled-Components
- Material UI
- Jest
- Testing-Library
- Husky
- Prettier
- ESlint
- Lint-staged
- commitlint
- Redux Toolkit
- Tanstack React-Query
- Axios

#### Techniques, concepts and more

- Mobile-first workflow
- Semantic HTML5 markup
- Flexbox / Grid
- Hosted on Vercel

### Continued development

1. SEO 100%.

2. Aprimorar as Telas de carregamento, Erros...

3. testes de integração e E2E.

### What I learned

1. Que é possível utilizar styled-components no lado do servidor.



### Useful resources

1. [Readme Preview](https://markdownlivepreview.com/)

## Author

- GitHub - [trelcray](https://github.com/trelcray)

- LinkedIn - [Thalis Zambarda](https://www.linkedin.com/in/thalis-zambarda/)

## Acknowledgments

Agradeço a [MKS Sistemas](https://mkssistemas.com/) pela oportunidade de demonstrar minhas habilidades na prática. Estou entusiasmado em poder mostrar o que sou capaz de fazer e espero que essa experiência possa contribuir para o processo de seleção.
