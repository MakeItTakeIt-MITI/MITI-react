import type { Meta, StoryObj } from "@storybook/react-vite";
import GameAddress from "./GameAddress.tsx";

const meta: Meta<typeof GameAddress> = {
  component: GameAddress,
  title: "Components/Chips/GameAddress",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof GameAddress>;

export const GameAddressChip: Story = {
  args: {
    address: "서울 특별지",
    address_detail: "수유동 101호",
  },
};
