import { gql } from "graphql-request";

export function GetHeroContent() {
  return gql`
    query {
      hero(where: { id: "cld1yol4z0o3p0bw3p7made73" }, locales: en) {
        title
        description
        locale
      }
    }
  `;
}
