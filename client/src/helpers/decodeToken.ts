import { decode, JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
    _id: string;
}

export const decodeToken = (token: { authorization: string }) => {
    const userToken = decode(token.authorization, { complete: true });
    if (!userToken?.payload) {
        return;
    }

    const parsedToken = userToken.payload as CustomJwtPayload;
    return parsedToken._id;
};
