import { gql } from "graphql-request";

export function GetAboutContent() {
  return gql`
    query {
      about(where: { id: "cld20uyyo0ra30auktkat0jeo" }, locales: en) {
        title
        content {
          html
          text
        }
        locale
      }
    }
  `;
}
