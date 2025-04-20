import React from "react";
import Link from "next/link";
import "./MenuBar.css";
import MenuBtn from "../MenuBtn/MenuBtn";
import AnimatedLink from "../AnimatedLink";
import {
  Lightbulb,
  LayoutDashboard,
  CalendarCheck,
  ShieldCheck,
  LifeBuoy,
  BookOpenText,
} from "lucide-react";

const MenuBar = ({ isOpen, toggleMenu, closeMenu, isDarkBg }) => {
  const textColor = isDarkBg ? "text-white" : "text-black";

  const navItems = [
    {
      label: "設計理念",
      href: "/KuankoshiAbout",
      icon: <Lightbulb className="w-4 h-5 p-[.6px] mb-1" />,
    },
    {
      label: "空間案例",
      href: "/projects",
      icon: <LayoutDashboard className="w-4 h-5 p-[.6px] mb-1" />,
    },
    {
      label: "聯繫我們",
      href: "/contact",
      icon: <CalendarCheck className="w-4 h-5 p-[.6px] mb-1" />,
    },
    {
      label: "POLICY",
      href: "/policy",
      icon: <ShieldCheck className="w-4 h-5 p-[.6px] mb-1" />,
    },
    {
      label: "客戶提問",
      href: "/qa",
      icon: <LifeBuoy className="w-4 h-5 p-[.6px] mb-1" />,
    },
    {
      label: "設計誌",
      href: "/blog",
      icon: <BookOpenText className="w-4 h-5 p-[.6px] mb-1" />,
    },
  ];

  return (
    <div className="menu-bar flex flex-row fixed top-0 left-0 w-full px-4 py-2 z-50">
      <div className="logo w-[45%]" onClick={closeMenu}>
        <Link href="/portfolio" className={`font-light ${textColor}`}>
          寬越設計
        </Link>
      </div>

      <div className="menu-toggle-wrapper w-[55%] flex items-center justify-end">
        <div className="flex items-center w-full justify-center font-light flex-row">
          {navItems.map(({ label, href, icon }) => (
            <AnimatedLink href={href} key={label}>
              <button
                className={`group relative rounded-full w-full   px-4 font-medium ${textColor} flex items-center justify-center`}
              >
                <span className="relative inline-flex overflow-hidden">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] font-normal text-[.9rem] group-hover:skew-y-12 mix-blend-difference flex items-center">
                    {label}
                    <span className="hidden group-hover:inline-block ml-1">
                      {icon}
                    </span>
                  </div>
                  <div className="absolute font-normal text-[.9rem] translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 mix-blend-difference flex items-center">
                    {label}
                    <span className="hidden group-hover:inline-block ml-1">
                      {icon}
                    </span>
                  </div>
                </span>
              </button>
            </AnimatedLink>
          ))}
        </div>

        <MenuBtn isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default MenuBar;
