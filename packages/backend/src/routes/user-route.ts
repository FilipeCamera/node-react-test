import { Router } from "express";
import { UserController } from "../controllers";
import { authentication } from "../middlewares";

const userController = new UserController();
const UserRouter = Router();

UserRouter.post("/create", userController.create);
UserRouter.get("/list", authentication, userController.read);
UserRouter.get("/list/:userId", authentication, userController.read);
UserRouter.put("/update/:userId", authentication, userController.update);
UserRouter.delete("/delete", authentication, userController.delete);

export default UserRouter;
