import mongoose from "mongoose";
const { Schema } = mongoose;

export const UserSchema = new Schema({
	email: String,
	username: String,
	role: String,
});

export const UserModel = mongoose.model("User", UserSchema);
