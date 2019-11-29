# Desafio BennuBR de Backend

Contrua uma API em NodeJS, que consultará o arquivo _news.json_ e disponibilizará as seguintes rotas:

- Rota para Login, retornando o _JWT_ que será utilizado nas requisições;
- Rota para Logout (rota autenticada com _JWT_);
- Rota para listar notícias (rota autenticada com _JWT_) no formato _JSON_;
- Rota para exibir o detalhe de uma notícia através do _ID_ (rota autenticada com _JWT_) no formato _JSON_;

## Requisitos

- Forkar esse desafio e criar o seu projeto (ou workspace) usando a sua versão desse repositório, tão logo acabe o desafio, submeta um pull request.
- O código precisa rodar em macOS ou Ubuntu (preferencialmente como container Docker)
- Para executar seu código, deve ser preciso apenas rodar os seguintes comandos:
  - git clone \$seu-fork
  - cd \$seu-fork
  - comando para instalar dependências
  - comando para executar a aplicação
- A API pode ser escrita com ou sem a ajuda de _frameworks_
  - Se optar por usar um _framework_ que resulte em _boilerplate code_, assinale no README qual pedaço de código foi escrito por você. Quanto mais código feito por você, mais conteúdo teremos para avaliar.
- A API precisa suportar um volume de 1000 requisições por segundo em um teste de estresse.

## Critério de avaliação

- **Organização do código**
- **Clareza**
- **Assertividade**
- **Legibilidade do código**
- **Segurança**
- **Histórico de commits**
- **Escolhas técnicas**

### Instalação com Docker

Para rodar o projeto é necessário ter o Docker instalado na sua máquina. Caso não tenha, acesse o site [Docker](https://www.docker.com/products/docker-desktop) e baixe a versão correspondente ao seu sistema.

Ápos ter instalado o Docker acesse a pasta do projeto e digite:

`$ docker-compose up`

Será baixado o Docker, instalado o seu projeto e iniciado o serviço, mas caso o serviço não seja iniciado automaticamente é só digitar o comando acima novamente que irá iniciar.

### Instalação no terminal

A API utiliza o **NodeJS v10** ou superior.

Siga os passos abaixo para instalar e realizar o start da API:

1. Acesse o diretório do projeto.
2. `$ npm install`, para instalar todas as dependências.
3. `$ npm start`, para executar o projeto.
4. Será exibida a mensagem: **API rodando na porta 3000** no terminal.

###Rotas

Seguem todas as rotas da API:

| Rotas                                    | Método   | Descrição                                                                                                                                                                                                                            |
| ---------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `http://localhots:3000/`                 | **GET**  | Rota incial de boas vindas.                                                                                                                                                                                                          |
| `http://localhots:3000/api/login`        | **POST** | Rota para se autenticar na API e gerar o token. Para se autenticar será necessário enviar um json no body com {email: seuemail@provedor.com, password: password}. Exemplo: { email: joaosergio@outlook.com, password: bennuTv@2018 } |
| `http://localhots:3000/api/logout`       | **GET**  | Rota para realizar o logout, é necessário o token.                                                                                                                                                                                   |
| `http://localhots:3000/api/noticias`     | **GET**  | Rota para exibir todas as notícias, é necessário o token.                                                                                                                                                                            |
| `http://localhots:3000/api/noticias/:id` | **GET**  | Rota para exibir a notícia com base no **id** passado, é necessário o token.                                                                                                                                                         |

###Dependências

As dependência utilizadas na API são:

- body-parser
- express
- jsonwebtoken
- lodash
- underscore

###Teste

Caso queira realizar um teste de carga, foi implementado o [Artillery](https://artillery.io/) no projeto. Siga os passos abaixo para realizar o teste.

1. Faça o login na API para recuperar o token.
2. Abra o projeto e acesse o arquivo **carga.yml** que está dentro do diretório test.
3. Cole o token em x-access-token e faça as configurações do seu teste neste arquivo.
4. Faça o download da dependência Artillery no modo global: `$ npm install -g artillery`
5. Execute o comando `$ artillery run app/test/carga.yml` para realizar o teste.

> Desenvolvido por Raphael Miquelis
