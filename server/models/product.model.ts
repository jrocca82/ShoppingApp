import mongoose from "mongoose";
const { Schema } = mongoose;

export const ProductSchema = new Schema({
  name: String,
  price: String,
  images: [String],
  categories: [String],
});

export const ProductModel = mongoose.model("Product", ProductSchema);
  