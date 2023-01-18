import { gql } from "graphql-request";

export function GetAllTestimonials() {
  return gql`
    query {
      testimonials {
        id
        author
        text
      }
    }
  `;
}
