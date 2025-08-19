import type { Meta, StoryObj } from "@storybook/react-vite";
import MapIcon from "./MapIcon.tsx";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof MapIcon> = {
  component: MapIcon,
  title: "Navermap/Components/Icon",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      return (
        <MemoryRouter>
          <div>
            <Story />
          </div>
        </MemoryRouter>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof MapIcon>;

export const PaidGameIcon: Story = {
  args: {
    fee: 10000,
    starttime: "12:20",
    overlapped: false,
  },
};

export const FreeGameIcon: Story = {
  args: {
    fee: 0,
    starttime: "12:20",
  },
};
export const OverlappedGameIcon: Story = {
  args: {
    fee: 0,
    starttime: "12:20",
    overlapped: true,
    number_of_games: ["address", "addresstwo"],
  },
};

export const OverlappedGameIconSecond: Story = {
  args: {
    fee: 0,
    starttime: "12:20",
    overlapped: true,
    number_of_games: [
      "address",
      "addresstwo",
      "address",
      "addresstwo",
      "address",
      "addresstwo",
    ],
  },
};
