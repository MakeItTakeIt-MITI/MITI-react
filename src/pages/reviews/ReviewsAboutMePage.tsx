import { useEffect, useState } from "react";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { TabFilterList } from "../../components/game/TabFilterList";
import { useGetReviewDetailQuery } from "../../hooks/reviews/useGetReviewDetailQuery";
import { useGetUserDataQuery } from "../../hooks/user/useGetUserDataQuery";
import useUserDataStore from "../../store/useUserDataStore";
import { NoListFoundMessageBox } from "../../components/common/NoListFoundMessageBox";
import { UserReviewItem } from "../../components/reviews/UserReviewItem";
import { Link } from "react-router-dom";

export const ReviewsAboutMePage = () => {
  const [defaultTabName, setDefaultTabName] = useState("전체 보기");
  const [gameStatusQuery, setGameStatusQuery] = useState("");
  const [openList, setOpenList] = useState(false);
  const { userId } = useUserDataStore();

  const handleOpenList = () => setOpenList(!openList);
  const handleChangeTab = (tab: string) => setDefaultTabName(tab);

  const { data: userData, refetch: userDataRefetch } =
    useGetUserDataQuery(userId);
  const ratingId = userData?.data?.rating?.id
    ? Number(userData.data.rating.id)
    : null;
  const { data: reviewData, refetch: reviewDataRefetch } =
    useGetReviewDetailQuery(ratingId);

  const tabList = [
    { id: 1, name: "호스트 리뷰" },
    { id: 2, name: "게스트 리뷰" },
    { id: 3, name: "전체 보기" },
  ];

  useEffect(() => {
    if (defaultTabName === "전체 보기") {
      setGameStatusQuery("");
    } else if (defaultTabName === "호스트 리뷰") {
      setGameStatusQuery("host_review");
    } else if (defaultTabName === "게스트 리뷰") {
      setGameStatusQuery("guest_review");
    }
    userDataRefetch();
    reviewDataRefetch();
  }, [ratingId, userData, reviewData, gameStatusQuery, defaultTabName]);
  return (
    <section className="laptop:mt-[17px] laptop:mb-[55px] mobile:my-0">
      <NavigateToPrevContainer children="내 리뷰 조회" />
      <div className="space-y-[34px] laptop:w-[593px]     mobile:w-full mx-auto  ">
        <div className="flex  justify-between">
          <h1 className="w-[351px] text-[26px] font-bold">내 리뷰 조회</h1>
          <TabFilterList
            tabList={tabList}
            defaultTabName={defaultTabName}
            setGameStatusQuery={setGameStatusQuery}
            openList={openList}
            handleOpenList={handleOpenList}
            handleChangeTab={handleChangeTab}
          />{" "}
        </div>
        <div className="h-[653px] p-3 bg-[#FBFBFB] space-y-[15px] overflow-y-auto border border-gray-200 rounded-lg">
          {reviewData && reviewData?.data?.reviews.length !== 0 ? (
            reviewData?.data?.reviews.map((review: any) => {
              return (
                <div>
                  <Link to={`detail/${review.id}`}>
                    <UserReviewItem review={review} />
                  </Link>
                </div>
              );
            })
          ) : (
            <NoListFoundMessageBox
              title="작성된 리뷰가 없습니다."
              content="경기에 참여하고 리뷰를 받아보세요!"
            />
          )}
        </div>
      </div>
    </section>
  );
};
