import { User } from '../modules/db';

export type GqlContext = {
  currentUser: User | null;
};
