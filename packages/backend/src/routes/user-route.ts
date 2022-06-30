import { Router } from "express";
import { UserController } from "../controllers";

const userController = new UserController();
const UserRouter = Router();

UserRouter.post("/create", userController.create);

export default UserRouter;
