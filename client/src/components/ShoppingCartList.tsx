import React, { useState } from "react";
import instance from "../api/axios";
import { getProducts } from "../api/products";
import { ProductType } from "../models/product.model";
import Button from "./Button";
import ProductCard from "./ProductCard";

type ShoppingCartProps = {
    items?: ProductType[];
    removeFromCart: (index: number) => void;
    startCheckout: (e: any) => void;
};

const ShoppingCartList = ({
    items,
    removeFromCart,
    startCheckout,
}: ShoppingCartProps) => {
    return items ? (
        <div>
            {items.map((item) => {
                return (
                    <ProductCard
                        key={item._id}
                        productName={item.name}
                        productPrice={+item.price}
                        images={item.images}
                    />
                );
            })}
            <Button
                onClick={startCheckout}
                className={"BaseButton PrimaryButton"}
            >
                Checkout
            </Button>
        </div>
    ) : (
        <p>Your cart is empty. Add some awesome products! ✨</p>
    );
};

export default ShoppingCartList;
