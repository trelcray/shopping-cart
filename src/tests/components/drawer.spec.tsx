import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Drawer } from "@/components/drawer";

import { WrapperComponent } from "../WrapperComponent";

describe("Drawer component", () => {
  it("should render the Drawer component correctly", async () => {
    render(<Drawer />, { wrapper: WrapperComponent });

    const cartButton = screen.getByLabelText("shop button");
    expect(cartButton).toBeInTheDocument();

    userEvent.click(cartButton);

    await waitFor(() => {
      const drawerTitle = screen.getByText(/carrinho de compras/i);
      expect(drawerTitle).toBeInTheDocument();
    });
  });

  it("should render empty cart message when no products are provided", async () => {
    render(<Drawer />, { wrapper: WrapperComponent });

    const cartButton = screen.getByLabelText("shop button");
    expect(cartButton).toBeInTheDocument();

    userEvent.click(cartButton);

    await waitFor(() => {
      const emptyCartMessage = screen.getByText(/carrinho vazio/i);
      expect(emptyCartMessage).toBeInTheDocument();
    });
  });
});
