import { Request, Response } from "express";

type Next = () => void | Promise<void>;

type Params = {
    isAdmin: boolean,
    isAuthenticated: boolean
}

const auth = (req: Request, res: Response, next: Next) => {
    //TODO: Check auth (role)

    //mock for testing:
    req.params.isAdmin = "true";
    req.params.isAuthenticated = "true";

    next();
}

export default auth;