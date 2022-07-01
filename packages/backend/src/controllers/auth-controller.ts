import { Request, Response } from "express";
import database from "../database/connection";
import { AppError } from "../errors";

import jwt from "jsonwebtoken";

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { cpf, code_access } = req.body;

      if (code_access) {
        const [root] = await database
          .from("admins")
          .select("*")
          .where({ code_access: code_access });

        if (!root) throw new AppError("Usuário não encontrado!", 404);

        const token = jwt.sign({ id: root.id }, `${process.env.CHAVE}`, {
          expiresIn: "1d",
        });

        return res.status(200).json({ token: token });
      }

      const [user] = await database
        .from("users")
        .select("*")
        .where({ cpf: cpf });

      if (!user) throw new AppError("Usuário não encontrado!", 404);

      const token = jwt.sign({ id: user.id }, `${process.env.CHAVE}`, {
        expiresIn: "1d",
      });

      return res.status(200).json({ token: token });
    } catch (e: any) {
      return res.status(e.code).json(e.message);
    }
  }
}
