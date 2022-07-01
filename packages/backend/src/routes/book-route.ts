import { Router } from "express";
import { BookController } from "../controllers";
import { authentication } from "../middlewares";

const bookController = new BookController();
const BookRouter = Router();

BookRouter.post("/create", authentication, bookController.create);
BookRouter.get("/list", bookController.read);
BookRouter.get("/list/:book_id", bookController.read);
BookRouter.put("/update", authentication, bookController.update);
BookRouter.delete("/delete", authentication, bookController.delete);

export default BookRouter;
