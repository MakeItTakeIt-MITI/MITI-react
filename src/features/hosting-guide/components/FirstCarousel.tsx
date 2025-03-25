import web_1 from "../../../assets/v11.2/host-guide/web-first-1png.png";
import web_2 from "../../../assets/v11.2/host-guide/web-first-2.png";
import web_3 from "../../../assets/v11.2/host-guide/web-first-3.png";

import mobile_1 from "../../../assets/v11.2/host-guide/mobile-first-1.png";
import mobile_2 from "../../../assets/v11.2/host-guide/mobile-first-2.png";
import mobile_3 from "../../../assets/v11.2/host-guide/mobile-first-3.png";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CarouselRotateBtns } from "./CarouselRotateBtns.tsx";

const FirstCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState([false, false, false]);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  const carousel = [
    { id: 1, img: web_1, img_mobile: mobile_1 },
    { id: 2, img: web_2, img_mobile: mobile_2 },
    { id: 3, img: web_3, img_mobile: mobile_3 },
  ];

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
      }, 7000);

      return () => clearInterval(interval);
    }
  }, [carousel.length, inView]);

  const handleImageLoad = (index: number) => {
    setLoaded((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <article className=" relative w-full h-[800px] overflow-hidden bg-[#262626]">
      {carousel.map((article, index) => (
        <div
          ref={ref}
          key={article.id}
          className={`absolute   w-full inset-0 flex items-center px-[21px] justify-center transition-opacity duration-700 ${
            index === currentIndex
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={article.img}
            alt={`web-image-${article.id}`}
            className={` w-[1114px] h-[700px] mx-auto md:block sm:hidden transition-opacity duration-700 ${
              loaded[index] ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => handleImageLoad(index)}
          />
          <img
            src={article.img_mobile}
            alt={`mobile-image-${article.id}`}
            className={`sm:block md:hidden  h-[700px] mx-auto transition-opacity duration-700 ${
              loaded[index] ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => handleImageLoad(index)}
          />
        </div>
      ))}

      <CarouselRotateBtns
        carousel={carousel}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </article>
  );
};

export default FirstCarousel;
