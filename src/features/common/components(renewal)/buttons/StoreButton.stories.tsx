import type { Meta, StoryObj } from "@storybook/react-vite";
import StoreButton from "./StoreButton.tsx";

const meta: Meta<typeof StoreButton> = {
  component: StoreButton,
  title: "Components/Buttons/StoreButton",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof StoreButton>;

export const ActiveGooglePlayStoreMd: Story = {
  render: () => <StoreButton size="md" type="google" status="active" />,
};

export const InactiveGooglePlayStoreMd: Story = {
  render: () => <StoreButton size="md" type="google" status="inactive" />,
};

export const ActiveGooglePlayStoreSm: Story = {
  render: () => <StoreButton size="sm" type="google" status="active" />,
};

export const InactiveGooglePlayStoreSm: Story = {
  render: () => <StoreButton size="sm" type="google" status="inactive" />,
};

export const ActiveAppleStoreMd: Story = {
  render: () => <StoreButton size="md" type="apple" status="active" />,
};
export const InactiveAppleStoreMd: Story = {
  render: () => <StoreButton size="md" type="apple" status="inactive" />,
};

export const ActiveAppleStoreSm: Story = {
  render: () => <StoreButton size="sm" type="apple" status="active" />,
};
export const InactiveAppleStoreSm: Story = {
  render: () => <StoreButton size="sm" type="apple" status="inactive" />,
};
