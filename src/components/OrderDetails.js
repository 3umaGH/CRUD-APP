import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { OrdersContext } from "../contexts/OrdersContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const OrderDetails = ({ order, isOpen, closeDetails }) => {
  const { dispatch } = useContext(OrdersContext);
  const [inputValues, setInputValues] = useState(); // new order data

  useEffect(() => {
    setInputValues(order);
  }, [order]);


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent browser default submit redirect
    
    dispatch({ type: "UPDATE_ORDER", order: order, newOrder: inputValues});
    closeDetails();

  };

  const handleChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.id]: target.value,
    });

    console.log(inputValues);
  };

  return (
    <Modal
      open={isOpen}
      onClose={closeDetails}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        style={{
          textAlign: "center",
        }}
        sx={style}
      >
        <form onSubmit={handleSubmit}>
          <Typography id="modal-title" variant="h6" component="h2">
            Shipment Details
          </Typography>

          <TextField
            required
            sx={{ mt: 3, width: 1 }}
            label="Order Number"
            id="orderNo"
            defaultValue={order.orderNo}
            onChange={handleChange}
          />

          <TextField
            required
            sx={{ mt: 3, width: 1 }}
            label="Date"
            id="date"
            defaultValue={order.date}
            onChange={handleChange}
          />
          <TextField
            required
            sx={{ mt: 3, width: 1 }}
            label="Customer"
            id="customer"
            defaultValue={order.customer}
            onChange={handleChange}
          />
          <TextField
            required
            sx={{ mt: 3, width: 1 }}
            label="Tracking Number"
            id="trackingNo"
            defaultValue={order.trackingNo}
            onChange={handleChange}
          />
          <TextField
            required
            sx={{ mt: 3, width: 1 }}
            label="Status"
            id="status"
            defaultValue={order.status}
            onChange={handleChange}
          />
          <TextField
            required
            sx={{ mt: 3, width: 1 }}
            label="Consignee"
            id="consignee"
            defaultValue={order.consignee}
            onChange={handleChange}
          />

          <Button
            sx={{ m: 1, mt: 3 }}
            style={{
              width: "80px",
              height: "40px",
            }}
            variant="contained"
            color="primary"
            size="small"
            type="submit"
          >
            Save
          </Button>

          <Button
            sx={{ m: 1, mt: 3 }}
            style={{
              width: "80px",
              height: "40px",
            }}
            variant="contained"
            color="error"
            size="small"
            onClick={() => {
              dispatch({ type: "DELETE_ORDER", order: order });
              closeDetails();
            }}
          >
            Delete
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default OrderDetails;
