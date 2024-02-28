import { useState } from "react";
import { cancelParticipationStatus } from "../../../api/gameHost";
import { ModalRemoveUserFromMatch } from "../../modal_box/ModalRemoveUserFromMatch";

import { ParticipantActionProps } from "../../../interface/participant_types";

export const UsersConfirmedTab = ({
  refetch,
  participantsData,
  phoneFormatter,
}: ParticipantActionProps) => {
  const [removeUserModal, setRemoveUserModal] = useState(false);
  const handleShowModal = () => {
    setRemoveUserModal(true);
  };

  const handleRemoveFromGame = (userId: number) => {
    const participatingUserId = participantsData?.data.id;
    cancelParticipationStatus(participatingUserId, userId);
    refetch();
    setRemoveUserModal(false);
  };

  return (
    <>
      {participantsData?.data.confirmed.map((user) => {
        return (
          <div key={user.id} className="flex justify-between text-[14px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#666]"></div>

              <div className="flex  flex-col ">
                <p>{user.player_name}</p>
                <p className="text-[#666]">
                  {" "}
                  {phoneFormatter(user.player_phone)}
                </p>
              </div>
            </div>
            <button
              onClick={handleShowModal}
              className="bg-[#F95040] flex flex-col items-center justify-center w-[48px] h-[40px]  text-white rounded-lg text-[12px] font-bold"
            >
              <span>참여</span>
              <span>취소</span>
            </button>
            {removeUserModal && (
              <ModalRemoveUserFromMatch
                userId={user.id}
                handleRemoveFromGame={handleRemoveFromGame}
              />
            )}
          </div>
        );
      })}
    </>
  );
};
