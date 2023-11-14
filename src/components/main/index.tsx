import { useState } from "react";
import { useDispatch } from "react-redux";

import { useQuery } from "@tanstack/react-query";

import { IProductsProps } from "@/@types";
import { addProduct } from "@/redux/features/cart/data.slice";
import { api } from "@/services/api";

import { Product } from "../product";
import { Skeleton } from "../skeleton";
import { Toast } from "../toast";

export const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await api.get("/", {
      params: {
        page: 1,
        rows: 8,
        sortBy: "name",
        orderBy: "ASC",
      },
    });
    return response.data.products;
  };

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

  const addToCart = ({
    id,
    description,
    name,
    photo,
    price,
  }: IProductsProps) => {
    const quantity = 1;
    dispatch(addProduct({ id, description, name, photo, price, quantity }));
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  if (error) {
    console.error(error);
    return <p>Erro ao acessar os produtos!</p>;
  }

  if (isLoading) {
    return (
      <div className="flex">
        {Array.from({ length: 8 }, (_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex">
      {products?.map((data: IProductsProps) => {
        return (
          <Product
            key={data.id}
            data-testid="product"
            id={data.id}
            description={data.description}
            name={data.name}
            photo={data.photo}
            price={data.price}
            addToCart={addToCart}
          />
        );
      })}
      <Toast
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        message="Produto Adicionado com sucesso!"
      />
    </div>
  );
};
