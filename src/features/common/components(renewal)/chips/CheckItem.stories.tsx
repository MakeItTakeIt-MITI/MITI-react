import type { Meta, StoryObj } from "@storybook/react-vite";
import CheckItem from "./CheckItem.tsx";

const meta: Meta<typeof CheckItem> = {
  component: CheckItem,
  title: "Components/Chips/CheckItem",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof CheckItem>;

export const CheckedChip: Story = {
  args: {
    isSelected: true,
    content: "서울",
  },
};

export const UncheckedChip: Story = {
  args: {
    isSelected: false,
    content: "부산",
  },
};
