import type { Meta, StoryObj } from "@storybook/react-vite";
import { GameStatus } from "./GameStatus.tsx";

const meta: Meta<typeof GameStatus> = {
  component: GameStatus,
  title: "Games/Game Status Badge",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  // argTypes: {
  //   status: {
  //     control: { type: "select" },
  //     options: ["completed", "canceled", "closed", "open"],
  //   },
  // },
};

export default meta;

type Story = StoryObj<typeof GameStatus>;

export const CompletedBadge: Story = {
  args: {
    status: "completed",
  },
};

export const CancelledBadge: Story = {
  args: {
    status: "canceled",
  },
};

export const ClosedBadge: Story = {
  args: {
    status: "closed",
  },
};

export const OpenBadge: Story = {
  args: {
    status: "open",
  },
};
