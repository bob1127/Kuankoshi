"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton.jsx";

const EmblaCarousel = ({ slides = [], thumbnails = [], options = {} }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
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
  }, [emblaMainApi, onSelect]);

  return (
    <div className="w-full mx-auto">
      {/* 主輪播 */}
      <div className="embla w-full px-2">
        <div className="embla__viewport overflow-hidden" ref={emblaMainRef}>
          <div className="embla__container 2xl:w-[450px] w-[300px] px-1 flex">
            {slides.map((url, i) => (
              <div
                key={i}
                className="embla__slide mx-2 flex-shrink-0 snap-start px-2"
                style={{
                  width: "100%", // 每張滿版
                  height: "500px",
                  backgroundImage: `url(${url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 縮圖 */}
      {thumbnails?.length > 0 && (
        <div className="embla-thumbs mt-4 px-2">
          <div
            className="embla-thumbs__viewport overflow-hidden"
            ref={emblaThumbsRef}
          >
            <div className="embla-thumbs__container justify-center flex gap-2">
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
      )}
    </div>
  );
};

export default EmblaCarousel;
