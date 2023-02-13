/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
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
        <section
          className="section-block featured-media page-intro small tm-slider-parallax-container"
          style={{ height: "300px" }}
        >
          <div
            className="tm-slider-container full-width-slider show-on-hover"
            data-parallax=""
            data-parallax-fade-out=""
            data-animation="slide"
            data-scale-under="1140"
            data-scale-min-height="300"
            style={{
              width: "1440px",
              height: "300px",
              position: "fixed",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            <ul className="tms-slides">
              <li
                className="tms-slide active tms-forcefit img-loaded"
                data-image=""
                data-as-bkg-image=""
                data-force-fit=""
                id="tms-slide-1"
                style={{
                  transition: "-webkit-transform 1000ms ease 0ms, opacity",
                  opacity: 1,
                  backgroundImage:
                    "url(&quot;images/slider/slide-1-page-intro@2x.jpg&quot;)",
                  transform:
                    "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)",
                  transformOrigin: "50% 50% 0px",
                  visibility: "visible",
                }}
              >
                <div className="tms-content">
                  <div className="tms-content-inner left">
                    <div className="row">
                      <div
                        className="column width-12 tms-perspective"
                        style={{ opacity: 1.27, transform: "scale3d(1, 1, 1)" }}
                      >
                        <h1
                          className="tms-caption color-white inline no-scale"
                          data-animate-in="preset:slideInUpShort,duration:1000ms,delay:100ms,"
                          data-no-scale=""
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)",
                            opacity: 1,
                            transformOrigin: "50% 50% 0px",
                            visibility: "visible",
                            fontWeight: 600,
                          }}
                        >
                          Translation
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  data-src="../images/1.jpg"
                  data-retina=""
                  src="../images/1.jpg"
                  alt=""
                  style={{
                    opacity: 1,
                    display: "none",
                    width: "1440px",
                    height: "403px",
                    top: "-51px",
                    left: "0px",
                  }}
                />
              </li>
            </ul>
          </div>
        </section>

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
