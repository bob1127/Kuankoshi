"use client";

import HomeSlider from "../../components/HeroSliderHome/page.jsx";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "./about.scss";
import ParallaxImage from "../../components/ParallaxImage.jsx";
import { ReactLenis } from "@studio-freight/react-lenis";
import GsapText from "../../components/RevealText/index";
import HoverItem from "../../components/HoverItem.jsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import Character from "../../components/TextOpacityScroll/Character.jsx";
import MotionImage from "../../components/MotionImage.jsx";
const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

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
  const [hovered, setHovered] = useState(false);
  const words = paragraph.split(" ");
  return (
    <ReactLenis root>
      <div className="">
        <section className="h-[100vh] section-news relative overflow-hidden">
          <div className="mask bg-[#000] absolute opacity-35 w-full h-full top-0 left-0 z-30"></div>
          <div className="absolute inset-0 flex z-50 items-center justify-center ">
            <div className="txt">
              <GsapText
                text="KUANKOSHI"
                id="gsap-intro"
                fontSize="3.3rem"
                fontWeight="500"
                color="#fff"
                lineHeight="60px"
                className="text-center inline-block mb-0 h-auto "
              />
            </div>
          </div>
          <div className="portrait-container">
            <div className="img mt-8">
              <ParallaxImage
                src="https://motherhaus-sauna.com/sys/wp-content/themes/motherbase/assets/img/top/service-10-pc.webp"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="mt-[18vh]">
          <div className="flex flex-row  mx-auto">
            <div className="stick-section relative  w-[40%] h-200vh border border-black">
              <div className="square sticky inline-block  ml-[18%] pr-[8%] top-[90px]  border">
                <b>赤座大廈1樓 店鋪</b>
                <p className="mt-3 text-[.9rem] text-gray-500">
                  愛知縣名古屋市中區榮4-14-25赤座大樓1樓<br></br>
                  （距離地鐵東山線榮站13號出口步行3分鐘）
                </p>
                <ul className="mt-3 text-gray-500">
                  <li className="text-[.9rem]">電話：052-262-2525</li>
                  <li className="text-[.9rem]">營業時間：12:00-20:00</li>
                  <li className="text-[.9rem]">休息日：不定期</li>
                </ul>
              </div>
            </div>
            <div className="content-section pt-[50px] w-[60%]">
              <div className="">
                <div className="content">
                  <h2 className="text-[3.2rem] w-[80%] font-normal">
                    以高端國產品牌為主打的充滿高級感的時尚精品店
                    ，營造出震撼感官的空間
                  </h2>
                  <br></br>
                  <div className="w-[80%]">
                    <p className="tracking-widest">
                      2005年在名古屋市東區和泉地區開業，2011年搬遷至中部地區的文化、時尚中心名古屋市榮地區，以UNEVEN
                      GENERAL STORE為名重新開業。
                    </p>
                    <br></br>
                    <br></br>
                    <p className="tracking-widest">
                      透過進一步擴大活動空間並以國內品牌為中心，我們將能夠推廣超越各種類型和類別界限的各種風格的時尚。我們的目標是在體貼每位顧客的同時，透過溝通發現和提出新的風格。
                    </p>
                    <br></br>
                  </div>
                  <Image
                    src="https://www.uneven.jp/images/about/shop_1.jpg?data=20241008"
                    alt=""
                    placeholder="empty"
                    loading="lazy"
                    width={800}
                    height={1100}
                    className="w-full max-w-[1200px]"
                  ></Image>
                  <Image
                    src="https://www.uneven.jp/images/about/shop_2.jpg"
                    alt=""
                    placeholder="empty"
                    loading="lazy"
                    width={800}
                    height={1100}
                    className="w-full mt-8 max-w-[1200px]"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-[150px] bg-[linear-gradient(to_bottom,white_50%,#36454f_50%)]">
          <div className="title py-20">
            <h2 className="text-center text-[4rem] font-bold">#unevensnap</h2>
            <div className="icon flex justify-center items-center">
              <div className="w-[1.6rem]  bg-center bg-cover bg-no-repeat h-[1.6rem] bg-[url('https://www.uneven.jp/images/icon_ig.svg')]"></div>
              <b className="ml-3 font-normal">INSTGRAM</b>
            </div>
          </div>
          <Marquee>
            <div className="flex items-center">
              <HoverItem
                imageUrl="https://www.uneven.jp/images/about/gallery_2.jpg?data=20241008"
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
              <HoverItem
                imageUrl="https://www.uneven.jp/images/about/gallery_2.jpg?data=20241008"
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
              <HoverItem
                imageUrl="https://www.uneven.jp/images/about/gallery_2.jpg?data=20241008"
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
          <div className="flex flex-col items-center py-20">
            <p className="text-white tracking-wide !font-light ">
              徵求你的UNEVEN時尚風格📸！！
            </p>
            <p className="text-white tracking-wide !font-light ">
              請在 Instagram 上標記「#unevensnap」的標籤來發佈🙏🏻
            </p>
            <p className="text-white tracking-wide !font-light ">
              由工作人员精选并刊登 ☺️
            </p>
          </div>
          <div className="flex flex-col mt-8 items-center">
            <div className="line mx-auto w-[150px] bg-white h-[1.5px] rounded-full"></div>
            <h2 className="text-center text-white text-[4rem] font-bold">
              KUANKOSHI
            </h2>
            <span className="text-[.9rem] text-center font-normal text-gray-100">
              寬越設計
            </span>
          </div>
          <div className="flex flex-row py-20">
            <div className="w-1/2 flex items-center">
              <div className="p-10 txt w-[80%] mx-auto">
                <b className="text-white text-[2rem]">
                  古着と物差し展〈TREDICI〉
                </b>
                <p className="text-gray-100">
                  〈Touareg Silver〉／Second
                  TouchMARIEOHIR／ひめごとや〈Sasquatchfabrix.〉／in_sight
                  01〈URU TOKYO〉／Creator First〈Midorikawa〉／KEEP CALM AND
                  MAKE PEACE〈COGNOMEN〉
                </p>
              </div>
            </div>
            <div className="flex justify-center w-1/2 items-center">
              <Image
                src="https://www.uneven.jp/images/map.svg"
                alt=""
                placeholder="empty"
                loading="lazy"
                width={800}
                height={800}
                className="max-w-[800px] w-[70%] mx-auto"
              ></Image>
            </div>
          </div>
        </section>
      </div>
      <section className="py-[20vh] ">
        <div className="item flex w-[80%] max-w-[1920px] mx-auto">
          <div className="w-1/2 flex flex-col  justify-center items-start">
            <div className="w-[100%] flex flex-col px-20 max-w-[800px] mx-auto">
              <Character
                className="text-[2.3vmin] text-[#131313] leading-[1.4] tracking-wide  mx-auto"
                paragraph="下週4月9日(三)起將舉辦〈TENDER PERSON〉的25AW “SOMETHING JUST LIKE THIS”預訂會。"
              />
              <GsapText
                text="2025年3月21日"
                id="gsap-intro"
                fontSize=".9rem"
                fontWeight="500"
                color=""
                lineHeight="60px"
                className="text-[.9rem] text-gray-600"
              />
            </div>

            <div className="tag w-[80%] mx-auto px-20 mt-8 flex flex-wrap">
              <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                TEXT
              </div>
              <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                TEXT
              </div>
              <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                TEXT
              </div>
              <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                TEXT
              </div>
              <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                TEXT
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-full h-full overflow-hidden ">
              <MotionImage
                src="https://motherhaus-sauna.com/sys/wp-content/themes/motherbase/assets/img/top/service-10-pc.webp"
                alt=""
                width={800}
                height={1200}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="item mt-[150px] flex w-[80%] max-w-[1920px] mx-auto">
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-full h-full overflow-hidden ">
              <MotionImage
                src="https://motherhaus-sauna.com/sys/wp-content/themes/motherbase/assets/img/top/service-13-pc.webp"
                alt=""
                width={800}
                height={1200}
                className="w-full"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col  justify-center items-start">
            <div className="w-[100%] flex flex-col px-20 max-w-[800px] mx-auto">
              <Character
                className="text-[2.3vmin] text-[#131313] leading-[1.4] tracking-wide  mx-auto"
                paragraph="下週4月9日(三)起將舉辦〈TENDER PERSON〉的25AW “SOMETHING JUST LIKE THIS”預訂會。"
              />
              <GsapText
                text="2025年3月21日"
                id="gsap-intro"
                fontSize=".9rem"
                fontWeight="500"
                color=""
                lineHeight="60px"
                className="text-[.9rem] text-gray-600"
              />
            </div>

            <div className="tag w-[80%] mx-auto px-20 mt-8 flex flex-wrap">
              <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                TEXT
              </div>
              <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                TEXT
              </div>
              <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                TEXT
              </div>
              <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                TEXT
              </div>
              <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                TEXT
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="w-full h-full py-20">
        <Carousel items={cards} />
      </div> */}
    </ReactLenis>
  );
}
