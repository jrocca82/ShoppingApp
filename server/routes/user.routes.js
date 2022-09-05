import { UserModel } from "../models/user.models.js";

export default (app) => {
	app.get("/users", async (req, res) => {
		if (!req.isAdmin) {
			res.status(403).end();
		} else {
			const users = (await UserModel.find()) || [];
			res.send(users);
		}
	});

	app.get("/users/:id", async (req, res) => {
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

	app.post("/users/new", (req, res) => {
		console.log(req.body);
		res.status(200).end();
	});
};
