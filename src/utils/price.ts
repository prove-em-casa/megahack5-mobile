export const formatPrice = (value: number | undefined) => {
  const price = value || 0;

  return `R$${price.toFixed(2).replace(/\./, ',')}`;
};
