import React from "react";
import getProducts from "../api/getProducts";
import { ProductInstance } from "../models/product";
import Button from "./Button";
import ProductCard from "./ProductCard";

type ShoppingCartProps = {
    items?: ProductInstance[];
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
            {/* {items
                    .map((item) => getProducts(item))
                    .map((item, index) => (
                        <ProductCard
                            key={`${item._id}_${index}`}
                            productName={item.name}
                            images={item.images}
                            productPrice={item.price}
                            withRemoveButton
                            onRemove={() => removeFromCart(index)}
                        />
                    ))} */}
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
