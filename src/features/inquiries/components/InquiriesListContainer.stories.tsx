import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import InquiriesListContainerComponent from "./InquiriesListContainer.tsx";

const meta: Meta<typeof InquiriesListContainerComponent> = {
  component: InquiriesListContainerComponent,
  title: "Inquiries/Components/InquiriesListContainer",
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

type Story = StoryObj<typeof InquiriesListContainerComponent>;

export const InquiriesListContainer: Story = {
  args: {},
};
