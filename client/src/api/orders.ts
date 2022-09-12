import { AxiosInstance } from "axios";

const getOrders =
  async (instance: AxiosInstance)  =>{
    const { data } = await instance.get(`http://localhost:8888/orders`);
    return data
  }

export default getOrders;