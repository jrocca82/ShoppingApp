import React, { useEffect, useState } from "react";
import getProducts from "../api/getProducts";
import { ProductList } from "../components";
import instance from "../api/axios";
import LoadingIndicator from "../components/LoadingIndicator";
import { products } from "../data/mockData"
import { ProductInstance } from "../models/product";

const Home = () => {
    const [pageProducts, setPageProducts] = useState<ProductInstance[] | undefined>(undefined);
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setPageProducts(products);
        setLoading(false);
    }, [categories]);

    console.log(products);

    return loading ? (
        <LoadingIndicator />
    ) : (
        <div className="App">
            <ProductList products={pageProducts} />
        </div>
    );
};

export default Home;
