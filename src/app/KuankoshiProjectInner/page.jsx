"use client";

import HomeSlider from "../../components/HeroSliderHome/page.jsx";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link.js";
import { ReactLenis } from "@studio-freight/react-lenis";
import HoverItem from "../../components/HoverItem.jsx";

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
      <div className="">
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
        <HomeSlider />

        <section className="py-[150px] flex flex-col lg:flex-row pt-8 mt-20 pb-[80px]  border-t-1 border-gray-300 w-full ">
          <div className=" w-full lg:w-[15%]">
            <div className="sticky pl-5 top-24 border border-black">
              <b>categories</b>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">All</p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
            </div>
          </div>

          <div className="flex w-full lg:w-[60%] border border-gray-800 flex-col">
            <div className="title flex justify-between pl-8"></div>
            <div className="  mx-auto  px-10">
              <Image
                src="/images/474790076_122233773494031935_6963865975193128560_n.jpg"
                alt=""
                placeholder="empty"
                loading="eager"
                width={1500}
                height={800}
                className="w-screen"
              ></Image>
              <div className="text text-[.95rem] leading-loose mt-5">
                以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。
                <br></br>
                <br></br>
                以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。
                Designer
              </div>
              <Image
                src="/images/474790076_122233773494031935_6963865975193128560_n.jpg"
                alt=""
                placeholder="empty"
                loading="eager"
                width={1500}
                height={800}
                className="w-screen mt-8"
              ></Image>
              <div className="text text-[.95rem] leading-loose mt-5">
                以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。
                <br></br>
                <br></br>
                以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。
                Designer
              </div>
            </div>
          </div>
          <div className=" w-full py-10 px-5 sm:px-0 lg:py-0 sm:w-[60%] mx-auto lg:w-[25%] pr-8  flex flex-col">
            <div className="">
              <span className="text-[.8rem]">
                以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。
                Designer
              </span>
            </div>
            <div className="sticky  my-4 top-24 ">
              <div className="flex  px-4 flex-col border border-[#d7d7d7] bg-[#fffdfa]">
                <h2 className="article-side-project-title text-[1rem] font-normal tracking-widest">
                  326新成屋兩房57萬裝潢成家專案
                </h2>
                <div className="feature">
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal">裝潢價格：</b>
                    <span className="text-[.85rem] font-normal text-gray-700">
                      約新台幣 180 萬元​
                    </span>
                  </div>
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal">裝潢坪數：</b>
                    <span className="text-[.85rem] font-normal text-gray-700">
                      25 坪​
                    </span>
                  </div>
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal">施工日期：</b>
                    <span className="text-[.85rem] font-normal text-gray-700">
                      2024.05.04
                    </span>
                  </div>
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal">特色：</b>
                    <br></br>
                    <span className="text-[.85rem] w-3/4  font-normal text-gray-700">
                      ​以白色與灰色為主色調，搭配木質地板，營造出簡約且溫馨的居家氛圍。​
                    </span>
                  </div>
                </div>
              </div>
              <div className="small-viewer-project p-5">
                <div className="flex flex-row justify-between ">
                  <div className="img w-1/2">
                    <Image
                      src="/images/481977410_122241519506031935_5824784297779272863_n.jpg"
                      placeholder="empty"
                      loading="lazy"
                      alt="small-img"
                      width={400}
                      height={30}
                      className="w-full"
                    ></Image>
                  </div>

                  <div className="arrow w-1/2 flex flex-col justify-between p-4">
                    <div className="flex flex-col">
                      <b className="text-[.95rem]">Name</b>
                      <span className="text-[.8rem] leading-snug ">
                        {" "}
                        Lorem ipsum dolor consectetur
                      </span>
                    </div>
                    <b className="text-[.95rem] ">Go Project</b>
                  </div>
                </div>
                <div className="flex flex-row justify-between ">
                  <div className="img w-1/2">
                    <Image
                      src="/images/481977410_122241519506031935_5824784297779272863_n.jpg"
                      placeholder="empty"
                      loading="lazy"
                      alt="small-img"
                      width={400}
                      height={30}
                      className="w-full"
                    ></Image>
                  </div>

                  <div className="arrow w-1/2 flex flex-col justify-between p-4">
                    <div className="flex flex-col">
                      <b className="text-[.95rem]">Name</b>
                      <span className="text-[.8rem] leading-snug ">
                        {" "}
                        Lorem ipsum dolor consectetur
                      </span>
                    </div>
                    <b className="text-[.95rem] ">Go Project</b>
                  </div>
                </div>
                <div className="flex flex-row justify-between ">
                  <div className="img w-1/2">
                    <Image
                      src="/images/481977410_122241519506031935_5824784297779272863_n.jpg"
                      placeholder="empty"
                      loading="lazy"
                      alt="small-img"
                      width={400}
                      height={30}
                      className="w-full"
                    ></Image>
                  </div>

                  <div className="arrow w-1/2 flex flex-col justify-between p-4">
                    <div className="flex flex-col">
                      <b className="text-[.95rem]">Name</b>
                      <span className="text-[.8rem] leading-snug ">
                        {" "}
                        Lorem ipsum dolor consectetur
                      </span>
                    </div>
                    <b className="text-[.95rem] ">Go Project</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_navgation flex flex-row">
          <div className="flex w-[80%] mx-auto">
            <div className="Navgation_Prev group hover:scale-[1.02] duration-400 w-1/2 px-8">
              <div className="flex flex-col justify-start items-start">
                <b className="text-[.9rem] tracking-wide w-3/4 text-left font-bold">
                  〈COGNOMEN〉 25AW “WORKER-MAN
                  ATHLETE”的預購活動將於下週末為期三天舉辦！！
                </b>
                <span className="text-[.8rem] mt-3">
                  Categories: 小資50萬裝潢方案
                </span>
                <button class="mt-4  relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
                  <div class="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
                    <div class="absolute translate-x-0 opacity-0 transition group-hover:-translate-x-6 group-hover:opacity-100 rotate-180">
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

                    <span class="pl-6">Hover</span>
                    <div class=" absolute  right-0 translate-x-12 opacity-100 transition group-hover:translate-x-6 group-hover:opacity-0">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                      >
                        <path
                          d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="Navgation_Next hover:scale-[1.02] duration-400 w-1/2 group px-8">
              <div className="flex flex-col justify-end items-end">
                <b className="text-[.9rem]  w-3/4 text-right tracking-wide font-bold">
                  〈COGNOMEN〉 25AW “WORKER-MAN
                  ATHLETE”的預購活動將於下週末為期三天舉辦！！
                </b>
                <span className="text-[.8rem] mt-3">
                  Categories: 小資50萬裝潢方案
                </span>
                <button class="mt-4 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
                  <div class="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
                    <div class="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                      >
                        <path
                          d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span class="pl-6">Hover</span>
                    <div class="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
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
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-[150px] bg-[linear-gradient(to_bottom,white_50%,#36454f_50%)]">
          <div className="title py-20">
            <h2 className="text-center text-[4rem] font-bold">#unevensnap</h2>
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61550958051323&sk=photos"
              className="icon flex justify-center items-center"
            >
              <div className="w-[1.6rem]  bg-center bg-cover bg-no-repeat h-[1.6rem] bg-[url('https://www.uneven.jp/images/icon_ig.svg')]"></div>
              <b className="ml-3 font-normal">INSTGRAM</b>
            </Link>
          </div>
          <Marquee>
            <div className="flex items-center">
              <HoverItem
                imageUrl="https://scontent.frmq7-1.fna.fbcdn.net/v/t39.30808-6/484998795_122244445484031935_2425130562929710773_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OiFqhslMemgQ7kNvwEkcG9B&_nc_oc=Adnfxsr0DIao3NHRzP8FmCgT6v7LPZMCCKg8kbXnr_7dFiutR2Adr7DMTF2fPgmndJM&_nc_zt=23&_nc_ht=scontent.frmq7-1.fna&_nc_gid=rNM79x4aGbYij46UWcsneg&oh=00_AfGffcIOQ3BrMS_47kPAwUJqAcljzRFzYJHMiYhco-vJGg&oe=67FD39FF"
                text="Built for Living."
                fontSize="2rem"
                fontWeight="300"
                color="#ffffff"
                lineHeight="50px"
              />

              <HoverItem
                imageUrl="https://scontent.frmq7-1.fna.fbcdn.net/v/t39.30808-6/486824855_122245695716031935_3372241001376026295_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FV3ny9KMdEIQ7kNvwFrX63k&_nc_oc=AdnZpwA1MHZFWrPzBRK_gXqlflr8fZwNPcm3nqzTlubjmS1ijh7pNC0RaWEj3YObkm0&_nc_zt=23&_nc_ht=scontent.frmq7-1.fna&_nc_gid=qtbrRO4eIPcLtoMHumsqoA&oh=00_AfEmBpLBntpirpGa5aq8qplmD46w9N_hhOIYw-BZ13hH1g&oe=67FD1572"
                text="LIMITED DROP"
                fontSize="1.6rem"
                fontWeight="600"
                color="#e6e6e6"
                lineHeight="40px"
              />
              <HoverItem
                imageUrl="https://scontent.frmq7-1.fna.fbcdn.net/v/t39.30808-6/485146224_122244233498031935_8273150089111007875_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Wt_EWOjKlt8Q7kNvwHa4yT8&_nc_oc=AdlpTqa69T7cL940i7mH9FflU7nSCibN3EjcCE5wN7hp4cSuLgYeYXBG6X3UYwcQs1A&_nc_zt=23&_nc_ht=scontent.frmq7-1.fna&_nc_gid=Nx_FPSH-jdQbGZgMsCw1cQ&oh=00_AfGJgpxaG2U_wZ1ZsHpQTt5o5NnqlW157zHcNFyTCxQ8SQ&oe=67FD221D"
                text="Built for Living."
                fontSize="2rem"
                fontWeight="300"
                color="#ffffff"
                lineHeight="50px"
              />

              <HoverItem
                imageUrl="https://scontent.frmq7-1.fna.fbcdn.net/v/t39.30808-6/485059714_122244233276031935_4983623517156943623_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eUgXFHuavPIQ7kNvwFZV766&_nc_oc=AdkOMbV2qXEbxhGN6iDiVdbwJ5vnYTiwkW3RdPS-g9OPlyrLBq91oLwTebkFTx6TmSE&_nc_zt=23&_nc_ht=scontent.frmq7-1.fna&_nc_gid=vuAhcpquSB-klaqME8rb2A&oh=00_AfHP4w8BXjHL8yNkfmNRQugB0Bc_BiRfXe7RSy38EewJkQ&oe=67FD0C5B"
                text="LIMITED DROP"
                fontSize="1.6rem"
                fontWeight="600"
                color="#e6e6e6"
                lineHeight="40px"
              />
              <HoverItem
                imageUrl="https://scontent.frmq7-1.fna.fbcdn.net/v/t39.30808-6/481764862_122241462854031935_2469569084975822180_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pXdyfboWx8IQ7kNvwEZPt9c&_nc_oc=AdmLIi2BSEcrjft-VRsXPEQ1WxKnfFqubeJP8xVa7LoxKBZI7mCY9kgOHuo5gLeLvTM&_nc_zt=23&_nc_ht=scontent.frmq7-1.fna&_nc_gid=YhlYNgGLdqFOajk9j2ZfxA&oh=00_AfEKf88HEUdU2d4Ps3zlzRwn4SD-5JaKvuZ52cEqgpY_-Q&oe=67FD0E59"
                text="Built for Living."
                fontSize="2rem"
                fontWeight="300"
                color="#ffffff"
                lineHeight="50px"
              />

              <HoverItem
                imageUrl="https://www.uneven.jp/images/about/shop_7.jpg"
                text="LIMITED DROP"
                fontSize="1.6rem"
                fontWeight="600"
                color="#e6e6e6"
                lineHeight="40px"
              />
            </div>
          </Marquee>
        </section>
      </div>
      {/* <div className="w-full h-full py-20">
        <Carousel items={cards} />
      </div> */}
    </ReactLenis>
  );
}
