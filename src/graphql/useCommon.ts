import request, { gql } from "graphql-request";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleProvider";
import { IArea } from "@model/types/IArea";
import { ICommon } from "@model/types/ICommon";
import { IHeaderMenu } from "@model/types/IHeaderMenu";
import { hygraph_endpoint } from "@services/hygraph";

export type ICommonData = {
  common: ICommon;
  area: IArea;
  headerMenus: IHeaderMenu[];
};

export function useCommon(): Promise<ICommonData> {
  const { locale } = useContext(LocaleContext);

  return request(
    hygraph_endpoint,
    gql`
      query getCommon($translate: String!) {
        common(where: { translate: $translate }) {
          contact
          name
          email
          message
          send
          contactMe
        }
        area(where: { translate: $translate }) {
          title
          content {
            html
          }
        }
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
