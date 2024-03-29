import request, { gql } from "graphql-request";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleProvider";
import { IColumnTemplate } from "@model/types/IColumnTemplate";
import { hygraph_endpoint } from "@services/hygraph";

type ITranslationData = {
  translation: IColumnTemplate;
};

export function useTranslation(): Promise<ITranslationData> {
  const { locale } = useContext(LocaleContext);

  return request(
    hygraph_endpoint,
    gql`
      query getTranslationContent($translate: String!) {
        translation(where: { translate: $translate }) {
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
