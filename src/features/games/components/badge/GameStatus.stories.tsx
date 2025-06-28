import type { Meta, StoryObj } from "@storybook/react";
import { GameStatus } from "./GameStatus.tsx";

const meta: Meta<typeof GameStatus> = {
  component: GameStatus,
  title: "Games/GameStatus",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["completed", "canceled", "closed", "open"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof GameStatus>;

export const StatusBadge: Story = {
  args: {
    status: "completed",
  },
};
