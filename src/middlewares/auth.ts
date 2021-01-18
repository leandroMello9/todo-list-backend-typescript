import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}
export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Authorization is not valid' });
  }

  const [_, token] = authorization.split(' ');
  try {
    const data = jwt.verify(token, 'secret');
    const { id } = data as TokenPayload;
    req.userId = id;
    next();
  } catch {
    return res.status(401).json({ message: 'Authorization is not valid' });
  }
}
