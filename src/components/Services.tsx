/* eslint-disable @next/next/no-html-link-for-pages */

import Link from "next/link";
import { useContext } from "react";

import { CommonContext } from "@context/CommonProvider";

/* eslint-disable @next/next/no-img-element */
export default function Services() {
  const { data } = useContext(CommonContext);

  return (
    <section id="services" className="section-block bkg-grey-ultralight">
      <div className="row">
        <div className="column width-12 center">
          <h2 className="mb-80 sc-t">{data?.common.translationServices}</h2>
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
              <Link className="overlay-link" href="/translation">
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
                    <span>{data?.common.translation}</span>
                  </span>
                </span>
              </Link>
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
              <Link className="overlay-link" href="/editing">
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
                    <span>{data?.common.review}</span>
                  </span>
                </span>
              </Link>
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
              <Link className="overlay-link" href="/mtpe">
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
              </Link>
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
              <Link className="overlay-link" href="/pharmacy">
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
                    <span>{data?.common.pharmaceuticalTranslation}</span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
