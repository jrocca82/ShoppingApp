import { decode, JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
    _id: string;
}

export const decodeToken = (token: string) => {
    const userToken = decode(token, { complete: true });
    if (!userToken?.payload) {
        return;
    }

    const parsedToken = userToken.payload as CustomJwtPayload;
    return parsedToken._id;
};