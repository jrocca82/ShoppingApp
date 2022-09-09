import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../api/axios";
import { getProductsById } from "../api/products";
import LoadingIndicator from "../components/LoadingIndicator";
import ProductView from "../components/ProductView";
import { ProductType } from "../models/product.model";

type ProductViewProps = {
    addToCart: (item: ProductType) => void;
};

const ProductPage = ({ addToCart }: ProductViewProps) => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType>();
    const [loading, setLoading] = useState<boolean>(false);
    
    useEffect(() => {
        (async () => {
            setLoading(true);
            const product = await getProductsById(instance, id);
            setProduct(product);
            setLoading(false);
        })();
    }, [id]);

    if (loading || product === undefined) {
        return <LoadingIndicator />;
    }

    return <ProductView product={product} addToCart={() => addToCart(product)} />;
};

export default ProductPage;
