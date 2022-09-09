import React, { useEffect, useState } from "react";
import "./shared.css";
import DataTable from "../../components/DataTable";
import LoadingIndicator from "../../components/LoadingIndicator";
import getUsers from "../../api/getUsers";
import instance from "../../api/axios";
import { UserType } from "../../types/users.model";

const columns = [
    { key: "_id", label: "ID" },
    { key: "username", label: "Username", sort: true },
    { key: "email", label: "Email", sort: true },
];

const UserManagement = () => {
    const [users, setUsers] = useState<UserType[] | undefined>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const users = await getUsers(instance);
            setUsers(users);
            setLoading(false);
        })();
    }, []);

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
