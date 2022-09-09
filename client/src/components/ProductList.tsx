import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../models/product.model";
import ProductCard from "./ProductCard";

type ProductListProps = {
    products: ProductType[];
};

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="ProductList">
            {products?.map((product, index: number) => {
                return (
                    <Link
                        key={product._id}
                        to={`/product/${product._id}`}
                        style={
                            index % 2 !== 0
                                ? { alignSelf: "flex-end" }
                                : undefined
                        }
                    >
                        <ProductCard
                            key={product._id}
                            images={product.images}
                            pull={index % 2 !== 0}
                            productName={product.name}
                            productPrice={+product.price}
                            {...products}
                        />
                    </Link>
                );
            })}
        </div>
    );
};

export default ProductList;
