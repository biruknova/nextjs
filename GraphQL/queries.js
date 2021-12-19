import { gql } from "@apollo/client";

export const LOAD_MOVIES = gql`
  query {
    characters {
      results {
        id
        species
        name
        image
      }
    }
  }
`;
