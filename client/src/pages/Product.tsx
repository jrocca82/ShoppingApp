import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import ProductView from "../components/ProductView";
import { ProductInstance } from "../models/product";

type ProductViewProps = {
    addToCart: (item: ProductInstance) => void;
};

const ProductPage = ({ addToCart }: ProductViewProps) => {
    const [product, setProduct] = useState<ProductInstance>();
    const [loading, setLoading] = useState<boolean>(false);
    
    useEffect(() => {
        setLoading(true);
        setProduct(product);
        setLoading(false);
    }, [product]);

    if (loading || product === undefined) {
        return <LoadingIndicator />;
    }

    return <ProductView product={product} addToCart={addToCart} />;
};

export default ProductPage;
