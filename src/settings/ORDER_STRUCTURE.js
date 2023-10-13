export const ORDER_STRUCTURE = {
  orderNo: "Order Number",
  date: "Date",
  customer: "Customer",
  trackingNo: "Tracking Number",
  status: "Status",
  consignee: "Consignee",
};

export const getKeyTitle = (key) => {
  return key in ORDER_STRUCTURE ? ORDER_STRUCTURE[key] : key;
};
