import * as jwt from "jsonwebtoken";
import { JwtPayload } from "src/auth/interfaces/jwt-payload.interface";

const SECRET = process.env.JWT_SECRET + "";

export const createJwt = (userInfo: { id: number; email: string; name: string }) => {
  const { id, email, name } = userInfo;
  return jwt.sign({ id, email, name }, SECRET, { expiresIn: "12h" });
};

export const decodeJwt = (token: string) => {
  return jwt.verify(token, SECRET) as JwtPayload;
};
