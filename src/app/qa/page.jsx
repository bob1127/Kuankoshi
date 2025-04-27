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
      <section className="section_hero">
        <HeroSlider />
      </section>
      <section>
        <Swiper />
      </section>
      <section>
        <div className=" ">
          <ScrollAnimate />
        </div>
      </section>
      <section className="h-auto section-qa py-[50px] bg-[#EFEFEF] flex flex-col items-center justify-center ">
        <div className="title  flex mx-auto w-[85%] max-w-[1920px]">
          <div className="w-1/2 border">
            <span className="rotate-[90deg] text-[1.2rem] font-gray-800">
              LIFE - DESIGN
            </span>
          </div>
          <div className="w-1/2 border flex flex-col items-end py-5">
            <h2 className="text-[5vmin] text-gray-900 font-normal">
              瞭解更多室內設計<br></br>相關問題
            </h2>
            <div className="line bg-black h-[1px] w-[90px]"></div>
            <p className="text-gray-800 text-[.85rem] font-light mt-10">
              想知道更多關於室內設計流程或者相關問題
            </p>
          </div>
        </div>
        <div className="content-card-items  flex md:flex-row flex-col justify-center items-center">
          <div className="flex card-item mx-2 lg:mx-4  group flex-row">
            <div className="">
              <div className="max-w-[320px]  overflow-hidden">
                <Image
                  src="https://www.clasishome.jp/wp-content/themes/clasishome/assets/image/front-page/front-reading-01.jpg"
                  alt="qa-item"
                  placeholder="empty"
                  loading="lazy"
                  width={1000}
                  height={2000}
                  className="w-[330px] group-hover:scale-[1.2]
  group-hover:rounded-[40px] duration-2000"
                ></Image>
              </div>

              <div className="txt flex items-start justify-start py-4 flex-col">
                <span className="text-gray-600 font-normal text-[.8rem]">
                  - 關於設計流程
                </span>
                <button class=" relative   h-12 bg-transparent px-4 text-neutral-800">
                  <span class="relative inline-flex overflow-hidden">
                    <div class="translate-y-0 text-[1.1rem] skew-y-0 transition duration-500 group-hover:-translate-y-[119%] group-hover:skew-y-12">
                      裝潢設計時間
                    </div>
                    <div class="absolute  text-[1.1rem] translate-y-[119%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      設計圖溝通
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex mt-4 md:mt-[90px] card-item  overflow-hidden  group flex-row">
            <div className="md:ml-0 ml-[30px]">
              <div className="  w-[100] max-w-[600px]  md:max-w-[320px]  overflow-hidden">
                <Image
                  src="https://www.clasishome.jp/wp-content/themes/clasishome/assets/image/front-page/front-reading-02.jpg"
                  alt="qa-item"
                  placeholder="empty"
                  loading="lazy"
                  width={1000}
                  height={2000}
                  className=" w-[490px] md:h-auto h-[300px]  md:w-[330px] group-hover:scale-[1.2]
  group-hover:rounded-[40px] duration-2000"
                ></Image>
              </div>

              <div className="txt flex items-start justify-start py-4 flex-col">
                <span className="text-gray-600 font-normal text-[.8rem]">
                  - 關於設計流程
                </span>
                <button class=" relative   h-12 bg-transparent px-4 text-neutral-800">
                  <span class="relative inline-flex overflow-hidden">
                    <div class="translate-y-0 text-[1.1rem] skew-y-0 transition duration-500 group-hover:-translate-y-[119%] group-hover:skew-y-12">
                      裝潢設計時間
                    </div>
                    <div class="absolute  text-[1.1rem] translate-y-[119%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      設計圖溝通
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex card-item mx-2 lg:mx-4  group flex-row">
            <div className="">
              <div className="max-w-[320px]  overflow-hidden">
                <Image
                  src="https://www.clasishome.jp/wp-content/themes/clasishome/assets/image/front-page/front-reading-03.jpg"
                  alt="qa-item"
                  placeholder="empty"
                  loading="lazy"
                  width={1000}
                  height={2000}
                  className="w-[330px] group-hover:scale-[1.2]
  group-hover:rounded-[40px] duration-2000"
                ></Image>
              </div>

              <div className="txt flex items-start justify-start py-4 flex-col">
                <span className="text-gray-600 font-normal text-[.8rem]">
                  - 關於設計流程
                </span>
                <button class=" relative   h-12 bg-transparent px-4 text-neutral-800">
                  <span class="relative inline-flex overflow-hidden">
                    <div class="translate-y-0 text-[1.1rem] skew-y-0 transition duration-500 group-hover:-translate-y-[119%] group-hover:skew-y-12">
                      裝潢設計時間
                    </div>
                    <div class="absolute  text-[1.1rem] translate-y-[119%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      設計圖溝通
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="question-section py-[50px] flex justify-end">
        <div className=" bg-[#E1E3D9] flex flex-row w-[85%] max-w-[1920px] rounded-tl-[40px] rounded-bl-[40px]">
          <div className="w-1/2 p-10">
            <div className="txt">
              <h2 className="text-normal">常見問題</h2>
            </div>
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="預算與報價相關"
                title={
                  <div className="flex md:flex-row flex-col items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span>預算與報價相關</span>
                      <div className="bg-[#34894f] text-white rounded-full px-4   text-center">
                        QA
                      </div>
                    </div>
                    <div>
                      <span className=" text-gray-600 font-normal text-[.8rem]">
                        Latest Releases 2025-03-05
                      </span>
                    </div>
                  </div>
                }
              >
                <div className="flex px-4 my-3 flex-col space-y-4">
                  <div className="flex text-[1rem] font-bold flex-col sm:flex-row items-start">
                    裝潢費用怎麼計算？
                  </div>
                  <div className=" text-sm leading-relaxed text-gray-700 tracking-wide">
                    依坪數、設計內容與材料等條件評估，一般每坪價格約落在 1.5
                    萬至 3 萬元，實際需依需求報價。
                  </div>
                </div>
                <div className="flex px-4 my-3 flex-col space-y-4">
                  <div className="flex text-[1rem] font-bold flex-col sm:flex-row items-start">
                    有提供免費估價服務嗎？
                  </div>
                  <div className=" text-sm leading-relaxed text-gray-700 tracking-wide">
                    我們提供初步免費線上預估，正式丈量與規劃後會提供詳細報價單與時間表。
                  </div>
                </div>
                <div className="flex px-4 my-3 flex-col space-y-4">
                  <div className="flex text-[1rem] font-bold flex-col sm:flex-row items-start">
                    設計費包含施工嗎？
                  </div>
                  <div className=" text-sm leading-relaxed text-gray-700 tracking-wide">
                    設計與施工可以分開報價，也可選擇整合方案，我們可依您需求彈性搭配。
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="風格選擇與溝通"
                title={
                  <div className="flex md:flex-row flex-col items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span>風格選擇與溝通</span>
                      <div className="bg-[#34894f] text-white rounded-full px-4   text-center">
                        QA
                      </div>
                    </div>
                    <div>
                      <span className=" text-gray-600 font-normal text-[.8rem]">
                        Latest Releases 2025-03-05
                      </span>
                    </div>
                  </div>
                }
              >
                <div className="flex px-4 my-3 flex-col space-y-4">
                  <div className="flex text-[1rem] font-bold flex-col sm:flex-row items-start">
                    我不知道自己喜歡什麼風格，怎麼辦？
                  </div>
                  <div className=" text-sm leading-relaxed text-gray-700 tracking-wide">
                    我們會透過風格圖卡、空間提問與喜好分析，協助您找到最合適的空間樣貌。
                  </div>
                </div>
                <div className="flex px-4 my-3 flex-col space-y-4">
                  <div className="flex text-[1rem] font-bold flex-col sm:flex-row items-start">
                    設計風格會跟我提供的圖片一樣嗎？
                  </div>
                  <div className=" text-sm leading-relaxed text-gray-700 tracking-wide">
                    我們會以圖片作為參考，並依實際空間比例、預算與建材，進行符合您需求的客製化設計。
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="施工與工期問題"
                title={
                  <div className="flex md:flex-row flex-col items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span>施工與工期問題</span>
                      <div className="bg-[#34894f] text-white rounded-full px-4   text-center">
                        QA
                      </div>
                    </div>
                    <div>
                      <span className=" text-gray-600 font-normal text-[.8rem]">
                        Latest Releases 2025-03-05
                      </span>
                    </div>
                  </div>
                }
              >
                <div className="flex px-4 my-3 flex-col space-y-4">
                  <div className="flex text-[1rem] font-bold flex-col sm:flex-row items-start">
                    整體裝修會需要多久？
                  </div>
                  <div className=" text-sm leading-relaxed text-gray-700 tracking-wide">
                    一般小坪數住家（15~25坪）從施工到完工約需 1.5～2
                    個月，視工程內容與配合度調整。
                  </div>
                </div>
                <div className="flex px-4 my-3 flex-col space-y-4">
                  <div className="flex text-[1rem] font-bold flex-col sm:flex-row items-start">
                    施工會不會有粉塵、噪音？如何管理？
                  </div>
                  <div className=" text-sm leading-relaxed text-gray-700 tracking-wide">
                    會有，但我們會加裝粉塵布、指定施工時間、使用靜音工具，並派駐現場監工控管品質。
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-1/2 flex p-10 justify-end pr-10">
            <Image
              src="https://www.clasishome.jp/wp-content/themes/clasishome/assets/image/front-page/front-contact.jpg"
              placeholder="empty"
              loading="lazy"
              width={800}
              height={1000}
              alt="img"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Photos;
