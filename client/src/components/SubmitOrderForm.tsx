import React, { Component } from "react";
import Button from "./Button";
import Form from "./Form";
import { TextInput } from "./inputs";
import LoadingIndicator from "./LoadingIndicator";

export type FormValues = {
        contact: {
            fullName: string;
            phoneNumber: string;
        };
        shippingAddress: {
            city: string;
            country: string;
            addressLine1: string;
            addressLine2: string;
            postalCode: string;
        };
}

export type SubmitOrderFormProps = {
    successMessage: string | undefined;
    errorMessage: string | undefined;
    loading: boolean;
    submitOrder: () => void;
    handleChange: () => void;
    values?: FormValues;
};

const SubmitOrderForm = ({
    submitOrder,
    successMessage,
    errorMessage,
    values,
    handleChange,
    loading,
}: SubmitOrderFormProps) => {
    if (successMessage) {
        return (
            <div>
                <h3 style={{ color: "mediumaquamarine" }}>Success! 🎉</h3>
                <p>{successMessage}</p>
            </div>
        );
    }

    return (
        <Form onSubmit={submitOrder}>
            <TextInput
                label="Full Name"
                name="contact.fullName"
                value={values?.contact.fullName || ""}
                onChange={handleChange}
                placeholder={"Full Name"}
            />
            <TextInput
                label="Phone Number"
                name="contact.phoneNumber"
                value={values?.contact.phoneNumber || ""}
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
                value={values?.shippingAddress.postalCode || ""}
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
