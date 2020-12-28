import express from "express";
import {
  getProducts,
  getProduct,
  getFeaturedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";
const router = express.Router({ mergeParams: true });

/**
 * @desc    Get all Products
 * @route   GET /api/products
 * @route   GET /api/categories/:categoryId/products /// products belongs To a Category
 */
router.route("/").get(getProducts).post(createProduct);
router.route("/featured").get(getFeaturedProducts);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

export default router;
