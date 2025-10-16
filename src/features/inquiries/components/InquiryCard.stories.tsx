import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import InquiryCard from "./InquiryCard.tsx";

const meta: Meta<typeof InquiryCard> = {
  component: InquiryCard,
  title: "Inquiries/Components/InquiryCard",
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

type Story = StoryObj<typeof InquiryCard>;

export const InquiryAnswered: Story = {
  args: {
    isAnswered: true,
    year: "2025",
    month: "05",
    day: "19",
    title: "낵네임 변경",
    nickname: "MITI",
  },
};

export const InquiryUnAnswered: Story = {
  args: {
    isAnswered: false,
    year: "2025",
    month: "05",
    day: "19",
    title: "낵네임 변경",
    nickname: "MITI",
  },
};
