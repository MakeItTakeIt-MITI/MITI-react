import { Link } from "react-router-dom";
import { MatchTags } from "./MatchTags";
import gameDetailBtn from "../../assets/More_Info_btn.svg";

import {
  CompletedTag,
  HostTag,
  RecrutingTag,
} from "../../stories/Tags.stories";
import { GameDetailField } from "../../interface/gameInterface";

interface HostGameProps {
  hostHistory: { data: [GameDetailField] };
}
interface GuestGameHistory {
  guestHistory: { data: [GameDetailField] };
}

export const HostGameHistory = ({ hostHistory }: HostGameProps) => {
  return (
    <>
      {hostHistory?.data.map((hostGame: GameDetailField) => {
        return (
          <Link
            to={`/games/detail/${hostGame.id}`}
            key={hostGame.id}
            className="mobile:w-full tablet:w-[480px]  flex   justify-between p-4 border border-[#E8E8E8] rounded-xl"
          >
            <div className=" flex flex-col gap-1">
              <div className="flex gap-2">
                <MatchTags {...HostTag.args} />
                {hostGame.game_status === "cancelled" ? (
                  <MatchTags {...CompletedTag.args} />
                ) : (
                  <MatchTags {...RecrutingTag.args} />
                )}
              </div>
              <h4>{hostGame?.title}</h4>
              <p className="text-[14px] text-[#999]">
                {`${hostGame.startdate} ${hostGame.starttime.slice(
                  0,
                  -3
                )} ~ ${hostGame.endtime.slice(0, -3)}`}
              </p>
            </div>
            <div>
              <img src={gameDetailBtn} alt="" />
            </div>
          </Link>
        );
      })}
    </>
  );
};

export const GuestGameHistory = ({ guestHistory }: GuestGameHistory) => {
  return (
    <>
      {guestHistory?.data.map((guest: GameDetailField) => {
        return (
          <Link
            key={guest.id}
            to={`/games/detail/${guest.id}`}
            className="mobile:w-full tablet:w-[480px]  flex   justify-between p-4 border border-[#E8E8E8] rounded-xl"
          >
            <div className=" flex flex-col gap-1">
              <div className="flex gap-2">
                <MatchTags {...HostTag.args} />
                {guest.game_status === "cancelled" ? (
                  <MatchTags {...CompletedTag.args} />
                ) : (
                  <MatchTags {...RecrutingTag.args} />
                )}
              </div>
              <h4>{guest?.title}</h4>
              <p className="text-[14px] text-[#999]">
                {`${guest.startdate} ${guest.starttime.slice(
                  0,
                  -3
                )} ~ ${guest.endtime.slice(0, -3)}`}
              </p>
            </div>
            <div>
              <img src={gameDetailBtn} alt="" />
            </div>
          </Link>
        );
      })}
    </>
  );
};
