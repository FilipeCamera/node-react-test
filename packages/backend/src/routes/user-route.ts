import { Router } from "express";
import { UserController } from "../controllers";
import { authentication } from "../middlewares";

const userController = new UserController();
const UserRouter = Router();

UserRouter.post("/create", userController.create);
UserRouter.get("/users", authentication, userController.read);
UserRouter.get("/users/:userId", authentication, userController.read);

export default UserRouter;
