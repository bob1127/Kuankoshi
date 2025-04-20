"use client";
import { useRef } from "react";
import "./photos.css";
import { ReactLenis } from "@studio-freight/react-lenis";

import { Card, CardHeader, CardBody } from "@heroui/react";
import HoverCard from "../../components/HoverCard/index.jsx";
import React from "react";
import GsapText from "../../components/RevealText/index";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation.tsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import Image from "next/image";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards.tsx";
import ScrollAnimation from "../../components/ScrollAnimation/page.jsx";
import { AnimatePresence, motion } from "framer-motion";
gsap.registerPlugin(CustomEase);

const Photos = () => {
  const sliderImagesRef = useRef(null);
  const counterRef = useRef(null);
  const titlesRef = useRef(null);
  const indicatorsRef = useRef(null);
  const previewsRef = useRef(null);
  const sliderRef = useRef(null);

  return (
    <ReactLenis root className="">
      <section className="section_hero relative overflow-hidden max-h-[400px] md:max-h-[600px] 2xl:max-h-[900px] h-[100vh] ">
        <Image
          src="/images/city-img_sp.png"
          alt=" "
          placeholder="empty"
          loading="lazy"
          width={2820}
          height={700}
          className="w-full h-full absolute z-[9] mt-[15vh] top-0 left-0"
        ></Image>
        <BackgroundGradientAnimation></BackgroundGradientAnimation>
        <div className="absolute w-[550px] z-50 top-[35%] left-[15%]">
          <div className="flex flex-col">
            <img
              src="https://www.tokiomarinehd.com/purpose/images/top/purpose-ttl.svg"
              alt="leaders message"
            />
            <div className="txt">
              <h2>宜宜</h2>
            </div>
          </div>
        </div>
      </section>
      <div className=" mt-[-20vh] ">
        <InfiniteMovingCards
          speed={800}
          items={[
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/IMG_3175-1.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/IMG_3323_edit.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-05.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-07.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-07.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-01.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/IMG_3175-1.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/IMG_3323_edit.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-05.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-07.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-07.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-01.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/IMG_3175-1.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/IMG_3323_edit.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-05.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-07.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-07.jpg",
            "https://www.kouken-nagoya.com/wp/wp-content/uploads/2023/09/fv-im-01.jpg",
          ]}
        />
      </div>

      <section className="section_news py-[50px]">
        <div className=" w-[90%] md:w-[80%] flex flex-col xl:flex-row section-container mx-auto">
          <div className="w-full sm:pr-10 pr-5 lg:pr-20 xl:w-[50%]">
            <div className="flex flex-col">
              <GsapText
                text="NEWS."
                id="gsap-intro"
                fontSize="3.2rem"
                fontWeight="800"
                color="#000"
                lineHeight="60px"
                className="text-left tracking-widest inline-block mb-0 h-auto"
              />
              <p className="text-[.9rem] tracking-widest font-normal">
                宜園建設自成立以來，始終秉持「誠信、品質、創新」的理念，深耕本土，專注於打造結合人文、自然與現代美學的理想住宅空間。我們相信，建築不只是鋼筋水泥的堆砌，更是人與城市之間最深的情感連結。
              </p>
            </div>
            <ul className="mt-10">
              <li className="border-b-1 group pt-4 pb-[20px] hover:scale-105 duration-400">
                <div className="flex flex-col  w-auto ">
                  <b className="text-[.8rem] mb-3">2025/01/01</b>
                  <button
                    role="link"
                    class="text-[1rem]  flex justify-start relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    慶祝宜園大院 動土典禮活動紀錄
                  </button>
                  <p className="text-[.8rem] mt-3">2025/01/01</p>
                </div>
              </li>
              <li className="border-b-1 group pt-4 pb-[20px] hover:scale-105 duration-400">
                <div className="flex flex-col  w-auto ">
                  <b className="text-[.8rem] mb-3">2025/01/01</b>
                  <button
                    role="link"
                    class="text-[1rem]  flex justify-start relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    慶祝宜園大院 動土典禮活動紀錄
                  </button>
                  <p className="text-[.8rem] mt-3">2025/01/01</p>
                </div>
              </li>

              <li className="border-b-1 group pt-4 pb-[20px] hover:scale-105 duration-400">
                <div className="flex flex-col  w-auto ">
                  <b className="text-[.8rem] mb-3">2025/01/01</b>
                  <button
                    role="link"
                    class="text-[1rem]  flex justify-start relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    慶祝宜園大院 動土典禮活動紀錄
                  </button>
                  <p className="text-[.8rem] mt-3">2025/01/01</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full xl:w-[50%]">
            <div>
              <Image
                data-aos="fade-up"
                src="https://www.lala.co.jp/wp-content/themes/lalahouse/common/images/top/img-about-after.png?1736987543401"
                placeholder="empty"
                loading="lazy"
                alt=""
                width={800}
                height={1500}
                className="w-[70%] mt-10 md:mt-0 mx-auto max-w-[800px]"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="mt-[0px] overflow-hidden w-[95%] xl:w-[85%] mx-auto xl:flex-row flex-col flex">
        <div className="w-full xl:w-[85%] ">
          <ScrollAnimation />
        </div>
        <div className="w-full xl:w-[15%] pt-0  xl:pt-[10%] pb-20  ">
          <div className="bg-white mt-20 w-full h-[400px] p-10">
            <h3>title</h3>
          </div>
        </div>
      </section> */}
      <section className="my-[100px]">
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center w-[90%] md:w-[80%] mx-auto">
          <GsapText
            text="EDITORS FILE."
            id="gsap-intro"
            fontSize="3.2rem"
            fontWeight="800"
            color="#000"
            lineHeight="60px"
            className="text-left  tracking-widest inline-block mb-0 h-auto"
          />

          <div className="txt text-[.9rem] text-left mb-3 font-normal">
            只為實現對居住者的承諾── <br></br>
            打造安全、舒適、永續的家園。
          </div>
        </div>
        <HoverCard />
      </section>
    </ReactLenis>
  );
};

export default Photos;
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
