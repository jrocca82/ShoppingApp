import React, { useState } from "react";
import "./Cart.css";
import SubmitOrderForm from "../components/SubmitOrderForm";
import ShoppingCartList from "../components/ShoppingCartList";
import { ProductType } from "../types/product.model";

type CartProps = {
    itemsInCart: ProductType[] | undefined;
    removeFromCart: (index: number) => void;
    emptyCart: () => void;
    userId: string | undefined;
};

const Cart = ({
    itemsInCart,
    removeFromCart,
    emptyCart,
    userId,
}: CartProps) => {
    const [checkoutState, setCheckoutState] = useState<string>();

    const startCheckout = () => {
        setCheckoutState("started");
    };

    return (
        <div className="Cart">
            <h2>My Cart</h2>
            {checkoutState === "started" ? (
                <SubmitOrderForm
                    itemsInCart={itemsInCart}
                    emptyCart={emptyCart}
                    userId={userId}
                />
            ) : (
                <ShoppingCartList
                    items={itemsInCart}
                    removeFromCart={removeFromCart}
                    startCheckout={startCheckout}
                />
            )}
        </div>
    );
};

export default Cart;
