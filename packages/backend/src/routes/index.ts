import { Router } from "express";
import UserRouter from "./user-route";

const routes = Router();

routes.use("/user", UserRouter);

export default routes;
