import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card.tsx";



const meta: Meta<typeof Card> = {
  component: Card,
  title: "Games/Card",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

};

export default meta;
type Story = StoryObj<typeof Card>;

export const DesktopGameCard: Story = {
  args: {},
};
