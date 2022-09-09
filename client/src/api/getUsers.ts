import { AxiosInstance } from "axios";

const getUsers =
  (instance: AxiosInstance) => async () =>
    (await instance.get(`http://localhost:8888/users`)).data;

export default getUsers;
