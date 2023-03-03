import request from "graphql-request";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleProvider";
import { GetAboutContent } from "@graphql/GetAboutContent";
import { GetHeroContent } from "@graphql/GetHeroContent";
import { useQuery } from "@tanstack/react-query";

/* eslint-disable @next/next/no-img-element */
export default function About() {
  const endpoint = process.env.HYGRAPH_READY_ONLY_ENDPOINT as string;
  const { locale } = useContext(LocaleContext);

  const { data } = useQuery({
    queryKey: ["about", locale],
    queryFn: async () =>
      request(endpoint, GetAboutContent(), { translate: locale }),
  });

  const { data: heroData } = useQuery({
    queryKey: ["hero", locale],
    queryFn: async () =>
      request(endpoint, GetHeroContent(), { translate: locale }),
  });

  return (
    <section id="about" className="section-block replicable-content">
      <div className="row">
        <div className="column width-6 right left-on-mobile">
          <h2
            className="mb-50"
            dangerouslySetInnerHTML={{ __html: data?.about.title.html }}
          ></h2>
          <div className="thumbnail no-margin-bottom">
            <img src="../images/signature.svg" alt="" />
          </div>
          <p className="weight-bold text-uppercase opacity-05 mb-mobile-50">
            <small>{heroData?.hero.description}</small>
          </p>
          <p>
            <a
              data-content="inline"
              data-toolbar=""
              data-modal-mode
              data-modal-width="500"
              href="#contact-lightbox"
              className="lightbox-link button text-uppercase bkg-theme color-white border-hover-grey-light color-hover-grey no-margin-bottom rounded"
            >
              Contact
            </a>
          </p>
        </div>

        <div className="column width-5 offset-1">
          <div
            className="aboutContent"
            dangerouslySetInnerHTML={{ __html: data?.about.content.html }}
          ></div>
        </div>
      </div>
    </section>
  );
}
