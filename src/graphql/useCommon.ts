import request, { gql } from "graphql-request";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleProvider";
import { ICommon } from "@model/types/ICommon";
import { hygraph_endpoint } from "@services/hygraph";

type ICommonData = {
  common: ICommon;
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
      }
    `,
    { translate: locale }
  );
}
