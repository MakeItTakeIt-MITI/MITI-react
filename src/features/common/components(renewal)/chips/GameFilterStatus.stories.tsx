import type { Meta, StoryObj } from "@storybook/react-vite";
import GameFilterStatus from "./GameFilterStatus.tsx";

const meta: Meta<typeof GameFilterStatus> = {
  component: GameFilterStatus,
  title: "Components/Chips/GameFilterStatus",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof GameFilterStatus>;

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
