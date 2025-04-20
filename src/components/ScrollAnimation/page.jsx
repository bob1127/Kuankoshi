"use client";

import { useEffect } from "react";
import Image from "next/image";
import Lenis from "lenis";
import "./page.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: "實在的構築",
    description:
      "宜園建設，承襲匠心工藝，以細膩的規劃與人本設計，打造兼具美感與實用的居住空間。我們不只建造房屋，更締造理想的生活場域，讓每一位住戶都能在此找到家的溫度。",
    imgSrc:
      "https://motherhaus-sauna.com/sys/wp-content/themes/motherbase/assets/img/top/service-01-pc.webp",
    alt: "Web Development",
  },
  {
    title: "實在的構築",
    description:
      "宜園建設，承襲匠心工藝，以細膩的規劃與人本設計，打造兼具美感與實用的居住空間。我們不只建造房屋，更締造理想的生活場域，讓每一位住戶都能在此找到家的溫度。",
    imgSrc:
      "https://motherhaus-sauna.com/sys/wp-content/themes/motherbase/assets/img/top/service-02-pc.webp",
    alt: "App Development",
  },
  {
    title: "實在的構築",
    description:
      "宜園建設，承襲匠心工藝，以細膩的規劃與人本設計，打造兼具美感與實用的居住空間。我們不只建造房屋，更締造理想的生活場域，讓每一位住戶都能在此找到家的溫度。",
    imgSrc:
      "https://motherhaus-sauna.com/sys/wp-content/themes/motherbase/assets/img/top/service-03-pc.webp",
    alt: "Digital Marketing",
  },
];

export default function ServicesSection() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const services = document.querySelectorAll(".service");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target;
          const imgContainer = service.querySelector(".img");

          ScrollTrigger.create({
            trigger: service,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newWidth = 30 + 70 * progress;
              gsap.to(imgContainer, {
                width: `${newWidth}%`,
                duration: 0.1,
                ease: "none",
              });
            },
          });

          ScrollTrigger.create({
            trigger: service,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newHeight = 150 + 300 * progress;
              gsap.to(service, {
                height: `${newHeight}px`,
                duration: 0.1,
                ease: "none",
              });
            },
          });

          observer.unobserve(service);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    services.forEach((service) => {
      observer.observe(service);
    });
  }, []);

  return (
    <div className="container ">
      <section className="hero" />
      <section className="services">
        <div className="services-header flex justify-between items-center">
          <div className="col"></div>
        </div>
        {servicesData.map((service, index) => (
          <div key={index} className="service flex items-center">
            <div className="service-info">
              <h1 className="text-2xl font-semibold">{service.title}</h1>
              <p className="mt-2 text-gray-800 text-[.8rem] tracking-widest">
                {service.description}
              </p>
            </div>
            <div className="service-img relative">
              <div className="img w-30">
                <Image
                  src={service.imgSrc}
                  alt={service.alt}
                  width={500}
                  height={220}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
