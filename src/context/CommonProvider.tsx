import { createContext, useContext } from "react";

import { ICommonData, useCommon } from "@graphql/useCommon";
import { useQuery } from "@tanstack/react-query";

import { LocaleContext } from "./LocaleProvider";

type ICommonContext = {
  data?: ICommonData;
};

export const CommonContext = createContext({} as ICommonContext);

export function CommonProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useContext(LocaleContext);

  const commonQuery = useCommon();

  const { data } = useQuery({
    queryKey: ["common", locale],
    queryFn: () => commonQuery,
    enabled: !!locale,
  });

  return (
    <CommonContext.Provider value={{ data }}>{children}</CommonContext.Provider>
  );
}
