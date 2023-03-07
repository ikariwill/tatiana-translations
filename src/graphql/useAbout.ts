import request, { gql } from "graphql-request";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleProvider";
import { IAbout } from "@model/types/IAbout";
import { hygraph_endpoint } from "@services/hygraph";

type IAboutData = {
  about: IAbout;
};

export function useAbout(): Promise<IAboutData> {
  const { locale } = useContext(LocaleContext);

  return request(
    hygraph_endpoint,
    gql`
      query getAboutContent($translate: String!) {
        about(where: { translate: $translate }) {
          title {
            html
            text
          }
          content {
            html
            text
          }
        }
      }
    `,
    { translate: locale }
  );
}
