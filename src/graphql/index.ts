import { loadFilesSync } from '@graphql-tools/load-files';
import authResolvers from './authentication/resolvers';
import meResolvers from './me/resolvers';

export const typeDefs = loadFilesSync('src/graphql/**/*.graphql');

export const resolvers = [authResolvers, meResolvers];
