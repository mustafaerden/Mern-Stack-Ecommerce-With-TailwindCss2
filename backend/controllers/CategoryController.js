import Category from "../models/Category.js";
import ErrorResponse from "../helpers/errorResponse.js";
import asyncHandler from "../middlewares/async.js";
import slugify from "slugify";

/**
 * @desc    Get all Categories
 * @route   GET /api/categories
 * @access  Public(No Auth)
 */
export const getAllCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find({});

  res.status(200).json({
    success: true,
    data: categories,
  });
});

/**
 * @desc    Get single Category
 * @route   GET /api/categories/:id
 * @access  Public(No Auth)
 */
export const getCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(
      new ErrorResponse(`Category not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: category,
  });
});

/**
 * @desc    Create Category
 * @route   POST /api/categories
 * @access  Private
 */
export const createCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.create(req.body);
  res.status(201).json({
    success: true,
    data: category,
  });
});

/**
 * @desc    Update Category
 * @route   PUT /api/categories/:id
 * @access  Private
 */
export const updateCategory = asyncHandler(async (req, res, next) => {
  let category = await Category.findById(req.params.id);

  if (!category) {
    return next(new ErrorResponse(`Category not found`, 404));
  }

  // category = await Category.findByIdAndUpdate(req.params.id, req.body, {
  //   useFindAndModify: false,
  //   new: true,
  //   runValidators: true,
  // });

  category.slug = slugify(req.body.name, { lower: true });
  category.name = req.body.name;

  await category.save();

  res.status(200).json({
    success: true,
    data: category,
  });
});

/**
 * @desc    Delete Category
 * @route   Delete /api/categories/:id
 * @access  Private
 */
export const deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new ErrorResponse(`Category not found`, 404));
  }

  category.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
