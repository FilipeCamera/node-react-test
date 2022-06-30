import { Router } from "express";
import { AuthController } from "../controllers";
import UserRouter from "./user-route";

const routes = Router();
const authController = new AuthController();

routes.use("/user", UserRouter);
routes.post("/login", authController.login);
export default routes;
