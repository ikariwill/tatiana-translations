import FeaturedMedia from "@components/FeaturedMedia";
import Header from "@components/Header";
import Translations from "@components/Translations";
import Head from "next/head";

export default function Pharmacy() {
  return (
    <>
      <Head>
        <title>Tatiana Hernandez | Translations & Revisions</title>
      </Head>
      <Header />
      <div className="content clearfix">
        <FeaturedMedia
          title="Pharmaceutical translation"
          image="../images/4.jpg"
        />

        <Translations />
      </div>

      <section className="section-block bkg-grey-ultralight">
        <div className="row">
          <div className="column width-12 center">
            <h2 className="mb-80 sc-t">Pharmaceutical translation</h2>
          </div>
          <div className="column width-5">
            <p>
              My basic education is as a pharmacist. See below some highlights
              from my history.
            </p>
            <ul>
              <li>
                I completed my education in Pharmacy and Biochemistry at the
                University of São Paulo in 2013.
              </li>
              <li>
                I undertook scientific initiation in malaria vaccine and
                subsequently worked in two other research laboratories
              </li>
              <li>I worked with pharmaceutical care in hospital pharmacy.</li>
              <li>
                {" "}
                In the pharmaceutical industry, I built four years&apos;
                experience in several areas: customer service and medical
                information, pharmacovigilance and quality assurance.
              </li>
              <li>
                Since 2009, I work with specialized translation in the field of
                medicine and pharmacy.
              </li>
              <li>Translations of textbooks for a major publisher.</li>
              <li>
                Partnerships with agencies for supplying translations to the
                pharmaceutical industry. It is this multiplicity of academic and
                professional experiences that I apply in my work as a
                translator.
              </li>
            </ul>
          </div>
          <div className="column width-7">
            <p>
              It is this multiplicity of academic and professional experiences
              that I apply in my work as a translator.
            </p>

            <p>
              Hiring a pharmacist to translate pharmaceutical documents means
              you will have absolute certainty that your material will be as
              accurate and appropriate as possible for your target audience. In
              addition, I will help you to spare your costs and time, since the
              questions and revisions of your document will be reduced from
              minimum to zero.
            </p>

            <p>
              If you want a pharmaceutical translation by an expert with over a
              decade&apos;s experience, get a quote with me. Ensure the quality
              of your translation with the certainty that the Brazilian audience
              will connect with your document.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
