import request, { gql } from "graphql-request";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleProvider";
import { IConfidentiality } from "@model/types/IConfidentiality";
import { hygraph_endpoint } from "@services/hygraph";

type IConfidentialityData = {
  confidentiality: IConfidentiality;
};

export function useConfidentiality(): Promise<IConfidentialityData> {
  const { locale } = useContext(LocaleContext);

  return request(
    hygraph_endpoint,
    gql`
      query getConfidentiality($translate: String!) {
        confidentiality(where: { translate: $translate }) {
          title
          content {
            html
          }
        }
      }
    `,
    { translate: locale }
  );
}
