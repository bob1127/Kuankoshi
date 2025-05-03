"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import "yakuhanjp";
import { ViewTransitions } from "next-view-transitions";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer1";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@heroui/react";

interface RootLayoutProps {
  children: React.ReactNode;
}

type BackdropType = "blur" | "opaque";

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isDarkBg, setIsDarkBg] = useState(false);
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const target = document.getElementById("dark-section");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDarkBg(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // ✅ 滾動方向偵測
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY - lastScrollY > 5) {
        controls.start({ y: 100, opacity: 0 }); // 下滾：隱藏
      } else if (currentY < lastScrollY && lastScrollY - currentY > 5) {
        controls.start({ y: 0, opacity: 1 }); // 上滾：顯示
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState<BackdropType>("opaque");

  const handleOpen = (backdrop: BackdropType) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          {/* ✅ LINE 按鈕區塊加上動畫效果 */}
          <motion.div
            className="line-contact-bar fixed bottom-0 left-1/2 -translate-x-1/2 z-[999999999]"
            initial={{ y: 0, opacity: 1 }}
            animate={controls}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="flex flex-wrap bg-[#35453F] rounded-tl-[25px] rounded-tr-[25px] overflow-hidden gap-3">
              {(["blur"] as BackdropType[]).map((b) => (
                <Button
                  key={b}
                  className="capitalize text-white px-10 py-2 w-full h-full border-none !bg-transparent"
                  color="warning"
                  variant="flat"
                  onPress={() => handleOpen(b)}
                >
                  LINE
                </Button>
              ))}
            </div>

            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                {(onCloseFn) => (
                  <ModalBody>
                    <div className="w-full h-full flex justify-center items-center">
                      <Image
                        src="/your-line-qr.png"
                        alt="Line QR Code"
                        placeholder="empty"
                        loading="lazy"
                        width={800}
                        height={800}
                        className="max-w-[800px] mx-auto w-[90%]"
                      />
                    </div>
                  </ModalBody>
                )}
              </ModalContent>
            </Modal>
          </motion.div>

          {/* 導覽 */}
          <div className="w-[100vw] z-[999999999999999] left-0 top-0 fixed">
            <Menu isDarkBg={isDarkBg} />
          </div>

          <main>{children}</main>

          <section>
            <Footer />
          </section>
        </body>
      </html>
    </ViewTransitions>
  );
}
