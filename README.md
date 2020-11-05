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
| secret                        | string to be the secret for your jwt authentication                   |
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

You can just use one command and start to use

```
$ docker-compose up
```

Or you can build the image and run using commands below

```
$ docker build -t bennu-challenge:latest .
$ docker run -d -p 3030:3030 bennu-challenge:latest
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

* [express](https://expressjs.com/pt-br/) - The web framework used.
* [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
* [swagger](https://www.npmjs.com/package/swagger-ui-express) - This module allows you to serve auto-generated swagger-ui generated API docs from express, based on a swagger.json file.
* [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
* [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
* [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - This was developed against draft-ietf-oauth-json-web-token-08. It makes use of node-jws.
* [lodash](https://www.npmjs.com/package/lodash) - The Lodash library exported as Node.js modules.
* [md5](https://www.npmjs.com/package/md5) - A JavaScript function for hashing messages with MD5.
* [memory-cache](https://www.npmjs.com/package/memory-cache) - A simple in-memory cache for node.js.
* [sqlite3](https://www.npmjs.com/package/sqlite3) - Asynchronous, non-blocking SQLite3 bindings for Node.js.
* [winston](https://www.npmjs.com/package/winston) - A logger for just about everything.
