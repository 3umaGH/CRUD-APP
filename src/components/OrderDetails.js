import React, { useContext, useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { OrdersContext } from "../contexts/OrdersContext";

import { getKeyTitle } from "../settings/ORDER_STRUCTURE";

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
  const [inputValues, setInputValues] = useState(); // New order data

  useEffect(() => {
    // Using useEffect hook to set form data when component receives it.
    setInputValues(order);
  }, [order]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent browser default submit redirect

    dispatch({ type: "UPDATE_ORDER", order: order, newOrder: inputValues });
    closeDetails();
  };

  const handleChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.id]: target.value,
    });
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

          {Object.keys(order).map((key) => {
            const value = order[key];

            return (
              <TextField
                key={key}
                required
                sx={{ mt: 3, width: 1 }}
                label={getKeyTitle(key)}
                id={key}
                defaultValue={value}
                onChange={handleChange}
              />
            );
          })}

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
