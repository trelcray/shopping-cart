import { render, screen } from "@testing-library/react";

import { Header } from "../../components/header";
import { WrapperComponent } from "../WrapperComponent";

describe("Header component", () => {
  it("Should renders correctly", () => {
    render(<Header />, { wrapper: WrapperComponent });

    expect(screen.getByText("MKS")).toBeInTheDocument();
    expect(screen.getByText("Sistemas")).toBeInTheDocument();
  });
});
