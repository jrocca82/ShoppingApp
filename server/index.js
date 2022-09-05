import { config } from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import db from "./db/index.js";
import { UserModel } from "./models/user.models.js";
import { ProductModel } from "./models/product.model.js";
import logger from "./middleware/logger.js";
import auth from "./middleware/authentication.js";
import mockUsers from "./mocks/mockUsers.js";

config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(auth);
app.use(logger);

app.get("/", (req, res) => {
	res.send("Hello Lorenzo. you are a cutie");
});

//USER ROUTES

app.get("/users", async (req, res) => {
	const users = (await UserModel.find()) || [];
	res.send(users);
});

app.get("/users/:id", async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.id);
		if (user) {
			res.send(user);
		} else {
			res.status(404).end();
		}
	} catch (error) {
		res.status(404).end();
	}
});

app.post("/users/new", (req, res) => {
	console.log(req.body);
	res.status(200).end();
});

//PRODUCT ROUTES

app.get("/products", async (req, res) => {
	const { categories } = req.query;
	const categoryList = categories ? categories.split(",") : [];
	const products =
		(await ProductModel.find(
			categoryList.length > 0
				? { categories: { $in: categoryList } }
				: undefined
		)) || [];
	res.send(products);
});

app.get("/products/:id", async (req, res) => {
	try {
		const product = await ProductModel.findById(req.params.id);
		if (product) {
			res.send(product);
		} else {
			res.status(404).end();
		}
	} catch (error) {
		res.status(404).end();
	}
});

app.post("/products/new", async (req, res) => {
	const product = await ProductModel.create(req.body);
	if (product) {
		res.status(200).end();
	} else {
		res.status(500).end();
	}
});

app.put("/products/update/:id", (req, res) => {
	ProductModel.findByIdAndUpdate(req.params.id, req.body, (error) => {
		if (error) {
			res.status(500).end();
		} else {
			res.status(200).end();
		}
	});
});

app.delete("/products/delete/:id", (req, res) => {
	ProductModel.findByIdAndDelete(req.params.id, req.body, (error) => {
		if (error) {
			res.status(500).end();
		} else {
			res.status(200).end();
		}
	});
});

//APP LISTEN

app.listen(port, () => {
	console.log("Listening on port", port);
});
