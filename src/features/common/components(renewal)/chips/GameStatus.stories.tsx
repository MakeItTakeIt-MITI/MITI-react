import type { Meta, StoryObj } from "@storybook/react-vite";
import { GameStatus } from "./GameStatus.tsx";
import { GameStatusEnum } from "../../../enum/games.ts";

const meta: Meta<typeof GameStatus> = {
  component: GameStatus,
  title: "Components/Chips/Game Status Badge",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof GameStatus>;

export const CompletedBadge: Story = {
  args: {
    status: GameStatusEnum.COMPLETED,
  },
};

export const CancelledBadge: Story = {
  args: {
    status: GameStatusEnum.CANCELED,
  },
};

export const ClosedBadge: Story = {
  args: {
    status: GameStatusEnum.CLOSED,
  },
};

export const OpenBadge: Story = {
  args: {
    status: GameStatusEnum.OPEN,
  },
};
