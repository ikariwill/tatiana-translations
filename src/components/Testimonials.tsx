import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

import { useContext } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CommonContext } from "@context/CommonProvider";
import { LocaleContext } from "@context/LocaleProvider";
import { useQuery } from "@tanstack/react-query";

import { useTestimonials } from "../graphql/useTestimonials";

export default function Testimonials() {
  const { data: commonData } = useContext(CommonContext);
  const { locale } = useContext(LocaleContext);
  const testimonials = useTestimonials();

  const { data } = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => testimonials,
    enabled: !!locale,
  });

  return (
    <div className="section-block ">
      <div className="row full-width collapse">
        <div className="column width-12 center">
          <h3 className="mb-50 sc-t">{commonData?.common?.testimonialTitle}</h3>
          <div
            className="tm-slider-container testimonial-slider  tms-scalable-height"
            data-nav-dark=""
            style={{ width: "600px", height: "291px" }}
          >
            <Swiper
              spaceBetween={20}
              centeredSlides
              pagination={{ clickable: true }}
              autoplay
              modules={[Pagination]}
              className="mySwiper"
            >
              {data?.testimonials.map(
                (testimonial: { id: number; text: string; author: string }) => (
                  <SwiperSlide key={testimonial.id}>
                    <blockquote>
                      <p>
                        {testimonial.text}

                        <cite>{testimonial.author}</cite>
                      </p>
                    </blockquote>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
