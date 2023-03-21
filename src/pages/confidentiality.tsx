import Head from "next/head";
import { useContext } from "react";

import FeaturedMedia from "@components/FeaturedMedia";
import Header from "@components/Header";
import { LocaleContext } from "@context/LocaleProvider";
import { useConfidentiality } from "@graphql/useConfidentiality";
import { IConfidentiality } from "@model/types/IConfidentiality";
import { useQuery } from "@tanstack/react-query";

export default function Confidentiality() {
  const { locale } = useContext(LocaleContext);
  const confidentiality = useConfidentiality();

  const { data } = useQuery<{ confidentiality: IConfidentiality }>({
    queryKey: ["confidentiality", locale],
    queryFn: () => confidentiality,
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
          title={data?.confidentiality.title as string}
          image="../images/5.jpg"
        />
      </div>

      <section className="section-block bkg-grey-ultralight">
        <div className="row">
          <div
            className="column width-8 justify"
            dangerouslySetInnerHTML={{
              __html: data?.confidentiality.content.html as string,
            }}
          ></div>
        </div>
      </section>
    </>
  );
}
