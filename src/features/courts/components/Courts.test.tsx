import { fireEvent, render, screen } from "@testing-library/react";

import SearchContainer from "../../../components/courts/SearchContainer.tsx";
import FilterContainer from "../../../components/courts/FilterContainer.tsx";
import { CITIES } from "../../../constants/locations.ts";

describe("SearchContainer testing UI and logic", () => {
  const handleSearchInput = vi.fn();
  const setInput = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render the input and button elements", () => {
    render(
      <SearchContainer
        handleSearchInput={handleSearchInput}
        setInput={setInput}
      />
    );

    const inputElement =
      screen.getByPlaceholderText("경기장 (주소/경기장 명) 검색");
    const buttonElement = screen.getByRole("button");

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call setInput when typing in the input field", () => {
    render(
      <SearchContainer
        handleSearchInput={handleSearchInput}
        setInput={setInput}
      />
    );

    const inputElement =
      screen.getByPlaceholderText("경기장 (주소/경기장 명) 검색");
    fireEvent.change(inputElement, { target: { value: "new input" } });

    expect(setInput).toHaveBeenCalledWith("new input");
  });

  it("should call function handleSearchInput when the button is clicked", () => {
    render(
      <SearchContainer
        handleSearchInput={handleSearchInput}
        setInput={setInput}
      />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(handleSearchInput).toHaveBeenCalledTimes(1);
  });

  it("should handleSearchInput when Enter key is pressed", () => {
    render(
      <SearchContainer
        handleSearchInput={handleSearchInput}
        setInput={setInput}
      />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.keyDown(buttonElement, {
      key: "Enter",
    });

    expect(handleSearchInput).toHaveBeenCalledTimes(1);
  });
});

describe("FilterContainer testing UI and logic", () => {
  const handleDisplayDropbox = vi.fn();
  const selectedCity = "";
  let displayDropbox = false;
  const handleSelectCity = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render the dropdown element", () => {
    render(
      <FilterContainer
        handleDisplayDropbox={handleDisplayDropbox}
        selectedCity={selectedCity}
        displayDropbox={displayDropbox}
        handleSelectCity={handleSelectCity}
      />
    );

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(screen.getByText("전체")).toBeInTheDocument();
  });

  it("should set displayDropbox as false and not render the cities list on initial load ", () => {
    displayDropbox = false;
    render(
      <FilterContainer
        handleDisplayDropbox={handleDisplayDropbox}
        selectedCity={selectedCity}
        displayDropbox={displayDropbox}
        handleSelectCity={handleSelectCity}
      />
    );
    CITIES.forEach((city) => {
      expect(screen.queryByText(city)).not.toBeInTheDocument();
    });
  });

  it("should display the cities list when the dropdown is opened", () => {
    displayDropbox = true;

    render(
      <FilterContainer
        handleDisplayDropbox={handleDisplayDropbox}
        selectedCity={selectedCity}
        displayDropbox={displayDropbox}
        handleSelectCity={handleSelectCity}
      />
    );

    CITIES.forEach((city) => {
      expect(screen.getByText(city)).toBeInTheDocument();
    });
  });

  it("should call handleSelectCity when a city is clicked and close the dropbox", () => {
    displayDropbox = true;

    render(
      <FilterContainer
        handleDisplayDropbox={handleDisplayDropbox}
        selectedCity={selectedCity}
        displayDropbox={displayDropbox}
        handleSelectCity={handleSelectCity}
      />
    );

    const cityToSelect = CITIES[0];
    const cityElement = screen.getByText(cityToSelect);
    fireEvent.click(cityElement);

    expect(handleSelectCity).toHaveBeenCalledWith(cityToSelect);
  });
});
