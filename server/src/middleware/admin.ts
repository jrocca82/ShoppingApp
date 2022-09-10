import { NextFunction, Request, Response } from "express";
import { decode, JwtPayload } from "jsonwebtoken";
import { AuthRequest } from "../routes/auth.routes";

interface CustomJwtPayload extends JwtPayload {
	_id: string;
}

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

	const decodedToken = decode(token, { complete: true });
	if (!decodedToken?.payload) {
		res.sendStatus(418);
		return;
	}

	const parsedToken = decodedToken.payload as CustomJwtPayload;
	if (parsedToken._id === "6317f7d173b782748be390b1") {
		next(true);
	} else {
		next(false);
	}
};
export default admin;
