import { ProductType } from "./product.model";

export type OrdersType = {
    customer: string;
    timestamp: string;
    products: [ProductType];
};
