import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import FormTitleInput from "./FormTitleInput.tsx";
import { FormProvider, useForm } from "react-hook-form";

const meta: Meta<typeof FormTitleInput> = {
  component: FormTitleInput,
  title: "Inquiries/Components/Form/FormTitleInput",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      const methods = useForm();
      return (
        <MemoryRouter>
          <div className="w-[800px]">
            <FormProvider {...methods}>
              <Story />
            </FormProvider>
          </div>
        </MemoryRouter>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof FormTitleInput>;

export const Form: Story = {
  args: {},
};
