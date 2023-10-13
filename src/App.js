import React, { useState } from "react";

import OrdersList from "./components/OrdersList";
import OrderDetails from "./components/OrderDetails";
import OrdersContextProvider from "./contexts/OrdersContext";

import Container from "@mui/material/Container";

function App() {
  const [isOrderDetailsOpen, setOrderDetailsOpen] = useState(false);
  const [viewingDetailsOrder, setViewingDetailsOrder] = useState("");

  const openDetails = (order) => {
    setViewingDetailsOrder(order);
    setOrderDetailsOpen(true);
  };

  const closeDetails = () => {
    setOrderDetailsOpen(false);
  };

  console.log("home re-rendering");

  return (
    <OrdersContextProvider>
     
        <Container maxWidth="100%">
          <OrderDetails
            isOpen={isOrderDetailsOpen}
            order={viewingDetailsOrder}
            closeDetails={closeDetails}
          />
          {/*Modal*/}
          <OrdersList openDetails={openDetails} />
      </Container>

    </OrdersContextProvider>
  );
}

export default App;
