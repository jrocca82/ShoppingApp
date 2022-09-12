import UserModel from "../models/user.models";
import login from "../services/AuthService";
import jwt from "jsonwebtoken";
import sendEmail from "../services/EmailService";
//import EmailService from '../service/EmailService';
import { IncomingHttpHeaders } from "http";
import { Request, Response, Express } from "express";
import { decodeToken } from "../helpers/decodeToken";
import { ObjectId } from "mongoose";

export interface AuthRequest extends Request {
	headers: IncomingHttpHeaders & {
		authorization?: string;
	};
}

export default (app: Express) => {
	app.post("/auth", async (req: AuthRequest, res: Response) => {
        if(req.headers.authorization) {
			const token = req.headers.authorization.replace("Bearer ", "");
			const userId = decodeToken(token) as unknown as ObjectId;
			const user = await UserModel.findById(userId);
            res.send(user);
        } else {
            res.sendStatus(401).end()
        }
	});

	app.post("/login", async (req, res) => {
		const { email } = req.body;
		if (email === undefined || email.split("@").length !== 2) {
			return res.sendStatus(400).end();
		}

		const user = await UserModel.findOne({ email });

		if (user) {
			const token = await login(user);
			sendEmail(user, token.token);
			res.sendStatus(200).end();
		} else {
			const newUser = await UserModel.create({
				username: email.split("@")[0],
				email,
				role: "customer",
			});

			const token = jwt.sign(
				{ _id: newUser._id?.toString(), name: newUser.username },
				"secret",
				{
					expiresIn: "2 days",
				}
			);
			console.log("Created a new user: ", newUser);
			sendEmail(newUser, token);
			res.sendStatus(200).end();
		}
	});
};
