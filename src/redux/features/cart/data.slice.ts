import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ICartProductsSliceProps, ICartSliceState } from "@/@types";

const initialState: ICartSliceState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICartProductsSliceProps>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex !== -1) {
        state.products[productIndex].quantity++;
      } else {
        state.products = [
          ...state.products,
          { ...action.payload, quantity: 1 },
        ];
      }
    },
    incrementProduct: (state, action: PayloadAction<string>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (productIndex !== -1) {
        state.products = [
          ...state.products.slice(0, productIndex),
          {
            ...state.products[productIndex],
            quantity: state.products[productIndex].quantity + 1,
          },
          ...state.products.slice(productIndex + 1),
        ];
      }
    },
    decrementProduct: (state, action: PayloadAction<string>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );

      if (productIndex !== -1 && state.products[productIndex].quantity > 0) {
        state.products = [
          ...state.products.slice(0, productIndex),
          {
            ...state.products[productIndex],
            quantity: state.products[productIndex].quantity - 1,
          },
          ...state.products.slice(productIndex + 1),
        ];
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      const productFound = state.products.find(
        (product) => product.id === action.payload
      );
      if (productFound) {
        state.products.splice(state.products.indexOf(productFound), 1);
      }
    },
    finalizePurchase: (state) => {
      state.products = [];
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  incrementProduct,
  decrementProduct,
  finalizePurchase,
} = cartSlice.actions;

export default cartSlice.reducer;
