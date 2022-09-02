import { config } from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import logger from "./middleware/logger";
import auth from "./middleware/authentication";
import mockUsers from "./mocks/mockUsers";

config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(auth);
app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello Lorenzo. you are a cutie")
});

app.get("/users", (req, res) => {
    res.send(mockUsers);
});

app.get("/users/:id", (req, res) => {
    res.send(mockUsers[0]);
});

app.post("/users/new", (req, res) => {
    console.log(req.body);
    res.status(200).end();
});

app.listen(port, () => {
    console.log("Listening on port", port);
});