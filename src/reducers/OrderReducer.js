export const ordersReducer = (state, action) => {
  switch (action.type) {
    case "DATA_INIT":
      return Object.values(action.data);

    case "DELETE_ORDER":
      return state.filter((order) => order !== action.order);

    case "EDIT_ORDER":
      return state.filter((order) => order !== action.order);

    case "UPDATE_ORDER":
      return Object.values(state).map((order) => {
        if (order === action.order) return action.newOrder;
        else return order; // Iterate through state, and if we find correct order, we update it.
      });

    default:
      return state;
  }
};
