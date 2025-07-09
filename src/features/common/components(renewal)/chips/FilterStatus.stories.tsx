import type { Meta, StoryObj } from "@storybook/react-vite";
import FilterStatus from "./FilterStatus.tsx";

const meta: Meta<typeof FilterStatus> = {
  component: FilterStatus,
  title: "Components/Chips/FilterStatus",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof FilterStatus>;

export const StatusChip: Story = {
  args: {
    status: "FILTER CHIP",
  },
};

export const LongStatusChip: Story = {
  args: {
    status: "LONG FILTER CHIPCHIP CHIP",
  },
};
