import web_1 from "../../../assets/v11.2/host-guide/web-second-1.png";
import web_2 from "../../../assets/v11.2/host-guide/web-second-2.png";
import web_3 from "../../../assets/v11.2/host-guide/web-second-3.png";
import web_4 from "../../../assets/v11.2/host-guide/web-second-4.png";

import mobile_1 from "../../../assets/v11.2/host-guide/mobile-second-1.png";
import mobile_2 from "../../../assets/v11.2/host-guide/mobile-second-2.png";
import mobile_3 from "../../../assets/v11.2/host-guide/mobile-second-3.png";
import mobile_4 from "../../../assets/v11.2/host-guide/mobile-second-4.png";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CarouselRotateBtns } from "./CarouselRotateBtns.tsx";

const SecondCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState([false, false, false]);

  const carousel = [
    { id: 1, img: web_1, img_mobile: mobile_1 },
    { id: 2, img: web_2, img_mobile: mobile_2 },
    { id: 3, img: web_3, img_mobile: mobile_3 },
    { id: 4, img: web_4, img_mobile: mobile_4 },
  ];

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

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
    <article className=" relative w-full bg-[#404040] ] h-[800px]  overflow-hidden">
      {carousel.map((article, index) => (
        <div
          ref={ref}
          key={article.id}
          className={`absolute   w-full inset-0 px-[21px]  flex items-center justify-center transition-opacity duration-700 ${
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
            className={`sm:block md:hidden  h-[704px]   mx-auto transition-opacity duration-700 ${
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

export default SecondCarousel;
