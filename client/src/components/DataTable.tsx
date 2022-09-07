import React, { Component } from "react";
//@ts-ignore
import SpicyDataTable from "spicy-datatable";
import { ProductInstance } from "../models/product";
import { UserInstance } from "../models/users";
import "./styles/DataTable.css";

type DataTableProps = {
    tableKey: string;
    columns: (
        | { key: string; label: string; sort?: undefined }
        | { key: string; label: string; sort: boolean }
    )[];
    rows: ProductInstance[] | UserInstance[] | undefined;
};

const DataTable = ({ tableKey, columns, rows }: DataTableProps) => {
    return <SpicyDataTable tableKey={tableKey} columns={columns} rows={rows} />;
};

export default DataTable;
