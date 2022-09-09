"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startSession = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = async () => {
    if (!process.env.MONGODB_URI)
        throw new Error("Missing MongoDB URI in .env file");
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URI);
        console.log("Connected to database");
    }
    catch (error) {
        console.log(error);
    }
};
// Start and return a session to support things such as transactions
const startSession = async () => mongoose_1.default.startSession();
exports.startSession = startSession;
//# sourceMappingURL=database.js.map