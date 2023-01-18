/* eslint-disable @next/next/no-img-element */
export default function Services() {
  return (
    <section id="services" className="section-block bkg-grey-ultralight">
      <div className="row">
        <div className="column width-12 center">
          <h2 className="mb-80 sc-t">TRANSLATION SERVICES</h2>
        </div>
        <div className="row content-grid-4">
          <div className="grid-item">
            <div
              className="thumbnail no-margin-bottom overlay-fade-out"
              data-hover-easing="easeInOut"
              data-hover-speed="700"
              data-hover-bkg-color="#000000"
              data-hover-bkg-opacity="0.6"
            >
              <a className="overlay-link" href="translation.html">
                <img
                  src="../images/1.jpg"
                  alt=""
                  style={{ transitionDuration: "700ms" }}
                />
                <span
                  className="overlay-info"
                  style={{
                    transitionDuration: "700ms",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  <span>
                    <span>TRANSLATION</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="grid-item">
            <div
              className="thumbnail no-margin-bottom overlay-fade-out"
              data-hover-easing="easeInOut"
              data-hover-speed="700"
              data-hover-bkg-color="#000000"
              data-hover-bkg-opacity="0.6"
            >
              <a className="overlay-link" href="editing.html">
                <img
                  src="../images/2.jpg"
                  alt=""
                  style={{ transitionDuration: "700ms" }}
                />
                <span
                  className="overlay-info"
                  style={{
                    transitionDuration: "700ms",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  <span>
                    <span>REVIEW</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="grid-item">
            <div
              className="thumbnail no-margin-bottom overlay-fade-out"
              data-hover-easing="easeInOut"
              data-hover-speed="700"
              data-hover-bkg-color="#000000"
              data-hover-bkg-opacity="0.6"
            >
              <a className="overlay-link" href="mtpe.html">
                <img
                  src="../images/3.jpg"
                  alt=""
                  style={{ transitionDuration: "700ms" }}
                />
                <span
                  className="overlay-info"
                  style={{
                    transitionDuration: "700ms",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  <span>
                    <span>MTPE</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="grid-item">
            <div
              className="thumbnail no-margin-bottom overlay-fade-out"
              data-hover-easing="easeInOut"
              data-hover-speed="700"
              data-hover-bkg-color="#000000"
              data-hover-bkg-opacity="0.6"
            >
              <a className="overlay-link" href="pharmacy.html">
                <img
                  src="../images/4.jpg"
                  alt=""
                  style={{ transitionDuration: "700ms" }}
                />
                <span
                  className="overlay-info"
                  style={{
                    transitionDuration: "2000ms",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  <span>
                    <span>PHARMACEUTICAL TRANSLATION</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
