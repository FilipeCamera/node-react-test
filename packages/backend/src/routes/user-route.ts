import { Router } from "express";
import { UserController } from "../controllers";

const userController = new UserController();
const UserRouter = Router();

UserRouter.post("/create", userController.create);
UserRouter.get("/users", userController.read);
UserRouter.get("/users/:userId", userController.read);

export default UserRouter;
