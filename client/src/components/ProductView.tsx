import React from "react";
import { ProductType } from "../models/product.model";
import Button from "./Button";

type ProductViewProps = {
    addToCart: (item: ProductType) => void;
    product: ProductType;
};

const ProductView = ({ addToCart, product }: ProductViewProps) => {
    return (
        <div className="ProductView">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <Button onClick={addToCart} className={"BaseButton PrimaryButton"}>
                🛒 Add to Cart
            </Button>
            {product.images.map((src) => (
                <img src={src} key={src} />
            ))}
        </div>
    );
};

export default ProductView;
