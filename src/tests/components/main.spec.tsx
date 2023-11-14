import React from "react";

import { useQuery } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";

import { Main } from "@/components/main";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
}));

describe("Main component", () => {
  const mockUseQuery = useQuery as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the loading state", async () => {
    mockUseQuery.mockReturnValue({ isLoading: true });

    render(<Main />);

    const skeletonElements = screen.getAllByLabelText("skeleton");

    expect(skeletonElements).toHaveLength(8);
  });

  it("should render an error message", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});

    mockUseQuery.mockReturnValue({ error: new Error("Simulated error") });

    render(<Main />);

    const errorMessage = screen.getByText(/Erro ao acessar os produtos/i);
    expect(errorMessage).toBeInTheDocument();

    jest.restoreAllMocks();
  });
});
