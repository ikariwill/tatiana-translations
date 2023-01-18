import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { GetAllTestimonials } from "../graphql/GetAllTestimonials";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

export default function Testimonials() {
  const endpoint = process.env.HYGRAPH_READY_ONLY_ENDPOINT as string;

  const { data } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => request(endpoint, GetAllTestimonials()),
  });

  return (
    <div className="section-block ">
      <div className="row full-width collapse">
        <div className="column width-12 center">
          <h3 className="mb-50 sc-t">Testimonials</h3>
          <div
            className="tm-slider-container testimonial-slider  tms-scalable-height"
            data-nav-dark=""
            style={{ width: "600px", height: "291px" }}
          >
            <Swiper
              spaceBetween={20}
              centeredSlides
              pagination
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
