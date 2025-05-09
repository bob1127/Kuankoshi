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

  const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const target = document.getElementById("dark-section");
  //   if (!target) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsDarkBg(entry.isIntersecting);
  //     },
  //     { threshold: 0.5 }
  //   );
  //   observer.observe(target);
  //   return () => observer.disconnect();
  // }, []);

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
          <motion.div className="line-contact-bar fixed bottom-10 right-5 z-[999999999]">
            <div>
              {(["blur"] as BackdropType[]).map((b) => (
                <Button
                  key={b}
                  className="capitalize w-full p-0 m-0 h-full flex flex-col items-center !bg-transparent"
                  color="warning"
                  variant="flat"
                  onPress={() => handleOpen(b)}
                >
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 25 11 C 33.27 11 40 16.359219 40 22.949219 C 40 25.579219 38.959297 27.960781 36.779297 30.300781 C 35.209297 32.080781 32.660547 34.040156 30.310547 35.660156 C 27.960547 37.260156 25.8 38.519609 25 38.849609 C 24.68 38.979609 24.44 39.039062 24.25 39.039062 C 23.59 39.039062 23.649219 38.340781 23.699219 38.050781 C 23.739219 37.830781 23.919922 36.789063 23.919922 36.789062 C 23.969922 36.419063 24.019141 35.830937 23.869141 35.460938 C 23.699141 35.050938 23.029062 34.840234 22.539062 34.740234 C 15.339063 33.800234 10 28.849219 10 22.949219 C 10 16.359219 16.73 11 25 11 z M 23.992188 18.998047 C 23.488379 19.007393 23 19.391875 23 20 L 23 26 C 23 26.552 23.448 27 24 27 C 24.552 27 25 26.552 25 26 L 25 23.121094 L 27.185547 26.580078 C 27.751547 27.372078 29 26.973 29 26 L 29 20 C 29 19.448 28.552 19 28 19 C 27.448 19 27 19.448 27 20 L 27 23 L 24.814453 19.419922 C 24.602203 19.122922 24.294473 18.992439 23.992188 18.998047 z M 15 19 C 14.448 19 14 19.448 14 20 L 14 26 C 14 26.552 14.448 27 15 27 L 18 27 C 18.552 27 19 26.552 19 26 C 19 25.448 18.552 25 18 25 L 16 25 L 16 20 C 16 19.448 15.552 19 15 19 z M 21 19 C 20.448 19 20 19.448 20 20 L 20 26 C 20 26.552 20.448 27 21 27 C 21.552 27 22 26.552 22 26 L 22 20 C 22 19.448 21.552 19 21 19 z M 31 19 C 30.448 19 30 19.448 30 20 L 30 26 C 30 26.552 30.448 27 31 27 L 34 27 C 34.552 27 35 26.552 35 26 C 35 25.448 34.552 25 34 25 L 32 25 L 32 24 L 34 24 C 34.553 24 35 23.552 35 23 C 35 22.448 34.553 22 34 22 L 32 22 L 32 21 L 34 21 C 34.552 21 35 20.552 35 20 C 35 19.448 34.552 19 34 19 L 31 19 z"></path>
                    </svg>
                    <span className="text-xs mt-1 font-semibold text-black">
                      LINE
                    </span>
                  </div>
                </Button>
              ))}
            </div>

            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                {(onCloseFn) => (
                  <ModalBody>
                    <div className="w-full h-full flex justify-center items-center">
                      <Image
                        src="/images/line-qr-code.jpg"
                        alt="Line QR Code"
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
