import { request } from "graphql-request";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleProvider";
import { GetHeroContent } from "@graphql/GetHeroContent";
import { IHero } from "@model/types/IHero";
import { useQuery } from "@tanstack/react-query";

export default function Hero() {
  const endpoint = process.env.HYGRAPH_READY_ONLY_ENDPOINT as string;
  const { locale } = useContext(LocaleContext);

  const { data } = useQuery<{ hero: IHero }>({
    queryKey: ["hero", locale],
    queryFn: async () =>
      request(endpoint, GetHeroContent(), { translate: locale }),
    enabled: !!locale,
  });

  return (
    <section className="section-block hero-5 hero-5-2 window-height show-media-column-on-mobile replicable-content bkg-charcoal">
      <div className="media-column width-6"></div>
      <div className="row">
        <div className="column width-5 push-7">
          <div className="hero-content split-hero-content">
            <div className="hero-content-inner left">
              <h1 className={`color-white title-large mb-0 ht1`}>
                {data?.hero.title}
              </h1>
              <h2 className={`color-white title-medium lspacing-medium ht2`}>
                {data?.hero.description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
