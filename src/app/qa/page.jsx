"use client";

import { useRef } from "react";
import ScrollAnimate from "../../components/ScrollAnimation/page";
import SvgImg from "../../components/SVGImage";
import HeroSlider from "../../components/HeroSliderHome/page";
import { Accordion, AccordionItem } from "@heroui/react";

import Swiper from "../../components/SwiperCarousel/SwiperCardFood";
import Image from "next/image";
import HoverCard from "../../components/HoverCardBuild/index";
import gsap from "gsap";
import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";
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
      {/* Hero 區塊 */}
      <section className="section_hero">
        <HeroSlider />
      </section>

      {/* 輪播區 */}
      <section>
        <Swiper />
      </section>

      {/* 動畫區 */}
      <section>
        <div>
          <ScrollAnimate />
        </div>
      </section>

      {/* 室內設計問題 區 */}
      <section className="section-qa py-12 bg-[#EFEFEF] flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row w-[90%] max-w-[1920px] mx-auto items-start">
          {/* 左邊字 */}
          <div className="w-full md:w-1/2 flex justify-start mb-8 md:mb-0">
            <span className="rotate-0 md:rotate-90 text-[1.2rem] text-gray-800">
              LIFE - DESIGN
            </span>
          </div>

          {/* 右邊標題 */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
            <h2 className="text-[5vmin] text-gray-900 font-normal leading-tight">
              瞭解更多室內設計
              <br />
              相關問題
            </h2>
            <div className="line bg-black h-[1px] w-[90px] my-4"></div>
            <p className="text-gray-800 text-sm md:text-base font-light">
              想知道更多關於室內設計流程或者相關問題
            </p>
          </div>
        </div>

        {/* QA 卡片 */}
        <div className="flex flex-col md:flex-row gap-6 mt-12 items-center justify-center">
          {[1, 2, 3].map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center w-[90%] md:w-[320px] overflow-hidden"
            >
              <div className="overflow-hidden">
                <Image
                  src={`https://www.clasishome.jp/wp-content/themes/clasishome/assets/image/front-page/front-reading-0${item}.jpg`}
                  alt={`qa-item-${item}`}
                  width={1000}
                  height={2000}
                  className="w-full h-auto group-hover:scale-110 group-hover:rounded-[40px] transition-all duration-700"
                />
              </div>
              <div className="flex flex-col py-4 items-start">
                <span className="text-gray-600 text-sm">- 關於設計流程</span>
                <button className="relative h-12 bg-transparent px-2 text-neutral-800">
                  <span className="relative inline-flex overflow-hidden">
                    <div className="translate-y-0 text-[1.1rem] skew-y-0 transition duration-500 group-hover:-translate-y-[119%] group-hover:skew-y-12">
                      裝潢設計時間
                    </div>
                    <div className="absolute text-[1.1rem] translate-y-[119%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      設計圖溝通
                    </div>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 問答展開區 */}
      <section className="question-section py-12 flex justify-end">
        <div className="bg-[#E1E3D9] flex flex-col md:flex-row w-[90%] max-w-[1920px] rounded-tl-[40px] rounded-bl-[40px] overflow-hidden">
          {/* QA 左邊 */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-normal mb-8">常見問題</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                title={
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span>預算與報價相關</span>
                      <div className="bg-[#34894f] text-white rounded-full px-3 py-1 text-xs">
                        QA
                      </div>
                    </div>
                    <span className="text-gray-500 text-xs hidden md:inline">
                      Updated 2025-03-05
                    </span>
                  </div>
                }
              >
                <div className="text-gray-700 leading-relaxed space-y-4 text-sm mt-4">
                  <p>裝潢費用怎麼計算？</p>
                  <p>
                    依坪數、設計內容與材料等條件評估，一般每坪價格約落在 1.5
                    萬至 3 萬元，實際需依需求報價。
                  </p>
                  <p>有提供免費估價服務嗎？</p>
                  <p>
                    我們提供初步免費線上預估，正式丈量與規劃後會提供詳細報價單與時間表。
                  </p>
                  <p>設計費包含施工嗎？</p>
                  <p>
                    設計與施工可以分開報價，也可選擇整合方案，我們可依您需求彈性搭配。
                  </p>
                </div>
              </AccordionItem>

              {/* 第二題 */}
              <AccordionItem
                value="item-2"
                title={
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span>風格選擇與溝通</span>
                      <div className="bg-[#34894f] text-white rounded-full px-3 py-1 text-xs">
                        QA
                      </div>
                    </div>
                    <span className="text-gray-500 text-xs hidden md:inline">
                      Updated 2025-03-05
                    </span>
                  </div>
                }
              >
                <div className="text-gray-700 leading-relaxed space-y-4 text-sm mt-4">
                  <p>我不知道自己喜歡什麼風格，怎麼辦？</p>
                  <p>
                    我們會透過風格圖卡、空間提問與喜好分析，協助您找到最合適的空間樣貌。
                  </p>
                  <p>設計風格會跟我提供的圖片一樣嗎？</p>
                  <p>
                    我們會以圖片作為參考，並依實際空間比例、預算與建材，進行符合您需求的客製化設計。
                  </p>
                </div>
              </AccordionItem>

              {/* 第三題 */}
              <AccordionItem
                value="item-3"
                title={
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span>施工與工期問題</span>
                      <div className="bg-[#34894f] text-white rounded-full px-3 py-1 text-xs">
                        QA
                      </div>
                    </div>
                    <span className="text-gray-500 text-xs hidden md:inline">
                      Updated 2025-03-05
                    </span>
                  </div>
                }
              >
                <div className="text-gray-700 leading-relaxed space-y-4 text-sm mt-4">
                  <p>整體裝修會需要多久？</p>
                  <p>
                    一般小坪數住家（15~25坪）從施工到完工約需
                    1.5～2個月，視工程內容與配合度調整。
                  </p>
                  <p>施工會不會有粉塵、噪音？如何管理？</p>
                  <p>
                    會有，但我們會加裝粉塵布、指定施工時間、使用靜音工具，並派駐現場監工控管品質。
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>

          {/* 圖片右邊 */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-8">
            <Image
              src="https://www.clasishome.jp/wp-content/themes/clasishome/assets/image/front-page/front-contact.jpg"
              alt="contact-img"
              width={800}
              height={1000}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Photos;
