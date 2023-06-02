# Guti Store

## Sobre o projeto

Este é um sistema que replica a experiência de um e-commerce simples, trazendo todas a etapas mais importantes que um usuário passa durante sua jornada. O foco do projeto foi o frontend, explorando os recursos do framework Vue.JS e seu sistema de rotas com Vue Router e gerenciamento de estados com Vuex.

## Funcionalidades

-   O projeto possibilita ao usuário:

    -   Visualizar todos os produtos disponíveis na loja
    -   Acessar todas as informações de cada produto
    -   Criar uma conta para gerenciar seus dados
    -   Visualizar itens comprados e quem os vendeu
    -   Cadastrar novos produtos
    -   Remover produtos cadastrados

## Como executar o projeto

Este projeto é focado apenas no Frontend

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

-   [Git](https://git-scm.com)
-   [VSCode](https://code.visualstudio.com/)

É importante instalar a lib Json Server (ela irá simular o backend com as informações)

-   [JSON Server](https://www.npmjs.com/package/json-server)

#### Rodando a aplicação web

```bash

# Clone este repositório
$ git clone https://github.com/pedrogutierresbr/guti-store-vuejs.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd guti-store-vuejs

# Instalar dependências
$ npm install

```

##### Rodando o servidor com o Json Server

```bash

# Abra um terminal novo referenciando a pasta raiz do projeto

# Acesse a pasta API no seu terminal/cmd
$ cd api

#  Execute o servidor
$ json-server --watch api.json

# O servidor será aberto na porta:3000

```

##### Rodando a aplicação Vue.JS

```bash

# Abra um terminal novo referenciando a pasta raiz do projeto

#  Execute a aplicação utilizando
$ npm run serve

# A aplicação será aberta na porta:8080

```

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

-   HTML
-   CSS
-   JavaScript
-   Vue.JS
-   Vue Router
-   Vuex
-   Json Server

## Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito por Pedro Gutierres [Entre em contato!](https://www.linkedin.com/in/pedrogabrielgutierres/)

## Versões do README

[Inglês](./README-en.md)
