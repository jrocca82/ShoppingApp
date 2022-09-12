import { AxiosInstance } from "axios";

const getUsers = async (instance: AxiosInstance) => {
    const { data } = await instance.get(`http://localhost:8888/users`);
    return data;
};

const getUserById = async (instance: AxiosInstance, id: string | undefined) => {
    const { data } = await instance.get(`http://localhost:8888/users/${id}`);
    return data;
};

export default getUsers;
