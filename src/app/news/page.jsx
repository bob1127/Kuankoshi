"use client";
import { useRef } from "react";
import "./photos.css";
import { ReactLenis } from "@studio-freight/react-lenis";

// import { Card, CardHeader, CardBody } from "@heroui/react";
import HoverCard from "../../components/HoverCard/index.jsx";
import React from "react";
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";
import GsapText from "../../components/RevealText/index";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation.tsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import Image from "next/image";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards.tsx";
import ScrollAnimation from "../../components/ScrollAnimation/page.jsx";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedLink from "../../components/AnimatedLink";
gsap.registerPlugin(CustomEase);

const Photos = () => {
  const sliderImagesRef = useRef(null);
  const counterRef = useRef(null);
  const titlesRef = useRef(null);
  const indicatorsRef = useRef(null);
  const previewsRef = useRef(null);
  const sliderRef = useRef(null);
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <ReactLenis root className="">
      <div className="!bg-[#F1F1F1]">
        <section className="section-hero relative mt-[20vh] h-[70vh]">
          <div className="white-section border rounded-tr-[60px] bg-[#F1F1F1] absolute top-[-90px] left-0 w-[88%] h-full z-10"></div>
          <div className="color-section bg-[#30b5c7] relative z-30 h-full">
            <div className="absolute img-hero left-1/2 z-50 top-[-150px] -translate-x-1/2">
              <Image
                src="https://store-palette.com/assets/img/home/color_title.svg"
                alt="news-img"
                placeholder="empty"
                loading="lazy"
                width={1000}
                height={400}
                className="max-w-[300px] mb-5 w-[270px] mx-auto"
              ></Image>
              <div className="flex">
                <Image
                  src="https://store-palette.com/assets/img/home/color_illust_1.svg"
                  alt="news-img"
                  placeholder="empty"
                  loading="lazy"
                  width={1000}
                  height={400}
                  className="max-w-[150px] w-[90px]"
                ></Image>
                <Image
                  src="https://store-palette.com/assets/img/home/color_illust_2.svg"
                  alt="news-img"
                  placeholder="empty"
                  loading="lazy"
                  width={1000}
                  height={400}
                  className="max-w-[150px] w-[120px]"
                ></Image>
                <Image
                  src="https://store-palette.com/assets/img/home/color_illust_3.svg"
                  alt="news-img"
                  placeholder="empty"
                  loading="lazy"
                  width={1000}
                  height={400}
                  className="max-w-[150px] w-[90px]"
                ></Image>
                <Image
                  src="https://store-palette.com/assets/img/home/color_illust_4.svg"
                  alt="news-img"
                  placeholder="empty"
                  loading="lazy"
                  width={1000}
                  height={400}
                  className="max-w-[150px] w-[90px]"
                ></Image>
              </div>
            </div>
            <div className="content flex">
              <div className="left w-1/2">
                <div className="description flex flex-col">
                  <h1></h1>
                  <p className="text-[#e7e7e7]">
                    我們將與活躍於多樣領域的創作者和藝術家攜手合作，共同創造出只有在這裡才能找到的世界觀。
                    懷著「打造長久受愛戴的店（場）」的目標，我們將全心投入於單一品牌的發展。
                  </p>
                </div>
              </div>
              <div className="right w-1/2"></div>
            </div>
          </div>
        </section>
        <section className="flex">
          <div className="w-[30%]  flex items-center justify-end">
            <div className="card-text flex flex-col justify-center items-center">
              <h2 className="text-[5rem] rotate-[90deg] tracking-wide">IDEA</h2>
              <div className="project-amount text-white my-5 bg-black flex justify-center items-center rounded-full w-8 h-8">
                23
              </div>
              <span
                className="text-[1.4rem] mt-10"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                }}
              >
                創意想法案件
              </span>
            </div>
          </div>
          <div className="w-[70%]  overflow-hidden">
            <Carousel items={cards} />
            <div className="pt-8">
              <span className="text-[.85rem] ">
                界裡還有許多充滿趣味的店舗設計想法。使用海外材料和個性化的色彩設計的空間中，充滿了商店設計的靈感。
                <br></br>我們可以以輕鬆旅行的心情，去發現新的設計。
              </span>
            </div>
          </div>
        </section>
        <section className="section-grid-item mt-[10vh]  px-4 py-8">
          <div className="max-w-7xl w-[75%] mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-stretch">
            {/* LEFT */}
            <div className="h-full">
              <AnimatedLink href="/KuankoshiNews">
                <div className="card-item group hover:shadow-xl h-full w-full border rounded-[40px] relative overflow-hidden">
                  <div className="absolute bottom-5 right-5 z-20 button-icon">
                    <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                  <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                  <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                    <h3 className="text-white text-[1.5rem] font-bold">
                      Blog-001
                    </h3>
                    <span className="text-xs font-light mt-2 text-white">
                      ショップの名前を建物のモチーフに美しく使ったベーカリーの店舗デザイン
                    </span>
                  </div>
                  <div className="relative w-full h-full min-h-[600px]">
                    <Image
                      src="https://kiiro-d.com/asset/uploads/2024/10/DSC6499-scaled.jpg"
                      alt="card-img"
                      fill
                      className="object-cover group-hover:scale-125 duration-3000"
                    />
                  </div>
                </div>
              </AnimatedLink>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-6 justify-between">
              {/* 第一張右卡片 */}
              <AnimatedLink href="/KuankoshiNews">
                <div className="card-item group hover:shadow-xl aspect-square w-full border rounded-[40px] relative overflow-hidden">
                  <div className="absolute bottom-5 right-5 z-20 button-icon">
                    <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                  <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                  <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                    <h3 className="text-white text-[1.5rem] font-bold">
                      Blog-002
                    </h3>
                    <span className="text-xs font-light mt-2 text-white">
                      和風の木格子を使ったカフェ空間のブランディング
                    </span>
                  </div>
                  <Image
                    src="https://kiiro-d.com/asset/uploads/2024/08/f1200ec2f253107006ed6ef9bd16a14f.png"
                    alt="card-img-2"
                    fill
                    className="object-cover group-hover:scale-125 duration-3000"
                  />
                </div>
              </AnimatedLink>
              {/* 第二張右卡片 */}
              <AnimatedLink href="/KuankoshiNews">
                <div className="card-item group hover:shadow-xl aspect-square w-full border rounded-[40px] relative overflow-hidden">
                  <div className="absolute bottom-5 right-5 z-20 button-icon">
                    <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                  <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                  <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                    <h3 className="text-white text-[1.5rem] font-bold">
                      Blog-003
                    </h3>
                    <span className="text-xs font-light mt-2 text-white">
                      都會小巧面積內打造極簡與光感共存的甜點店
                    </span>
                  </div>
                  <Image
                    src="https://kiiro-d.com/asset/uploads/2025/02/78ae4d9aaf549047b58f3b5bf1896236.jpg"
                    alt="card-img-3"
                    fill
                    className="object-cover group-hover:scale-125 duration-3000"
                  />
                </div>
              </AnimatedLink>
            </div>
          </div>

          <div className="max-w-7xl w-[75%] mx-auto grid grid-cols-1 mt-10 md:grid-cols-[2fr_3fr] gap-6 items-stretch">
            {/* LEFT */}

            {/* RIGHT */}
            <div className="flex flex-col gap-6 justify-between">
              {/* 第一張右卡片 */}
              <AnimatedLink href="/KuankoshiNews">
                <div className="card-item group hover:shadow-xl aspect-square w-full border rounded-[40px] relative overflow-hidden">
                  <div className="absolute bottom-5 right-5 z-20 button-icon">
                    <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                  <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                  <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                    <h3 className="text-white text-[1.5rem] font-bold">
                      Blog-002
                    </h3>
                    <span className="text-xs font-light mt-2 text-white">
                      和風の木格子を使ったカフェ空間のブランディング
                    </span>
                  </div>
                  <Image
                    src="https://kiiro-d.com/asset/uploads/2024/08/f1200ec2f253107006ed6ef9bd16a14f.png"
                    alt="card-img-2"
                    fill
                    className="object-cover group-hover:scale-125 duration-3000"
                  />
                </div>
              </AnimatedLink>
              <AnimatedLink href="/KuankoshiNews">
                {/* 第二張右卡片 */}
                <div className="card-item group hover:shadow-xl aspect-square w-full border rounded-[40px] relative overflow-hidden">
                  <div className="absolute bottom-5 right-5 z-20 button-icon">
                    <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                  <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                  <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                    <h3 className="text-white text-[1.5rem] font-bold">
                      Blog-003
                    </h3>
                    <span className="text-xs font-light mt-2 text-white">
                      都會小巧面積內打造極簡與光感共存的甜點店
                    </span>
                  </div>
                  <Image
                    src="https://kiiro-d.com/asset/uploads/2025/02/78ae4d9aaf549047b58f3b5bf1896236.jpg"
                    alt="card-img-3"
                    fill
                    className="object-cover group-hover:scale-125 duration-3000"
                  />
                </div>
              </AnimatedLink>
            </div>
            <div className="h-full">
              <AnimatedLink href="/KuankoshiNews">
                <div className="card-item group hover:shadow-xl h-full w-full border rounded-[40px] relative overflow-hidden">
                  <div className="absolute bottom-5 right-5 z-20 button-icon">
                    <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                  <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                  <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                    <h3 className="text-white text-[1.5rem] font-bold">
                      Blog-001
                    </h3>
                    <span className="text-xs font-light mt-2 text-white">
                      ショップの名前を建物のモチーフに美しく使ったベーカリーの店舗デザイン
                    </span>
                  </div>
                  <div className="relative w-full h-full min-h-[600px]">
                    <Image
                      src="https://kiiro-d.com/asset/uploads/2024/10/DSC6499-scaled.jpg"
                      alt="card-img"
                      fill
                      className="object-cover group-hover:scale-125 duration-3000"
                    />
                  </div>
                </div>
              </AnimatedLink>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Photos;
const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14  mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-medium font-sans max-w-3xl mx-auto">
              <span className="font-bold text-[20px] text-neutral-700 dark:text-neutral-200">
                臨近繁華，與自然共生
              </span>{" "}
              周邊環境方面，宜園建設為您精心選擇了理想的生活圈。社區周邊生活機能豐富，無論是超市、學校還是醫療機構，應有盡有。交通便捷，讓您無論是通勤還是外出，都能輕鬆迅速。
            </p>
            <Image
              src="https://hadashinoie.co.jp/app/wp-content/uploads/2024/05/2B3A0382-2048x1365.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/06/ho4.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/06/bo3-2000x1333.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/06/da4.jpg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/07/ta4.jpg",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/09/m3.jpg",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/04/ta2-2000x2294.jpg",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/06/ho4.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/06/bo3-2000x1333.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/06/da4.jpg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/07/ta4.jpg",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/09/m3.jpg",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/04/ta2-2000x2294.jpg",
    content: <DummyContent />,
  },
];
