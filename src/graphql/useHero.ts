import request, { gql } from "graphql-request";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleProvider";
import { IHero } from "@model/types/IHero";
import { hygraph_endpoint } from "@services/hygraph";

type IHeroData = {
  hero: IHero;
};

export function useHero(): Promise<IHeroData> {
  const { locale } = useContext(LocaleContext);

  return request(
    hygraph_endpoint,
    gql`
      query getHeroContent($translate: String!) {
        hero(where: { translate: $translate }) {
          title
          description
        }
      }
    `,
    { translate: locale }
  );
}
