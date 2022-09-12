import "reflect-metadata";
import { AppDataSource } from "./database/dataSource"
import express from "express";
import routes  from "./routes/routes";

class App {
    public express: express.Application

    constructor (){
        AppDataSource.initialize().then(() => {
            const app = express();
            app.use(express.json());
            app.use(routes);
        
            return app.listen(3000, ()=> console.log("Server running"));
            
        })
    }

}

export default new App().express