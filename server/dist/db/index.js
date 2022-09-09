"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://loluvulol:VanNuys1@users.5z2tcau.mongodb.net/?retryWrites=true&w=majority");
const db = mongoose_1.default.connection;
db.on('error', (error) => {
    console.error(error);
});
db.once('open', () => {
    console.log('Database connection is open!');
});
exports.default = db;
//# sourceMappingURL=index.js.map