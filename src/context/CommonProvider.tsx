import { createContext, useContext } from "react";

import { useCommon } from "@graphql/useCommon";
import { ICommon } from "@model/types/ICommon";
import { useQuery } from "@tanstack/react-query";

import { LocaleContext } from "./LocaleProvider";

type ICommonContext = {
  common?: ICommon;
};

export const CommonContext = createContext({} as ICommonContext);

export function CommonProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useContext(LocaleContext);

  const commonQuery = useCommon();

  const { data } = useQuery({
    queryKey: ["common", locale],
    queryFn: () => commonQuery,
  });

  return (
    <CommonContext.Provider value={{ common: data?.common }}>
      {children}
    </CommonContext.Provider>
  );
}
