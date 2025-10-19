import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button.tsx";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Buttons/Main Buttons",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryButtonLg: Story = {
  args: {
    type: "button",
    size: "lg",
    content: "버튼",
  },
};

export const PrimaryButtonMd: Story = {
  args: {
    type: "button",
    size: "md",
    content: "버튼",
  },
};

export const PrimaryButtonSm: Story = {
  args: {
    type: "button",
    size: "sm",
    content: "버튼",
  },
};
