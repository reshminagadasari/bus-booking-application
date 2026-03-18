export const calculateTotal = ({
  seats = [],
  womenDiscount = false,
}) => {
  const seatTotal = seats.reduce((sum, s) => sum + s.price, 0);
  const discount = womenDiscount ? seatTotal * 0.1 : 0;
  return {
    seatTotal,
    discount,
    grandTotal: seatTotal - discount,
  };
};
