import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';
import { DateTime } from 'luxon';
import { GqlResolvers } from '../../generated/graphql';
import db, { genId } from '../../modules/db';
import { nanoid } from 'nanoid';

const SALT_ROUNDS = process.env.NODE_ENV === 'test' ? 1 : 10;

const authResolvers: GqlResolvers = {
  Mutation: {
    requestSignUp: async (_, { email }) => {
      // Does user exist?
      const user = await db.user.findUnique({ where: { email } });
      if (user) throw new GraphQLError('User already exists');

      // Does request exist?
      await db.signUpRequest.deleteMany({ where: { email } });

      // Create sign up request
      const token = nanoid(36);
      await db.signUpRequest.create({
        data: {
          id: genId(),
          email,
          tokenHash: await bcrypt.hash(token, SALT_ROUNDS),
          expiresAt: DateTime.now().plus({ minutes: 10 }).toJSDate(),
        },
      });

      // Send token to user
      if (process.env.NODE_ENV === 'development') {
        console.log('Token:', token);
      }

      return { success: true };
    },

    // signIn: () => {},
    // signUp: () => {},
  },
};

export default authResolvers;
