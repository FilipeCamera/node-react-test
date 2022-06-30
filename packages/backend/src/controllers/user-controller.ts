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
      if (existUser) throw new AppError("Este usuário já existe!", 500);

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
  async read(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      const id = req.userId;

      const [auth] = await database.from("users").select("*").where({ id });

      if (!auth) throw new AppError("Usuário precisa está autenticado!", 401);

      if (userId) {
        const [user] = await database
          .from("users")
          .select("*")
          .where({ id: userId });

        if (!user) throw new AppError("Usuario nao encontrado", 404);

        return res.status(200).json(user);
      }

      const users = await database.from("users").select("*").returning("*");

      if (users.length === 0)
        throw new AppError("Nenhum usuario encontrado", 404);

      return res.status(200).json(users);
    } catch (e: any) {
      return res.status(e.code).json(e.message);
    }
  }
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {}
}
