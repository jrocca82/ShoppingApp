import { config } from "dotenv";
import express, { RequestHandler } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import getUserRoutes from "./src/routes/user.routes";
import getOrderRoutes from "./src/routes/orders.routes";
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
app.use(helmet());
app.use(cors({
	origin: 'http://localhost:3000'
}));
app.use(logger);
app.use(admin as RequestHandler);

getAuthRoutes(app);
getUserRoutes(app);
getProductRoutes(app);
getOrderRoutes(app);

app.listen(port, () => {
	console.log("Listening on port", port);
});
