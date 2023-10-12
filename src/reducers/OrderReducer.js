export const ordersReducer = (state, action) => {
  switch (action.type) {
    case "DATA_INIT":
      return Object.values(action.data);

    case "DELETE_ORDER":
      return state.filter((order) => order.orderNo !== action.order.orderNo);

    default:
      return state;
  }
};
