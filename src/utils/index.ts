export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const formattedPrice = formatter.format(price);
  const newPrice = formattedPrice.slice(0, 2) + formattedPrice.slice(3);
  return newPrice.slice(0, -3);
};
