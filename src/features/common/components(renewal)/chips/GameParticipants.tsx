import participants from "../../../../assets/images/people.svg";

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
      <img src={participants} className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" alt="participants" />
      <span>
        {num_of_participations} / {max_invitation}
      </span>
    </div>
  );
}
