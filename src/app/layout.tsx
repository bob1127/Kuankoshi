"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import "yakuhanjp";
import { ViewTransitions } from "next-view-transitions";
import Menu from "../components/Menu/Menu";
import Navs from "../components/Nav";
import { HeroUIProvider } from "@heroui/react";
import Footer from "../components/Footer/Footer1";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isDarkBg, setIsDarkBg] = useState(false);

  // ✅ 監控 id="dark-section" 是否進入畫面
  useEffect(() => {
    const target = document.getElementById("dark-section");

    if (!target) {
      console.warn("⚠️ 找不到 #dark-section，請確認頁面上有該區塊");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDarkBg(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []); // 只執行一次
  return (
    <ViewTransitions>
      <html lang="en">
        <body className="">
          <div className="w-[100vw] z-[9999999999] left-0 top-0 fixed">
            {/* <Header /> */}
            {/* <Navs isDarkBg={isDarkBg} /> */}
            <Menu isDarkBg={isDarkBg} />
          </div>

          <main data-aos-duration="fade-up">{children}</main>

          <section id="dark-section">
            <Footer />
          </section>
        </body>
      </html>
    </ViewTransitions>
  );
}
