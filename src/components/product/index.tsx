import { ShoppingBag } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";

import { ICartProductProps } from "@/@types";
import { formatPrice } from "@/utils";

import { StyledProduct } from "./styled";

export const Product: React.FC<ICartProductProps> = ({
  id,
  description,
  name,
  photo,
  price,
  addToCart,
}) => {
  return (
    <StyledProduct>
      <Image alt="image of product" width={100} height={100} src={photo} />
      <section>
        <p className="title">{name}</p>
        <span>
          <p className="price">{formatPrice(price)}</p>
        </span>
      </section>
      <p className="description">{description}</p>
      <Button
        onClick={() => addToCart({ id, name, description, photo, price })}
        startIcon={<ShoppingBag />}
        variant="contained"
      >
        <p>Comprar</p>
      </Button>
    </StyledProduct>
  );
};
