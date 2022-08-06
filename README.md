# BennuBR Backend Challenge

### About
This project is a news API, where authenticated users can get information about news stored in the database.


### Tools
To make this possible, this project uses NodeJs with Express, MongoDB database, mongose to manage requests to the database, authentication with JWT Web Token. Everything running in a Docker container, using docker compose, building te API with PM2 in a Docker instance.

---
### Requirements


To use this project, you must have installed:

- Docker
- Docker-Compose

or:

- NodeJs
- MongoDB


## Starting
First of all, clone this repositorie running:

```
git clone git@github.com:fellipehfa/desafio-backend.git
cd desafio-backend
```

### Using Docker and docker-compose

Running with all logs:

```
docker-compose up
```

Running with out loock your terminal:
```
docker-compose up -d
```
To see the logs on dokcer container:
```
docker-compose logs -f
```
To build the container again:
```
docker-compose up --build
```

If everything went well, you will see logs like that:
```
node_api    | 19:25:09 0|server  | Server's running on port 3000! ⚡️⚡️⚡️⚡️
node_api    | 19:25:09 0|server  | http://localhost:3000
node_api    | 19:25:09 0|server  | Successfully connected to the database 🤓
```

### Using NodeJS and MongoDB (Local)

Set the constante NODE_ENV to DEV on dotFile (.env).
Install the dependencies running:
```
npm install
```
After that, just run:
```
npm run dev
```
If everything went well, you will see logs like that:
```
Server's running on port 3000! ⚡️⚡️⚡️⚡️
http://localhost:3000
Successfully connected to the database 🤓
```

## Testing
Download the request template by clicking on the link below and importing it into your Postman:

https://www.getpostman.com/collections/86cd998e8daf98c596e9

File > Import > Link  and enter with this link.

OR

Download the JSON file here:
https://github.com/fellipehfa/desafio-backend/tree/master/doc

And import to your Postman

File > Import > File > Upload file and selecting the JSON file.


## Errors
Make sure the ports used are available, if necessary, you can change the ports in the dotEnv (.env) file.

Enter the generated Token in your Postman environment or manually configure it in the request headers.
