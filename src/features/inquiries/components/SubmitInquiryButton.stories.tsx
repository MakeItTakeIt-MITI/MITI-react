import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import SubmitInquiryButton from "./SubmitInquiryButton.tsx";

const meta: Meta<typeof SubmitInquiryButton> = {
  component: SubmitInquiryButton,
  title: "Inquiries/Components/SubmitInquiryButton",
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

type Story = StoryObj<typeof SubmitInquiryButton>;

export const FaqPage: Story = {
  args: {},
};
