import gql from "graphql-tag";

export const SIGN_IN = gql`
  mutation CreateAccessTokenInput($input: CreateAccessTokenInput!) {
    createAccessToken(input: $input) {
      token
    }
  }
`;

export default {};
