/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useContext } from "react";

import Contact from "@components/Contact";
/* eslint-disable @next/next/no-html-link-for-pages */
import FeaturedMedia from "@components/FeaturedMedia";
import Header from "@components/Header";
import Translations from "@components/Translations";
import { Whatsapp } from "@components/Whatsapp";
import { LocaleContext } from "@context/LocaleProvider";
import { useTranslation } from "@graphql/useTranslation";
import { IColumnTemplate } from "@model/types/IColumnTemplate";
import { useQuery } from "@tanstack/react-query";

export default function Translation() {
  const { locale } = useContext(LocaleContext);
  const translation = useTranslation();

  const { data } = useQuery<{ translation: IColumnTemplate }>({
    queryKey: ["translation", locale],
    queryFn: () => translation,
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
          title={data?.translation.title as string}
          image="../images/1.jpg"
        />
        <Translations />
      </div>

      <section className="section-block bkg-grey-ultralight">
        <div className="row">
          <div className="column width-12 center">
            <h2 className="mb-80 sc-t">{data?.translation.title}</h2>
          </div>

          {data?.translation.columnTwo && (
            <>
              <div
                className="column width-6"
                dangerouslySetInnerHTML={{
                  __html: data?.translation.columnOne.html as string,
                }}
              ></div>
              <div
                className="column width-6"
                dangerouslySetInnerHTML={{
                  __html: data?.translation.columnTwo.html as string,
                }}
              ></div>
            </>
          )}

          {!data?.translation.columnTwo && (
            <div
              className="column width-12"
              dangerouslySetInnerHTML={{
                __html: data?.translation.columnOne.html as string,
              }}
            ></div>
          )}
        </div>
      </section>
    </>
  );
}
