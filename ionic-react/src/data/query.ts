import {gql} from "@apollo/client";

export const GET_CLIENT = gql`
    query getClient{
        listClient {
            id,
            name,
            note
        }
    }
`;

export const GET_MEAN = gql`
    query clientMean {
        clientMean
    }
`;
export const ADD_CLIENT = gql`
    mutation createClient($input: CreateClientInput !) {
        createClient(createClientInput: $input) {
            id,
            name,
            note
        }
    }
`;
