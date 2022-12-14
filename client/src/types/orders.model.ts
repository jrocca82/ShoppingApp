import { ObjectId } from "mongoose";
import { ProductType } from "./product.model";

export type ShippingAddress = {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    country?: string;
    postcode: number
}

export type ContactDetails = {
    fullName: string;
    phoneNumber: string;
}

export type OrdersType = {
    customerId: string;
    timestamp: number;
    products: ProductType[];
    contactDetails: ContactDetails;
    shippingAddress: ShippingAddress;
};

export type FormValues = {
    contactDetails: ContactDetails;
    shippingAddress: ShippingAddress;
};
