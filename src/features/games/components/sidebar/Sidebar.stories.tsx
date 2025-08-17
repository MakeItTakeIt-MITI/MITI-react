import type { Meta, StoryObj } from "@storybook/react-vite";
import Sidebar from "./Sidebar.tsx";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Games/Sidebar/Components",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const SideBar: Story = {
  args: {},
};
