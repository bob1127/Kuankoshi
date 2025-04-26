"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ScrollAnimation.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfiniteScroll = () => {
  const scrollerRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current || !borderRef.current) return;

    const scroller = scrollerRef.current;
    const sections = scroller.querySelectorAll(`.${styles.section}`);
    const totalWidth = Array.from(sections).reduce(
      (acc, section) => acc + section.offsetWidth,
      0
    );

    // 水平滾動動畫
    gsap.to(scroller, {
      x: () => `-${totalWidth - window.innerWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: scroller,
        start: "top top",
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        onEnter: () => {
          // 第一次進入水平滾動
          gsap.to(borderRef.current, {
            opacity: 1,
            borderWidth: "23px",
            duration: 0.3,
          });
        },
        onLeave: () => {
          // 滾到水平滾動結束（往下）
          gsap.to(borderRef.current, { opacity: 0, duration: 0.5 });
        },
        onEnterBack: () => {
          // 往回滾回水平滾動
          gsap.to(borderRef.current, {
            opacity: 1,
            borderWidth: "23px",
            duration: 0.3,
          });
        },
        onLeaveBack: () => {
          // 滾回直向區（上方）
          gsap.to(borderRef.current, { opacity: 0, duration: 0.5 });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* 黑色邊框＋四邊跑馬燈文字 */}
      <div ref={borderRef} className={styles.borderFrame}>
        {/* 上方文字 */}
        <div className={`${styles.marquee} ${styles.top}`}>
          <span>WELCOME TO THE FUTURE • WELCOME TO THE FUTURE • </span>
        </div>
        {/* 右側文字（垂直） */}
        <div className={`${styles.marquee} ${styles.right}`}>
          <span>WELCOME TO THE FUTURE • WELCOME TO THE FUTURE • </span>
        </div>
        {/* 下方文字 */}
        <div className={`${styles.marquee} ${styles.bottom}`}>
          <span>WELCOME TO THE FUTURE • WELCOME TO THE FUTURE • </span>
        </div>
        {/* 左側文字（垂直） */}
        <div className={`${styles.marquee} ${styles.left}`}>
          <span>WELCOME TO THE FUTURE • WELCOME TO THE FUTURE • </span>
        </div>
      </div>

      {/* 上方直向滾動 */}
      {/* <section className="h-screen flex items-center justify-center bg-[#e7e7e7]">
        <h1 className="text-4xl">這裡是上方直向滾動內容</h1>
      </section> */}

      {/* 水平滾動 */}
      <div className={styles.horizontalScroller} ref={scrollerRef}>
        <section className={styles.section}>
          <div className="w-full h-full flex relative items-center justify-center">
            <div className="center-title border border-black relative flex flex-col items-center justify-center">
              <h1 className="text-6xl font-extrabold">It Our Style !</h1>
              <h2 className="text-2xl font-extrabold mt-4">探索無限的可能性</h2>
              <div className="absolute top-[-20%] rotate-6 left-[-60%] z-10">
                <Image
                  src="/images/material/02外觀二黎-(1).png"
                  placeholder="empty"
                  loading="lazy"
                  width={500}
                  alt=""
                  height={500}
                  className="w-[240px] alt='scroll-img"
                />
              </div>
              <div className="absolute bottom-[-20%]  right-[-60%] z-10">
                <Image
                  alt=""
                  src="/images/material/Growth-4.png"
                  placeholder="empty"
                  loading="lazy"
                  width={500}
                  height={500}
                  className="w-[200px] alt='scroll-img"
                />
              </div>
              <div className="absolute top-[-60%] rotate-[5deg]  right-[-60%] z-10">
                <Image
                  alt=""
                  src="https://oneit.co.jp/cms/wp-content/uploads/2024/03/7-sunline-moriumi.jpg.webp"
                  placeholder="empty"
                  loading="lazy"
                  width={500}
                  height={500}
                  className="w-[200px] alt='scroll-img border-4 border-[#c4885d] rounded-[35px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div>
            <h1 className="text-6xl">未來已來</h1>
            <h2 className="text-2xl mt-4">探索無限的可能性</h2>
          </div>
          <Image
            src="https://mr-standard.lifelabel.jp/mr_standard/img/scroll_bg.webp"
            alt=""
            placeholder="empty"
            loading="lazy"
            width={2000}
            height={1000}
          />
        </section>
        <section className={styles.section}>
          <div>
            <h1 className="text-6xl">未來已來</h1>
            <h2 className="text-2xl mt-4">探索無限的可能性</h2>
          </div>
          <Image
            src="https://mr-standard.lifelabel.jp/mr_standard/img/scroll_bg.webp"
            alt=""
            placeholder="empty"
            loading="lazy"
            width={2000}
            height={1000}
          />
        </section>
        <section className={styles.section}>
          <div>
            <h1 className="text-6xl">未來已來</h1>
            <h2 className="text-2xl mt-4">探索無限的可能性</h2>
          </div>
          <Image
            src="https://mr-standard.lifelabel.jp/mr_standard/img/scroll_bg.webp"
            alt=""
            placeholder="empty"
            loading="lazy"
            width={2000}
            height={1000}
          />
        </section>
        {/* 你可以繼續加更多 sections */}
      </div>

      {/* 下方直向滾動 */}
    </div>
  );
};

export default InfiniteScroll;
