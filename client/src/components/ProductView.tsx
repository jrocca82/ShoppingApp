import React, { useState, useEffect } from "react";
import { ProductInstance } from "../models/product";

type ProductViewProps = {
    addToCart: (item: ProductInstance) =>void;
    product: ProductInstance;
}

const ProductView = ({addToCart}: ProductViewProps) => {
    const [product, setProduct] = useState<ProductInstance>();

    useEffect(() => {
        setProduct(product)
    });

    return (
        <div>

        </div>
    )
}

export default ProductView