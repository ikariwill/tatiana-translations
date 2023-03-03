import { gql } from "graphql-request";

export function GetHeaderMenu() {
  return gql`
    query getHeaderMenu($translate: String!) {
      headerMenus(where: { translate: $translate }) {
        id
        title
        url
        headerSubmenus {
          id
          title
          url
        }
      }
    }
  `;
}
