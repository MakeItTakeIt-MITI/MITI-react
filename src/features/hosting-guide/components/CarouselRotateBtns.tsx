interface CarouselItem {
  id: number;
  img: string;
  img_mobile: string;
}

interface CarouselBtnProps {
  carousel: CarouselItem[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const CarouselRotateBtns = ({
  carousel,
  currentIndex,
  setCurrentIndex,
}: CarouselBtnProps) => {
  return (
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {carousel.map((item, index) => (
        <>
          <button
            key={item.id}
            className={`size-6 text-sm  rounded-full transition-all duration-300 
            ${index === currentIndex ? "bg-[#A0FDFF]" : "bg-[#404040]"} 
            ${index === currentIndex ? "text-[#262626]" : "text-[#D4D4D4]"}
            ${index === currentIndex ? "font-[800]" : "font-[400]"}
        `}
            onClick={() => setCurrentIndex(index)}
          >
            {index + 1}
          </button>
          {index !== carousel.length - 1 && (
            <ul className="flex items-center gap-1">
              <li className="size-[2px] bg-[#737373]" />
              <li className="size-[2px] bg-[#737373]" />
              <li className="size-[2px] bg-[#737373]" />
            </ul>
          )}
        </>
      ))}
    </div>
  );
};
