import MobileHero from "../../features/landing/components/MobileHero.tsx";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";

vi.mock("@splinetool/react-spline", () => ({
  default: (props: Record<string, any>) => (
    <div data-testid="spline-mock" aria-label={props["aria-label"]} />
  ),
}));

describe("MobileHero Component", () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <MobileHero />
      </BrowserRouter>
    );

  it("renders the main headings correctly (by testId)", () => {
    renderComponent();
    expect(screen.getByTestId("mobile-hero-main-heading")).toHaveTextContent(
      /오늘 퇴근하고/i
    );
    expect(screen.getByTestId("mobile-hero-sub-heading")).toHaveTextContent(
      /농구 어떠세요\?/i
    );
  });

  it("has the correct aria-label on the Spline component", () => {
    renderComponent();
    const spline = screen.getByTestId("spline-mock");
    expect(spline).toHaveAttribute(
      "aria-label",
      "3D 농구 애니메이션 인터랙티브 장면"
    );
  });

  it("renders the call-to-action link with correct accessibility", () => {
    renderComponent();
    const link = screen.getByRole("link", {
      name: /오늘 참여 가능한 경기/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/games");
  });

  it("displays the introductory badge", () => {
    renderComponent();
    expect(screen.getByText("지금 시작하세요!")).toBeInTheDocument();
  });
});
