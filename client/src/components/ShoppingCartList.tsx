import React, { useState } from "react";
import instance from "../api/axios";
import { getProducts } from "../api/products";
import { ProductType } from "../types/product.model";
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
    if (items && items.length > 0) {
        return (
            <div>
                {items.map((item, index) => (
                    <ProductCard
                        key={`${item._id}_${index}`}
                        productName={item.name}
                        images={item.images}
                        productPrice={+item.price}
                        withRemoveButton
                        onRemove={() => removeFromCart(index)}
                    />
                ))}
                <Button
                    onClick={startCheckout}
                    className={"BaseButton PrimaryButton"}
                >
                    Checkout
                </Button>
            </div>
        );
    } else {
        return <p>Your cart is empty. Add some awesome products! ✨</p>;
    }
};

export default ShoppingCartList;
