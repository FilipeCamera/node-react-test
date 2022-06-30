import { Response, Request } from "express";
import database from "../database/connection";

export class UserController {
  async create(req: Request, res: Response) {
    const { fullname, cpf, birthdate, cep, address, city, uf } = req.body;

    const existUser = database("users").whereExists(
      database.select("*").from("users").whereRaw(`users.cpf = ${cpf}`)
    );
  }
  async read(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {}
}
