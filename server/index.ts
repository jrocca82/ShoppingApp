import { config } from "dotenv";
import express, { RequestHandler } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import getUserRoutes from "./src/routes/user.routes";
import getProductRoutes from "./src/routes/products.routes";
import getAuthRoutes from "./src/routes/auth.routes";
import connectDatabase from "./src/scripts/database";
import logger from "./src/middleware/logger";
import admin from "./src/middleware/admin";

config();

connectDatabase();

const app = express();


const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
	origin: 'http://localhost:3000'
}));

app.get("/", (req, res) => {
	res.send("Hello Lorenzo. you are a cutie");
});

getUserRoutes(app);
getProductRoutes(app);
getAuthRoutes(app);
app.use(logger);
app.use(admin as RequestHandler);

app.listen(port, () => {
	console.log("Listening on port", port);
});
