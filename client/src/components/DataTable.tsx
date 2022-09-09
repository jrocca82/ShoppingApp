import React, { Component } from "react";
//@ts-ignore
import SpicyDataTable from "spicy-datatable";
import { ProductType } from "../types/product.model";
import { UserType } from "../types/users.model";
import "./styles/DataTable.css";

type DataTableProps = {
    tableKey: string;
    columns: (
        | { key: string; label: string; sort?: undefined }
        | { key: string; label: string; sort: boolean }
    )[];
    rows: UserType[] | ProductType[] | undefined;
};

const DataTable = ({ tableKey, columns, rows }: DataTableProps) => {
    return <SpicyDataTable tableKey={tableKey} columns={columns} rows={rows} />;
};

export default DataTable;
