import type { Meta, StoryObj } from "@storybook/react-vite";
import GameTime from "./GameTime.tsx";

const meta: Meta<typeof GameTime> = {
  component: GameTime,
  title: "Components/Chips/GameTime",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof GameTime>;

export const GameTimeChip: Story = {
  args: {
    starttime: "22:10",
    endtime: "23:10",
  },
};
