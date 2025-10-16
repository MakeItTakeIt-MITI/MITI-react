import type { Meta, StoryObj } from "@storybook/react-vite";
import RegionCheck from "./RegionCheck.tsx";

const meta: Meta<typeof RegionCheck> = {
  component: RegionCheck,
  title: "Components/Chips/RegionCheck",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof RegionCheck>;

export const CheckedChip: Story = {
  args: {
    isSelected: true,
  },
};

export const UncheckedChip: Story = {
  args: {
    isSelected: false,
  },
};
