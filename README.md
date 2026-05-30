# Portal Rick and Morty

Projeto desenvolvido para a disciplina **Web Programming For Front End**, utilizando HTML, CSS e JavaScript para consumo de uma API pública.

## Objetivo

Desenvolver uma aplicação web capaz de consumir dados em tempo real de uma API pública relacionada a desenhos animados, exibindo informações dos personagens através de cards gerados dinamicamente.

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Fetch API
* DOM Manipulation

## API Utilizada

Rick and Morty API

https://rickandmortyapi.com/

A API fornece informações sobre personagens da série Rick and Morty, incluindo:

* Nome
* Imagem
* Status
* Espécie
* Gênero
* Origem
* Localização
* Episódios

## Funcionalidades

### Listagem dinâmica de personagens

Os personagens são carregados diretamente da API utilizando JavaScript e Fetch.

### Busca em tempo real

O usuário pode pesquisar personagens pelo nome.

### Cards dinâmicos

Os cards são criados automaticamente através de JavaScript utilizando:

* createElement()
* appendChild()

### Modal de detalhes

Ao clicar em um personagem é exibida uma janela com informações detalhadas:

* Imagem ampliada
* Nome
* Status
* Espécie
* Gênero
* Origem
* Localização atual
* Quantidade de episódios

## Conceitos Aplicados

### Fetch API

Utilizada para realizar requisições HTTP para a API pública.

### Manipulação do DOM

Utilizada para criar e inserir elementos HTML dinamicamente na página.

### Responsividade

A interface foi desenvolvida para adaptação em diferentes tamanhos de tela.

## Estrutura do Projeto

portal-rick-and-morty/

├── index.html

├── style.css

├── script.js

└── README.md

## Autor

Adalton Gomes

Projeto acadêmico desenvolvido para fins educacionais.
