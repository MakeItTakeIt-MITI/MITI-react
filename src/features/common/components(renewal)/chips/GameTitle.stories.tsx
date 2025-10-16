import type { Meta, StoryObj } from "@storybook/react-vite";
import GameTitle from "./GameTitle.tsx";

const meta: Meta<typeof GameTitle> = {
  component: GameTitle,
  title: "Components/Chips/GameTitle",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof GameTitle>;

export const GameTitleChip: Story = {
  args: {
    title: "[김포 사우/감정] 삼성썬더스 목요일 픽업게임 게스트 모집	",
  },
};

export const GameTitleLengthTestChip: Story = {
  args: {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicssing elit. Quo harum dignissimos laborum aperiam aut, cupiditate natus saepe ipsam dolore eveniet quasi dolores qui illum alias pariatur amet ipsum, minus laboriosam esse optio odit atque modi necessitatibus. Tempora exercitationem, saepe facere natus reiciendis error ab quibusdam quia assumenda eaque alias laudantium harum, ipsa sint minima, voluptatum accusamus! Quas id ab, dolorem cupiditate doloremque nostrum autem dolore.",
  },
};
