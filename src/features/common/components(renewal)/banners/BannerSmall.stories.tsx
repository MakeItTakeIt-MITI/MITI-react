import type { Meta, StoryObj } from "@storybook/react-vite";
import BannerSmall from "./BannerSmall.tsx";

const meta: Meta<typeof BannerSmall> = {
  component: BannerSmall,
  title: "Components/Advertisement/BannerSmall",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BannerSmall>;

export const BannerManners: Story = {
  args: {
    type: "manners",
  },
};

export const BannerCommunity: Story = {
  args: {
    type: "community",
  },
};

export const BannerChat: Story = {
  args: {
    type: "chat",
  },
};

export const BannerSeoulCourts: Story = {
  args: {
    type: "seoul_court",
  },
};

export const BannerIncheonCourts: Story = {
  args: {
    type: "incheon_court",
  },
};

export const BannerDongtanCourts: Story = {
  args: {
    type: "dongtan_court",
  },
};
