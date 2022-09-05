import mongoose from "mongoose";
const { Schema } = mongoose;

export default class Product {
    /**
     *
     * @param {string} id
     * @param {string} name
     * @param {number} price
     * @param {Array<string>} images
     *  @param {Array<string>} categories
     */
    constructor({ _id, name, price, images, categories }) {
      this._id = _id;
      this._name = name;
      this._price = price;
      this._images = images;
      this._categories = categories
    }
  
    /**
     * @return {string}
     */
    getId = () => this._id;
  
    /**
     * @return {string}
     */
    getName = () => this._name;
  
    /**
     * @return {number}
     */
    getPrice = () => this._price;

    /**
     * @return {Array<string>}
     */
    getImages = () => this._images;

    /**
     * 
     * @returns {Array<string>}
     */
    getCategories = () => this._categories;
  
    /**
     * @return {{_id: string, name: string, price: number, formattedPrice: string, images: Array<string>}}
     */
    getData = () => ({
      _id: this._id,
      name: this._name,
      price: this._price,
      images: this._images,
      categories: this._categories
    });
  }


export const ProductSchema = new Schema({
  name: String,
  price: String,
  images: [String],
  categories: [String],
});

export const ProductModel = mongoose.model("Product", ProductSchema);
  