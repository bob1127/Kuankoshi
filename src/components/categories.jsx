"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedLink from "./AnimatedLink";
gsap.registerPlugin(ScrollTrigger);

const categoriesData = [
  { slug: "commercial-public", name: "商業空間" },
  { slug: "renovation-restoration", name: "翻修工程" },
  { slug: "residential-luxury", name: "高端住宅" },
  { slug: "special-offers", name: "限時優惠" },
];

export default function About() {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentSlug = searchParams.get("cat") || "";

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

      return ctx;
    };

    let ctx;

    const onTransitionComplete = () => {
      ctx = initGSAPAnimations();
    };

    window.addEventListener("pageTransitionComplete", onTransitionComplete);

    if (!sessionStorage.getItem("transitioning")) {
      ctx = initGSAPAnimations();
    } else {
      sessionStorage.removeItem("transitioning");
    }

    return () => {
      if (ctx) ctx.revert();
      window.removeEventListener(
        "pageTransitionComplete",
        onTransitionComplete
      );
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="bg-[#E1E3D9]">
        <section className="py-[150px] flex flex-col lg:flex-row pt-8 mt-20 pb-[80px] border-t border-gray-300 max-w-[1920px] mx-auto w-full px-4 sm:px-0 sm:w-[95%] 2xl:w-[88%]">
          {/* 手機：下拉分類 */}
          <div className="block lg:hidden w-full px-4 mb-6">
            <div className="block lg:hidden w-full px-4 mb-6">
              <ul className="border border-gray-300 rounded-md divide-y divide-gray-200 shadow-sm">
                {categoriesData.map((cat) => (
                  <li key={cat.slug}>
                    <AnimatedLink
                      href={`/project?cat=${cat.slug}`}
                      className={`block px-4 py-3 text-[clamp(0.85rem,1.8vw,1rem)] font-medium ${
                        currentSlug === cat.slug
                          ? "bg-black text-white"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {cat.name}
                    </AnimatedLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 桌機：側邊分類欄位 */}
          <div className="hidden lg:block w-full lg:w-[15%]">
            <div className="sticky pl-5 top-24">
              <b className="text-[clamp(0.9rem,2vw,1.1rem)]">categories</b>
              {categoriesData.map((cat) => (
                <AnimatedLink
                  key={cat.slug}
                  href={`/project?cat=${cat.slug}`}
                  className={`block text-[clamp(0.85rem,1.8vw,1rem)] mt-3 font-bold tracking-wider ${
                    currentSlug === cat.slug ? "text-black" : "text-gray-600"
                  }`}
                >
                  {cat.name}
                </AnimatedLink>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
