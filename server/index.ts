import { config } from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import getUserRoutes from "./src/routes/user.routes";
import getProductRoutes from "./src/routes/products.routes";
import connectDatabase from "./src/scripts/database";
import auth from "./src/middleware/authentication";

config();

connectDatabase();

const app = express();

app.use(cors());

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(auth);

app.get("/", (req, res) => {
	res.send("Hello Lorenzo. you are a cutie");
});

getUserRoutes(app);
getProductRoutes(app);

app.listen(port, () => {
	console.log("Listening on port", port);
});
