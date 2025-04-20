"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton.jsx";

const EmblaCarousel = ({ slides = [], thumbnails = [], options = {} }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: false,
    skipSnaps: false,
    ...options,
  });

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    const selected = emblaMainApi.selectedScrollSnap();
    setSelectedIndex(selected);
    emblaThumbsApi.scrollTo(selected);
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);

    // debug: 看 embla 認為的 snap 點
    console.log("✅ snap count:", emblaMainApi.scrollSnapList().length);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="w-full">
      <div className="embla bg-[#f5f5f5] w-full mx-auto px-2">
        <div
          className="embla__viewport overflow-hidden"
          ref={emblaMainRef}
          style={{ maxWidth: "1920px", margin: "0 auto" }} // ✅ 寬度足夠容納 snap
        >
          <div className="embla__container flex w-[100%] ">
            {" "}
            {/* ✅ 關鍵 */}
            {slides.map((url, i) => (
              <div
                key={i}
                className="embla__slide mr-1 ml-1 pl-1 pr-1 snap-start"
                style={{
                  width: "23%", // ✅ 每張佔 1/5
                  flexShrink: 0, // ✅ 禁止壓縮
                  backgroundImage: `url(${url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 縮圖 */}
      <div className="embla-thumbs mt-4 px-2">
        <div
          className="embla-thumbs__viewport flex justify-center overflow-hidden"
          ref={emblaThumbsRef}
        >
          <div className="embla-thumbs__container flex gap-2">
            {thumbnails.map((thumbUrl, i) => (
              <Thumb
                key={i}
                onClick={() => onThumbClick(i)}
                selected={i === selectedIndex}
                index={i}
                imageUrl={thumbUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
