import { AxiosInstance } from "axios";

const getProducts =
  (instance: AxiosInstance) => async () =>
    (await instance.get(`http://localhost:8888/users`)).data;

export default getProducts;
