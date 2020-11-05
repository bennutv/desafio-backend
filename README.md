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

Boa sorte e divirta-se!!!

## Description

That's a bennu-challenge api connected in a sqlite database.
Environment Variables:

| Variable                      | Value                                                                 |
| ----------------------------- | --------------------------------------------------------------------- |
| auth                          | basic or jwt                                                          |
| server_port                   | 3030                                                                  |
| database_dialect              | /* one of 'sqlite' - 'mysql' - 'mariadb' - 'postgres' - 'mssql' */    |
| database_storage              | 'path/to/database.db'  - Only for sqlite                              |
| database_sync                 | true or false                                                         |
| database_force                | true or false                                                         |
| database_host                 | Database host                                                         |
| database_user                 | Database user                                                         |
| database_database_name        | Database name                                                         |
| database_password             | Database password                                                     |
| database_pool_max_connection  | 10000                                                                 |
| database_pool_min_connection  | 100                                                                   |
| database_pool_idle            | 10000                                                                 |
| database_request_timeout      | 300000                                                                |

### Prerequisites

- [Git](https://git-scm.com/) to clone the repository.
- [Node.js](https://nodejs.org/) v12+ to run.

### Using docker to start

```
$ docker-compose up
```

### Installing

```
$ cd src
$ npm install
```

In src folder run next command to run the project

```
$ npm start
```

## Deployment

In the root folder run:

```
$ make release
```

Create a container with the correct image.

## Built With

* [express](https://expressjs.com/pt-br/) - The web framework used
* [mongoose](https://mongoosejs.com/) - The elegant mongodb object modeling for node.js
* [redoc-express](https://www.npmjs.com/package/redoc-express) - The Express Middleware for OpenAPI/Swagger-generated API Reference Documentation
* [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware
