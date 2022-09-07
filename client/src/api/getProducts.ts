import { AxiosInstance } from "axios";

const getProducts =
  (instance: AxiosInstance) => async () =>
    (await instance.get(`http://localhost:8888/products`)).data;

export default getProducts;
