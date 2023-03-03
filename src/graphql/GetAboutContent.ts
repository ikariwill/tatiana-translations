import { gql } from "graphql-request";

export function GetAboutContent() {
  return gql`
    query getAboutContent($translate: String!) {
      about(where: { translate: $translate }) {
        title {
          html
          text
        }
        content {
          html
          text
        }
      }
    }
  `;
}
