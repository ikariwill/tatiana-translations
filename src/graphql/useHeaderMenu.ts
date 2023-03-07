import request, { gql } from "graphql-request";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleProvider";
import { IHeaderMenu } from "@model/types/IHeaderMenu";
import { hygraph_endpoint } from "@services/hygraph";

type IHeaderMenuData = {
  headerMenus: IHeaderMenu[];
};

export function useHeaderMenu(): Promise<IHeaderMenuData> {
  const { locale } = useContext(LocaleContext);

  return request(
    hygraph_endpoint,
    gql`
      query getHeaderMenu($translate: String!) {
        headerMenus(where: { translate: $translate }) {
          id
          title
          url
          headerSubmenus {
            id
            title
            url
          }
        }
      }
    `,
    { translate: locale }
  );
}
