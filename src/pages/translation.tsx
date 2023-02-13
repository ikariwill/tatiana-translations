/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import FeaturedMedia from "@components/FeaturedMedia";
import Header from "@components/Header";
import Head from "next/head";

export default function Translation() {
  return (
    <>
      <Head>
        <title>Tatiana Hernandez | Translations & Revisions</title>
      </Head>
      <Header />
      <div className="content clearfix">
        <FeaturedMedia title="Translation" image="../images/1.jpg" />

        <div className="section-block replicable-content">
          <div className="row flex">
            <div className="column width-6">
              <div className="feature-column">
                <span className="feature-icon icon-globe large color-theme mb-20"></span>
                <div className="feature-text">
                  <h4>Languages</h4>
                  <table style={{ width: "100%" }}>
                    <thead style={{ textAlign: "left" }}>
                      <tr>
                        <th style={{ width: "28%" }}>Document</th>
                        <th style={{ width: "22%" }}></th>
                        <th style={{ width: "50%" }}>Translation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>English</td>
                        <td>
                          <span
                            style={{
                              display: "block",
                              width: "100%",
                              textAlign: "center",
                            }}
                          />
                          →
                        </td>
                        <td>Portuguese - Brazil</td>
                      </tr>
                      <tr>
                        <td>Spanish</td>
                        <td>
                          <span
                            style={{
                              display: "block",
                              width: "100%",
                              textAlign: "center",
                            }}
                          />
                          →
                        </td>
                        <td>Portuguese - Brazil</td>
                      </tr>
                      <tr>
                        <td>French</td>
                        <td>
                          <span
                            style={{
                              display: "block",
                              width: "100%",
                              textAlign: "center",
                            }}
                          />
                          →
                        </td>
                        <td>Portuguese - Brazil</td>
                      </tr>
                      <tr>
                        <td>German</td>
                        <td>
                          <span
                            style={{
                              display: "block",
                              width: "100%",
                              textAlign: "center",
                            }}
                          />
                          →
                        </td>
                        <td>Portuguese - Brazil</td>
                      </tr>
                      <tr>
                        <td>Portuguese</td>
                        <td>
                          <span
                            style={{
                              display: "block",
                              width: "100%",
                              textAlign: "center",
                            }}
                          />
                          →
                        </td>
                        <td>English</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="column width-4">
              <div className="feature-column">
                <span className="feature-icon icon-open-book large color-theme mb-20"></span>
                <div className="feature-text">
                  <h4>Areas</h4>
                  <ul>
                    <li>Pharmaceutical Sciences & Pharmaceutical Industry</li>
                    <li>Medicine, Nutrition & Health</li>
                    <li>Academic Research</li>
                    <li>Training & Education</li>
                    <li>Sport & Fitness</li>
                    <li>Marketing & Communication</li>
                    <li>Games</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-block bkg-grey-ultralight">
        <div className="row">
          <div className="column width-12 center">
            <h2 className="mb-80 sc-t">Translation</h2>
          </div>
          <div className="column width-6">
            <p>
              A good translation is the one, that reads naturally. Through a
              special selection of words and expressions, I will provide your
              audience a comfortable reading experience.
            </p>
            <p>
              For this, it is essential that I know my audience in depth. Thanks
              to my many years’ experience as a translator, I can understand
              different target groups and adapt the texts to the respective
              audience.
            </p>
          </div>
          <div className="column width-6">
            <p>
              During my studies I got to know two especially important
              perspectives: on the one hand, that of the highly specialized
              professionals such as doctors and researchers, and on the other
              hand, that of people without medical expertise such as adult and
              pediatric patients.
            </p>
            <p>
              If you want an efficient and uncomplicated communication with your
              target group, please contact me. Through my extensive experience,
              I will make sure that your audience understands your document and
              identifies with it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
