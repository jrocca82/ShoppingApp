"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const user_models_1 = require("../models/user.models");
const product_model_1 = __importDefault(require("../models/product.model"));
const data_1 = require("./data");
(0, dotenv_1.config)();
if (process.env.MONGO_URI) {
    mongoose_1.default.connect(process.env.MONGO_URI);
}
const db = mongoose_1.default.connection;
db.on("error", (error) => {
    console.log(error);
});
db.once("open", () => {
    console.log("Database connection is open");
    user_models_1.UserModel.insertMany(data_1.users, (error) => {
        if (error) {
            console.log(error);
        }
    });
    product_model_1.default.insertMany(data_1.products, (error) => {
        if (error) {
            console.log(error);
        }
    });
});
//# sourceMappingURL=seed.js.map