import { NextFunction, Request, response, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import auth from "../authentication";

test("It adds isAuthenticated and isAdmin flags to req", () => {
	const next: NextFunction = jest.fn();
	const req: any = {}
  	const res: any = {};
	auth(req, res, next);
	expect(req.isAuthenticated).toBe(true);
	expect(req.isAdmin).toBe(true);
});
