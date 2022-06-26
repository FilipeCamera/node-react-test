import express, { Application } from "express";
import "reflect-metadata";
import database from "./database/connection";

database
  .initialize()
  .then(() => {
    console.log("database is running!");
  })
  .catch((err) => console.error(err));

class App {
  private readonly app: Application;
  constructor() {
    this.app = express();
  }

  listen(port: number): void {
    this.app.listen(port, () =>
      console.log(`Aplicacao rodando na porta ${port}`)
    );
  }
}

export default new App();
