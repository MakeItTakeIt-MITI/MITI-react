import MainLayout from "../common/MainLayout.tsx";
import searchIcon from "../../assets/v11/search.svg";
import { FAQ_TOPICS } from "../../constants/faq.ts";
import dropdown from "../../assets/v11/drop.svg";
import { useEffect, useRef, useState } from "react";
import { useFaqDataHook } from "../../features/faq/hooks/useFaqDataHook.tsx";
import { FAQItem } from "../../interfaces/support.ts";
import "./faq.css";
import MoveToAppBanner from "../common/MoveToAppBanner.tsx";
import { Link, useParams } from "react-router-dom";

const Main = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { data: faqData, refetch, isLoading } = useFaqDataHook(search);

  const { categoryId } = useParams();

  const handleOpenFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };
  const handleSearchFaq = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current?.value;
      if (inputValue === "전체") {
        // if (categoryId === "all") {
        setSearch("");
      } else {
        setSearch(inputValue);
      }
      refetch();
    }
  };

  const handleSelectCategory = () => {
    // if (input === "전체") {
    //   setSearch("");
    // } else {
    //   setSearch(input);
    // }
    setSearch("");
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [search, refetch]);

  return (
    <MainLayout>
      {/* upper */}
      <div className="space-y-[1.25rem] text-primary-white sm:text-center md:text-start">
        <h1 className="text-[32px] font-[600] ">자주 묻는 질문</h1>
        <h2 className="text-[20px]">궁금하신 내용의 답변을 모아두었어요.</h2>
      </div>

      {/* searchbar */}
      <div className="w-full h-[3rem] bg-light-dark  rounded-xl relative py-[.75rem] px-[1.25rem] flex items-center justify-between gap-2">
        <input
          type="text"
          className="w-full h-full bg-light-dark text-primary-white  font-[500]  courtsPlaceHolder "
          placeholder="궁금한 내용을 검색해보세요."
          // onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchFaq();
            }
          }}
        />

        <button type="button" onClick={handleSearchFaq}>
          <img src={searchIcon} alt="search" className="size-6" />
        </button>
      </div>
      {/* main */}
      <div className="space-y-[.75rem] sm:px-[.5rem]">
        {/* topics boxes */}
        <ul className="flex items-center gap-[1.25rem]">
          {FAQ_TOPICS.map((topic, index) => (
            <Link to={`/faq/category/${topic.category}`}>
              <li
                style={{
                  color:
                    categoryId === topic.category ||
                    (categoryId === "" && topic.category === "all")
                      ? "#7FEEF0"
                      : "#737373",
                }}
                className="cursor-pointer"
                key={index}
                onClick={() => handleSelectCategory()}
              >
                {topic.title}
              </li>
            </Link>
          ))}
        </ul>
        {/* FAQ items */}
        {faqData?.length > 0 &&
          faqData
            .filter(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (item: any) =>
                categoryId === "all" || item.category === categoryId
            )
            .map((item: FAQItem) => (
              <div key={item.id}>
                {isLoading ? (
                  <div className="cursor-pointer flex items-center justify-between py-[1.25rem]">
                    <h1 className="w-[200px] h-[8px] bg-light-dark rounded-lg"></h1>
                    <button disabled type="button">
                      <img
                        src={dropdown}
                        alt="dropdown"
                        className={`size-6 ${item.id === openFAQIndex ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => handleOpenFAQ(item.id)}
                    className="cursor-pointer flex items-center justify-between py-[1.25rem]"
                  >
                    <span className="text-secondary-white text-base font-[400]">
                      {item.title}
                    </span>
                    <button type="button">
                      <img
                        src={dropdown}
                        alt="dropdown"
                        className={`size-6 ${item.id === openFAQIndex ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                )}

                {/* Description */}
                {openFAQIndex === item.id && (
                  <div className="p-[1.25rem] bg-light-dark rounded-[20px] space-y-3 mb-5">
                    <p
                      className="text-[#d4d4d4]"
                      id="custom-content"
                      dangerouslySetInnerHTML={{ __html: `${item?.content}` }}
                    />
                  </div>
                )}

                <hr className="bg-[#525252] h-[3px]" />
              </div>
            ))}
      </div>
      <MoveToAppBanner />
    </MainLayout>
  );
};

export default Main;
