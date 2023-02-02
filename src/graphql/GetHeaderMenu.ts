import { gql } from "graphql-request";

export function GetHeaderMenu() {
  return gql`
    query {
      headerMenus {
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
