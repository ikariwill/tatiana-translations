import { createContext, Dispatch, SetStateAction, useState } from "react";

type ILocaleContext = {
  locale: string;
  setLocale: Dispatch<SetStateAction<string>>;
};

export const LocaleContext = createContext({} as ILocaleContext);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState("en_US");

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
