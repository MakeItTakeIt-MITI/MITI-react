import type { Meta, StoryObj } from "@storybook/react-vite";
import CourtsCard from "./CourtsCard.tsx";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof CourtsCard> = {
  component: CourtsCard,
  title: "Components/Courts/CourtsCard",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div
          style={{
            width: "800px",
            backgroundColor: "#141414",
            padding: "20px",
          }}
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

type Story = StoryObj<typeof CourtsCard>;

export const CourtsCardExample: Story = {
  args: {
    title: "COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1",
    address: "COUT ADDRESS",
    address_detail: "COUT ADDRESS DETAIL",
    distance: 800.0,
  },
};

export const CourtsCardTruncateExample: Story = {
  args: {
    title:
      "COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1 COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1 COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1 COURT NAME LINE TRUNCATE : TRUE / MAX LINE : 1",
    address: "COUT ADDRESS",
    address_detail: "COUT ADDRESS DETAIL",
    distance: 800.0,
  },
};
