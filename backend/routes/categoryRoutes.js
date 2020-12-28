import express from "express";
import productsRouter from "./productRoutes.js";
const router = express.Router();
import {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/CategoryController.js";

// Products belongs to Category;
router.use("/:categoryId/products", productsRouter);

router.route("/").get(getAllCategories).post(createCategory);
router
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

export default router;
