import type { Meta, StoryObj } from "@storybook/react-vite";
import GameParticipants from "./GameParticipants.tsx";

const meta: Meta<typeof GameParticipants> = {
  component: GameParticipants,
  title: "Components/Chips/GameParticipants",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof GameParticipants>;

export const GameParticipantsChip: Story = {
  args: {
    min_participants: "4",
    max_participants: "10",
  },
};
