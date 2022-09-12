import "reflect-metadata"
import * as express from "express";
import { createExpressServer } from "routing-controllers";
import { server } from "../configs";
import { LoginController, NewsController } from "../controllers";


export class Server {
  private app: express.Application;

  init(): void {
    this.app = createExpressServer({
      routePrefix: 'api',
      controllers: [LoginController, NewsController]
    })
    console.log("Server Configurado");
  }
  start(): void {
    this.app.listen(server.port, () => {
      console.log("server running at port " + server.port);
    })
  }
}

