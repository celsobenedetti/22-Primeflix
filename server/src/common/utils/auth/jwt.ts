import * as jwt from 'jsonwebtoken';

interface JwtPayload {
  id: number;
  name: string;
  iat: number;
  exp: number;
}

const SECRET = process.env.JWT_SECRET + '';

export const createJwt = (id: number, email: string) => {
  return jwt.sign({ id, email }, SECRET, { expiresIn: '10h' });
};

export const decodeJwt = (token: string) => {
  return jwt.verify(token, SECRET) as JwtPayload;
};
