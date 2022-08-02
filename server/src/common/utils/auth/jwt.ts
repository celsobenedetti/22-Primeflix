import * as jwt from "jsonwebtoken";

interface JwtPayload {
  id: number;
  email: string;
  name: string;
  iat: number;
  exp: number;
}

const SECRET = process.env.JWT_SECRET + "";

export const createJwt = (userInfo: { id: number; email: string; name: string }) => {
  const { id, email, name } = userInfo;
  return jwt.sign({ id, email, name }, SECRET, { expiresIn: "12h" });
};

export const decodeJwt = (token: string) => {
  return jwt.verify(token, SECRET) as JwtPayload;
};
