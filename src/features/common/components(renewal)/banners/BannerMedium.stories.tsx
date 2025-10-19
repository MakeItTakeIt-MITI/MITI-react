import type { Meta, StoryObj } from "@storybook/react-vite";
import BannerMedium from "./BannerMedium.tsx";

const meta: Meta<typeof BannerMedium> = {
  component: BannerMedium,
  title: "Components/Advertisement/BannerMedium",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BannerMedium>;

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
