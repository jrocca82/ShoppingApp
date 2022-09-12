import axios from "./axios";
import store from "store2";

const getHeader = async () => ({
    authorization: `Bearer ${await store.get("authToken")}`,
});

export const getAuth = async () => {
    try {
        const { data } = await axios.post(
            "http://localhost:8888/auth",
            {},
            { headers: await getHeader() }
            );
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const login = async (email: string) => {
    try {
        await axios.post("http://localhost:8888/login", { email });
        return { success: true };
    } catch (error) {
        console.log(error);
        return {
            error: "There was an error logging you in. Please, try again. ",
        };
    }
};
