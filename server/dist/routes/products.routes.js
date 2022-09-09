"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../models/product.model"));
exports.default = (app) => {
    app.get('/products', async (req, res) => {
        try {
            const products = await product_model_1.default.find();
            res.send(products);
        }
        catch (err) {
            res.send(404).end();
        }
    });
    // app.get("/products/:id", async (req: Request, res: Response) => {
    // 	try {
    // 		const product = await ProductModel.findById(req.params.id);
    // 		if (product) {
    // 			res.send(product);
    // 		} else {
    // 			res.status(404).end();
    // 		}
    // 	} catch (error) {
    // 		res.status(404).end();
    // 	}
    // });
    // app.post("/products/new", async (req: Request, res: Response) => {
    // 	if (!req.params.isAdmin) {
    // 		res.status(403).end();
    // 	} else {
    // 		const product = await ProductModel.create(req.body);
    // 		if (product) {
    // 			res.status(200).end();
    // 		} else {
    // 			res.status(500).end();
    // 		}
    // 	}
    // });
    // app.put("/products/update/:id", (req: Request, res: Response) => {
    // 	if (!req.params.isAdmin) {
    // 		res.status(403).end();
    // 	} else {
    // 		ProductModel.findByIdAndUpdate(req.params.id, req.body, (error: any) => {
    // 			if (error) {
    // 				res.status(500).end();
    // 			} else {
    // 				res.status(200).end();
    // 			}
    // 		});
    // 	}
    // });
    // app.delete("/products/delete/:id", (req: Request, res: Response) => {
    // 	if (!req.params.isAdmin) {
    // 		res.status(403).end();
    // 	} else {
    // 		ProductModel.findByIdAndDelete(req.params.id, req.body, (error) => {
    // 			if (error) {
    // 				res.status(500).end();
    // 			} else {
    // 				res.status(200).end();
    // 			}
    // 		});
    // 	}
    // });
};
//# sourceMappingURL=products.routes.js.map