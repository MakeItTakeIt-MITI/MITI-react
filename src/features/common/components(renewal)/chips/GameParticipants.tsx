import participants from "../../../../assets/v1.3/icon/participants.svg";

interface GameParticipantsProps {
  num_of_participations: number;
  max_invitation: string;
}

export default function GameParticipants({
  num_of_participations,
  max_invitation,
}: GameParticipantsProps) {
  return (
    <div className="flex items-center gap-1 sm:text-[10px] md:text-xs font-[400] text-[#D6D6D6]">
      <img src={participants} alt="" />
      <span>
        {num_of_participations} / {max_invitation}
      </span>
    </div>
  );
}
