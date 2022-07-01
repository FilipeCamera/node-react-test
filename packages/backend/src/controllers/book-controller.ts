import { Response, Request } from "express";
import database from "../database/connection";
import { AppError } from "../errors";
import { v4 as uuidv4 } from "uuid";

export class BookController {
  async create(req: Request, res: Response) {
    try {
      const { title, author, isbn, copy_code } = req.body;

      const id = req.userId;

      const root = await database("admins").select("*").where({ id }).first();

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
  async read(req: Request, res: Response) {
    try {
      const { copy_code } = req.params;

      if (copy_code) {
        const [book] = await database("books")
          .select("*")
          .where({ copy_code: copy_code });

        if (!book)
          throw new AppError("Não foi possível encontrar o livro", 404);

        return res.status(200).json(book);
      }

      const books = await database("books").select("*").returning("*");

      if (books.length === 0)
        throw new AppError("Nenhum livro encontrado!", 404);

      return res.status(200).json(books);
    } catch (e: any) {
      return res.status(e.code).json(e.message);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { book_id } = req.params;
      const { title, author, isbn, copy_code } = req.body;
      const id = req.userId;

      const root = await database("admins").select("*").where({ id }).first();

      if (!root)
        throw new AppError("Usuário não tem permissão para editar", 401);

      const [book] = await database("books")
        .where({ id: book_id })
        .update({ title, author, isbn, copy_code })
        .returning("*");

      if (!book) throw new AppError("Não foi possível modificar o livro", 500);

      return res.status(200).json(book);
    } catch (e: any) {
      return res.status(e.code).json(e.message);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { book_id } = req.params;

      const id = req.userId;

      const root = await database("admins").select("*").where({ id }).first();

      if (!root)
        throw new AppError(
          "Usuário não tem permissão para excluir o livro",
          401
        );

      const deleted = await database("books").where({ id: book_id }).delete();

      if (!deleted) throw new AppError("Não foi possível deletar o livro", 500);

      return res.status(200).json({ deleted: true });
    } catch (e: any) {
      return res.status(e.code).json(e.message);
    }
  }
}
