import { AxiosInstance } from "axios";

export const getProducts = async (instance: AxiosInstance) => {
    const { data } = await instance.get(`http://localhost:8888/products`);
    return data
};

export const getProductsByCategory = async (instance: AxiosInstance, slug: string | undefined) => {
    const { data } = await instance.get(`http://localhost:8888/products?categories=${slug}`);
    return data
};

export const getProductsById = async (instance: AxiosInstance, id: string | undefined) => {
    const { data } = await instance.get(`http://localhost:8888/products/${id}`);
    return data
};
