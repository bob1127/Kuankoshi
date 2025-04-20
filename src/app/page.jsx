"use client";

import ThreeDSlider from "../components/3DSlider.jsx";

import InfiniteScroll from "../components/InfiniteScroll/page.jsx";
import GsapText from "../components/RevealText/index";
import HomeSlider from "../components/HeroSliderHome/page.jsx";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

import { ReactLenis } from "@studio-freight/react-lenis";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const initGSAPAnimations = () => {
      const ctx = gsap.context(() => {
        const images = document.querySelectorAll(".animate-image-wrapper");

        images.forEach((image, i) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "top center",
              toggleActions: "play none none none",
              id: "imageReveal-" + i,
            },
          });

          tl.fromTo(
            image.querySelector(".overlay"),
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            },
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 0.7,
              ease: "power2.inOut",
            }
          )
            .to(image.querySelector(".overlay"), {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              duration: 0.7,
              ease: "power2.inOut",
            })
            .fromTo(
              image.querySelector(".image-container"),
              {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              },
              {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1.5,
                ease: "power3.inOut",
              },
              "-=0.5"
            );
        });

        ScrollTrigger.refresh();
      }, containerRef);

      return ctx; // return so we can revert later
    };

    let ctx;

    const onTransitionComplete = () => {
      ctx = initGSAPAnimations();
    };

    window.addEventListener("pageTransitionComplete", onTransitionComplete);

    // fallback: 若不是從 transition link 進來，直接初始化
    if (!sessionStorage.getItem("transitioning")) {
      ctx = initGSAPAnimations();
    } else {
      sessionStorage.removeItem("transitioning"); // 清除 flag
    }

    return () => {
      if (ctx) ctx.revert();
      window.removeEventListener(
        "pageTransitionComplete",
        onTransitionComplete
      );
    };

    return () => ctx.revert(); // 👈 自動 kill 清理範圍內動畫
  }, []);

  return (
    <ReactLenis root>
      <div className="overflow-hidden">
        <div className="policy  fixed z-50 left-[38%] bottom-8 bg-white rounded-lg shadow-md w-[350px] py-5">
          <div className="flex justify-center w-full items-center">
            <div className="w-3/4 pl-5">
              <b className="text-black text-[.85rem] tracking-widest">
                This website uses cookies.
              </b>
            </div>
            <div className="flex w-1/4 items-center">
              <b className="border-b-1 text-[.9rem] border-black">OK</b>
              <span className="font-extrabold px-5">
                <Image
                  className="w-[10px]"
                  src="/images/icon/close.png"
                  alt=" "
                  width={15}
                  height={15}
                  placeholder="empty"
                  loading="lazy"
                ></Image>
              </span>
            </div>
          </div>
        </div>
        <section
          id="dark-section"
          className="section_hero relative overflow-hidden"
        >
          <HomeSlider />
        </section>

        <section className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center px-4">
            <GsapText text="DISCOVER THE BRAND" id="headline" />
          </div>
        </section>
        <section className="section_features w-full mx-auto  mt-[5vh]">
          <div className="flex py-[150px] flex-col justify-center items-center ">
            <GsapText text=" 從小資日常到質感夢想宅" id="headline" />
            <GsapText text=" 一起打造家的每一種可能" id="headline" />
            {/* <h2 className="text-[7vmin] leading-snug text-center !font-extralight">
            從小資日常到質感夢想宅 <br></br>
          </h2> */}
            <span className="leading-loose font-light text-center text-gray-500">
              寬越設計專注於小資族、小家庭、小坪數的室內設計，主打 50
              萬左右輕裝潢方案
              <br></br>
              打造兼具質感與機能的生活空間。我們也提供中高階全室設計， <br></br>
              涵蓋老屋翻新、預售屋客變、新成屋裝潢與系統櫃配置
              依據預算與需求量身打造理想居所。
            </span>
          </div>
          <div className="flex max-w-[1920px] mx-auto  md:flex-row flex-col w-[90%] ">
            <div className="flex flex-col w-full">
              <div className="img  w-[100%] mx-auto sm:mx-3  h-auto md:h-[80vh] xl:h-[90vh] overflow-hidden">
                <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                  <div className="overlay absolute inset-0 bg-black z-10"></div>
                  <div className="image-container relative w-full h-full">
                    <Image
                      src="https://sdmntprwestus.oaiusercontent.com/files/00000000-16d4-5230-a93e-5bfa0ab54900/raw?se=2025-04-05T12%3A22%3A44Z&sp=r&sv=2024-08-04&sr=b&scid=d64ad8a4-5b61-54d5-b2ea-3b95a3f0beab&skoid=e825dac8-9fae-4e05-9fdb-3d74e1880d5a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-05T10%3A24%3A56Z&ske=2025-04-06T10%3A24%3A56Z&sks=b&skv=2024-08-04&sig=tpqoabsuedZNTxLwPpdp44Cz7qVcLOaVxbv9qa6rwV8%3D"
                      alt="About Image 1"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                    />
                    xs
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-1/2">
                  <div className="flex justify-start items-start flex-col pl-3 pb-10">
                    <GsapText
                      text="建築と環境の「間」を考える"
                      id="gsap-intro"
                      fontSize="1.3rem"
                      fontWeight="500"
                      color="#333"
                      lineHeight="60px"
                      className="text-center inline-block mb-0 h-auto "
                    />

                    <span className="mt-0 leading-snug text-gray-500 font-light w-[70%] text-[.9rem]">
                      Having the architecture as black and the environment as
                      white, we consider that human being’s comfort zone lies
                      within the ranges of gray.
                    </span>
                  </div>
                </div>
                <div className="w-1/2 ">
                  <div className="flex items-end justify-end  flex-col">
                    <span className="mt-5 text-right leading-snug text-gray-500  font-light w-[70%] text-[.9rem]">
                      Please find our concept, <br></br>philosophy, and
                      information here.
                    </span>
                    <button class="group mt-10 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full  px-4 text-neutral-950">
                      <span class="relative inline-flex overflow-hidden">
                        <div class="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
                          Go PROJECTS →
                        </div>
                        <div class="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
                          Go PROJECTS →
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="text w-[95%] lg:w-1/2 p-8 flex flex-col justify-center items-center">
            <TextGenerateEffect words="宜居" />
            <p>不與人同的作為</p>
          </div> */}
          </div>
          <ThreeDSlider />
        </section>
        <section id="dark-section" className="py-[100px]   bg-[#222]">
          <div className="flex flex-col md:flex-row max-w-[1920px] mx-auto">
            <div className=" w-full md:w-[30%] flex flex-col justify-between pl-5 sm:pl-10 md:pl-0 items-start md:items-center pt-20">
              <div className="txt">
                <h2 className="font-extralight text-white text-[1.7rem]">
                  小資族。小家庭
                </h2>
                <p className="text-[1rem] text-gray-400">Recent Project</p>
              </div>
              <div className="txt">
                <div className="flex items-start flex-col">
                  <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden   px-60 md:px-4 text-neutral-50">
                    <span class="relative inline-flex overflow-hidden">
                      <div class="absolute origin-bottom transition duration-500 !font-light !text-[1.2rem] [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
                        More Projects →
                      </div>
                      <div class="transition !font-light !text-[1.2rem] duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
                        More Projects →
                      </div>
                    </span>
                  </button>
                  <p className="text-[1rem] ml-0 md:ml-3  mt-4 text-gray-400">
                    Please explore our diverse range of <br></br>architectural
                    creations.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col border w-full md:w-[70%]  justify-center items-center md:items-start mx-auto  mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3">
                <div className="img w-ful  md:mt-0  md:max-w-[380px] mx-auto sm:mx-3 h-[450px] md:h-[500px] xl:h-[600px] flex flex-col mt-4 justify-end items-end  overflow-hidden">
                  <div className="animate-image-wrapper group h-[100%] relative w-full aspect-[4/5]  pt-[7vh] pb-[5vh]">
                    <div className="title ">
                      <div className="flex items-center">
                        <button class="group relative  mr-3  inline-flex h-8 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium">
                          <div class="inline-flex h-12 translate-x-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-x-[150%]">
                            →
                          </div>
                          <div class="absolute inline-flex h-12 w-full translate-x-[100%] items-center justify-center bg-[#efca87] px-6 text-neutral-50 transition duration-300 group-hover:translate-x-0">
                            →
                          </div>
                        </button>
                        <h3 className="text-[1rem] text-white font-normal">
                          My Home Project-Yi Yuan
                        </h3>
                      </div>
                      <div className="flex items-center">
                        {" "}
                        <span className="border mr-3 my-4 border-white text-white text-[.7rem] p-1">
                          Home
                        </span>{" "}
                        <p className="text-[.78rem] text-white">Dec.2019</p>
                      </div>
                    </div>

                    <div className="overlay absolute inset-0 bg-black z-10"></div>
                    <div className="relative w-full h-full overflow-hidden group grainy">
                      {/* 原圖 */}

                      <Image
                        src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/486831190_122245695788031935_8258301794283225757_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GmoLpZe4tccQ7kNvwGLdJvA&_nc_oc=Admn33szwlM3ytmbaDxqsMGJsR7Fw4qXtRvZRPPVn3QQeclEH3_Kt1k_IsNxXDaOnpFdugvza7l_rkRm5xfTOJ66&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=W9k5xo3WlwT9mDnpiv5Kow&oh=00_AYFKbhvHav0He6dksqtMco0EW8IV-VTeUO1nMTJTpeCuFg&oe=67F6FB4F"
                        alt="Image default"
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />

                      {/* Hover 後顯示的圖 */}
                      <Image
                        src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/486824855_122245695716031935_3372241001376026295_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BPa5oRFOl_MQ7kNvwGFa57A&_nc_oc=Adly7o2kh8LUEg52EhFF4LlJ3Ck3n_kzKwbs71tJgncFxNcNc5d81gbW4MhCetu3y4481GGq7wCH_2m4MeGk2Vxf&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=jHYKfI42ZePnsBzhP0geig&oh=00_AYGDWAGtI_ZHf-q_nMXhNCT99colobVCkHHbeEsyJPD4Xw&oe=67F6EE72"
                        alt="Image hover"
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="img w-ful mt-4 md:mt-0  md:max-w-[380px] mx-auto sm:mx-3 h-[450px] md:h-[500px] xl:h-[600px] flex flex-col mt-4 justify-end items-end  overflow-hidden">
                  <div className="animate-image-wrapper group h-[100%] relative w-full aspect-[4/5]  pt-[7vh] pb-[5vh]">
                    <div className="title ">
                      <div className="flex items-center">
                        <button class="group relative  mr-3  inline-flex h-8 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium">
                          <div class="inline-flex h-12 translate-x-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-x-[150%]">
                            →
                          </div>
                          <div class="absolute inline-flex h-12 w-full translate-x-[100%] items-center justify-center bg-[#8A9A5B] px-6 text-neutral-50 transition duration-300 group-hover:translate-x-0">
                            →
                          </div>
                        </button>
                        <h3 className="text-[1rem] text-white font-normal">
                          My Home Project-Yi Yuan
                        </h3>
                      </div>
                      <div className="flex items-center">
                        {" "}
                        <span className="border mr-3 my-4 border-white text-white text-[.7rem] p-1">
                          Home
                        </span>{" "}
                        <p className="text-[.78rem] text-white">Dec.2019</p>
                      </div>
                    </div>

                    <div className="overlay absolute inset-0 bg-black z-10"></div>
                    <div className="relative w-full h-full overflow-hidden group grainy">
                      {/* 原圖 */}

                      <Image
                        src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/486831190_122245695788031935_8258301794283225757_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GmoLpZe4tccQ7kNvwGLdJvA&_nc_oc=Admn33szwlM3ytmbaDxqsMGJsR7Fw4qXtRvZRPPVn3QQeclEH3_Kt1k_IsNxXDaOnpFdugvza7l_rkRm5xfTOJ66&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=W9k5xo3WlwT9mDnpiv5Kow&oh=00_AYFKbhvHav0He6dksqtMco0EW8IV-VTeUO1nMTJTpeCuFg&oe=67F6FB4F"
                        alt="Image default"
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />

                      {/* Hover 後顯示的圖 */}
                      <Image
                        src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/486824855_122245695716031935_3372241001376026295_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BPa5oRFOl_MQ7kNvwGFa57A&_nc_oc=Adly7o2kh8LUEg52EhFF4LlJ3Ck3n_kzKwbs71tJgncFxNcNc5d81gbW4MhCetu3y4481GGq7wCH_2m4MeGk2Vxf&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=jHYKfI42ZePnsBzhP0geig&oh=00_AYGDWAGtI_ZHf-q_nMXhNCT99colobVCkHHbeEsyJPD4Xw&oe=67F6EE72"
                        alt="Image hover"
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="img w-ful mt-4 md:mt-0  md:max-w-[380px] mx-auto sm:mx-3 h-[450px] md:h-[500px] xl:h-[600px] flex flex-col mt-4 justify-end items-end  overflow-hidden">
                  <div className="animate-image-wrapper group h-[100%] relative w-full aspect-[4/5]  pt-[7vh] pb-[5vh]">
                    <div className="title ">
                      <div className="flex items-center">
                        <button class="group relative  mr-3  inline-flex h-8 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium">
                          <div class="inline-flex h-12 translate-x-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-x-[150%]">
                            →
                          </div>
                          <div class="absolute inline-flex h-12 w-full translate-x-[100%] items-center justify-center bg-[#8A9A5B] px-6 text-neutral-50 transition duration-300 group-hover:translate-x-0">
                            →
                          </div>
                        </button>
                        <h3 className="text-[1rem] text-white font-normal">
                          My Home Project-Yi Yuan
                        </h3>
                      </div>
                      <div className="flex items-center">
                        {" "}
                        <span className="border mr-3 my-4 border-white text-white text-[.7rem] p-1">
                          Home
                        </span>{" "}
                        <p className="text-[.78rem] text-white">Dec.2019</p>
                      </div>
                    </div>

                    <div className="overlay absolute inset-0 bg-black z-10"></div>
                    <div className="relative w-full h-full overflow-hidden group grainy">
                      {/* 原圖 */}

                      <Image
                        src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/481907849_122241519284031935_8866969680249314354_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yAheOQj5lRgQ7kNvwEUS-EI&_nc_oc=AdkLMdyJPY_WUOXnl3JT8SMVma1y5zjB7MUda014v-icAGpYMbYoaC4OanFKtrDuTO0VbrFUZdI4pCZe4dHix0QD&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=fdPab9QyqPY0BGkvhG2BMQ&oh=00_AYGOeqIHwSikkmkoqy5Rp-IUC68mql8BFTP4o2gMl3ePVg&oe=67F6EC6A"
                        alt="Image default"
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />

                      {/* Hover 後顯示的圖 */}
                      <Image
                        src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/481976200_122241519434031935_4846893215767924547_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xdAR3bo2YZcQ7kNvwEb2xrZ&_nc_oc=Adkb7SqY5muO_B3EPoc-5Nsj9y-X1DzJWFt1UbnYD-AKL-bPiyki-MA1ZSp3x3zcfqVOEdMI8HCid03TJbf7GzWS&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=bdBX1IzzEAwHuhsv_uKJKA&oh=00_AYErpePr0keZAYJJchM8t8y7ApqlIaPGluTslqGRsbHvSg&oe=67F6F12F"
                        alt="Image hover"
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="img w-ful mt-4 md:mt-0  md:max-w-[380px] mx-auto sm:mx-3 h-[450px] md:h-[500px] xl:h-[600px] flex flex-col mt-4 justify-end items-end  overflow-hidden">
                  <div className="animate-image-wrapper group h-[100%] relative w-full aspect-[4/5]  pt-[7vh] pb-[5vh]">
                    <div className="title ">
                      <div className="flex items-center">
                        <button class="group relative  mr-3  inline-flex h-8 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium">
                          <div class="inline-flex h-12 translate-x-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-x-[150%]">
                            →
                          </div>
                          <div class="absolute inline-flex h-12 w-full translate-x-[100%] items-center justify-center bg-[#8A9A5B] px-6 text-neutral-50 transition duration-300 group-hover:translate-x-0">
                            →
                          </div>
                        </button>
                        <h3 className="text-[1rem] text-white font-normal">
                          My Home Project-Yi Yuan
                        </h3>
                      </div>
                      <div className="flex items-center">
                        {" "}
                        <span className="border mr-3 my-4 border-white text-white text-[.7rem] p-1">
                          Home
                        </span>{" "}
                        <p className="text-[.78rem] text-white">Dec.2019</p>
                      </div>
                    </div>

                    <div className="overlay absolute inset-0 bg-black z-10"></div>
                    <div className="relative w-full h-full overflow-hidden group grainy">
                      {/* 原圖 */}

                      <Image
                        src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/482022705_122241519620031935_2316229883627723620_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=E0454wXe0toQ7kNvwHPoUfT&_nc_oc=AdnIhMlAuzQuljcLqqS2tHAujHwuCrIQGLpRh3mHE977EnIlY7mj7NNc6y5wmXSol6rEQUaq7esbVfAur7d2H4N6&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=5BfteHRbCqjE7C_i5iiQiA&oh=00_AYHf8UEZnWfz1BYRN_wb9XCo6JPDK0skwI6krwSE0lzLww&oe=67F6CE4A"
                        alt="Image default"
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />

                      {/* Hover 後顯示的圖 */}
                      <Image
                        src="https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/481977410_122241519506031935_5824784297779272863_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ft1UZaDhwqAQ7kNvwHreren&_nc_oc=Admym5JAHCUtukKIYrQiuycRBZxVRQFG1lqIcrHWMBdndrY8nmm_Do1qdCPSXdIxBoaS53iJBC-eq8bR4ZOOQrBp&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=Hchlof5_haPXiliWnvQgVA&oh=00_AYFe0AR_JpMY6_2CuRwsMc1MVo_IJZJuDo25__t7h4VJeg&oe=67F6CC3B"
                        alt="Image hover"
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="text w-[95%] lg:w-1/2 p-8 flex flex-col justify-center items-center">
            <TextGenerateEffect words="宜居" />
            <p>不與人同的作為</p>
          </div> */}
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-row py-[150px] items-end">
            <div className="img  w-[32.5%] mx-auto sm:mx-3  h-auto md:h-[75vh]   overflow-hidden">
              <div className="flex flex-col pl-4 py-4">
                <div className="inline-block pb-4">
                  <button
                    role="link"
                    class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    <button
                      role="link"
                      class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                    >
                      <b className="text-[.9rem] font-bold"> Pointillisme</b>
                    </button>
                  </button>
                </div>
                <span className="text-[.75rem]">Project</span>
                <span className="text-[.75rem]">Taichung - 2025.03.23</span>
              </div>

              <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                <div className="overlay absolute inset-0 bg-black z-10"></div>
                <div className="image-container relative w-full h-full">
                  <Image
                    src="https://sdmntprwestus.oaiusercontent.com/files/00000000-16d4-5230-a93e-5bfa0ab54900/raw?se=2025-04-05T12%3A22%3A44Z&sp=r&sv=2024-08-04&sr=b&scid=d64ad8a4-5b61-54d5-b2ea-3b95a3f0beab&skoid=e825dac8-9fae-4e05-9fdb-3d74e1880d5a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-05T10%3A24%3A56Z&ske=2025-04-06T10%3A24%3A56Z&sks=b&skv=2024-08-04&sig=tpqoabsuedZNTxLwPpdp44Cz7qVcLOaVxbv9qa6rwV8%3D"
                    alt="About Image 1"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                  />
                  xs
                </div>
              </div>
            </div>
            <div className="img  w-[35%] mx-auto sm:mx-3  h-auto md:h-[53vh]  overflow-hidden">
              <div className="flex flex-col pl-4 py-4">
                <div className="inline-block pb-4">
                  <button
                    role="link"
                    class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    <button
                      role="link"
                      class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                    >
                      <b className="text-[.9rem] font-bold"> Pointillisme</b>
                    </button>
                  </button>
                </div>
                <span className="text-[.75rem]">Project</span>
                <span className="text-[.75rem]">Taichung - 2025.03.23</span>
              </div>
              <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                <div className="overlay absolute inset-0 bg-black z-10"></div>
                <div className="image-container relative w-full h-full">
                  <Image
                    src="https://sdmntprwestus.oaiusercontent.com/files/00000000-16d4-5230-a93e-5bfa0ab54900/raw?se=2025-04-05T12%3A22%3A44Z&sp=r&sv=2024-08-04&sr=b&scid=d64ad8a4-5b61-54d5-b2ea-3b95a3f0beab&skoid=e825dac8-9fae-4e05-9fdb-3d74e1880d5a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-05T10%3A24%3A56Z&ske=2025-04-06T10%3A24%3A56Z&sks=b&skv=2024-08-04&sig=tpqoabsuedZNTxLwPpdp44Cz7qVcLOaVxbv9qa6rwV8%3D"
                    alt="About Image 1"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                  />
                  xs
                </div>
              </div>
            </div>
            <div className="img  w-[32.5%] mx-auto sm:mx-3  h-auto md:h-[85vh]  overflow-hidden">
              <div className="flex flex-col pl-4 py-4">
                <div className="inline-block pb-4">
                  <button
                    role="link"
                    class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    <button
                      role="link"
                      class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                    >
                      <b className="text-[.9rem] font-bold"> Pointillisme</b>
                    </button>
                  </button>
                </div>
                <span className="text-[.75rem]">Project</span>
                <span className="text-[.75rem]">Taichung - 2025.03.23</span>
              </div>
              <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                <div className="overlay absolute inset-0 bg-black z-10"></div>
                <div className="image-container relative w-full h-full">
                  <Image
                    src="https://sdmntprwestus.oaiusercontent.com/files/00000000-16d4-5230-a93e-5bfa0ab54900/raw?se=2025-04-05T12%3A22%3A44Z&sp=r&sv=2024-08-04&sr=b&scid=d64ad8a4-5b61-54d5-b2ea-3b95a3f0beab&skoid=e825dac8-9fae-4e05-9fdb-3d74e1880d5a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-05T10%3A24%3A56Z&ske=2025-04-06T10%3A24%3A56Z&sks=b&skv=2024-08-04&sig=tpqoabsuedZNTxLwPpdp44Cz7qVcLOaVxbv9qa6rwV8%3D"
                    alt="About Image 1"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                  />
                  xs
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="img  w-[98%] mx-auto sm:mx-3 mt-[-100px]  h-auto md:h-[95vh]  overflow-hidden">
            <div className="flex flex-col pl-4 py-4">
              <div className="inline-block pb-4">
                <button
                  role="link"
                  class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                >
                  <button
                    role="link"
                    class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    <b className="text-[.9rem] font-bold"> Pointillisme</b>
                  </button>
                </button>
              </div>
              <span className="text-[.75rem]">Project</span>
              <span className="text-[.75rem]">Taichung - 2025.03.23</span>
            </div>
            <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
              <div className="overlay absolute inset-0 bg-black z-10"></div>
              <div className="image-container relative w-full h-full">
                <Image
                  src="https://sdmntprwestus.oaiusercontent.com/files/00000000-16d4-5230-a93e-5bfa0ab54900/raw?se=2025-04-05T12%3A22%3A44Z&sp=r&sv=2024-08-04&sr=b&scid=d64ad8a4-5b61-54d5-b2ea-3b95a3f0beab&skoid=e825dac8-9fae-4e05-9fdb-3d74e1880d5a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-05T10%3A24%3A56Z&ske=2025-04-06T10%3A24%3A56Z&sks=b&skv=2024-08-04&sig=tpqoabsuedZNTxLwPpdp44Cz7qVcLOaVxbv9qa6rwV8%3D"
                  alt="About Image 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                />
                xs
              </div>
            </div>
          </div>
        </section>

        <section className="py-[150px] pt-8 mt-20 pb-[80px]  border-t-1 border-gray-300 w-full ">
          <div className="flex justify-between">
            <div className="w-1/2 flex pl-6 pb-8">
              <b className="text-[1rem] font-bold mr-2">Featured </b>
              <span className="text-[1rem]">Journal</span>
            </div>
            <div className="w-1/2 flex justify-end pr-6 pb-8">
              <b className="text-[1rem] font-bold mr-2">See All Journal</b>
            </div>
          </div>
          <div className="flex  mx-auto   lg:w-full  w-[1300px] !overflow-scroll flex-row">
            <div className="w-[20%]  group">
              <div className="img   mx-auto  group-hover:h-[40vh] delay-75 duration-500  h-auto md:h-[33vh]  overflow-hidden">
                <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                  <div className="overlay absolute inset-0 bg-black z-10"></div>
                  <div className="image-container relative w-full h-full">
                    <Image
                      src="https://i0.wp.com/draft.co.jp/wp-content/uploads/2025/02/AD-Awards_2024_list.jpg?fit=1280%2C1280&quality=85&strip=all&ssl=1"
                      alt="About Image 1"
                      fill
                      className="object-cover group-hover:scale-[1.05] duration-700"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                    />
                    xs
                  </div>
                </div>
              </div>
              <div className="flex flex-col pl-4 py-4">
                <div className="inline-block pb-4">
                  <button
                    role="link"
                    class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    <button
                      role="link"
                      class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                    >
                      <b className="text-[.9rem] font-bold">
                        {" "}
                        「A&D Awards 2024」受賞
                      </b>
                    </button>
                  </button>
                </div>
                <span className="text-[.75rem]">
                  太陽印刷製造 InnoValley 在最佳工作場所類別中獲得了最高獎項。
                </span>
                <span className="text-[.75rem]">Taichung - 2025.03.23</span>
              </div>
            </div>

            <div className="w-[20%]  group">
              <div className="img   mx-auto    h-auto md:h-[36vh] group-hover:h-[44vh] delay-75 duration-500 overflow-hidden">
                <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                  <div className="overlay absolute inset-0 bg-black z-10"></div>
                  <div className="image-container relative w-full h-full">
                    <Image
                      src="https://i0.wp.com/draft.co.jp/wp-content/uploads/2025/01/08cda1286e0f3c4616fbf38cf569aa71.jpg?fit=1920%2C1152&quality=85&strip=all&ssl=1"
                      alt="About Image 1"
                      fill
                      className="object-cover group-hover:scale-[1.05] duration-700"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                    />
                    xs
                  </div>
                </div>
              </div>
              <div className="flex flex-col pl-4 py-4">
                <div className="inline-block pb-4">
                  <button
                    role="link"
                    class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    <button
                      role="link"
                      class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                    >
                      <b className="text-[.9rem] font-bold">
                        {" "}
                        「A&D Awards 2024」受賞
                      </b>
                    </button>
                  </button>
                </div>
                <span className="text-[.75rem]">
                  太陽印刷製造 InnoValley 在最佳工作場所類別中獲得了最高獎項。
                </span>
                <span className="text-[.75rem]">Taichung - 2025.03.23</span>
              </div>
            </div>
            <div className="w-[20%]  group">
              <div className="img   mx-auto    h-auto md:h-[26vh] group-hover:h-[33vh] delay-75 duration-500 overflow-hidden">
                <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                  <div className="overlay absolute inset-0 bg-black z-10"></div>
                  <div className="image-container relative w-full h-full">
                    <Image
                      src="https://i0.wp.com/draft.co.jp/wp-content/uploads/2024/10/2024_tjda-site_open_top_s.jpg?fit=1920%2C1046&quality=85&strip=all&ssl=1"
                      alt="About Image 1"
                      fill
                      className="object-cover group-hover:scale-[1.05] duration-700"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                    />
                    xs
                  </div>
                </div>
              </div>
              <div className="flex flex-col pl-4 py-4">
                <div className="inline-block pb-4">
                  <button
                    role="link"
                    class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    <button
                      role="link"
                      class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                    >
                      <b className="text-[.9rem] font-bold">
                        {" "}
                        「A&D Awards 2024」受賞
                      </b>
                    </button>
                  </button>
                </div>
                <span className="text-[.75rem]">
                  太陽印刷製造 InnoValley 在最佳工作場所類別中獲得了最高獎項。
                </span>
                <span className="text-[.75rem]">Taichung - 2025.03.23</span>
              </div>
            </div>
            <div className="w-[20%]  group">
              <div className="img   mx-auto    h-auto md:h-[30vh] group-hover:h-[35vh] delay-75 duration-500 overflow-hidden">
                <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                  <div className="overlay absolute inset-0 bg-black z-10"></div>
                  <div className="image-container relative w-full h-full">
                    <Image
                      src="https://i0.wp.com/draft.co.jp/wp-content/uploads/2024/11/ELLE-DECOR_2412_PCichiran.jpg?fit=1920%2C1280&quality=85&strip=all&ssl=1"
                      alt="About Image 1"
                      fill
                      className="object-cover group-hover:scale-[1.05] duration-700"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                    />
                    xs
                  </div>
                </div>
              </div>
              <div className="flex flex-col pl-4 py-4">
                <div className="inline-block pb-4">
                  <button
                    role="link"
                    class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    <button
                      role="link"
                      class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                    >
                      <b className="text-[.9rem] font-bold">
                        {" "}
                        「A&D Awards 2024」受賞
                      </b>
                    </button>
                  </button>
                </div>
                <span className="text-[.75rem]">
                  太陽印刷製造 InnoValley 在最佳工作場所類別中獲得了最高獎項。
                </span>
                <span className="text-[.75rem]">Taichung - 2025.03.23</span>
              </div>
            </div>
            <div className="w-[20%]  group">
              <div className="img   mx-auto    h-auto md:h-[43vh] group-hover:h-[50vh] delay-75 duration-500 overflow-hidden">
                <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                  <div className="overlay absolute inset-0 bg-black z-10"></div>
                  <div className="image-container relative w-full h-full">
                    <Image
                      src="https://i0.wp.com/draft.co.jp/wp-content/uploads/2024/09/241018_oliver-exhibition_top.jpg?fit=1706%2C900&quality=85&strip=all&ssl=1"
                      alt="About Image 1"
                      fill
                      className="object-cover group-hover:scale-[1.05] duration-700"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                    />
                    xs
                  </div>
                </div>
              </div>
              <div className="flex flex-col pl-4 py-4">
                <div className="inline-block pb-4">
                  <button
                    role="link"
                    class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    <button
                      role="link"
                      class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                    >
                      <b className="text-[.9rem] font-bold">
                        {" "}
                        「A&D Awards 2024」受賞
                      </b>
                    </button>
                  </button>
                </div>
                <span className="text-[.75rem]">
                  太陽印刷製造 InnoValley 在最佳工作場所類別中獲得了最高獎項。
                </span>
                <span className="text-[.75rem]">Taichung - 2025.03.23</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="w-full h-full py-20">
        <Carousel items={cards} />
      </div> */}
    </ReactLenis>
  );
}
