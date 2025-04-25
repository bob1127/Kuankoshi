"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedLink from "../AnimatedLink";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const myLoader01 = ({ src, width, quality, placeholder }) => {
  return `https://cdn1.beams.co.jp/special/kids_summer_2024/assets/images/chapter_1/${src}?w=${width}?p=${placeholder}`;
};
const food01 = ({ src, width, quality, placeholder }) => {
  return `https://cdn1.beams.co.jp/special/kids_summer_2024/assets/images/chapter_1/${src}?w=${width}?p=${placeholder}`;
};
export default () => {
  // const sliderRef = useRef(null);
  // const handlePrev = useCallback(() => {
  //     if (!sliderRef.current) return;
  //     sliderRef.current.swiper.slidePrev();
  // }, []);

  // const handleNext = useCallback(() => {
  //     if (!sliderRef.current) return;
  //     sliderRef.current.swiper.slideNext();
  // }, []);

  return (
    <>
      <div className="  m-0 p-0">
        <Swiper
          // install Swiper modules

          breakpoints={{
            0: {
              slidesPerView: 1.2, // 小螢幕顯示 1.2 張（有預覽效果）
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4.5, // 大螢幕顯示 5 張
            },
          }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={1}
          className="m-0 p-0"
          navigation
          pagination={{ clickable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="mx-2 overflow-hidden group relative duration-1000 rounded-[50px]">
            <div className="title absolute top-5 left-5 z-[999]">
              <span className="text-white text-[.9rem]">Project-01</span>
            </div>
            <div className="title absolute bottom-5 flex right-5 z-[999]">
              <button class=" relative h-12 rounded-full  bg-transparent px-4 group-hover:text-white text-neutral-950">
                <span class="relative inline-flex overflow-hidden">
                  <div class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                    View More
                  </div>
                  <div class="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    View More
                  </div>
                </span>
              </button>
              <button class=" relative opacity-10 group-hover:opacity-100 duration-500 inline-flex h-12 w-20 items-center justify-center overflow-hidden rounded-full border font-medium text-neutral-200">
                <div class="translate-x-0 transition group-hover:translate-x-[300%]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <AnimatedLink href="/KuankoshiProjectInner">
              {" "}
              <div className="absolute z-50 w-full  h-full inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />
              <Card className=" border-white rounded-[50px]  pb-4 w-full h-[250px] md:h-[280px] lg:h-[300px] 2xl:h-[320px] max-h-[450px] border  bg-[url('https://store-palette.com/wp/wp-content/uploads/2021/07/3076.jpg')] relative bg-no-repeat bg-center bg-cover shadow-none overflow-hidden transition-transform duration-1000 ease-in-out hover:scale-110">
                <CardBody className="flex relative flex-col  h-full w-full   px-0"></CardBody>
              </Card>{" "}
            </AnimatedLink>
          </SwiperSlide>
          <SwiperSlide className="mx-2 overflow-hidden group relative duration-1000 rounded-[50px]">
            <div className="title absolute top-5 left-5 z-[999]">
              <span className="text-white text-[.9rem]">Project-01</span>
            </div>
            <div className="title absolute bottom-5 flex right-5 z-[999]">
              <button class=" relative h-12 rounded-full  bg-transparent px-4 group-hover:text-white text-neutral-950">
                <span class="relative inline-flex overflow-hidden">
                  <div class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                    View More
                  </div>
                  <div class="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    View More
                  </div>
                </span>
              </button>
              <button class=" relative opacity-10 group-hover:opacity-100 duration-500 inline-flex h-12 w-20 items-center justify-center overflow-hidden rounded-full border font-medium text-neutral-200">
                <div class="translate-x-0 transition group-hover:translate-x-[300%]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <AnimatedLink href="/KuankoshiProjectInner">
              {" "}
              <div className="absolute z-50 w-full  h-full inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />
              <Card className=" border-white rounded-[50px]  pb-4 w-full h-[250px] md:h-[280px] lg:h-[300px] 2xl:h-[320px] max-h-[450px] border  bg-[url('https://store-palette.com/wp/wp-content/uploads/2021/07/3076.jpg')] relative bg-no-repeat bg-center bg-cover shadow-none overflow-hidden transition-transform duration-1000 ease-in-out hover:scale-110">
                <CardBody className="flex relative flex-col  h-full w-full   px-0"></CardBody>
              </Card>{" "}
            </AnimatedLink>
          </SwiperSlide>
          <SwiperSlide className="mx-2 overflow-hidden group relative duration-1000 rounded-[50px]">
            <div className="title absolute top-5 left-5 z-[999]">
              <span className="text-white text-[.9rem]">Project-01</span>
            </div>
            <div className="title absolute bottom-5 flex right-5 z-[999]">
              <button class=" relative h-12 rounded-full  bg-transparent px-4 group-hover:text-white text-neutral-950">
                <span class="relative inline-flex overflow-hidden">
                  <div class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                    View More
                  </div>
                  <div class="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    View More
                  </div>
                </span>
              </button>
              <button class=" relative opacity-10 group-hover:opacity-100 duration-500 inline-flex h-12 w-20 items-center justify-center overflow-hidden rounded-full border font-medium text-neutral-200">
                <div class="translate-x-0 transition group-hover:translate-x-[300%]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <AnimatedLink href="/KuankoshiProjectInner">
              {" "}
              <div className="absolute z-50 w-full  h-full inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />
              <Card className=" border-white rounded-[50px]  pb-4 w-full h-[250px] md:h-[280px] lg:h-[300px] 2xl:h-[320px] max-h-[450px] border  bg-[url('https://store-palette.com/wp/wp-content/uploads/2021/07/3076.jpg')] relative bg-no-repeat bg-center bg-cover shadow-none overflow-hidden transition-transform duration-1000 ease-in-out hover:scale-110">
                <CardBody className="flex relative flex-col  h-full w-full   px-0"></CardBody>
              </Card>{" "}
            </AnimatedLink>
          </SwiperSlide>
          <SwiperSlide className="mx-2 overflow-hidden group relative duration-1000 rounded-[50px]">
            <div className="title absolute top-5 left-5 z-[999]">
              <span className="text-white text-[.9rem]">Project-01</span>
            </div>
            <div className="title absolute bottom-5 flex right-5 z-[999]">
              <button class=" relative h-12 rounded-full  bg-transparent px-4 group-hover:text-white text-neutral-950">
                <span class="relative inline-flex overflow-hidden">
                  <div class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                    View More
                  </div>
                  <div class="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    View More
                  </div>
                </span>
              </button>
              <button class=" relative opacity-10 group-hover:opacity-100 duration-500 inline-flex h-12 w-20 items-center justify-center overflow-hidden rounded-full border font-medium text-neutral-200">
                <div class="translate-x-0 transition group-hover:translate-x-[300%]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <AnimatedLink href="/KuankoshiProjectInner">
              {" "}
              <div className="absolute z-50 w-full  h-full inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />
              <Card className=" border-white rounded-[50px]  pb-4 w-full h-[250px] md:h-[280px] lg:h-[300px] 2xl:h-[320px] max-h-[450px] border  bg-[url('https://store-palette.com/wp/wp-content/uploads/2021/07/3076.jpg')] relative bg-no-repeat bg-center bg-cover shadow-none overflow-hidden transition-transform duration-1000 ease-in-out hover:scale-110">
                <CardBody className="flex relative flex-col  h-full w-full   px-0"></CardBody>
              </Card>{" "}
            </AnimatedLink>
          </SwiperSlide>
          <SwiperSlide className="mx-2 overflow-hidden group relative duration-1000 rounded-[50px]">
            <div className="title absolute top-5 left-5 z-[999]">
              <span className="text-white text-[.9rem]">Project-01</span>
            </div>
            <div className="title absolute bottom-5 flex right-5 z-[999]">
              <button class=" relative h-12 rounded-full  bg-transparent px-4 group-hover:text-white text-neutral-950">
                <span class="relative inline-flex overflow-hidden">
                  <div class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                    View More
                  </div>
                  <div class="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    View More
                  </div>
                </span>
              </button>
              <button class=" relative opacity-10 group-hover:opacity-100 duration-500 inline-flex h-12 w-20 items-center justify-center overflow-hidden rounded-full border font-medium text-neutral-200">
                <div class="translate-x-0 transition group-hover:translate-x-[300%]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <AnimatedLink href="/KuankoshiProjectInner">
              {" "}
              <div className="absolute z-50 w-full  h-full inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />
              <Card className=" border-white rounded-[50px]  pb-4 w-full h-[250px] md:h-[280px] lg:h-[300px] 2xl:h-[320px] max-h-[450px] border  bg-[url('https://store-palette.com/wp/wp-content/uploads/2021/07/3076.jpg')] relative bg-no-repeat bg-center bg-cover shadow-none overflow-hidden transition-transform duration-1000 ease-in-out hover:scale-110">
                <CardBody className="flex relative flex-col  h-full w-full   px-0"></CardBody>
              </Card>{" "}
            </AnimatedLink>
          </SwiperSlide>
          <SwiperSlide className="mx-2 overflow-hidden group relative duration-1000 rounded-[50px]">
            <div className="title absolute top-5 left-5 z-[999]">
              <span className="text-white text-[.9rem]">Project-01</span>
            </div>
            <div className="title absolute bottom-5 flex right-5 z-[999]">
              <button class=" relative h-12 rounded-full  bg-transparent px-4 group-hover:text-white text-neutral-950">
                <span class="relative inline-flex overflow-hidden">
                  <div class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                    View More
                  </div>
                  <div class="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    View More
                  </div>
                </span>
              </button>
              <button class=" relative opacity-10 group-hover:opacity-100 duration-500 inline-flex h-12 w-20 items-center justify-center overflow-hidden rounded-full border font-medium text-neutral-200">
                <div class="translate-x-0 transition group-hover:translate-x-[300%]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <AnimatedLink href="/KuankoshiProjectInner">
              {" "}
              <div className="absolute z-50 w-full  h-full inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />
              <Card className=" border-white rounded-[50px]  pb-4 w-full h-[250px] md:h-[280px] lg:h-[300px] 2xl:h-[320px] max-h-[450px] border  bg-[url('https://store-palette.com/wp/wp-content/uploads/2021/07/3076.jpg')] relative bg-no-repeat bg-center bg-cover shadow-none overflow-hidden transition-transform duration-1000 ease-in-out hover:scale-110">
                <CardBody className="flex relative flex-col  h-full w-full   px-0"></CardBody>
              </Card>{" "}
            </AnimatedLink>
          </SwiperSlide>
          <SwiperSlide className="mx-2 overflow-hidden group relative duration-1000 rounded-[50px]">
            <div className="title absolute top-5 left-5 z-[999]">
              <span className="text-white text-[.9rem]">Project-01</span>
            </div>
            <div className="title absolute bottom-5 flex right-5 z-[999]">
              <button class=" relative h-12 rounded-full  bg-transparent px-4 group-hover:text-white text-neutral-950">
                <span class="relative inline-flex overflow-hidden">
                  <div class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                    View More
                  </div>
                  <div class="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    View More
                  </div>
                </span>
              </button>
              <button class=" relative opacity-10 group-hover:opacity-100 duration-500 inline-flex h-12 w-20 items-center justify-center overflow-hidden rounded-full border font-medium text-neutral-200">
                <div class="translate-x-0 transition group-hover:translate-x-[300%]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <AnimatedLink href="/KuankoshiProjectInner">
              {" "}
              <div className="absolute z-50 w-full  h-full inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />
              <Card className=" border-white rounded-[50px]  pb-4 w-full h-[250px] md:h-[280px] lg:h-[300px] 2xl:h-[320px] max-h-[450px] border  bg-[url('https://store-palette.com/wp/wp-content/uploads/2021/07/3076.jpg')] relative bg-no-repeat bg-center bg-cover shadow-none overflow-hidden transition-transform duration-1000 ease-in-out hover:scale-110">
                <CardBody className="flex relative flex-col  h-full w-full   px-0"></CardBody>
              </Card>{" "}
            </AnimatedLink>
          </SwiperSlide>
        </Swiper>
        {/* <div className="prev-arrow" onClick={handlePrev} />
            <div className="next-arrow" onClick={handleNext} /> */}
      </div>
    </>
  );
};
