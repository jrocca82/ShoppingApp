import { UserModel } from "../models/user.models";
import { Request, Response } from "express";

export default (app: {
	get: (
		arg0: string,
		arg1: {
			(req: Request, res: Response): Promise<void>;
			(req: Request, res: Response): Promise<void>;
		}
	) => void;
	post: (arg0: string, arg1: (req: Request, res: Response) => void) => void;
}) => {
	app.get("/users", async (req: Request, res: Response) => {
		// if (!req.params.isAdmin) {
		// 	res.status(403).end();
		// } else {
			const users = (await UserModel.find()) || [];
			res.send(users);
		// }
	});

	app.get("/users/:id", async (req: Request, res: Response) => {
		try {
			const user = await UserModel.findById(req.params.id);
			if (user) {
				res.send(user);
			} else {
				res.status(404).end();
			}
		} catch (error) {
			res.status(404).end();
		}
	});

	app.post("/users/new", (req: Request, res: Response) => {
		console.log(req.body);
		res.status(200).end();
	});
};
