import { Router } from "express";
import { CopyController } from "../controllers";
import { authentication } from "../middlewares";

const copyController = new CopyController();
const CopyRouter = Router();

CopyRouter.post("/create", authentication, copyController.create);
CopyRouter.get("/list", authentication, copyController.read);
CopyRouter.put("/update/:copy_id", authentication, copyController.update);
CopyRouter.delete("/delete/:copy_id", authentication, copyController.delete);

export default CopyRouter;
