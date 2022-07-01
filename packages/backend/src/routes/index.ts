import { Router } from "express";
import { AuthController } from "../controllers";
import BookRouter from "./book-route";
import UserRouter from "./user-route";

const routes = Router();
const authController = new AuthController();

routes.use("/user", UserRouter);
routes.use("/book", BookRouter);
routes.post("/login", authController.login);

export default routes;
