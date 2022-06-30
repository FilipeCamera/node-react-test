import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

import jwt from "jsonwebtoken";
import "dotenv/config";

type DataPayload = {
  id: string;
  iat: number;
  exp: number;
};

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw new AppError("Usuario nao autorizado", 401);

    const token = authorization.replace("Bearer", "").trim();

    const resultado = jwt.verify(token, process.env.CHAVE as string);

    const { id } = resultado as DataPayload;

    req.userId = id;

    return next();
  } catch (err: any) {
    return res.status(err.code).json(err.message);
  }
};
