import express from "express";
import mockUsers from "../mocks/mockUsers";

const Router = express.Router();

Router.get("/users", (req, res) => {
    res.send(mockUsers);
});

Router.get("/users/:id", (req, res) => {
    res.send(mockUsers[0]);
})

Router.post("/users/new", (req, res) => {
    console.log(req.body);
    res.status(200).end();
});

Router.put("/users/update/:id", (req, res) => {
    const id = req.params.id;
    console.log(id, req.body);
    res.status(200).end();
});

Router.delete("/users/delete/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.status(200).end();
})