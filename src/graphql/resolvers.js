import { peopleData } from "./schema";

export const resolvers = {
    Query: {
        people: () => peopleData
    }
};