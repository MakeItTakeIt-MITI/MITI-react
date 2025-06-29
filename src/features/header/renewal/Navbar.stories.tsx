import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "Navigation/Navbar(v1.3)",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Desktop: Story = {
  render: () => <Navbar />,
};

export const Mobile: Story = {
  render: () => {
    return (
      <div className="w-[540px]">
        <MobileNavbar />
      </div>
    );
  },
};
