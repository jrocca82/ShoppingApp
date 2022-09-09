"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_models_1 = require("../models/user.models");
exports.default = (app) => {
    app.get("/users", async (req, res) => {
        // if (!req.params.isAdmin) {
        // 	res.status(403).end();
        // } else {
        const users = (await user_models_1.UserModel.find()) || [];
        res.send(users);
        // }
    });
    app.get("/users/:id", async (req, res) => {
        try {
            const user = await user_models_1.UserModel.findById(req.params.id);
            if (user) {
                res.send(user);
            }
            else {
                res.status(404).end();
            }
        }
        catch (error) {
            res.status(404).end();
        }
    });
    app.post("/users/new", (req, res) => {
        console.log(req.body);
        res.status(200).end();
    });
};
//# sourceMappingURL=user.routes.js.map