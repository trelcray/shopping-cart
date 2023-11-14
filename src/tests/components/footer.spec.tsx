import { render, screen } from "@testing-library/react";

import { Footer } from "../../components/footer";

describe("Footer component", () => {
  it("Should renders correctly", () => {
    render(<Footer />);

    expect(
      screen.getByText("MKS sistemas © Todos os direitos reservados.")
    ).toBeInTheDocument();
  });
});
