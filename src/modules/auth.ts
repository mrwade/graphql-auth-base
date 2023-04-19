import invariant from 'invariant';
import jwt from 'jsonwebtoken';
import { User } from './db';

const createAuthToken = (user: Pick<User, 'id'>): string => {
  invariant(process.env.JWT_SECRET, 'JWT_SECRET not set');
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
};

const Auth = {
  createAuthToken,
};

export default Auth;
