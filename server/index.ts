import { config } from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import getUserRoutes from "./routes/user.routes";
import getProductRoutes from "./routes/products.routes";
import auth from "./middleware/authentication";

config();

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
