"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // 動畫保持不變
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]); // 你原本應該是這樣的邏輯

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: "#fff", // 或你原本 color 值
          scale,
          top: 0,
        }}
        className={styles.card}
      >
        <h2>寬越室內設計</h2>
        <div className="text-[.9rem] tracking-widest border-t-[.5px] w-[60%] mx-auto py-6 mt-6 border-gray-800 leading-loose text-gray-800 font-normal">
          寬越室內設計，立足台中，專注於住宅、商空、老屋翻新等空間設計與施工整合。我們相信設計不只是風格堆疊，更是日常生活的延伸與情感的投射。
          從空間的光影比例、材質語彙到動線的敘事鋪陳，寬越擅長將業主的生活樣貌、文化習慣，轉化為獨一無二的空間語言，使家不僅僅是建築，而是一種更貼近人心的存在。，
          <br></br>
          <br></br>
          在每一次設計提案前，我們花時間聆聽、理解您的需求與偏好，透過多次溝通與空間模擬，為您打造專屬生活提案。從前期丈量、3D
          模型、施工圖繪製，到完工後的細節優化，我們陪您走過每一段空間蛻變的旅程。
        </div>
        <Image
          src="/images/hero-img/footer.png"
          placeholder="empty"
          loading="lazy"
          alt="company-img"
          width={600}
          height={1000}
          className="w-[360px] mx-auto"
        ></Image>
      </motion.div>
    </div>
  );
};

export default Card;
