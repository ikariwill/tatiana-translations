import request, { gql } from "graphql-request";

import { ITestimonial } from "@model/types/ITestimonial";
import { hygraph_endpoint } from "@services/hygraph";

type ITestimonialsData = {
  testimonials: ITestimonial[];
};

export function useTestimonials(): Promise<ITestimonialsData> {
  return request(
    hygraph_endpoint,
    gql`
      query {
        testimonials {
          id
          author
          text
        }
      }
    `
  );
}
