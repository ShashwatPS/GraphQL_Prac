import { Resolvers } from "../generated/graphql";

export const getNumberTwo: Resolvers = {
    Query: {
        getNumberTwo: () => 2,
    },
};