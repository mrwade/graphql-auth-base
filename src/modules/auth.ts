import invariant from 'invariant';
import jwt from 'jsonwebtoken';
import db, { User } from './db';

const createAuthToken = (user: Pick<User, 'id'>): string => {
  invariant(process.env.JWT_SECRET, 'JWT_SECRET not set');
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '90d',
  });
};

const verifyAuthToken = async (authToken: string): Promise<User> => {
  invariant(process.env.JWT_SECRET, 'JWT_SECRET not set');
  const { userId } = jwt.verify(authToken, process.env.JWT_SECRET) as {
    userId: string;
  };
  return db.user.findUniqueOrThrow({ where: { id: userId } });
};

const Auth = {
  createAuthToken,
  verifyAuthToken,
};

export default Auth;
