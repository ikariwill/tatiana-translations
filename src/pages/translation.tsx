/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useContext } from "react";

/* eslint-disable @next/next/no-html-link-for-pages */
import FeaturedMedia from "@components/FeaturedMedia";
import Header from "@components/Header";
import Translations from "@components/Translations";
import { LocaleContext } from "@context/LocaleProvider";
import { useTranslation } from "@graphql/useTranslation";
import { ITranslation } from "@model/types/ITranslation";
import { useQuery } from "@tanstack/react-query";

export default function Translation() {
  const { locale } = useContext(LocaleContext);
  const translation = useTranslation();

  const { data } = useQuery<{ translation: ITranslation }>({
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
        <FeaturedMedia title="Translation" image="../images/1.jpg" />
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
                  __html: String(data?.translation.columnOne.html),
                }}
              ></div>
              <div
                className="column width-6"
                dangerouslySetInnerHTML={{
                  __html: String(data?.translation.columnTwo.html),
                }}
              ></div>
            </>
          )}

          {!data?.translation.columnTwo && (
            <div
              className="column width-12"
              dangerouslySetInnerHTML={{
                __html: String(data?.translation.columnOne.html),
              }}
            ></div>
          )}
        </div>
      </section>
    </>
  );
}
