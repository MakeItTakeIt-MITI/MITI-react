import type { Meta, StoryObj } from "@storybook/react-vite";
import Sidebar from "./Sidebar.tsx";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Games/Sidebar/Components",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const SideBar: Story = {
  args: {},
};
