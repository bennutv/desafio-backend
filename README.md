
## Documentação da API

### Isso dever se realizado para conseguir usar o projeto local

    1 - npm install -D (Para instalar as dependencias de dev)
    2 - Você tem que ter o banco mysql instalado na sua máquina
    3 - npm run dev (Para executar o projeto)
    4- Para executar as migrations rode esse comando ( npm run typeorm -- migration:run -d src/database/dataSource.ts )

#### Cadastro na plataforma

```http
 POST /register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` |  |
| `senha`      | `string` |  |


#### LOgin na plataforma

```http
 POST /auth
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` |  |
| `senha`      | `string` |  |

#### Logout na plataforma

```http
 GET /logout
```

#### Cria noticia

```http
  POST /createNews
```
Se encontra no arquivo news.json

#### Retorna todas as noticias

```http
  GET /find
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `token`      | `string` | **Obrigatório**. token é gerado quando você realiza o login |


#### Retorna todas as noticias com o Id informado

```http
  GET /findNewsById
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `token`      | `string` | **Obrigatório**. token é gerado quando você realiza o login |
| `id`      | `string` | **Obrigatório**. Informar o Id da noticia |

##### OBS: A cópia do Bd está na raiz do projeto(ARQUIVO: sql.sql)

##### Utilizei o Typeorm com o driver mysql, pois acabei tendo problema com meu mongo local.