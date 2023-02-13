import FeaturedMedia from "@components/FeaturedMedia";
import Header from "@components/Header";
import Head from "next/head";

export default function Editing() {
  return (
    <>
      <Head>
        <title>Tatiana Hernandez | Translations & Revisions</title>
      </Head>
      <Header />
      <div className="content clearfix">
        <FeaturedMedia title="Proofreading & Editing" image="../images/2.jpg" />
      </div>

      <section className="section-block bkg-grey-ultralight">
        <div className="row">
          <div className="column width-12 center">
            <h2 className="mb-80 sc-t">Proofreading & Editing</h2>
          </div>
          <div className="column width-6">
            <p>
              Proofreading is the most important step in my work. At this stage,
              my main responsibility is to ensure that the translation contains
              the original message and is free of errors. In addition, I put
              myself in the position of the reader and thus check the
              understandability of the document. Only when both points harmonize
              with each other is it in its final form.
            </p>
          </div>
          <div className="column width-6">
            <p>
              If you value uncomplicated cooperation and are looking for a
              simple and objective solution from an experienced specialist,
              please contact me. I will make sure that your target group feels
              addressed and thus that the documents to be translated are of a
              high quality.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
