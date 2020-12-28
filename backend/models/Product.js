import mongoose from "mongoose";
import slugify from "slugify";

const productSchema = mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    name: {
      type: String,
      required: [true, "Please add product name"],
      unique: true,
      trim: true,
    },
    slug: String,
    image: {
      type: String,
      required: [true, "Please upload product image"],
    },
    brand: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Please add product description"],
    },
    price: {
      type: Number,
      required: [true, "Please add product price"],
    },
    countInStock: {
      type: Number,
      required: [true, "Please add how many products are there in the stock"],
    },
    isFeatured: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create product slug from name before adding the fields to database;
productSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Product = mongoose.model("Product", productSchema);

export default Product;
