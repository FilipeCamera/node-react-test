import { Request, Response } from "express";
import database from "../database/connection";
import { AppError } from "../errors";
import { v4 as uuidv4 } from "uuid";

export class CopyController {
  async create(req: Request, res: Response) {
    try {
      const { copy_code } = req.body;
      const id = req.userId;

      const start = new Date();

      const end = new Date(new Date().setDate(start.getDate() + 7));

      const user = await database("users").select("*").where({ id }).first();

      if (!user) throw new AppError("Usuário não encontrado", 404);

      const book = await database("books")
        .select("*")
        .where({ copy_code })
        .first();

      if (!book) throw new AppError("Livro não encontrado", 404);

      const verifyCopy = await database("copies")
        .where({ user_id: id, book_id: book.id })
        .select("*")
        .first();

      if (verifyCopy)
        throw new AppError("Usuário já tem uma cópia desse livro", 500);

      const [copy] = await database("copies")
        .insert({
          id: uuidv4(),
          user_id: id,
          book_id: book.id,
          start_rent: start,
          return_day: end,
        })
        .returning("*");

      if (!copy) throw new AppError("Não foi possível criar uma cópia", 500);

      return res.status(201).json(copy);
    } catch (e: any) {
      return res.status(e.code | 500).json(e.message);
    }
  }
  async read(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {}
}
