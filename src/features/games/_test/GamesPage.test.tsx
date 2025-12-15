import { Games } from "@/pages/games/Games";
import { render, screen } from "@testing-library/react";

describe("GamePage", () => {
  render(<Games />);
  expect(screen.getByRole("main", { hidden: true })).toBeInTheDocument();
});
