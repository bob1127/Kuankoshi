"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import ThreeDBanner from "../components/ThreeDBanner/index";
import ThreeDSlider from "../components/3DSlider.jsx";
import InfiniteScroll from "../components/InfiniteScroll/page.jsx";
import GsapText from "../components/RevealText/index";
import Preloader from "../components/Preloader/index";
import HomeSlider from "../components/HeroSliderHome/page.jsx";
import AnimatedLink from "../components/AnimatedLink";
import LogoLoader from "../components/Loderanimation.jsx";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const initGSAPAnimations = useCallback(() => {
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
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
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

    return ctx;
  }, []);

  useEffect(() => {
    const firstVisit = localStorage.getItem("visited");
    if (firstVisit) {
      setLoading(false);
    }
  }, []);

  const handleLogoFinish = () => {
    localStorage.setItem("visited", "true");
    setLoading(false);

    requestAnimationFrame(() => {
      initGSAPAnimations(); // 🟢 初始化動畫
    });
  };

  useEffect(() => {
    let ctx;

    const onTransitionComplete = () => {
      ctx = initGSAPAnimations();
    };

    window.addEventListener("pageTransitionComplete", onTransitionComplete);

    if (!sessionStorage.getItem("transitioning")) {
      if (!loading) {
        ctx = initGSAPAnimations();
      }
    } else {
      sessionStorage.removeItem("transitioning");
    }

    return () => {
      if (ctx) ctx.revert();
      window.removeEventListener(
        "pageTransitionComplete",
        onTransitionComplete
      );
    };
  }, [initGSAPAnimations, loading]);

  return (
    <ReactLenis root>
      {loading ? (
        <LogoLoader onFinish={handleLogoFinish} />
      ) : (
        // 🔽 你原本的 JSX 區塊，保持不變

        <div className="overflow-hidden ">
          <div
            id="dark-section"
            className="relative xl:aspect-[1920/768] md:aspect-[1024/576] aspect-[500/500]"
          >
            {" "}
            <Preloader />
          </div>
          <div className="policy  fixed z-[1] left-[38%] bottom-8 bg-white rounded-lg shadow-md w-[350px] py-5">
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
          {/* <section
            id="dark-section"
            className="section_hero relative overflow-hidden"
          >
            <HomeSlider />
          </section> */}

          <section className="h-[50vh] flex items-center justify-center bg-gray-100">
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
              <span className="leading-loose font-light mt-5 text-[16px] text-center text-gray-500">
                寬越設計專注於小資族、小家庭、小坪數的室內設計，主打 50
                萬左右輕裝潢方案
                <br></br>
                打造兼具質感與機能的生活空間。我們也提供中高階全室設計，{" "}
                <br></br>
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
                        src="/images/img01.webp"
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
            <div
              id="dark-section"
              className="flex flex-col md:flex-row max-w-[1920px] mx-auto"
            >
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
              <div className="flex md:flex-row flex-col  w-full md:w-[70%]  justify-center items-center md:items-start mx-auto  mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3">
                  <div className="img w-ful  md:mt-0  md:max-w-[380px] mx-auto sm:mx-3 h-[450px] md:h-[500px] xl:h-[600px] flex flex-col mt-4 justify-end items-end  overflow-hidden">
                    <div className="animate-image-wrapper group h-[100%] relative w-full aspect-[4/5]  pt-[7vh] pb-[5vh]">
                      <div className="title ">
                        <AnimatedLink href="/project">
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
                              My Home Project
                            </h3>
                          </div>
                        </AnimatedLink>
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
                          src="/images/481977410_122241519506031935_5824784297779272863_n.webp"
                          alt="Image default"
                          fill
                          className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                        />

                        {/* Hover 後顯示的圖 */}
                        <Image
                          src="/images/481976200_122241519434031935_4846893215767924547_n.webp"
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
                        <AnimatedLink href="/project">
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
                              My Home Project
                            </h3>
                          </div>
                        </AnimatedLink>
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
                          src="/images/481976200_122241519434031935_4846893215767924547_n.webp"
                          alt="Image default"
                          fill
                          className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                        />

                        {/* Hover 後顯示的圖 */}
                        <Image
                          src="/images/481977410_122241519506031935_5824784297779272863_n.webp"
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
                        <AnimatedLink href="/project">
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
                              My Home Project
                            </h3>
                          </div>
                        </AnimatedLink>
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
                          src="/images/486824855_122245695716031935_3372241001376026295_n.webp"
                          alt="Image default"
                          fill
                          className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                        />

                        {/* Hover 後顯示的圖 */}
                        <Image
                          src="/images/486824855_122245695716031935_3372241001376026295_n (1).webp"
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
                        <AnimatedLink href="/project">
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
                              My Home Project
                            </h3>
                          </div>
                        </AnimatedLink>
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
                          src="/images/486824855_122245695716031935_3372241001376026295_n.webp"
                          alt="Image default"
                          fill
                          className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                        />

                        {/* Hover 後顯示的圖 */}
                        <Image
                          src="/images/486824855_122245695716031935_3372241001376026295_n (1).webp"
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
              <div className="img group  w-[32.5%] mx-auto sm:mx-3  h-auto md:h-[75vh]   overflow-hidden">
                <AnimatedLink href="/project">
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
                          <b className="text-[.9rem] font-bold"> 建築老屋</b>
                        </button>
                      </button>
                    </div>
                    <span className="text-[.75rem]">Project</span>
                    <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                  </div>

                  <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                    <div className="mask-up p-4 md:p-10 absolute h-0 opacity-0 group-hover:h-[30%] md:group-hover:h-[55%] group-hover:opacity-100 duration-500 z-40 bottom-0 left-0 w-full  bg-white ">
                      <div className="txt">
                        <b className="text-xs xl:text-normal">
                          房屋改造｜外觀拉皮｜自地自建｜舊屋翻修
                        </b>
                        <p className="xl:text-normal text-xs md:block hidden">
                          我們以尊重歷史為出發，結合現代工藝與美感，賦予老屋新的生命力，讓空間在歲月中持續發光。
                        </p>
                      </div>
                    </div>
                    <div className="overlay absolute inset-0 bg-black z-10"></div>

                    <div className="image-container overflow-hidden relative w-full h-full">
                      <Image
                        src="/images/hero-img/img05.png"
                        alt="About Image 1"
                        fill
                        className="object-cover group-hover:scale-110 duration-2000"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                      xs
                    </div>
                  </div>
                </AnimatedLink>
              </div>
              <div className="img group w-[35%] mx-auto sm:mx-3  h-auto md:h-[53vh]  overflow-hidden">
                <AnimatedLink href="/project">
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
                          <b className="text-[.9rem] font-bold"> 辦公空間</b>
                        </button>
                      </button>
                    </div>
                    <span className="text-[.75rem]">Project</span>
                    <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                  </div>
                  <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                    <div className="mask-up p-4 md:p-10 absolute h-0 opacity-0 group-hover:h-[30%] md:group-hover:h-[50%] group-hover:opacity-100 duration-500 z-40 bottom-0 left-0 w-full  bg-white ">
                      <div className="txt">
                        <b className="text-xs xl:text-normal">
                          商辦展示｜科技商辦
                        </b>
                        <p className="xl:text-normal text-xs md:block hidden">
                          以人為本，從動線、光線到材質細節，縝密規劃每一寸辦公空間，提升團隊凝聚力與工作效率
                        </p>
                      </div>
                    </div>
                    <div className="overlay absolute inset-0 bg-black z-10"></div>
                    <div className="image-container overflow-hidden relative w-full h-full">
                      <Image
                        src="/images/hero-img/img03.png"
                        alt="About Image 1"
                        fill
                        className="object-cover group-hover:scale-110 duration-2000"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                      xs
                    </div>
                  </div>
                </AnimatedLink>
              </div>
              <div className="img group w-[32.5%] mx-auto sm:mx-3  h-auto md:h-[85vh]  overflow-hidden">
                <AnimatedLink href="/project">
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
                          <b className="text-[.9rem] font-bold"> 住家豪宅</b>
                        </button>
                      </button>
                    </div>
                    <span className="text-[.75rem]">Project</span>
                    <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                  </div>
                  <div className="animate-image-wrapper relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                    <div className="mask-up p-4 md:p-10 absolute h-0 opacity-0 group-hover:h-[30%] md:group-hover:h-[45%] group-hover:opacity-100 duration-500 z-40 bottom-0 left-0 w-full  bg-white ">
                      <div className="txt">
                        <b className="text-xs xl:text-normal">
                          大器豪墅｜現代時尚｜精緻官邸｜七期豪宅
                        </b>
                        <p className="xl:text-normal text-xs md:block hidden">
                          以優雅與機能並重為設計主軸，融合居者性格，打造兼具舒適感與獨特風格的理想豪宅
                        </p>
                      </div>
                    </div>
                    <div className="overlay absolute inset-0 bg-black z-10"></div>
                    <div className="image-container overflow-hidden relative w-full h-full">
                      <Image
                        src="/images/hero-img/img07.png"
                        alt="About Image 1"
                        fill
                        className="object-cover group-hover:scale-110 duration-2000"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                      xs
                    </div>
                  </div>
                </AnimatedLink>
              </div>
            </div>
          </section>
          {/* <section className="">
            <ThreeDBanner />
          </section> */}
          <section>
            <div className="img group w-[98%] mx-auto sm:mx-3 mt-[-100px]  h-auto md:h-[95vh]  overflow-hidden">
              <AnimatedLink href="/project">
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
                        <b className="text-[.9rem] font-bold"> 商業空間</b>
                      </button>
                    </button>
                  </div>
                  <span className="text-[.75rem]">Project</span>
                  <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                </div>
                <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                  <div className="mask-up p-4 md:p-10 absolute h-0 opacity-0 group-hover:h-[30%] md:group-hover:h-[35%] group-hover:opacity-100 duration-500 z-40 bottom-0 left-0 w-full  bg-white ">
                    <div className="txt">
                      <b className="text-xs xl:text-normal">
                        健身中心｜汽車旅館｜手作美學
                      </b>
                      <p className="xl:text-normal text-xs md:block hidden">
                        結合品牌精神與市場洞察，量身打造具吸引力與記憶點的商業空間，助力品牌形象升級與業績成長
                      </p>
                    </div>
                  </div>
                  <div className="overlay absolute inset-0 bg-black z-10"></div>
                  <div className="image-container overflow-hidden relative w-full h-full">
                    <Image
                      src="/images/hero-img/img01.png"
                      alt="About Image 1"
                      fill
                      className="object-cover group-hover:scale-110 duration-2000"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                    />
                    xs
                  </div>
                </div>
              </AnimatedLink>
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
                <AnimatedLink href="/project">
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
                            住宅空間設計
                          </b>
                        </button>
                      </button>
                    </div>
                    <span className="text-[.75rem]">
                      打造專屬於您的理想居所，從格局配置到材質選用，細膩呈現生活美學。
                    </span>
                    <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                  </div>
                </AnimatedLink>
              </div>

              <div className="w-[20%]  group">
                <AnimatedLink href="/project">
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
                            商業空間設計
                          </b>
                        </button>
                      </button>
                    </div>
                    <span className="text-[.75rem]">
                      從品牌精神出發，創造兼具美感與功能的商業場域，提升品牌形象與消費體驗。
                    </span>
                    <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                  </div>
                </AnimatedLink>
              </div>
              <div className="w-[20%]  group">
                <AnimatedLink href="/project">
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
                            辦公室與共享空間設計
                          </b>
                        </button>
                      </button>
                    </div>
                    <span className="text-[.75rem]">
                      打造靈活高效的工作場域，提升團隊協作力與品牌文化感知。
                    </span>
                    <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                  </div>
                </AnimatedLink>
              </div>
              <div className="w-[20%]  group">
                <AnimatedLink href="/project">
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
                            空間美學顧問
                          </b>
                        </button>
                      </button>
                    </div>
                    <span className="text-[.75rem]">
                      從色彩搭配、家具配置到照明設計，全面提升空間細節質感。
                    </span>
                    <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                  </div>
                </AnimatedLink>
              </div>
              <div className="w-[20%]  group">
                <AnimatedLink href="/project">
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
                            3D 模型與虛擬實境提案
                          </b>
                        </button>
                      </button>
                    </div>
                    <span className="text-[.75rem]">
                      以擬真 3D 模型與 VR
                      技術，讓設計想像提前落地，打造沉浸式體驗。
                    </span>
                    <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                  </div>
                </AnimatedLink>
              </div>
            </div>
          </section>
        </div>
      )}
    </ReactLenis>
  );
}
