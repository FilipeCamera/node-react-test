import express, { Application } from "express";
import routes from "./routes";

class App {
  private readonly app: Application;
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
  }
  private routes() {
    this.app.use(routes);
  }
  listen(port: number): void {
    this.app.listen(port, () =>
      console.log(`Aplicacao rodando na porta ${port}`)
    );
  }
}

export default new App();
