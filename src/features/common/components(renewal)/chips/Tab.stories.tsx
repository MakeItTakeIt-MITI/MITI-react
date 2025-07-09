import type { Meta, StoryObj } from "@storybook/react-vite";
import Tab from "./Tab.tsx";

const meta: Meta<typeof Tab> = {
  component: Tab,
  title: "Components/Chips/Tab",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const SelectedTab: Story = {
  args: {
    content: "지도",
    isSelected: true,
    onClick: () => console.log("Selected Tab Clicked"),
  },
};
export const NonSelectedTab: Story = {
  args: {
    content: "리스트",
    isSelected: false,
    onClick: () => console.log("Selected Tab Clicked"),
  },
};
