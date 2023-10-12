import React, { createContext, useEffect, useReducer } from "react";
import { ordersReducer } from "../reducers/OrderReducer";

import LOCAL_DATA from "../data/local_orders.json";

export const OrdersContext = createContext();

const OrdersContextProvider = (props) => {
  const [orders, dispatch] = useReducer(ordersReducer, []);
  useEffect(() => {
    //Fetch local data and use reducer to set contexts initial value
    dispatch({
        type: "DATA_INIT",
        data: {...LOCAL_DATA}
    })

  }, []);

  return (
    <OrdersContext.Provider value={{ orders, dispatch }}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersContextProvider;
