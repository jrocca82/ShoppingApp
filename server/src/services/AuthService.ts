import jwt from "jsonwebtoken";
import { DocumentDefinition } from "mongoose";
import UserModel from "../models/user.models";
import { I_UserDocument } from "../models/user.models";

const login = async (user: DocumentDefinition<I_UserDocument>) => {
	try {
		const foundUser = await UserModel.findOne({ username: user.username });

		if (!foundUser) {
			try {
				const token = jwt.sign(
					{ _id: user._id?.toString(), name: user.username },
					"secret",
					{
						expiresIn: "2 days",
					}
				);

				return { user, token: token };
			} catch (error) {
				throw error;
			}
		}

		const token = jwt.sign(
			{ _id: foundUser._id?.toString(), name: foundUser.username },
			"secret",
			{
				expiresIn: "2 days",
			}
		);

		return { user, token: token };
	} catch (error) {
		throw error;
	}
};

export default login;
