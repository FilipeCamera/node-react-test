import { Router } from "express";
import { BookController } from "../controllers";
import { authentication } from "../middlewares";

const bookController = new BookController();
const BookRouter = Router();

BookRouter.post("/create", authentication, bookController.create);
BookRouter.get("/list", bookController.read);
BookRouter.get("/list/:copy_code", bookController.read);
BookRouter.put("/update/:book_id", authentication, bookController.update);
BookRouter.delete("/delete/:book_id", authentication, bookController.delete);

export default BookRouter;
