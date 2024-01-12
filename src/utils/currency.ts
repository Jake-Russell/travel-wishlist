export const formatAsCurrency = (
  value: number,
  currencySymbol: string = "GBP"
) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currencySymbol,
  }).format(value);
};
