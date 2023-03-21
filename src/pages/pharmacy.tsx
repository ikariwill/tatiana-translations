import Head from "next/head";
import { useContext } from "react";

import FeaturedMedia from "@components/FeaturedMedia";
import Header from "@components/Header";
import Translations from "@components/Translations";
import { LocaleContext } from "@context/LocaleProvider";
import { usePharmacy } from "@graphql/usePharmacy";
import { IColumnTemplate } from "@model/types/IColumnTemplate";
import { useQuery } from "@tanstack/react-query";

export default function Pharmacy() {
  const { locale } = useContext(LocaleContext);
  const pharmacy = usePharmacy();

  const { data } = useQuery<{ pharmacy: IColumnTemplate }>({
    queryKey: ["pharmacy", locale],
    queryFn: () => pharmacy,
    enabled: !!locale,
  });

  return (
    <>
      <Head>
        <title>Tatiana Hernandez | Translations & Revisions</title>
      </Head>
      <Header />
      <div className="content clearfix">
        <FeaturedMedia
          title={data?.pharmacy.title as string}
          image="../images/4.jpg"
        />

        <Translations />
      </div>

      <section className="section-block bkg-grey-ultralight">
        <div className="row">
          <div className="column width-12 center">
            <h2 className="mb-80 sc-t">{data?.pharmacy.title}</h2>
          </div>

          {data?.pharmacy.columnTwo && (
            <>
              <div
                className="column width-6"
                dangerouslySetInnerHTML={{
                  __html: data?.pharmacy.columnOne.html as string,
                }}
              ></div>
              <div
                className="column width-6"
                dangerouslySetInnerHTML={{
                  __html: data?.pharmacy.columnTwo.html as string,
                }}
              ></div>
            </>
          )}

          {!data?.pharmacy.columnTwo && (
            <div
              className="column width-12"
              dangerouslySetInnerHTML={{
                __html: data?.pharmacy.columnOne.html as string,
              }}
            ></div>
          )}
        </div>
      </section>
    </>
  );
}
