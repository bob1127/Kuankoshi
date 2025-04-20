"use client";
import { useRef } from "react";
import "./page.css";
import SvgImg from "../../components/SVGImage";

import Image from "next/image";
import HoverCard from "../../components/HoverCardBuild/index";
import gsap from "gsap";
import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";
// import HeroSlider from "../../components/HeroSlider/page";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import ImageDistortion from "../../components/ImageDistortion/page";

gsap.registerPlugin(CustomEase);

const Photos = () => {
  const placeholders = [
    "理想的家，該具備哪些元素？",
    "選擇房子時，你最在意什麼？",
    "如何找到兼具品質與舒適的住宅？",
    "買房是投資還是生活選擇？",
    "未來的家，會是什麼模樣？",
  ];
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      {/* <HeroSlider /> */}
      <SvgImg />
      {/* <div className="p-10">
        <StickyScroll content={content} />
      </div> */}

      <section className="section_project flex flex-col py-[40px]">
        <div className="flex 2xl:px-[10px] justify-end items-center pr-6">
          <div className="description">
            <p className="text-gray-400 mr-4 text-right text-[14px]">
              匠心獨運，築夢家園 —— 宜園建設打造理想居所，，<br></br>
              結合自然美學與現代舒適，帶您邁向幸福生活新境界。
            </p>
          </div>
          <div className="title">
            <h2> 經典選粹</h2>
          </div>
        </div>
        <HoverCard />
      </section>
      <section className="section_project flex flex-col py-[40px]">
        <div className="flex 2xl:px-[10px] justify-start items-center pl-6">
          <div className="description">
            <p className="text-gray-400 ml-4 text-left text-[14px]">
              匠心獨運，築夢家園 —— 宜園建設打造理想居所，，<br></br>
              結合自然美學與現代舒適，帶您邁向幸福生活新境界。
            </p>
          </div>
          <div className="title">
            <h2> 線上熱銷</h2>
          </div>
        </div>
        <HoverCard />
      </section>
      <section className="section_project flex flex-col py-[40px]">
        <div className="flex 2xl:px-[10px] justify-end items-center pr-6">
          <div className="description">
            <p className="text-gray-400 mr-4 text-right text-[14px]">
              匠心獨運，築夢家園 —— 宜園建設打造理想居所，，<br></br>
              結合自然美學與現代舒適，帶您邁向幸福生活新境界。
            </p>
          </div>
          <div className="title">
            <h2> 新案件賞</h2>
          </div>
        </div>
        <HoverCard />
      </section>
      <ImageDistortion />
      <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
          對我們的建案有興趣嗎？
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};

export default Photos;
