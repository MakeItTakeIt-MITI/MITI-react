import type { Meta, StoryObj } from "@storybook/react-vite";
import CourtsListContainer from "./CourtsListContainer.tsx";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof CourtsListContainer> = {
  component: CourtsListContainer,
  title: "Components/Courts/CourtsListContainer",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div
          style={{
            scrollbarWidth: "thin",
          }}
          className="w-[880px] h-[698px] overflow-y-auto border"
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

type Story = StoryObj<typeof CourtsListContainer>;

export const CourtsListContainerExample: Story = {};
