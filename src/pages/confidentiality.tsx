import FeaturedMedia from "@components/FeaturedMedia";
import Header from "@components/Header";
import Head from "next/head";

export default function Confidentiality() {
  return (
    <>
      <Head>
        <title>Tatiana Hernandez | Translations & Revisions</title>
      </Head>
      <Header />
      <div className="content clearfix">
        <FeaturedMedia title="Confidentiality" image="../images/5.jpg" />
      </div>

      <section className="section-block bkg-grey-ultralight">
        <div className="row">
          <div className="column width-8 justify">
            <h3>
              In this special section of my website, I declare and reinforce my
              commitment to confidentiality of the documents transmitted to me
              for translation.
            </h3>
            <br />
            <strong>
              Having worked for several years in the pharmaceutical industry,
              and as a translator for clients in the pharmaceutical industry, I
              am fully aware of the criticality of ensuring confidentiality.
              Here are the steps I take for this purpose:
            </strong>
            <br />
            <br />
            <ul>
              <li>I work only with private Wi-Fi and secure internet;</li>
              <li>I work only on a password protected personal laptop;</li>
              <li>
                {" "}
                My laptop is protected by one of the leading antivirus software
                market brands;
              </li>
              <li>
                {" "}
                I do not use any kind of public translator like Google
                Translator, DeepL, etc.;
              </li>
              <li>
                I do not use any type of online and public translation software;
              </li>
              <li>
                {" "}
                I do not use any type of cloud storage translation memory; among
                others.{" "}
              </li>
            </ul>
            <p>
              I also declare I agree with signing confidentiality contracts.
            </p>
            <p>
              If you want more details on this aspect, or in case of any
              questions or concerns, do not hesitate to contact me through the
              &quot;Contact&quot; button.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
