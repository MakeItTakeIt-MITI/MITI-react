import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import CourtDetailsGameCard from "./CourtDetailsGameCard.tsx";

const meta: Meta<typeof CourtDetailsGameCard> = {
  component: CourtDetailsGameCard,
  title: "Courts/Components/CourtDetailsGameCard",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-[410px] ">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof CourtDetailsGameCard>;

export const CourtDetailsGameCardExample: Story = {
  args: {
    title: "Sample Game Title",
    starttime: "10:00 AM",
    endtime: "11:00 AM",
    min_participants: "2",
    max_participants: "10",
    fee: 5000,
  },
};
