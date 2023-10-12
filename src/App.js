import React, { useState } from "react";

import OrdersList from "./components/OrdersList";
import OrderDetails from "./components/OrderDetails";
import OrdersContextProvider from "./contexts/OrdersContext";

import Box from "@mui/material/Box";

function App() {
  const [isOrderDetailsOpen, setOrderDetailsOpen] = useState(false);
  const [viewingDetailsOrder, setViewingDetailsOrder] = useState("");

  const openDetails = (order) => {
    setViewingDetailsOrder(order);
    setOrderDetailsOpen(true);
  };

  const closeDetails = () => {
    setOrderDetailsOpen(false);
  }

  console.log('home re-rending')

  return (
    <OrdersContextProvider>
      <Box>
        <OrderDetails isOpen={isOrderDetailsOpen} order={viewingDetailsOrder} closeDetails={closeDetails}/>  {/*Modal*/}
        <OrdersList openDetails={openDetails}/>
      </Box>
    </OrdersContextProvider>
  );
}

export default App;
