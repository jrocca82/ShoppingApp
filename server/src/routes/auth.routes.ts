import UserModel from "../models/user.models";
import login from "../services/AuthService";
import jwt from "jsonwebtoken";
import sendEmail from "../services/EmailService";
//import EmailService from '../service/EmailService';
import { IncomingHttpHeaders } from "http";
import { Request, Response } from "express";

interface AuthRequest extends Request {
	headers: IncomingHttpHeaders & {
		authorization: string;
	};
}

export default (app: {
	post: (
		arg0: string,
		arg1: {
			(req: any, res: any): Promise<void>;
			(req: any, res: any): Promise<any>;
		}
	) => void;
}) => {
	app.post("/auth", async (req: AuthRequest, res: Response) => {
        if(req.headers.authorization) {
            res.sendStatus(200).end()
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
