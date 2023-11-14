import { render, screen } from "@testing-library/react";

import { Product } from "@/components/product";

const mockProduct = {
  id: "1",
  name: "Product 1",
  description: "Description of Product 1",
  photo: "https://example.com/product1.jpg",
  price: 10,
};

describe("Product component", () => {
  it("renders product details and calls addToCart on button click", () => {
    const mockAddToCart = jest.fn();

    render(<Product {...mockProduct} addToCart={mockAddToCart} />);

    expect(screen.getByAltText("image of product")).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Description of Product 1")).toBeInTheDocument();
    expect(screen.getByText("R$10")).toBeInTheDocument();
  });
});
