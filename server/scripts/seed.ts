import mongoose from "mongoose";
import { config } from "dotenv";
import { UserModel } from "../models/user.models";
import { ProductModel } from "../models/product.model";
import { users, products } from "./data";

config();

if(process.env.MONGO_URI) {
	mongoose.connect(process.env.MONGO_URI);
}
const db = mongoose.connection;

db.on("error", (error) => {
	console.log(error);
});

db.once("open", () => {
	console.log("Database connection is open");
	UserModel.insertMany(users, (error) => {
		if (error) {
			console.log(error);
		}
	});
	ProductModel.insertMany(products, (error) => {
		if (error) {
			console.log(error);
		}
	});
});
