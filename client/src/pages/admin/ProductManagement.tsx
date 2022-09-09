import React, { Component, useEffect, useState } from "react";
import "./shared.css";
import DataTable from "../../components/DataTable";
import LoadingIndicator from "../../components/LoadingIndicator";
import { ProductType } from "../../types/product.model";
import { getProducts } from "../../api/products";
import instance from "../../api/axios";

const columns = [
    { key: "_id", label: "ID" },
    { key: "name", label: "Name", sort: true },
    { key: "formattedPrice", label: "Price", sort: true },
];

const ProductManagement = () => {
    const [products, setProducts] = useState<ProductType[] | undefined>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const products = await getProducts(instance);
            setProducts(products);
            setLoading(false);
        })();
    }, []);

    return (
        <div className="AdminView">
            <h2>User Management</h2>
            {loading ? (
                <LoadingIndicator />
            ) : (
                <DataTable tableKey="user" columns={columns} rows={products} />
            )}
        </div>
    );
};

export default ProductManagement;
