import type { Meta, StoryObj } from "@storybook/react-vite";
import Hamburger from "./Hamburger.tsx";

const meta: Meta<typeof Hamburger> = {
  component: Hamburger,
  title: "Components/Buttons/Hamburger",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Hamburger>;

export const HamburgerOpen: Story = {
  args: {
    isClicked: false,
    onClick: () => console.log("Hamburger Open Clicked"),
  },
};

export const HamburgerClosed: Story = {
  args: {
    isClicked: true,
    onClick: () => console.log("Hamburger Closed Clicked"),
  },
};
