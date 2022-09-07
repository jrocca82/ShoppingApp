import React from "react";
import { ProductInstance } from "../models/product";
import { products } from "../data/mockData";
import ProductCard from "./ProductCard";

type ProductListProps = {
    products: ProductInstance[] | undefined
}

const ProductList = ({products}: ProductListProps) => {
    return (
        <div className="ProductList">
            {products?.map((product, index: number) => {
                return (
                    <ProductCard
                        key={product._id}
                        images={product.images}
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
