import React, { useContext } from "react";

import { Button } from "@mui/material";
import Container from "@mui/material/Box";

import DeleteIcon from "@mui/icons-material/Delete";
import EditSharpIcon from "@mui/icons-material/EditSharp";

import { OrdersContext } from "../contexts/OrdersContext";

const OrderListAction = ({ order, openDetails}) => {
  const { dispatch } = useContext(OrdersContext);

  return (
    <Container sx={{ display: "flex" }}>
      <Button
        sx={{ m: 0.5 }}
        variant="contained"
        color="primary"
        size="small"
        startIcon={<EditSharpIcon style={{ marginLeft: 9 }} />}
        onClick={() => {
          openDetails(order);
        }}
      ></Button>

      <Button
        sx={{ m: 0.5 }}
        variant="contained"
        color="error"
        size="small"
        startIcon={<DeleteIcon style={{ marginLeft: 9 }} />}
        onClick={() => {
          dispatch({ type: "DELETE_ORDER", order: order });
        }}
      ></Button>
    </Container>
  );
};

export default OrderListAction;
