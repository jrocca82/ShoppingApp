import { NextFunction, Request, Response } from "express";
import {  decode, JwtPayload } from 'jsonwebtoken';


interface CustomJwtPayload extends JwtPayload {
	_id: string;
}

const admin = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        throw new Error();
    }
    const decodedToken = decode(token, { complete: true });
    if (!decodedToken?.payload) return res.sendStatus(418);
    const parsedToken = decodedToken.payload as CustomJwtPayload;
    if (parsedToken._id === "6317f7d173b782748be390b1") {
        return true
    } else {
        return false
    }
	next();
};
 export default admin;