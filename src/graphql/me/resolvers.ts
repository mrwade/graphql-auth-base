import { GqlResolvers } from '../../generated/graphql';
import { GqlContext } from '../types';

const meResolvers: GqlResolvers<GqlContext> = {
  Query: {
    me: (_, __, { currentUser }) => {
      return currentUser;
    },
  },
};

export default meResolvers;
