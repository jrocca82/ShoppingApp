import React from "react";
import ProductCard from "./ProductCard";

type ProductListProps = {
    products: {
        id: number;
        name: string;
        price: number;
        images: string[];
        categories: string[];
    }[];
};

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="ProductList">
            {products.map((product, index) => {
                return (
                    <ProductCard
                        images={product.images}
                        key={product.id}
                        pull={index % 2 !== 0}
                        productName={product.name}
                        productPrice={product.price}
                        {...products}
                    />
                );
            })}
        </div>
    );
};

export default ProductList;
