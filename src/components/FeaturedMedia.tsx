/* eslint-disable @next/next/no-img-element */
export default function FeaturedMedia({
  image,
  title,
}: {
  title: string;
  image?: string;
}) {
  return (
    <section
      className="section-block featured-media page-intro small tm-slider-parallax-container"
      style={{ height: "300px", backgroundImage: "url(images/1.jpg)" }}
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
              transform:
                "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)",
              transformOrigin: "50% 50% 0px",
              visibility: "visible",
              backgroundSize: "cover",
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
                      {title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
