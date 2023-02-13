import FeaturedMedia from "@components/FeaturedMedia";
import Header from "@components/Header";
import Head from "next/head";

export default function Mtpe() {
  return (
    <>
      <Head>
        <title>Tatiana Hernandez | Translations & Revisions</title>
      </Head>
      <Header />
      <div className="content clearfix">
        <FeaturedMedia title="MTPE" image="../images/3.jpg" />
      </div>

      <section className="section-block bkg-grey-ultralight">
        <div className="row">
          <div className="column width-12 center">
            <h2 className="mb-80 sc-t">MTPE</h2>
          </div>
          <div className="column width-6">
            <p>
              MTPE is Machine Translation Post-Editing, and implies the use of
              an artificially trained tool for producing the first translation
              of a text. Examples of such tools are Google Translator and DeepL,
              which are public and free, but involve a remarkably high risk of
              confidentiality.
            </p>
            <p>
              Companies producing a remarkably high volume of documents opt for
              purchasing a translation tool to protect their confidentiality.
              However, the eye of a translator remains essential to avoid flaws
              and to refine the tool.
            </p>
          </div>
          <div className="column width-6">
            <p>
              A translator with experience in MTPE employs a different working
              method: he understands the costs invested by the client in the
              translation tool and works more quickly, respecting the
              tool&apos;s suggestions. At the same time, he ensures that the
              final result has the quality of a translated document without this
              tool.
            </p>
            <p>
              If you want a quick turnover, get a quote with me. Ensure the
              quality of your translation with the certainty that the Brazilian
              audience will connect with your document.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
