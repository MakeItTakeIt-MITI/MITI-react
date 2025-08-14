import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { CourtDetailGameCard } from "./CourtDetailGameCard.tsx";

const meta: Meta<typeof CourtDetailGameCard> = {
  component: CourtDetailGameCard,
  title: "Components/Courts/CourtDetailGameCard",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div
          style={{
            width: "410px",
            backgroundColor: "#141414",
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

type Story = StoryObj<typeof CourtDetailGameCard>;

export const CourtDetailGameCardExample: Story = {
  args: {
    title: "더모스트 바스켓볼 동탄오산점",
    address: "COUT ADDRESS",
    address_detail: "COUT ADDRESS DETAIL",
    distance: 800.0,
    info: `더모스트 바스켓볼 수지점입니다. 
평일 오전, 오후 유소년 및 아마추어 스킬트레이닝 수업이 진행되며, 학부모께서 훈련을 참관할  수 있는 관람석이 있습니다. 

흡연은 실외에서 부탁드리며, 실내에서는 준비된 실내화를 착용해주세요.`,
  },
};
