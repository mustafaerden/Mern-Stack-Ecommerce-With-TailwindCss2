import mongoose from "mongoose";
import slugify from "slugify";

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Please add category name"],
    },
    slug: String,
  },
  {
    timestamps: true,
  }
);

// Create category slug from name before adding the fields to database;
categorySchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
