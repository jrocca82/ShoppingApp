import { ObjectId } from "mongoose";
import React, { useState, SyntheticEvent } from "react";
import instance from "../api/axios";
import { placeOrder } from "../api/orders";
import { ProductType } from "../types/product.model";
import Button from "./Button";
import Form from "./Form";
import { TextInput } from "./inputs";
import LoadingIndicator from "./LoadingIndicator";

export type SubmitOrderFormProps = {
    itemsInCart: ProductType[] | undefined;
    emptyCart: () => void;
    userId: string | undefined;
};

const SubmitOrderForm = ({
    itemsInCart,
    emptyCart,
    userId
}: SubmitOrderFormProps) => {
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [addressLine1, setAddressLine1] = useState<string>("");
    const [addressLine2, setAddressLine2] = useState<string>("");
    const [postcode, setPostcode] = useState<string>("");

    if (successMessage !== "") {
        return (
            <div>
                <h3 style={{ color: "mediumaquamarine" }}>Success! 🎉</h3>
                <p>{successMessage}</p>
            </div>
        );
    }

    const submitOrder = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        if (itemsInCart && userId) {
            const result = await placeOrder(instance, {
                products: itemsInCart,
                contactDetails: {
                    fullName: name,
                    phoneNumber: phoneNumber
                },
                shippingAddress: {
                    addressLine1: addressLine1,
                    addressLine2: addressLine2,
                    city: city,
                    country: country,
                    postcode: Number(postcode)
                },
                customerId: userId,
                timestamp: Date.now(),
            });
            if (result?.success) {
                setSuccessMessage(
                    `Order successfully placed! Your order id is: ${result?.data._id}`
                );
                setLoading(false);
                emptyCart();
            } else {
                setErrorMessage(
                    `There was an error placing your order. Please try again later.`
                );
                setLoading(false);
            }
        }
    };

    return (
        <Form onSubmit={submitOrder}>
            <TextInput
                label="Full Name"
                name="contact.fullName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"Full Name"}
            />
            <TextInput
                label="Phone Number"
                name="contact.phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={"Phone Number"}
            />
            <TextInput
                label="Country"
                name="shippingAddress.country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder={"Country"}
            />
            <TextInput
                label="City"
                name="shippingAddress.city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={"City"}
            />
            <TextInput
                label="Address Line 1"
                name="shippingAddress.addressLine1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                placeholder={"Address Line 1"}
            />
            <TextInput
                label="Address Line 2"
                name="shippingAddress.addressLine2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
                placeholder={"Address Line 2"}
            />
            <TextInput
                label="Postal Code"
                name="shippingAddress.postalCode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder={"Postal Code"}
            />
            <Button disabled={loading} className={"BaseButton PrimaryButton"}>
                Place Order
            </Button>
            {loading && <LoadingIndicator />}
            {errorMessage && <p style={{ color: "crimson" }}>{errorMessage}</p>}
        </Form>
    );
};

export default SubmitOrderForm;
