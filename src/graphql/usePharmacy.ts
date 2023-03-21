import request, { gql } from "graphql-request";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleProvider";
import { IColumnTemplate } from "@model/types/IColumnTemplate";
import { hygraph_endpoint } from "@services/hygraph";

type IPharmacyData = {
  pharmacy: IColumnTemplate;
};

export function usePharmacy(): Promise<IPharmacyData> {
  const { locale } = useContext(LocaleContext);

  return request(
    hygraph_endpoint,
    gql`
      query getProofreadingContent($translate: String!) {
        pharmacy(where: { translate: $translate }) {
          title
          columnOne {
            html
          }
          columnTwo {
            html
          }
        }
      }
    `,
    { translate: locale }
  );
}
