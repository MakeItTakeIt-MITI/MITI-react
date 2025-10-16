import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import Faq from "./Faq.tsx";

const meta: Meta<typeof Faq> = {
  component: Faq,
  title: "Pages/Faq",
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

type Story = StoryObj<typeof Faq>;

export const FaqPage: Story = {
  args: {},
};
