import { useEffect, useState } from "react";
import first_1_1 from "../../../assets/v11.2/hosting-guide/web-first-1-1.svg";
import first_1_2 from "../../../assets/v11.2/hosting-guide/web-first-1-2.png";
import first_1_3 from "../../../assets/v11.2/hosting-guide/web-first-1-3.svg";

const FirstArticle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const articleContents = [
    {
      id: 1,
      title: ["이제 MITI로 간편하게 게스트 모집하기!"],
      content: [
        "온라인 카페, 단체 채팅방..",
        "다양한 커뮤니티에 경기 모집글을 작성하기,",
        "게스트 참가비 확인하기, 안내 문자 전송하기..",
      ],
      extra: [
        "그동안 게스트 모집하기 참 번거로우셨죠?",
        "MITI를 통해 클릭 몇번으로 농구 게스트들을 간편하게 모집해보세요!",
      ],
      image: first_1_1,
    },
    {
      id: 2,
      title: [
        "경기를 만드신 적이 있다구요?",
        "그렇다면 클릭 한번으로 경기 모집 글 작성해보세요!",
      ],

      content: [
        "게스트를 모집할 때마다 경기 모집글을 작성하셨나요? ",
        "MITI에서는 이전 게스트 모집 정보를 바탕으로 다시 게스트들을 모집할 수 있습니다!",
      ],
      image: first_1_2,
    },
    {
      id: 3,
      title: ["경기 시작 전, 경기 참가 리마인더 전송까지?"],
      content: ["지금까지 게스트에게 안내 문자 보내기 번거로우셨죠?"],
      extra: [
        "MITI는 경기 시작 전, 게스트들이 경기 참가를 다시 확인 할 수 있도록",
        " 경기 정보 및 참가 정보를 확인할 수 있는 알림톡을 전송합니다.",
        "경기가 취소되는 경우에는 경기 취소 알림톡까지!",
      ],
      image: first_1_3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articleContents.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [articleContents.length]);

  return (
    <>
      {/* web */}
      <div className=" sm:hidden  md:block relative w-full h-[800px]  overflow-hidden">
        {articleContents.map((article, index) => (
          <div
            key={article.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <article className="w-full h-[800px] bg-[#262626] flex items-center justify-center">
              <div
                className={`w-[1114px] h-[700px] 
                flex 
                 ${index === 1 ? "flex-row-reverse" : "md:flex-row"}
                 ${index === 0 ? "md:gap-[60px]" : "md:gap-[150px]"} 
                items-center justify-center 
               `}
              >
                {/* Left */}
                <div
                  className={`
             ${index === 0 && "w-[570px]"}
             ${index === 1 && "w-[675px]"}
             ${index === 2 && "w-[675px]"}
            
            space-y-[60px]  px-0
                    `}
                >
                  <h1 className="text-[#9EEFF0] font-bold text-[32px]  leading-[1.5]">
                    {article.title && (
                      <ul className="list-none  `">
                        {article.title.map((text, index) => (
                          <li key={index} className="">
                            {text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </h1>
                  <div className="space-y-5 text-[#fff] text-[20px]  font-[400]">
                    {article.content && (
                      <ul className="list-none  `">
                        {article.content.map((text, index) => (
                          <li key={index} className="leading-[1.5]">
                            {text}
                          </li>
                        ))}
                      </ul>
                    )}
                    {article.extra && (
                      <ul className="list-none  `">
                        {article.extra.map((text, index) => (
                          <li key={index} className="leading-[1.5]">
                            {text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                {/* Right */}
                <div
                  className={`                         
  ${index === 0 && "h-[594px] w-[484px]"}
  ${index === 1 && "h-[600px] w-[289px]"}
  ${index === 2 && "h-[600px] w-[288px] "}              
                   `}
                >
                  <img src={article.image} alt="" className="w-full h-full" />
                </div>
              </div>
            </article>
          </div>
        ))}

        {/* Dots for navigation */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {articleContents.map((_, index) => (
            <button
              key={index}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#7FEEF0]" : "bg-[#A3A3A3]"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* mobile */}

      <div className=" md:hidden  sm:block relative w-full h-[800px]  overflow-hidden">
        {articleContents.map((article, index) => (
          <div
            key={article.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <article className="w-full px-[21px] pt-[70px] h-[750px] bg-[#262626] flex items-center justify-center">
              <div
                className={`
                flex 
                  ${index === 1 ? "flex-col-reverse" : "flex-col-reverse"}
             gap-5
                items-center justify-center 
               `}
              >
                {/* Left */}
                <div
                  className={`
          
            h-[400px]
            space-y-5  px-0
                    `}
                >
                  <h1 className="text-[#9EEFF0] font-bold text-[20px]  ">
                    {article.title && (
                      <ul className="list-none  `">
                        {article.title.map((text, index) => (
                          <li key={index} className="">
                            {text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </h1>
                  <div className="space-y-5 text-[#fff] text-  font-[400]">
                    {article.content && (
                      <ul className="list-none  `">
                        {article.content.map((text, index) => (
                          <li key={index} className="">
                            {text}
                          </li>
                        ))}
                      </ul>
                    )}
                    {article.extra && (
                      <ul className="list-none  `">
                        {article.extra.map((text, index) => (
                          <li key={index} className="">
                            {text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                {/* Right */}
                <div
                  className={`                         
   ${index === 0 && "w-[325px] "}
             ${index === 1 && "w-[192px]"}
             ${index === 2 && "w-[192px]"}    
             h-[400px]         
                   `}
                >
                  <img src={article.image} alt="" className="w-full h-full" />
                </div>
              </div>
            </article>
          </div>
        ))}

        {/* Dots for navigation */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {articleContents.map((_, index) => (
            <button
              key={index}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#7FEEF0]" : "bg-[#A3A3A3]"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FirstArticle;
