import Image from "next/image";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleProvider";

export function Languages() {
  const { setLocale } = useContext(LocaleContext);

  return (
    <>
      <Image
        onClick={() => setLocale("pt_BR")}
        alt="portuguese"
        style={{
          width: "30px",
          display: "inline-block",
          cursor: "pointer",
        }}
        src="/images/pt.png"
        width={"30"}
        height={"30"}
      />

      <Image
        onClick={() => setLocale("en_US")}
        alt="english"
        style={{
          width: "30px",
          display: "inline-block",
          cursor: "pointer",
        }}
        src="/images/en.png"
        width={"30"}
        height={"30"}
      />

      <Image
        onClick={() => setLocale("es_ES")}
        alt="spanish"
        style={{
          width: "30px",
          display: "inline-block",
          cursor: "pointer",
        }}
        src="/images/es.png"
        width={"30"}
        height={"30"}
      />

      <Image
        onClick={() => setLocale("fr_FR")}
        alt="french"
        style={{
          width: "30px",
          display: "inline-block",
          cursor: "pointer",
        }}
        src="/images/fr.png"
        width={"30"}
        height={"30"}
      />

      <Image
        onClick={() => setLocale("de")}
        alt="german"
        style={{
          width: "30px",
          display: "inline-block",
          cursor: "pointer",
        }}
        src="/images/de.png"
        width={"30"}
        height={"30"}
      />
    </>
  );
}
