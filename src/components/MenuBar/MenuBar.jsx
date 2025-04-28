"use client";

import React from "react";
import Link from "next/link";
import "./MenuBar.css";
import Image from "next/image";
import MenuBtn from "../MenuBtn/MenuBtn";
import AnimatedLink from "../AnimatedLink";

const MenuBar = ({ isOpen, toggleMenu, closeMenu, isDarkBg }) => {
  const textColor = isDarkBg ? "text-white" : "text-black";

  const navItems = [
    { label: "設計理念", href: "/KuankoshiAbout" },
    { label: "空間案例", href: "/project" },
    { label: "聯繫我們", href: "/project" },
    { label: "服務流程", href: "/hot-sale-01" },
    { label: "客戶提問", href: "/qa" },
    { label: "設計誌", href: "/news" },
  ];

  return (
    <div className="menu-bar flex items-center justify-between fixed top-0 left-0 w-full px-4 md:px-8 2xl:px-10 py-3 z-50">
      {/* Logo區 */}
      <div className="flex items-center cursor-pointer" onClick={closeMenu}>
        <AnimatedLink href="/" className={`flex items-center ${textColor}`}>
          <Image
            src="/images/logo/company-logo.jpg"
            alt="logo"
            placeholder="empty"
            loading="eager"
            width={50}
            height={50}
            className="w-[40px] md:w-[50px] h-auto"
          />
          <span className="ml-2 text-base md:text-lg">寬越設計</span>
        </AnimatedLink>
      </div>

      {/* 導覽列 */}
      <div className="hidden md:flex gap-6 items-center">
        {navItems.map(({ label, href }) => (
          <AnimatedLink href={href} key={label}>
            <button
              className={`group relative font-medium ${textColor} flex items-center justify-center`}
            >
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] font-normal text-sm md:text-base group-hover:skew-y-12 mix-blend-difference flex items-center">
                  {label}
                </div>
                <div className="absolute font-normal text-sm md:text-base translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 mix-blend-difference flex items-center">
                  {label}
                </div>
              </span>
            </button>
          </AnimatedLink>
        ))}
      </div>

      {/* Menu 按鈕 */}
      {/* Menu 按鈕 */}
      <div className="flex">
        <MenuBtn isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default MenuBar;
