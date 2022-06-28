import express, { Application } from "express";

class App {
  private readonly app: Application;
  constructor() {
    this.app = express();
    this.middlewares();
  }

  private middlewares() {
    this.app.use(express.json());
  }
  listen(port: number): void {
    this.app.listen(port, () =>
      console.log(`Aplicacao rodando na porta ${port}`)
    );
  }
}

export default new App();
