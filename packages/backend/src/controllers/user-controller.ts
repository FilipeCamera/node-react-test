import { Response, Request } from "express";
import database from "../database/connection";
import { AppError } from "../errors";
import { v4 as uuidv4 } from "uuid";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const { fullname, cpf, birthdate, cep, address, city, uf } = req.body;

      const [existUser] = await database("users").whereExists(
        database.select("cpf").from("users").whereRaw(`users.cpf = '${cpf}'`)
      );
      console.log(existUser);
      if (existUser) throw new AppError("Este usuário já existe!", 404);

      const [user] = await database("users")
        .insert({
          id: uuidv4(),
          fullname,
          cpf,
          birthdate,
          cep,
          address,
          city,
          uf,
        })
        .returning("*");

      if (!user) throw new AppError("Não foi possível criar o usuãrio!", 500);

      return res.status(201).json(user);
    } catch (e: any) {
      return res.status(e.code).json(e.message);
    }
  }
  async read(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {}
}
