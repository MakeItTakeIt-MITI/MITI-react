import type { Meta, StoryObj } from "@storybook/react-vite";
import { Games } from "./Games.tsx";

const meta: Meta<typeof Games> = {
  component: Games,
  title: "Pages/Games",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Games>;

export const GamesPage: Story = {
  args: {},
};
