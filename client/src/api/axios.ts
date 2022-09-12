import axios from "axios";

const instance = axios.create({
    baseURL: process.env.SERVER_URI,
    timeout: 5000,
    headers: {}
});

export default instance;