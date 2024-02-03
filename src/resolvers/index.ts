import { Resolvers } from '../generated/graphql';
import {getNumberTwo} from './query.resolver';

export const resolvers: Resolvers = {
    Query: getNumberTwo,
};