import Product from "../models/Product.js";
import ErrorResponse from "../helpers/errorResponse.js";
import asyncHandler from "../middlewares/async.js";
import slugify from "slugify";

/**
 * @desc    Get all Products
 * @route   GET /api/products
 * @route   GET /api/categories/:categoryId/products /// products belongs To a Category
 * @access  Public(No Auth)
 */
export const getProducts = asyncHandler(async (req, res, next) => {
  let query;
  // categoryId parametresi gönderildiyse /api/categories/:categoryId/products
  if (req.params.categoryId) {
    // Basically it means select * from products where category=categoryId
    query = Product.find({ category: req.params.categoryId });
  } else {
    // eğer categoryId parametresi yoksa tüm productları çekiyoruz;
    // populate ile category bilgilerini alıyoruz;
    query = Product.find();
  }

  const products = await query;

  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});

/**
 * @desc    Get single Product
 * @route   GET /api/products/:id
 * @access  Public(No Auth)
 */
export const getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorResponse(`Product not found`, 404));
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

/**
 * @desc    Get Featured Products
 * @route   GET /api/products/featured
 * @access  Public(No Auth)
 */
export const getFeaturedProducts = asyncHandler(async (req, res, next) => {
  const featuredProducts = await Product.find({
    isFeatured: true,
  });

  res.status(200).json({
    success: true,
    data: featuredProducts,
  });
});

/**
 * @desc    Create Product
 * @route   POST /api/products
 * @access  Private
 */
export const createProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    data: product,
  });
});

/**
 * @desc    Update Product
 * @route   PUT /api/products/:id
 * @access  Private
 */
export const updateProduct = asyncHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorResponse(`Product not found`, 404));
  }

  if (req.body.name && req.body.name != product.name) {
    product.slug = slugify(req.body.name, { lower: true });
    product.name = req.body.name;
    await product.save();
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: product,
  });
});

/**
 * @desc    Delete Product
 * @route   Delete /api/products/:id
 * @access  Private
 */
export const deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorResponse(`Product not found`, 404));
  }

  product.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
