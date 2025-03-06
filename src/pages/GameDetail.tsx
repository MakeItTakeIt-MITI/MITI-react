import GameDetailMap from "../components/game-details/GameDetailMap.tsx";
import Layout from "../components/game-details/Layout.tsx";
import clock from "../assets/v11/clock.svg";
import location from "../assets/v11/location.svg";
import participants from "../assets/v11/participants.svg";
import profile from "../assets/v11/profile.svg";
// import star from "../assets/v11/star.svg";
import ShareFeatureFooter from "../components/common/ShareFeatureFooter.tsx";
import { useGameDetailDataHook } from "../hooks/useGameDetailDataHook.tsx";
import { useParams } from "react-router-dom";

import no_stars from "../assets/v11/reviews/zero-star.svg";
import one_star from "../assets/v11/reviews/one-star.svg";
import one_half_stars from "../assets/v11/reviews/one-half-star.svg";
import two_stars from "../assets/v11/reviews/two-star.svg";
import two_half_stars from "../assets/v11/reviews/two-half-star.svg";
import three_stars from "../assets/v11/reviews/three-star.svg";
import three_half_stars from "../assets/v11/reviews/three-half-star.svg";
import four_stars from "../assets/v11/reviews/four-star.svg";
import four_half_stars from "../assets/v11/reviews/four-half-star.svg";
import fivestars from "../assets/v11/reviews/five-star.svg";
// import { useEffect } from "react";

