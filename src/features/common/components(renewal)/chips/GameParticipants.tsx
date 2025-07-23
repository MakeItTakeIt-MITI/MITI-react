import participants from "../../../../assets/v1.3/icon/participants.svg";

interface GameParticipantsProps {
  min_participants: string;
  max_participants: string;
}

export default function GameParticipants({
  min_participants,
  max_participants,
}: GameParticipantsProps) {
  return (
    <div className="flex items-center gap-1 text-xs font-[400] text-[#D6D6D6]">
      <img src={participants} alt="" />
      <span>
        {min_participants} / {max_participants}
      </span>
    </div>
  );
}
