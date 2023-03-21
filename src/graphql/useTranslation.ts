import request, { gql } from "graphql-request";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleProvider";
import { ITranslation } from "@model/types/ITranslation";
import { hygraph_endpoint } from "@services/hygraph";

type ITranslationData = {
  translation: ITranslation;
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
