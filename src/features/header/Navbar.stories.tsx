import type { Meta, StoryObj } from "@storybook/react-vite";
import DesktopNavbar from "./DesktopNavbar.tsx";
import MobileNavbar from "./MobileNavbar.tsx";

const meta: Meta<typeof DesktopNavbar> = {
  component: DesktopNavbar,
  title: "Navigation/DesktopNavbar",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof DesktopNavbar>;

export const Desktop: Story = {
  render: () => <DesktopNavbar />,
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
