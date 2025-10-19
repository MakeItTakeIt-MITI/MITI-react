import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import InquiryForm from "./InquiryForm.tsx";

const meta: Meta<typeof InquiryForm> = {
  component: InquiryForm,
  title: "Inquiries/Components/Form/InquiryForm",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-[800px]">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof InquiryForm>;

export const Form: Story = {
  args: {},
};
