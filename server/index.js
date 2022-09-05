import { config } from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import db from "./db/index.js";
import getUserRoutes from "./routes/user.routes.js";
import getProductRoutes from "./routes/products.routes.js";
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

getUserRoutes(app);
getProductRoutes(app);

app.listen(port, () => {
	console.log("Listening on port", port);
});
