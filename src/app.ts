import express, { Application } from "express";
import "reflect-metadata";

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
