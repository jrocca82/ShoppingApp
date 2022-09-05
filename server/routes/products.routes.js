import { ProductModel } from "../models/product.model.js";

export default (app) => {
    app.get("/products", async (req, res) => {
        const { categories } = req.query;
        const categoryList = categories ? categories.split(",") : [];
        const products =
            (await ProductModel.find(
                categoryList.length > 0
                    ? { categories: { $in: categoryList } }
                    : undefined
            )) || [];
        res.send(products);
    });
    
    app.get("/products/:id", async (req, res) => {
        try {
            const product = await ProductModel.findById(req.params.id);
            if (product) {
                res.send(product);
            } else {
                res.status(404).end();
            }
        } catch (error) {
            res.status(404).end();
        }
    });
    
    app.post("/products/new", async (req, res) => {
        const product = await ProductModel.create(req.body);
        if (product) {
            res.status(200).end();
        } else {
            res.status(500).end();
        }
    });
    
    app.put("/products/update/:id", (req, res) => {
        ProductModel.findByIdAndUpdate(req.params.id, req.body, (error) => {
            if (error) {
                res.status(500).end();
            } else {
                res.status(200).end();
            }
        });
    });
    
    app.delete("/products/delete/:id", (req, res) => {
        ProductModel.findByIdAndDelete(req.params.id, req.body, (error) => {
            if (error) {
                res.status(500).end();
            } else {
                res.status(200).end();
            }
        });
    });
}