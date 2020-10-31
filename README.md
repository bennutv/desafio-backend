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

## Instruções Para execução do projeto

<br>

### Rodar os tests unitários e testes de integração
<hr>
<br>

* Instale as dependências
<br>
`npm install`  ou  `yarn install`

* Rode os testes
<br>
`npm run test`  ou  `yarn test`
<br>
<br>

### Rodar Aplicação com container Docker
<hr>
<br>
Para rodar a aplicação no docker, caso você tenha instalado o <a href="https://docs.docker.com/compose/">docker-compose</a>. Basta rodar o comando:
<br>
<br>

`docker-compose up`.

<br>
Caso não queira usar o orquestrador <a href="https://docs.docker.com/compose/">docker-compose</a>, você pode subir a imagem manualmente executando os comandos abaixo em sequência:

<br>
<br>

Montar imagem do container:

 `docker build -t glauber/desafioBennuBr .`

 <br>

Rodar a imagem criada: 

`docker run -p 3000:3000 -d glauber/desafioBennuBr`

<br>

### Rodar Aplicação diretamente na máquina
<hr>

<br>

* Instale as dependências
<br>

`npm install`  ou  `yarn install`

<br>

* Rode a aplicação para produção
<br>

`npm start`  ou  `yarn start`

<br>

* Rode a aplicação para desenvolvimento
<br>

`npm run dev`  ou  `yarn dev`

<br>

### Documentação da API do desafio
<hr>

<br>

<a href="https://documenter.getpostman.com/view/7815838/TVYKbwpc">Documentação API - BENNU DESAFIO</a>

<br>

### Collection para POSTMAN
<hr>

<br>

<a href="https://www.getpostman.com/collections/cf255307af96396963f7">Collection para POSTMAN</a>

<br>

Obrigado pela oportunidade de participar desse processo, espero atender aos requisitos e poder somar junto a vocês.

 


