import { Dispatch } from "react";

export interface ICartProps {
  id: string;
  name: string;
  quantity: number;
  price: number;
  photo: string;
}

export interface IProductsProps {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: number;
}

export interface ICartProductProps {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: number;
  addToCart: (data: IProductsProps) => void;
}

export interface ICartProductsSliceProps {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: number;
  quantity: number;
}

interface ICartSliceState {
  products: ICartProductsSliceProps[];
}

export interface IToastProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  message: string;
}
