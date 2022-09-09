import { Request, Response, NextFunction } from "express";
import admin from "./admin";

const logger = (req: Request, res: Response, next: NextFunction) => {
	console.log(
		"=> ",
		req.method,
		req.url,
		"Admin: ",
		admin(req, res, next),
		"Auth: ",
		req.params.isAuthenticated
	);
	next();
};

export default logger;
