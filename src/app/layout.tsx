"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import "yakuhanjp";
import { ViewTransitions } from "next-view-transitions";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer1";
import Image from "next/image";
import { motion } from "framer-motion";
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
          <motion.div className="line-contact-bar fixed bottom-10 right-5  z-[999999999]">
            <div>
              {(["blur"] as BackdropType[]).map((b) => (
                <Button
                  key={b}
                  className="capitalize w-full p-0 m-0 h-full flex justify-center items-center !bg-transparent"
                  color="warning"
                  variant="flat"
                  onPress={() => handleOpen(b)}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50px"
                      height="50px"
                      viewBox="0 0 45 45"
                    >
                      <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 25 11 C 33.27 11 40 16.359219 40 22.949219 C 40 25.579219 38.959297 27.960781 36.779297 30.300781 C 35.209297 32.080781 32.660547 34.040156 30.310547 35.660156 C 27.960547 37.260156 25.8 38.519609 25 38.849609 C 24.68 38.979609 24.44 39.039062 24.25 39.039062 C 23.59 39.039062 23.649219 38.340781 23.699219 38.050781 C 23.739219 37.830781 23.919922 36.789063 23.919922 36.789062 C 23.969922 36.419063 24.019141 35.830937 23.869141 35.460938 C 23.699141 35.050938 23.029062 34.840234 22.539062 34.740234 C 15.339063 33.800234 10 28.849219 10 22.949219 C 10 16.359219 16.73 11 25 11 z" />
                    </svg>
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
            <Menu />
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
