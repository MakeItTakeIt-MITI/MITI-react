import type { Meta, StoryObj } from "@storybook/react-vite";
import GameFee from "./GameFee.tsx";

const meta: Meta<typeof GameFee> = {
  component: GameFee,
  title: "Components/Chips/GameFee",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof GameFee>;

export const GameFeeLargeChip: Story = {
  args: {
    fee: 10000,
    size: "lg",
  },
};

export const GameFeeMediumChip: Story = {
  args: {
    fee: 0,
    size: "md",
  },
};
