# Desafio BennuBR de Backend

Contrua uma API em NodeJS, que consultará o arquivo _news.json_ e disponibilizará as seguintes rotas:

- [x] Rota para Login, retornando o _JWT_ que será utilizado nas requisições;
- [x] Rota para Logout (rota autenticada com _JWT_);
- [x] Rota para listar notícias (rota autenticada com _JWT_) no formato _JSON_;
- [x] Rota para exibir o detalhe de uma notícia através do _ID_ (rota autenticada com _JWT_) no formato _JSON_;

## Para rodar o projeto
- git clone https://github.com/felipesilvarosa/desafio-backend.git
- cd \desafio-backend
- docker-compose up

## Technologias utilizadas
 - node 16
 - TypeScript
 - mongoDB
 - express
 - docker
 - bcryptjs
 - dotenv
 - express
 - express-async-errors
 - jsonwebtoken
 - mongoose
 - ts-node-dev
 - uuid

## Rotas da aplicação
- Accounts
    - post /accounts
        - Rota para criação de nova contas
            - body:
                - {
                    name,
                    password,
                    email
                  }
            
    - post /accounts/auth
        - Rota para login
            - body:
                - {
                    email,
                    password,
                  }
            - response:
                {
                    data: {
                        tokens: {
                            token
                            refreshToken
                        }
                    }
                    message,
                    status
                }
    - post /accounts/token/refresh
        - Rota para dar refresh no token de autenticação
            - body
                - {
                    refreshToken
                  }
    - delete /accounts/logout
        - Rota para "deslogar"
            - headers
              - Authorization: Bearer Token

- News
    - get /news/list
        - Rota para buscar listas de noticias
            - headers
              - Authorization: Bearer Token
            - response:
                {
                    data:[
                        {
                            _id,
                            title
                        }
                    ],
                     message,
                    status
                } 
    - get /news/list/:id
        - Rota para buscar noticia pelo id
            - headers
              - Authorization: Bearer Token
            - response:
                {
                    data:[
                        {
                            _id,
                            publisher_name,
                            title,
                            subtitle,
                            image_url,
                            date,
                            publisher_media,
                            news_category_id,
                            publisher_media_2
                        }
                    ],
                     message,
                    status
                }


