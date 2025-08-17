import type { Meta, StoryObj } from "@storybook/react-vite";
import CourtInfoContainer from "./CourtInfoContainer.tsx";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof CourtInfoContainer> = {
  component: CourtInfoContainer,
  title: "Courts/Components/CourtInfoContainer",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div
          style={{
            scrollbarWidth: "thin",
          }}
          className="w-[410px]  border"
        >
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

type Story = StoryObj<typeof CourtInfoContainer>;

export const CourtInfoContainerExample: Story = {
  args: {
    year: 2023,
    month: 3,
    day: 15,
    day_type: "수",
    title: "농구 경기",
    starttime: "10:00",
    endtime: "12:00",
    min_participants: "2",
    max_participants: "10",
    fee: 10000,
  },
};
