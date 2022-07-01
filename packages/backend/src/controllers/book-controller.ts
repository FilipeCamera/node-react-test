import { Response, Request } from "express";
import database from "../database/connection";
import { AppError } from "../errors";
import { v4 as uuidv4 } from "uuid";

export class BookController {
  async create(req: Request, res: Response) {
    try {
      const { title, author, isbn, copy_code } = req.body;

      const id = req.userId;

      const [root] = await database("admins").select("*").where({ id });

      if (!root) throw new AppError("Usuário não tem permissão", 401);

      const [book] = await database("books")
        .insert({ id: uuidv4(), title, author, isbn, copy_code })
        .returning("*");

      if (!book) throw new AppError("Não foi possível criar o livro", 500);

      return res.status(201).json(book);
    } catch (e: any) {
      return res.status(e.code).json(e.message);
    }
  }
  async read(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {}
}
