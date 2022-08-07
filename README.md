# Desafio BennuBR de Backend

Contrua uma API em NodeJS, que consultará o arquivo _news.json_ e disponibilizará as seguintes rotas:

- Rota para Login, retornando o _JWT_ que será utilizado nas requisições;
- Rota para Logout (rota autenticada com _JWT_);
- Rota para listar notícias (rota autenticada com _JWT_) no formato _JSON_;
- Rota para exibir o detalhe de uma notícia através do _ID_ (rota autenticada com _JWT_) no formato _JSON_;

## Requisitos
-   Forkar esse desafio e criar o seu projeto (ou workspace) usando a sua versão desse repositório, tão logo acabe o desafio, submeta um pull request.
-   O código precisa rodar em macOS ou Ubuntu (preferencialmente como container Docker)
-   Para executar seu código, deve ser preciso apenas rodar os seguintes comandos:
    -   git clone \$seu-fork
    -   cd \$seu-fork
    -   comando para instalar dependências
    -   comando para executar a aplicação
-   A API pode ser escrita com ou sem a ajuda de _frameworks_
    -   Se optar por usar um _framework_ que resulte em _boilerplate code_, assinale no README qual pedaço de código foi escrito por você. Quanto mais código feito por você, mais conteúdo teremos para avaliar.
-   A API precisa suportar um volume de 1000 requisições por segundo em um teste de estresse.

## Critério de avaliação

-   **Organização do código**
-   **Clareza**
-   **Assertividade**
-   **Legibilidade do código**
-   **Segurança**
-   **Histórico de commits**
-   **Escolhas técnicas**

### :computer: Technologies

* [Node.js](https://nodejs.org/en/)

### :sparkles: Features

The application has the following features:
- [x] Login
- [x] Logout with JWT
- [x] List news with JWT
- [x] List details of a news with JWT


### 🤔 How to get this project?
Clone this project repository:
```bash
$ git clone https://github.com/MarceloAnjs/desafio-backend.git

#Enter in `desafio-backend` folder:

$ cd desafio-backend
```

### :construction: Prerequisites
* **Docker**: 🚨 If you don't have Docker in your machine, you can install it [here](https://docs.docker.com/engine/install/).
* **Docker-Compose**: 🚨 If you don't have Docker-Compose in your machine, you can install it [here](https://docs.docker.com/compose/install/).

### 🐳 Run application

After install Docker and Docker-Compose:

- run the following command: 
```
$ docker-compose up
```

#### 🎰 How run
* First you will need to use one of the following tools
* [Insomnia](https://insomnia.rest/download)
* [Posman](https://www.postman.com)

* The routes of the application is
```
GET  http://localhost:3000/

POST  http://localhost:3000/login

POST  http://localhost:3000/logout

GET  http://localhost:3000/news

GET  http://localhost:3000/news/:id

```


Boa sorte e divirta-se!!!