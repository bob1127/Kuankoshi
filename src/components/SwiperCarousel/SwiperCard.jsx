"use client";

import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardBody } from "@nextui-org/react";
import AnimatedLink from "../AnimatedLink";

import "swiper/css";
import "swiper/css/pagination";

export default function SwiperCardAbout() {
  return (
    <div className="m-0 p-0">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1200}
        spaceBetween={16}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          480: { slidesPerView: 2 },
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4.5 },
        }}
        className="m-0 p-0"
      >
        {Array.from({ length: 8 }).map((_, idx) => (
          <SwiperSlide
            key={idx}
            className="mx-2 overflow-hidden group relative duration-1000 rounded-[50px]"
          >
            <div className="title absolute top-5 left-5 z-[999]">
              <span className="text-white text-[.9rem]">
                Project-0{idx + 1}
              </span>
            </div>
            <div className="title absolute bottom-5 flex right-5 z-[999]">
              <button className="relative h-12 rounded-full bg-transparent px-4 group-hover:text-white text-neutral-950">
                <span className="relative inline-flex overflow-hidden">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                    View More
                  </div>
                  <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    View More
                  </div>
                </span>
              </button>
              <button className="relative opacity-10 group-hover:opacity-100 duration-500 inline-flex h-12 w-20 items-center justify-center overflow-hidden rounded-full border font-medium text-neutral-200">
                <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                  ➔
                </div>
                <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                  ➔
                </div>
              </button>
            </div>
            <AnimatedLink href="/KuankoshiProjectInner">
              <div className="absolute z-50 w-full h-full inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />
              <Card className="border-white rounded-[50px] pb-4 w-full h-[250px] md:h-[280px] lg:h-[300px] 2xl:h-[320px] max-h-[450px] border bg-[url('https://store-palette.com/wp/wp-content/uploads/2021/07/3076.jpg')] relative bg-no-repeat bg-center bg-cover shadow-none overflow-hidden transition-transform duration-1000 ease-in-out hover:scale-110">
                <CardBody className="flex relative flex-col h-full w-full px-0"></CardBody>
              </Card>
            </AnimatedLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
