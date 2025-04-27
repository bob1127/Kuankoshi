"use client";

import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import Image from "next/image";
import HeroSlider from "../HeroSlider/page";
import { BsCart, BsArrowRight } from "react-icons/bs";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "0.9, 0, 0.1, 1");

    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowLoader(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  useGSAP(() => {
    // ✅ 這是主畫面的 Hero 文字、Nav、Header 等的動畫，永遠要跑
    const tl = gsap.timeline({ defaults: { ease: "hop" } });

    tl.to([".nav", ".line h1", ".line p"], {
      y: "0%",
      duration: 1.5,
      stagger: 0.2,
    });

    tl.to([".cta", ".cta-icon"], {
      scale: 1,
      duration: 1.5,
      stagger: 0.75,
      delay: 0.75,
    });

    tl.to(".cta-label p", {
      y: "0%",
      duration: 1.5,
      delay: 0.5,
    });

    // ✅ 如果有 loader，就跑 Loader 的進場動畫
    if (showLoader) {
      const loaderTl = gsap.timeline({ delay: 0.3 });

      const counts = document.querySelectorAll(".count");
      counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");
        loaderTl.to(
          digits,
          {
            y: "0%",
            duration: 1,
            stagger: 0.075,
          },
          index * 1
        );

        if (index < counts.length) {
          loaderTl.to(
            digits,
            {
              y: "-100%",
              duration: 1,
              stagger: 0.075,
            },
            index * 1 + 1
          );
        }
      });

      loaderTl.to(".spinner", { opacity: 0, duration: 0.3 });

      loaderTl.to(".word h1", { y: "0%", duration: 1 }, "<");

      loaderTl.to(".divider", {
        scaleY: "100%",
        duration: 1,
        onComplete: () => {
          gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 });
        },
      });

      loaderTl.to("#word-1 h1", { y: "100%", duration: 1, delay: 0.3 });
      loaderTl.to("#word-2 h1", { y: "-100%", duration: 1 }, "<");

      loaderTl.to(
        ".block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.75,
          onStart: () => {
            gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" });
          },
        },
        "<"
      );

      loaderTl.to(".loader", {
        opacity: 0,
        duration: 0.1,
        pointerEvents: "none",
        onComplete: () => {
          const loader = document.querySelector(".loader");
          if (loader) loader.style.display = "none";
        },
      });
    }
  }, [showLoader]);

  return (
    <>
      {showLoader && (
        <div className="loader" id="dark-section">
          {/* Loader 結構原樣保留 */}
          <div className="overlay">
            <div className="block"></div>
            <div className="block"></div>
          </div>

          <div className="intro-logo">
            <div className="word" id="word-1">
              <h1>
                <span className="text-white">寬越</span>
              </h1>
            </div>
            <div className="word" id="word-2">
              <h1 className="text-white">設計</h1>
            </div>
          </div>

          <div className="divider"></div>

          <div className="spinner-container">
            <div className="spinner"></div>
          </div>

          <div className="counter">
            {/* Counter 結構 */}
            {/* 保持原來的數字結構 */}
          </div>
        </div>
      )}

      {/* 主體內容 */}
      <div className="container">
        <div className="hero-img">
          <Image src="/hero-img.jpg" alt="KindRoot Hero Image" fill priority />
        </div>

        <div className="nav"></div>

        <div className="header">
          <div className="hero-copy">
            <div
              id="dark-section"
              className="absolute w-full top-0 left-0 z-[1]"
            >
              <HeroSlider />
            </div>
            <div className="absolute top-[40%] -translate-x-1/2 -translate-y-1/2 left-1/2 z-50">
              <div className="line flex flex-col justify-center items-center">
                <h1 className="text-white text-center text-[2rem] sm:text-[2.5rem]">
                  <span className="text-white">kuankoshi</span>{" "}
                  <span className="text-white font-normal text-nowrap text-[.9rem]">
                    Interior Design,
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="line">
            <p>Skincare that stays true to nature and to you</p>
          </div>
        </div>
      </div>
    </>
  );
}