const GameDetail = () => {
  const { id } = useParams();
  const gameId = Number(id);

  const { data: game } = useGameDetailDataHook({ id: gameId });

  // function totalGameTime() {
  const start = game?.data.starttime || "00:00:00";
  const end = game?.data.endtime || "00:00:00";

  function calculateDuration(startTime: string, endTime: string) {
    const toMinutes = (time: string) => {
      if (!time) {
        console.log("error");
      }

      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    };

    const startMinutes = toMinutes(startTime);
    const endMinutes = toMinutes(endTime);

    if (endMinutes >= startMinutes) {
      // same day
      return endMinutes - startMinutes;
    } else {
      // after midnight
      return endMinutes + 1440 - startMinutes;
    }
  }

  const gameDuration = calculateDuration(start, end);

  return (
    <>
      <section className="sm:bg-secondary-black  min-h-screen md:bg-light-dark  md:pt-[3.75rem] md:pb-[10.375rem]  ">
        <div className="sm:w-full md:w-[43.25rem]  mx-auto sm:space-y-[0.25rem] md:space-y-[1.25rem]">
          <GameDetailMap
            longitude={game?.data.court.longitude}
            latitude={game?.data.court.latitude}
          />

          <Layout height="">
            <div className="space-y-[.75rem] ">
              <span
                style={{
                  backgroundColor:
                    game?.data.game_status === "open"
                      ? "#b9dbdc"
                      : game?.data.game_status === "canceled"
                        ? "#E3C6CB"
                        : game?.data.game_status === "closed"
                          ? "#B9DBDC"
                          : game?.data.game_status === "completed"
                            ? "#B9DBDC"
                            : "",

                  color:
                    game?.data.game_status === "open"
                      ? "#4152EB"
                      : game?.data.game_status === "canceled"
                        ? "#C93568"
                        : game?.data.game_status === "closed"
                          ? "#00979A"
                          : game?.data.game_status === "completed"
                            ? "#00979A"
                            : "",
                }}
                className="p-[.25rem] text-[10px] rounded-[0.125rem] font-bold  "
              >
                {(game?.data.game_status === "open" && "모집중") ||
                  (game?.data.game_status === "canceled" && "경기 취소") ||
                  (game?.data.game_status === "closed" && "모집 마감") ||
                  (game?.data.game_status === "completed" && "모집 완료")}
              </span>
              <div className="space-y-[0.5rem]">
                <h1 className="sm:text-base md:text-lg font-bold text-primary-white">
                  {game?.data.title}
                </h1>
                <p className="text-neutral-400 text-sm font-normal text-[#A3A3A3]">
                  {game?.data.startdate} {game?.data.starttime.slice(0, 5)} ~{" "}
                  {game?.data.endtime.slice(0, 5)}
                </p>
              </div>
            </div>
            <div className="space-y-[0.38rem] text-primary-white text-sm font-[400] ">
              <div className="flex items-center gap-2">
                <img src={clock} alt="clock" />
                <span>{gameDuration}분 경기</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={location} alt="location" />
                <span>
                  {game?.data.court.address} {game?.data.court.adress_detail}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src={participants} alt="participants" />
                <span>
                  {game?.data.num_of_confirmed_participations} /{" "}
                  {game?.data.max_invitation}
                </span>
              </div>
            </div>
            <h1 className="text-[#7feef0] sm:text-base md:text-lg font-bold">
              참가비{" "}
              {game?.data.fee.toLocaleString("ko-KR", {
                style: "currency",
                currency: "KRW",
              })}
            </h1>
          </Layout>

          <Layout height="">
            <h1 className="text-primary-white font-bold sm:text-base md:text-lg">
              호스트 소개
            </h1>
            <div className="flex gap-[.75rem]">
              <img src={profile} alt="profile" />
              <div className="space-y-[.25rem] text-primary-white">
                <h2 className="font-bold text-sm">
                  {game?.data.host.nickname} 님
                </h2>
                <div className="flex items-center gap-[.38rem] font-[400] text-[14px]">
                  <div className="flex">
                    {game?.data.host.rating.host_rating.average_rating ===
                      null && <img src={no_stars} alt="no reviews" />}
                    {game?.data.host.rating.host_rating.average_rating ===
                      0 && <img src={one_star} alt="one stars" />}
                    {game?.data.host.rating.host_rating.average_rating > 0.5 &&
                      game?.data.host.rating.host_rating.average_rating <=
                        1.4 && <img src={one_half_stars} alt="one half star" />}
                    {game?.data.host.rating.host_rating.average_rating > 1.4 &&
                      game?.data.host.rating.host_rating.average_rating <=
                        2 && <img src={two_stars} alt="two stars" />}
                    {game?.data.host.rating.host_rating.average_rating > 2 &&
                      game?.data.host.rating.host_rating.average_rating <=
                        2.4 && (
                        <img src={two_half_stars} alt="two and a half stars" />
                      )}
                    {game?.data.host.rating.host_rating.average_rating > 2.4 &&
                      game?.data.host.rating.host_rating.average_rating <=
                        3 && <img src={three_stars} alt="three stars" />}
                    {game?.data.host.rating.host_rating.average_rating > 3 &&
                      game?.data.host.rating.host_rating.average_rating <=
                        3.4 && (
                        <img
                          src={three_half_stars}
                          alt="three and a half stars"
                        />
                      )}
                    {game?.data.host.rating.host_rating.average_rating > 3.4 &&
                      game?.data.host.rating.host_rating.average_rating <=
                        4 && <img src={four_stars} alt="four stars" />}
                    {game?.data.host.rating.host_rating.average_rating > 4 &&
                      game?.data.host.rating.host_rating.average_rating <=
                        4.4 && (
                        <img
                          src={four_half_stars}
                          alt="four and a half stars"
                        />
                      )}
                    {game?.data.host.rating.host_rating.average_rating > 4.4 &&
                      game?.data.host.rating.host_rating.average_rating <=
                        5 && <img src={fivestars} alt="five stars" />}
                  </div>
                  <span>
                    {game?.data.host.rating.host_rating.average_rating ===
                      null && "0"}
                    {game?.data.host.rating.host_rating.average_rating}
                  </span>
                  <span className="underline">리뷰</span>
                </div>
              </div>
            </div>
          </Layout>

          <Layout height="">
            <h1 className="sm:text-base md:text-lg font-bold text-primary-white">
              모집 정보
            </h1>
            <div
              style={{ whiteSpace: "pre-line" }}
              className="text-primary-white font-[400] text-sm min-h-[350px] sm:pb-[3.75rem] md:pb-0"
            >
              {game?.data.info}
            </div>
          </Layout>
        </div>
      </section>
      <ShareFeatureFooter />
    </>
  );
};

export default GameDetail;
