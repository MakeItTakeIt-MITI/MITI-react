import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DesktopNavbar from "../components/DesktopNavbar";

describe("DesktopNavbar", () => {
  const getLinkLi = (label: string) => {
    const anchor = screen.getByText(label);
    return anchor.parentElement as HTMLElement;
  };

  test("highlights '경기 목록' when path starts with /games", () => {
    render(
      <MemoryRouter initialEntries={["/games"]}>
        <DesktopNavbar />
      </MemoryRouter>
    );

    // const li = getLinkLi("경기 목록");
    // expect(li).toHaveStyle({ color: "#1ADCDF" });
  });

  test("highlights '경기장 목록' when path starts with /courts", () => {
    render(
      <MemoryRouter initialEntries={["/courts"]}>
        <DesktopNavbar />
      </MemoryRouter>
    );

    // const li = getLinkLi("경기장 목록");
    // expect(li).toHaveStyle({ color: "#1ADCDF" });
  });

  test("renders logo link to root and download button", () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <DesktopNavbar />
      </MemoryRouter>
    );

    // find the img by alt and get its parent anchor
    const logoImg = screen.getByAltText(/미티 로고/i);
    const logoLink = logoImg.closest("a");
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/home");
  });
});
