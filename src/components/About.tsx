import { useContext } from "react";

import { CommonContext } from "@context/CommonProvider";
import { LocaleContext } from "@context/LocaleProvider";
import { useAbout } from "@graphql/useAbout";
import { useHero } from "@graphql/useHero";
import { IHero } from "@model/types/IHero";
import { useQuery, useQueryClient } from "@tanstack/react-query";

/* eslint-disable @next/next/no-img-element */
export default function About() {
  const { locale } = useContext(LocaleContext);
  const { common } = useContext(CommonContext);

  const queryClient = useQueryClient();
  const about = useAbout();

  const { data } = useQuery({
    queryKey: ["about", locale],
    queryFn: () => about,
  });

  const heroData = queryClient.getQueryData<{ hero: IHero }>(["hero", locale]);

  return (
    <section id="about" className="section-block replicable-content">
      <div className="row">
        <div className="column width-6 right left-on-mobile">
          <h2
            className="mb-50"
            dangerouslySetInnerHTML={{ __html: String(data?.about.title.html) }}
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
              {common?.contact}
            </a>
          </p>
        </div>

        <div className="column width-5 offset-1">
          <div
            className="aboutContent"
            dangerouslySetInnerHTML={{
              __html: String(data?.about.content.html),
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
