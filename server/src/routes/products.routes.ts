import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import ProductModel from "../models/product.model";

export default (app: {
	get: (
		arg0: string,
		arg1: {
			(
				req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
				res: Response<any, Record<string, any>>
			): Promise<void>;
			(req: Request, res: Response): Promise<void>;
		}
	) => void;
	post: (arg0: string, arg1: (req: Request, res: Response) => Promise<void>) => void;
	put: (arg0: string, arg1: (req: Request, res: Response) => void) => void;
	delete: (arg0: string, arg1: (req: Request, res: Response) => void) => void;
}) => {
	app.get('/products', async (req: Request, res: Response) => {
		console.log(req.params);
		const { categories } = req.query;
		const products = await ProductModel.find(
			categories ? {
				categories: { $in: categories }
			} : {});
		res.send(products);
	});

	app.get("/products/:id", async (req: Request, res: Response) => {
		try {
			const product = await ProductModel.findById(req.params.id);
			if (product) {
				res.send(product);
			} else {
				res.sendStatus(404).end();
			}
		} catch (error) {
			res.sendStatus(404).end();
		}
	});

	app.post("/products/new", async (req: Request, res: Response) => {
		if (!req.params.isAdmin) {
			res.status(403).end();
		} else {
			const product = await ProductModel.create(req.body);
			if (product) {
				res.status(200).end();
			} else {
				res.status(500).end();
			}
		}
	});

	app.put("/products/update/:id", (req: Request, res: Response) => {
		if (!req.params.isAdmin) {
			res.status(403).end();
		} else {
			ProductModel.findByIdAndUpdate(req.params.id, req.body, (error: any) => {
				if (error) {
					res.status(500).end();
				} else {
					res.status(200).end();
				}
			});
		}
	});

	app.delete("/products/delete/:id", (req: Request, res: Response) => {
		if (!req.params.isAdmin) {
			res.status(403).end();
		} else {
			ProductModel.findByIdAndDelete(req.params.id, req.body, (error) => {
				if (error) {
					res.status(500).end();
				} else {
					res.status(200).end();
				}
			});
		}
	});
};
