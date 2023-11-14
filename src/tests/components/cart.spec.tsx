import { act } from "react-dom/test-utils";
import { useDispatch } from "react-redux";

import { fireEvent, render, screen } from "@testing-library/react";

import { Cart } from "@/components/cart";
import {
  decrementProduct,
  deleteProduct,
  incrementProduct,
} from "@/redux/features/cart/data.slice";

import { WrapperComponent } from "../WrapperComponent";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("Card component", () => {
  // Arrange
  const product = {
    id: "1",
    name: "Product 1",
    price: 10,
    quantity: 1,
    description: "blabla",
    photo: "https://example.com/product1.jpg",
  };

  it("Should render product information correctly", () => {
    // Act
    const { getByLabelText, getByText } = render(<Cart {...product} />, {
      wrapper: WrapperComponent,
    });

    // Assert
    expect(getByLabelText("product-name")).toHaveTextContent("Product 1");
    expect(getByLabelText("product-quantity")).toHaveTextContent("1");
    expect(getByLabelText("product-price")).toHaveTextContent("R$10");
    expect(getByText("+")).toBeInTheDocument();
    expect(getByText("-")).toBeInTheDocument();
  });

  it("should dispatch deleteProduct action on close button click", () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    render(
      <Cart
        id="1"
        name="Product 1"
        price={10}
        quantity={1}
        photo="https://example.com/product1.jpg"
      />
    );

    act(() => {
      fireEvent.click(screen.getByLabelText("close"));
    });

    expect(mockDispatch).toHaveBeenCalledWith(deleteProduct("1"));
  });

  it("should dispatch incrementProduct action on + button click", () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    render(
      <Cart
        id="1"
        name="Product 1"
        price={10}
        quantity={1}
        photo="https://example.com/product1.jpg"
      />
    );

    act(() => {
      fireEvent.click(screen.getByText("+"));
    });

    expect(mockDispatch).toHaveBeenCalledWith(incrementProduct("1"));
  });

  it("should dispatch decrementProduct action on - button click", () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    render(
      <Cart
        id="1"
        name="Product 1"
        price={10}
        quantity={2}
        photo="https://example.com/product1.jpg"
      />
    );

    act(() => {
      fireEvent.click(screen.getByText("-"));
    });

    expect(mockDispatch).toHaveBeenCalledWith(decrementProduct("1"));
  });
});
