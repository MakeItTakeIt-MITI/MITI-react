import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import Landing from "./Landing";

const meta: Meta<typeof Landing> = {
  component: Landing,
  title: "Pages/Landing",
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

type Story = StoryObj<typeof Landing>;

export const LandingPage: Story = {
  args: {},
};
