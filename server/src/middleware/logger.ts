import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../routes/auth.routes";
import admin from "./admin";

const logger = (req: AuthRequest, res: Response, next: NextFunction) => {
	console.log(
		"=> ",
		req.method,
		req.url,
		"Admin: ",
		"Auth: ",
		req.headers.authorization ? 
		req.params.isAuthenticated = "true" : req.params.isAuthenticated = "false"
	);
	next();
};

export default logger;
