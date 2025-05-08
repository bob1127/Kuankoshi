"use client";

import {
  useEffect,
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import Image from "next/image";
import MenuBar from "../MenuBar/MenuBar";
import { links, socials } from "./menuContent";
import AnimatedLink from "../AnimatedLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";

const Menu = () => {
  const init = useRef(false);
  const container = useRef();
  const menuRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  useGSAP(
    () => {
      if (menuRef.current) {
        const menu = menuRef.current;
        const links = menu.querySelectorAll(".link h2");
        const socials = menu.querySelectorAll(".socials .line p");
        const menuContent = menu.querySelector(".menu-content");

        links.forEach((link) => {
          link.addEventListener("click", toggleMenu);
        });

        gsap.set(menu, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.set(links, { y: 120 });
        gsap.set(socials, { y: 30 });
        gsap.set(menuContent, { y: 40, opacity: 0 });

        init.current = true;
      }
    },
    { scope: container }
  );

  const animateMenu = useCallback((open) => {
    if (!menuRef.current) return;

    const menu = menuRef.current;
    const links = menu.querySelectorAll(".link h2");
    const socialsCols = menu.querySelectorAll(".socials .sub-col");
    const menuContent = menu.querySelector(".menu-content");

    setIsAnimating(true);

    if (open) {
      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1,
        onStart: () => {
          menu.style.pointerEvents = "auto";
        },
        onComplete: () => setIsAnimating(false),
      });

      gsap.to(menuContent, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
        delay: 0.4,
      });

      if (window.innerWidth >= 768) {
        gsap.to(links, {
          y: -25,
          stagger: 0.05,
          delay: 0.6,
          duration: 0.6,
          ease: "power4.out",
        });
      } else {
        gsap.set(links, { y: 0 });
      }

      socialsCols.forEach((subCol) => {
        const socialCopy = subCol.querySelectorAll(".line p");
        gsap.to(socialCopy, {
          y: 0,
          stagger: 0.1,
          delay: 1.2,
          duration: 1,
          ease: "power4.out",
        });
      });
    } else {
      gsap.to(menuContent, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power4.in",
      });

      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "hop",
        duration: 1.5,
        delay: 0.25,
        onComplete: () => {
          menu.style.pointerEvents = "none";
          gsap.set(menu, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          });

          gsap.set(links, { y: 120 });
          socialsCols.forEach((subCol) => {
            const socialCopy = subCol.querySelectorAll(".line p");
            gsap.set(socialCopy, { y: 30 });
          });

          setIsAnimating(false);
        },
      });
    }
  }, []);

  useEffect(() => {
    if (init.current) {
      animateMenu(isOpen);
    }
  }, [isOpen, animateMenu]);

  const toggleMenu = useCallback(() => {
    if (!isAnimating) {
      setIsOpen((prev) => !prev);
    }
  }, [isAnimating]);

  const closeMenu = useCallback(() => {
    if (!isAnimating && isOpen) {
      setIsOpen(false);
    }
  }, [isAnimating, isOpen]);

  useEffect(() => {
    const menuEl = menuRef.current;
    if (!menuEl) return;
    menuEl.style.pointerEvents = isOpen ? "auto" : "none";
  }, [isOpen]);

  return (
    <div ref={container}>
      <MenuBar isOpen={isOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />

      {/* 以下保留完整內容不變 */}
      {/* menuRef, 內容區塊、社群區、圖片連結等 */}
      {/* ... */}
    </div>
  );
};

export default Menu;
