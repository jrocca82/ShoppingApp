import React, { useEffect, useState } from "react";
import "./shared.css";
import DataTable from "../../components/DataTable";
import LoadingIndicator from "../../components/LoadingIndicator";
import { UserInstance } from "../../models/users";

const columns = [
    { key: "_id", label: "ID" },
    { key: "username", label: "Username", sort: true },
    { key: "email", label: "Email", sort: true },
];

const UserManagement = () => {
    const [users, setUsers] = useState<UserInstance[]>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {});

    return (
        <div className="AdminView">
            <h2>User Management</h2>
            {loading ? (
                <LoadingIndicator />
            ) : (
                <DataTable tableKey="user" columns={columns} rows={users} />
            )}
        </div>
    );
};

export default UserManagement;
