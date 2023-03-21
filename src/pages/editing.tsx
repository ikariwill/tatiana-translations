import Head from "next/head";
import { useContext } from "react";

import FeaturedMedia from "@components/FeaturedMedia";
import Header from "@components/Header";
import Translations from "@components/Translations";
import { LocaleContext } from "@context/LocaleProvider";
import { useProofreading } from "@graphql/useProofreading";
import { IColumnTemplate } from "@model/types/IColumnTemplate";
import { useQuery } from "@tanstack/react-query";

export default function Editing() {
  const { locale } = useContext(LocaleContext);
  const proofreading = useProofreading();

  const { data } = useQuery<{ proofreading: IColumnTemplate }>({
    queryKey: ["proofreading", locale],
    queryFn: () => proofreading,
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
          title={data?.proofreading.title as string}
          image="../images/2.jpg"
        />
        <Translations />
      </div>

      <section className="section-block bkg-grey-ultralight">
        <div className="row">
          <div className="column width-12 center">
            <h2 className="mb-80 sc-t">{data?.proofreading.title}</h2>
          </div>

          {data?.proofreading.columnTwo && (
            <>
              <div
                className="column width-6"
                dangerouslySetInnerHTML={{
                  __html: data?.proofreading.columnOne.html as string,
                }}
              ></div>
              <div
                className="column width-6"
                dangerouslySetInnerHTML={{
                  __html: data?.proofreading.columnTwo.html as string,
                }}
              ></div>
            </>
          )}

          {!data?.proofreading.columnTwo && (
            <div
              className="column width-12"
              dangerouslySetInnerHTML={{
                __html: data?.proofreading.columnOne.html as string,
              }}
            ></div>
          )}
        </div>
      </section>
    </>
  );
}
