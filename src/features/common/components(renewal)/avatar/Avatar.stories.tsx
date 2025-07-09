import type { Meta, StoryObj } from "@storybook/react-vite";
import Avatar from "./Avatar.tsx";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Components/Avatar",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Avatars: Story = {
  args: {
    size: "l",
  },
};
