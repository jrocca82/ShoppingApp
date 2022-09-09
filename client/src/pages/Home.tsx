import React, { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { ProductList } from "../components";
import instance from "../api/axios";
import LoadingIndicator from "../components/LoadingIndicator";
import { products } from "../data/mockData";
import { ProductType } from "../models/product.model";

const Home = () => {
    const [pageProducts, setPageProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const products = await getProducts(instance);
            setPageProducts(products);
            setLoading(false);
        })();
    }, []);

    return loading ? (
        <LoadingIndicator />
    ) : (
        <div className="App">
            <ProductList products={pageProducts} />
        </div>
    );
};

export default Home;
