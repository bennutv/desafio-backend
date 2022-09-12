import 'reflect-metadata';
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "",
    database: "bunne",
    migrations: ["src/database/migrations/**/*.ts"],
    entities: ["src/entities/**/*.ts"]
})


