import { NextFunction, Response } from "express";
import { decodeToken } from "../helpers/decodeToken";
import { AuthRequest } from "../routes/auth.routes";

const admin = (req: AuthRequest, res: Response, next: NextFunction) => {
	if (!req.url.includes("/admin")) {
		next();
		return;
	}

	const token = req.headers.authorization?.replace("Bearer ", "");

	if (!token) {
		res.sendStatus(401);
		next(true);
		return;
	}

	const tokenId = decodeToken(token);
	if (tokenId === "6317f7d173b782748be390b1") {
		next(true);
	} else {
		next(false);
	}
};
export default admin;
