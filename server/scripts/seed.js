import mongoose from "mongoose";
import { config } from "dotenv";
import { UserModel } from "../models/user.models.js";
import { ProductModel } from "../models/product.model.js";
import { users, products } from "./data.js";

config();

mongoose.connect(process.env.MONGO_URI);
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
