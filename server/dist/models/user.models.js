"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
exports.UserSchema = new Schema({
    email: String,
    username: String,
    role: String,
});
exports.UserModel = mongoose_1.default.model("User", exports.UserSchema);
//# sourceMappingURL=user.models.js.map