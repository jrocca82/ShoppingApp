import { AxiosInstance } from "axios";

const getUsers =
  async (instance: AxiosInstance)  =>{
    const { data } = await instance.get(`http://localhost:8888/users`);
    return data
  }

export default getUsers;
