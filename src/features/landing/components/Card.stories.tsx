import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import Card from "./Card.tsx";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Landing/Components/Card",
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

type Story = StoryObj<typeof Card>;

export const LandingCard: Story = {
  args: {
    title: "오늘 함께 플레이할 게스트가 필요하세요?",
    card_header: "게스트 모집 가이드",
    button_text: "게스트 모집 가이드 보러가기",
  },
};
