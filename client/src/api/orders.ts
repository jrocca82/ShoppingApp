import axios from "./axios";
import { getHeader } from "./auth";
import { OrdersType } from "../types/orders.model";

export const getOrders = async () => {
    try {
        const { data } = await axios.get("/v1/orders", {
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

export const placeOrder = async (body: OrdersType) => {
    try {
        const { data } = await axios.post("/v1/orders", body, {
            headers: await getHeader(),
        });
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
    } catch (error) {
        console.log(error);
    }
};
