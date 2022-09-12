import React, { useState, SyntheticEvent } from "react";
import "./Cart.css";
import SubmitOrderForm, { FormValues } from "../components/SubmitOrderForm";
import ShoppingCartList from "../components/ShoppingCartList";
import { ProductType } from "../types/product.model";
import { ContactDetails, ShippingAddress } from "../types/orders.model";
import { placeOrder } from "../api/orders";

type CartProps = {
    itemsInCart: ProductType[] | undefined;
    removeFromCart: (index: number) => void;
    emptyCart: () => void;
};

const Cart = ({ itemsInCart, removeFromCart, emptyCart }: CartProps) => {
    const [checkoutState, setCheckoutState] = useState<string>();

    const startCheckout = () => {
        setCheckoutState("started");
    };

    return (
        <div className="Cart">
            <h2>My Cart</h2>
            {checkoutState === "started" ? (
                <SubmitOrderForm itemsInCart={itemsInCart} />
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
