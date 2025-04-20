"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import "./about.css";
import HeroSlider from "../../components/HeroSlideContact/page";
import { Form, Input, Button } from "@heroui/react";
import React from "react";

import Marquee from "react-fast-marquee";
import TextScroll from "../../components/TextScroll/page";
// import Carousel from "@/components/ui/carousel";
// import InfiniteCarousel from "../../components/InfiniteCarousel/page";
import Image from "next/image";
export default function About() {
  return (
    <ReactLenis root>
      {/* <TextScroll /> */}
      <section className="pt-[10vh]   relative">
        <div className="flex items-start  flex-col lg:flex-row">
          {/* sticky 左側 */}
          <div className=" w-full lg:w-[45%] overflow-hidden 2xl:w-1/2 lg:sticky top-[10vh] h-[calc(110vh-10vh)]">
            <Marquee>
              <h1 className="mx-5">CONTACT</h1>
              <h1 className="mx-5">YI-YUAN</h1>
              <h1 className="mx-5">PROJECT</h1>
              <h1 className="mx-5">BUILDING</h1>
              <h1 className="mx-5">YI-YUAN</h1>
              <h1 className="mx-5">PROJECT</h1>
              <h1 className="mx-5">BUILDING</h1>
              <h1 className="mx-5">YI-YUAN</h1>
              <h1 className="mx-5">PROJECT</h1>
              <h1 className="mx-5">BUILDING</h1>
              <h1 className="mx-5">YI-YUAN</h1>
              <h1 className="mx-5">PROJECT</h1>
              <h1 className="mx-5">BUILDING</h1>
            </Marquee>
            <HeroSlider />
          </div>

          {/* 滾動的右側 */}
          <div className=" w-full lg:w-[55%] 2xl:w-1/2">
            {/* 加一些上下內距讓內容比較清楚滾動 */}
            <div className="space-y-8 ">
              <div className="p-3 lg:p-0">
                <Image
                  src="https://noizarchitects.com/cms/wp-content/uploads/2024/05/V1_1.jpg"
                  placeholder="empty"
                  loading="lazy"
                  width={800}
                  height={1500}
                  className="mx-auto"
                  alt=""
                />
              </div>
              <div className=" mx-8 sm:mx-0 my-2 lg:my-20 flex flex-col">
                <Form
                  className="w-full  max-w-[450px] 2xl:max-w-[600px] mx-auto flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    let data = Object.fromEntries(
                      new FormData(e.currentTarget)
                    );
                  }}
                >
                  <Input
                    isRequired
                    errorMessage="Please enter a valid username"
                    label="Username"
                    labelPlacement="outside"
                    name="username"
                    placeholder="輸入您的姓名"
                    type="text"
                  />

                  <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="您的信箱"
                    type="email"
                  />
                  <div className="flex gap-2">
                    <Button color="primary" type="submit">
                      送出
                    </Button>
                    <Button type="reset" variant="flat">
                      清除
                    </Button>
                  </div>
                </Form>
                <div className="contact-info flex w-full sm:w-[85%] mx-auto flex-col sm:flex-row items-center pt-10">
                  <div className="w-full sm:w-1/2 inline-block">
                    <span className="tracking-widest text-[.8rem] ">
                      我們會在 1-2 個工作日內回覆您！
                    </span>
                    <br></br>

                    <span className="tracking-widest text-[.8rem] ">
                      有急件需求也歡迎直接來電：0800-XXX-XXX
                    </span>
                    <br></br>
                    <span className="tracking-widest text-[.8rem] ">
                      客服時間：週一至週五 09:00–18:00（國定假日休息）
                    </span>
                  </div>
                  <div className="w-full sm:w-1/2 ">
                    <div className="flex group flex-row justify-end items-end">
                      <b className="text-[1.1rem] mr-3">Q&A</b>
                      <button className="group relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
                        <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                          >
                            <path
                              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-t-1 border-gray-800">
                <div className=" p-4 flex flex-col w-full justify-between sm:w-[40%] ">
                  <div className="title ">
                    <span className="tracking-widest">Social</span>
                    <br></br>
                    <b className="tracking-widest">Facebook</b>
                  </div>
                  <div className="py-10 sm:py-0">
                    <Image
                      placeholder="empty"
                      alt=""
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full"
                      src="https://png.pngtree.com/thumb_back/fh260/background/20230909/pngtree-d-city-png-3d-city-png-3d-city-art-png-city-image_13113072.png"
                    ></Image>
                  </div>
                  <div className="content ">
                    <p className="text-[.8rem] tracking-widest">
                      Yi-Yuan is an Aichi-based design and construction company
                      that creates chic architecture.
                    </p>
                  </div>
                </div>
                <div className="border-l-1 w-full sm:w-[60%] p-4 flex flex-col border-gray-800">
                  <div className="title py-8 sm:py-0">
                    <span className="tracking-widest">Work</span>
                    <br></br>
                    <b className="tracking-widest">Map</b>
                  </div>
                  <div className=" px-3 sm:px-8 ">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29131.79636988095!2d120.64383669972379!3d24.11996731884885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693c55c0686be1%3A0xc3a3cec1c5df6a18!2zNDAy5Y-w5Lit5biC5Y2X5Y2A!5e0!3m2!1szh-TW!2stw!4v1743684644979!5m2!1szh-TW!2stw"
                      width="600"
                      height="250"
                      loading="lazy"
                      className="w-full"
                    ></iframe>
                  </div>
                  <div className="content flex justify-around flex-row pt-8">
                    <div className="flex w-1/2 flex-col">
                      <b className="text-[1rem] font-extrabold tracking-widest">
                        YI-YUAN
                      </b>
                      <span className="tracking-widest mt-4 text-[.7rem]">
                        台中市南屯區
                      </span>
                      <span className="tracking-widest text-[.7rem]">
                        南區位於臺灣臺中市中心，係由於1946年2月臺中市劃分區域時，其位於臺中市的南端而得名
                      </span>
                    </div>
                    <div className="w-1/2 flex justify-end items-end">
                      <span className="border-b-1 border-black tracking-widest text-[.85rem]">
                        About Yi Yuan
                      </span>
                    </div>

                    {/* <img src="https://niwahouzing.com/wp-content/themes/niwa/assets/images/common/logo-niwahouzing.svg" alt="丹羽ハウジング" width="151" height="19" loading="lazy"> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}
