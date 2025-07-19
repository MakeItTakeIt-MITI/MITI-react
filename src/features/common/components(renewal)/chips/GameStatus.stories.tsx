import type { Meta, StoryObj } from "@storybook/react-vite";
import GameStatus from "./GameStatus.tsx";

const meta: Meta<typeof GameStatus> = {
  component: GameStatus,
  title: "Components/Chips/GameStatus",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof GameStatus>;

export const StatusRecruiting: Story = {
  args: {
    status: "모집 중",
    isSelected: true,
  },
};

export const StatusRecruitingClosed: Story = {
  args: {
    status: "모집 마감",
    isSelected: false,
  },
};
