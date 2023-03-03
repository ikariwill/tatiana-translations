import { gql } from "graphql-request";

export function GetHeroContent() {
  return gql`
    query getHeroContent($translate: String!) {
      hero(where: { translate: $translate }) {
        title
        description
        locale
      }
    }
  `;
}
