"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ArrowLeft from "../../app/assets/svg/arrowLeft.svg";
import ArrowRight from "../../app/assets/svg/arrowRight.svg";
type Props = {
  items: {
    src: StaticImageData;
    alt: string;
  }[];
  title: string;
};
export default function CarouselProducts({ items, title }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Número de elementos visibles por página

  const handleNext = () => {
    if (currentIndex + itemsPerPage < items.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center my-9">
        <span className="font-actor font-bold text-[#171A1FFF] text-[32px]">
          {title}
        </span>
      </div>
      <div className="flex items-center w-full">
        {/* Botón Anterior */}
        {currentIndex > 0 && (
          <button className="absolute left-0" onClick={handlePrev}>
            <ArrowLeft className="bg-none stroke-black w-[65px] h-[65px]" />
          </button>
        )}
        {/* Imágenes Visibles */}
        <div className="flex w-full items-center overflow-hidden h-64 justify-around ">
          {visibleItems.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              height={150}
              className="rounded-lg"
            />
          ))}
        </div>
        {/* Botón Siguiente */}
        {currentIndex + itemsPerPage < items.length && (
          <button className="absolute right-0" onClick={handleNext}>
            <ArrowRight className="bg-none stroke-black w-[65px] h-[65px]" />
          </button>
        )}
      </div>
    </div>
  );
}
