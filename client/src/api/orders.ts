import { AxiosInstance } from "axios";
import { getHeader } from "./auth";
import { OrdersType } from "../types/orders.model";

export const getOrders = async (instance: AxiosInstance) => {
    try {
        const { data } = await instance.get("http://localhost:8888/orders", {
            headers: await getHeader(),
        });
        return {
            success: true,
            data,
        };
    } catch (error) {
        return {
            success: false,
            error: "Could not load order history. Please, refresh the page.",
        };
    }
};

export const placeOrder = async (instance: AxiosInstance, body: OrdersType) => {
    const { data } = await instance.post("http://localhost:8888/orders/new", body, {
        headers: await getHeader(),
    });
    console.log(data);
    if (data && data._id) {
        return {
            success: true,
            data,
        };
    } else {
        return {
            success: false,
            error: "An unknown error occurred. Please, retry again later.",
        };
    }
};
