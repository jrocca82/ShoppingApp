import React, { useState, SyntheticEvent } from "react";
import { placeOrder } from "../api/orders";
import { ContactDetails, ShippingAddress } from "../types/orders.model";
import { ProductType } from "../types/product.model";
import Button from "./Button";
import Form from "./Form";
import { TextInput } from "./inputs";
import LoadingIndicator from "./LoadingIndicator";

export type FormValues = {
    contactDetails: ContactDetails;
    shippingAddress: ShippingAddress;
};

export type SubmitOrderFormProps = {
    values?: FormValues;
    itemsInCart: ProductType[] | undefined;
};

const SubmitOrderForm = ({ values, itemsInCart }: SubmitOrderFormProps) => {
    const [successMessage, setSuccessMessage] = useState<string>();
    const [errorMessage, setErrorMessage] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [value, setValue] = useState<string>();

    if (successMessage) {
        return (
            <div>
                <h3 style={{ color: "mediumaquamarine" }}>Success! 🎉</h3>
                <p>{successMessage}</p>
            </div>
        );
    }

    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
    };

    const submitOrder = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        if (itemsInCart && values) {
            const result = await placeOrder({
                products: itemsInCart,
                contactDetails: values.contactDetails,
                shippingAddress: values.shippingAddress,
                customer: "",
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
                value={values?.contactDetails.fullName || ""}
                onChange={handleChange}
                placeholder={"Full Name"}
            />
            <TextInput
                label="Phone Number"
                name="contact.phoneNumber"
                value={values?.contactDetails.phoneNumber || ""}
                onChange={handleChange}
                placeholder={"Phone Number"}
            />
            <TextInput
                label="Country"
                name="shippingAddress.country"
                value={values?.shippingAddress.country || ""}
                onChange={handleChange}
                placeholder={"Country"}
            />
            <TextInput
                label="City"
                name="shippingAddress.city"
                value={values?.shippingAddress.city || ""}
                onChange={handleChange}
                placeholder={"City"}
            />
            <TextInput
                label="Address Line 1"
                name="shippingAddress.addressLine1"
                value={values?.shippingAddress.addressLine1 || ""}
                onChange={handleChange}
                placeholder={"Address Line 1"}
            />
            <TextInput
                label="Address Line 2"
                name="shippingAddress.addressLine2"
                value={values?.shippingAddress.addressLine2 || ""}
                onChange={handleChange}
                placeholder={"Address Line 2"}
            />
            <TextInput
                label="Postal Code"
                name="shippingAddress.postalCode"
                value={values?.shippingAddress.postcode.toString() || ""}
                onChange={handleChange}
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
function emptyCart() {
    throw new Error("Function not implemented.");
}
