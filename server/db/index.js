import mongoose from "mongoose";
import { config } from "dotenv";

config();

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.on("error", (error) => {
	console.log(error);
});

db.once("open", () => {
	console.log("Database connection is open");
});

export default db;

