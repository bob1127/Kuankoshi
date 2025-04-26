import React from "react";
import Marquee from "react-fast-marquee";
export default function Content() {
  return (
    <div
      id="dark-section"
      className="pb-2  pt-20 sm:pt-[340px] xl:pt-[350px] 2xl:pt-[20vh] bg-[url('/images/hero-img/footer03.png')] bg-left bg-no-repeat bg-cover py-8 px-12 h-full w-full flex flex-col justify-between"
    >
      <Section2 />
      <Marquee className="mb-12">
        <div className="flex justify-center items-center">
          <b className="text-[6.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
          <b className="text-[5.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
          <b className="text-[6.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
          <b className="text-[6.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
          <b className="text-[6.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
          <b className="text-[6.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
          <b className="text-[6.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
        </div>
      </Marquee>
    </div>
  );
}

const Section2 = () => {
  return (
    <div className="flex  flex-col">
      <Nav />
      <h1 className="text-[4vw] text-gray-100 leading-[0.8] mt-10">
        KusnKoshi
      </h1>
      <div className="copy flex flex-col sm:flex-row justify-between border-b-1 border-white pb-4">
        <p className="text-[.9rem] text-gray-200 font-light">
          Copyright © 2023︎ Ait Design Inc.
        </p>
        <p className="text-[.9rem] text-gray-200 font-light">
          Design by 極客網頁設計
        </p>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-gray-200">About</h3>
        <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 ">
          Home
        </p>
        <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 ">
          Projects
        </p>
        <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 ">
          Our Mission
        </p>
        <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 ">
          Contact Us
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-gray-200">Education</h3>
        <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 ">
          News
        </p>
        <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 ">
          Learn
        </p>
        <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 ">
          Certification
        </p>
        <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 ">
          Publications
        </p>
      </div>
    </div>
  );
};
