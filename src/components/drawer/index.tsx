import { useState } from "react";

import { Close, ShoppingCart } from "@mui/icons-material";
import { Drawer as MuiDrawer } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton, Typography } from "@mui/material";

import { finalizePurchase } from "@/redux/features/cart/data.slice";

import { useAppDispatch, useAppSelector } from "../../hooks/useAppSelector";
import { Cart } from "../cart";
import { Toast } from "../toast";
import { StyledDrawer } from "./styled";

export function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const dispatch = useAppDispatch();

  const handlePurchase = () => {
    dispatch(finalizePurchase());
    setIsToastOpen(true);
    setTimeout(() => {
      setIsToastOpen(false);
    }, 3000);
    setIsOpen(false);
  };

  const { products } = useAppSelector((state) => state.data);
  const total = products.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  const quantity = products.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="contained"
        color="info"
        aria-label="shop button"
        startIcon={<ShoppingCart color="secondary" />}
      >
        <Typography color="secondary">{quantity}</Typography>
      </Button>
      <MuiDrawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <StyledDrawer>
          <div>
            <div className="header">
              <p>Carrinho de compras</p>
              <IconButton
                color="info"
                aria-label="close"
                onClick={() => setIsOpen(false)}
              >
                <Close />
              </IconButton>
            </div>
            <div className="scroll-y content">
              {products.length > 0 ? (
                products.map((data) => {
                  const total = data.price * data.quantity;
                  return (
                    <Cart
                      key={data.id}
                      id={data.id}
                      name={data.name}
                      price={total}
                      quantity={data.quantity}
                      photo={data.photo}
                    />
                  );
                })
              ) : (
                <p className="empty">Carrinho vazio!</p>
              )}
            </div>
          </div>
          <div className="container">
            <div className="price">
              <p>total:</p>
              <p>R${total}</p>
            </div>
            <Button
              className="confirm"
              variant="contained"
              color="secondary"
              onClick={handlePurchase}
            >
              <p>Finalizar Compra</p>
            </Button>
          </div>
        </StyledDrawer>
      </MuiDrawer>
      <Toast
        isOpen={isToastOpen}
        setIsOpen={setIsToastOpen}
        message="Compra efetuada com sucesso, Obrigado pela preferência!"
      />
    </>
  );
}
