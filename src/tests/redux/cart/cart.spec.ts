import { ICartSliceState } from "@/@types";
import { cartSlice } from "@/redux/features/cart/data.slice";

describe("redux cart states", () => {
  let cartState: ICartSliceState;

  beforeEach(() => {
    cartState = cartSlice.reducer(undefined, { type: "INITIAL_ACTION" });
  });

  it("should add new product to cart", () => {
    const productToAdd = {
      id: "1",
      name: "Product 1",
      price: 10,
      quantity: 1,
      description: "blabla",
      photo: "https://example.com/product1.jpg",
    };

    cartState = cartSlice.reducer(
      cartState,
      cartSlice.actions.addProduct(productToAdd)
    );

    expect(cartState).toEqual({
      products: [productToAdd],
    });
  });

  it("should remove product from cart", () => {
    const productToAdd = {
      id: "1",
      name: "Product 1",
      price: 10,
      quantity: 1,
      description: "blabla",
      photo: "https://example.com/product1.jpg",
    };

    cartState = cartSlice.reducer(
      cartState,
      cartSlice.actions.addProduct(productToAdd)
    );
    cartState = cartSlice.reducer(
      cartState,
      cartSlice.actions.deleteProduct(productToAdd.id)
    );

    expect(cartState).toEqual({ products: [] });
  });

  it("should increment quantity of a product from cart", () => {
    const productToAdd = {
      id: "1",
      name: "Product 1",
      price: 10,
      quantity: 1,
      description: "blabla",
      photo: "https://example.com/product1.jpg",
    };

    cartState = cartSlice.reducer(
      cartState,
      cartSlice.actions.addProduct(productToAdd)
    );
    cartState = cartSlice.reducer(
      cartState,
      cartSlice.actions.incrementProduct(productToAdd.id)
    );

    expect(cartState).toEqual({
      products: [
        {
          ...productToAdd,
          quantity: 2,
        },
      ],
    });
  });

  it("should decrement quantity of a product from cart", () => {
    const productToAdd = {
      id: "1",
      name: "Product 1",
      price: 10,
      quantity: 1,
      description: "blabla",
      photo: "https://example.com/product1.jpg",
    };

    cartState = cartSlice.reducer(
      cartState,
      cartSlice.actions.addProduct(productToAdd)
    );
    cartState = cartSlice.reducer(
      cartState,
      cartSlice.actions.incrementProduct(productToAdd.id)
    );
    cartState = cartSlice.reducer(
      cartState,
      cartSlice.actions.decrementProduct(productToAdd.id)
    );

    expect(cartState).toEqual({
      products: [
        {
          ...productToAdd,
          quantity: 1,
        },
      ],
    });
  });
  it("should not decrement quantity below zero", () => {
    const productToAdd = {
      id: "1",
      name: "Product 1",
      price: 10,
      quantity: 1,
      description: "blabla",
      photo: "https://example.com/product1.jpg",
    };

    cartState = cartSlice.reducer(
      cartState,
      cartSlice.actions.addProduct(productToAdd)
    );
    cartState = cartSlice.reducer(
      cartState,
      cartSlice.actions.decrementProduct(productToAdd.id)
    );

    expect(cartState).toEqual({
      products: [
        {
          ...productToAdd,
          quantity: 0,
        },
      ],
    });
  });
});
