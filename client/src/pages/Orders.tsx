import React, { Component, useEffect, useState } from "react";
import instance from "../api/axios";
import { getOrders } from "../api/orders";
import LoadingIndicator from "../components/LoadingIndicator";
import OrderSummary from "../components/OrderSummary";
import { OrdersType } from "../types/orders.model";

const Orders = () => {
    const [orders, setOrders] = useState<OrdersType[]>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const orders = await getOrders(instance);
            setOrders(orders.data);
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return <LoadingIndicator />;
    }

    return (
        <>
            {orders ? (
                orders.map((order) =>
                    order ? (
                        <OrderSummary key={order.timestamp} products={order.products}/>
                    ) : (
                        <p>Cannot find your order</p>
                    )
                )
            ) : (
                <h2>You have not placed any orders</h2>
            )}
        </>
    );
};
export default Orders;
