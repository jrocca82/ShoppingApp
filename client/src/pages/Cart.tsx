import React, { useState } from "react";
import "./Cart.css";
import SubmitOrderForm, { FormValues } from "../components/SubmitOrderForm";
import ShoppingCartList from "../components/ShoppingCartList";
import { ProductType } from "../models/product.model";

type CartProps = {
    itemsInCart: ProductType[] | undefined;
    removeFromCart: (index: number) => void;
};

const Cart = ({ itemsInCart, removeFromCart }: CartProps) => {
    const [checkoutState, setCheckoutState] = useState<string>();
    const [values, setValues] = useState<FormValues>();
    const [shippingAddress, setShippingAddress] = useState();
    const [loading, setLoading] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string | undefined>(
        undefined
    );
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
        undefined
    );

    const startCheckout = (e: any) => {
        setCheckoutState("started");
        console.log(e);
    };

    const handleChange = () => {};

    const submitOrder = async () => {
        setLoading(true);
    };

    return (
        <div className="Cart">
            <h2>My Cart</h2>
            {checkoutState === "started" ? (
                <SubmitOrderForm
                    values={values}
                    handleChange={handleChange}
                    submitOrder={submitOrder}
                    successMessage={successMessage}
                    errorMessage={errorMessage}
                    loading={loading}
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
