import { Close } from "@mui/icons-material";
import { Divider, IconButton, Card as MuiCard } from "@mui/material";
import Image from "next/image";

import { ICartProps } from "@/@types";
import { useAppDispatch } from "@/hooks/useAppSelector";
import {
  decrementProduct,
  deleteProduct,
  incrementProduct,
} from "@/redux/features/cart/data.slice";
import { formatPrice } from "@/utils";

import { StyledCard } from "./styled";

export const Cart: React.FC<ICartProps> = ({
  id,
  name,
  price,
  quantity,
  photo,
}) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };

  const handleAddQuantity = (id: string) => {
    dispatch(incrementProduct(id));
  };

  const handleRemoveQuantity = (id: string) => {
    dispatch(decrementProduct(id));
  };

  return (
    <StyledCard aria-label="product-name">
      <IconButton
        onClick={() => handleDelete(id)}
        className="close"
        color="info"
        aria-label="close"
      >
        <Close />
      </IconButton>
      <MuiCard className="card">
        <div className="info">
          <Image alt="image of product" width={100} height={100} src={photo} />
          <p className="title">{name}</p>
          <div className="mobileDirection">
            <div className="count">
              <p className="qtd">Qtd:</p>
              <div className="buttons">
                <button
                  onClick={() => handleRemoveQuantity(id)}
                  disabled={quantity === 1}
                >
                  <p>-</p>
                </button>
                <Divider className="left" orientation="vertical" />
                <p className="quantity" aria-label="product-quantity">
                  {quantity}
                </p>
                <Divider className="right" orientation="vertical" />
                <button onClick={() => handleAddQuantity(id)}>
                  <p>+</p>
                </button>
              </div>
            </div>
            <p className="price" aria-label="product-price">
              {formatPrice(price)}
            </p>
          </div>
        </div>
      </MuiCard>
    </StyledCard>
  );
};
