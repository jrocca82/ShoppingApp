import { Request, Response } from "express";

type Next = () => void | Promise<void>;

const logger = (req: Request, res: Response, next: Next) => {
    console.log("=> ", req.method, req.url, "Admin: ", req.params.isAdmin, "Auth: ", req.params.isAuthenticated);
    next();
};

export default logger