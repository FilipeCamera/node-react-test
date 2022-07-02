import { Router } from "express";
import { CopyController } from "../controllers";
import { authentication } from "../middlewares";

const copyController = new CopyController();
const CopyRouter = Router();

CopyRouter.post("/create", authentication, copyController.create);
CopyRouter.get("/list", authentication, copyController.read);

export default CopyRouter;
