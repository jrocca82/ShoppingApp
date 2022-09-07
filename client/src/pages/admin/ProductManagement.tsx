import React, { Component, useEffect, useState } from "react";
import "./shared.css";
import DataTable from "../../components/DataTable";
import LoadingIndicator from "../../components/LoadingIndicator";
import { ProductInstance } from "../../models/product";

const columns = [
    { key: "_id", label: "ID" },
    { key: "name", label: "Name", sort: true },
    { key: "formattedPrice", label: "Price", sort: true },
];

const ProductManagement = () => {
    const [products, setProducts] = useState<ProductInstance[]>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {});

    return (
        <div className="AdminView">
            <h2>Product Management</h2>
            {loading ? (
                <LoadingIndicator />
            ) : (
                <DataTable
                    tableKey="product"
                    columns={columns}
                    rows={products}
                />
            )}
        </div>
    );
};

export default ProductManagement;
