import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import FormSubmitButton from "./FormSubmitButton.tsx";

const meta: Meta<typeof FormSubmitButton> = {
  component: FormSubmitButton,
  title: "Inquiries/Components/Form/FormSubmitButton",
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

type Story = StoryObj<typeof FormSubmitButton>;

export const Button: Story = {
  args: {},
};
