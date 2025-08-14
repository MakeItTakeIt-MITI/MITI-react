import type { Meta, StoryObj } from "@storybook/react-vite";
import CourtInfoContainer from "./CourtInfoContainer.tsx";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof CourtInfoContainer> = {
  component: CourtInfoContainer,
  title: "Components/Courts/CourtInfoContainer",
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

export const CourtInfoContainerExample: Story = {};
