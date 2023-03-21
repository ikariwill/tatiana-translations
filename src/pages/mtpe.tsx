import Head from "next/head";
import { useContext } from "react";

import FeaturedMedia from "@components/FeaturedMedia";
import Header from "@components/Header";
import Translations from "@components/Translations";
import { LocaleContext } from "@context/LocaleProvider";
import { useMTPE } from "@graphql/useMTPE";
import { IColumnTemplate } from "@model/types/IColumnTemplate";
import { useQuery } from "@tanstack/react-query";

export default function Mtpe() {
  const { locale } = useContext(LocaleContext);
  const mtpe = useMTPE();

  const { data } = useQuery<{ mtpe: IColumnTemplate }>({
    queryKey: ["mtpe", locale],
    queryFn: () => mtpe,
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
          title={data?.mtpe.title as string}
          image="../images/3.jpg"
        />
        <Translations />
      </div>

      <section className="section-block bkg-grey-ultralight">
        <div className="row">
          <div className="column width-12 center">
            <h2 className="mb-80 sc-t">{data?.mtpe.title}</h2>
          </div>

          {data?.mtpe.columnTwo && (
            <>
              <div
                className="column width-6"
                dangerouslySetInnerHTML={{
                  __html: data?.mtpe.columnOne.html as string,
                }}
              ></div>
              <div
                className="column width-6"
                dangerouslySetInnerHTML={{
                  __html: data?.mtpe.columnTwo.html as string,
                }}
              ></div>
            </>
          )}

          {!data?.mtpe.columnTwo && (
            <div
              className="column width-12"
              dangerouslySetInnerHTML={{
                __html: data?.mtpe.columnOne.html as string,
              }}
            ></div>
          )}
        </div>
      </section>
    </>
  );
}
