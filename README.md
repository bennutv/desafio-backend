Bennu TV
API desenvolvida para teste de técnico no processo seletivo da equipe Bennu TV.

Tecnologias / Metodologias, utilizadas no projeto:

- Node.js
- express.js
- docker
- nodemon
- GitFlow
- cluster
- Jwt

Pré-requisitos:

Antes de mais nada, verifique se você possui os requisitos para rodar o projeto.

- Docker-compose
- node
- npm

Instruções para instalação e configuração:

Essas instruções farão com que você tenha uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

Instalação
É bem simples, com 4 passos você conseguirá rodar o projeto em sua máquina. Veja:

1) Clone o projeto para sua máquina

git clone https://github.com/victorhugooleal/desafio-backend.git


2) Entre na pasta raiz do projeto que você acabou de clonar

cd desafio-backend

3) Rode o comando:

npm i

4) rode o comando:

docker-compose up

Pronto, a API estará rodando em http://localhost:3000

Para rodar o teste de Carga será necessário a instalação do artillery:

npm install -g artillery

para executar o teste basta executar o comando:

artillery run testeCarga.yml

Autor
Victor Leal - https://www.linkedin.com/in/victor-hugo-leal-46ba74105

Agradecimentos
Equipe Bennu TV, pela oportunidade.