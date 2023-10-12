import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { OrdersContext } from "../contexts/OrdersContext";
import { Typography } from "@mui/material";



const OrderDetails = ({ isOpen, closeDetails}) => {

  return (
    <Modal
      open={isOpen}
      onClose={closeDetails}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        {/*Content here*/}
      </Box>
    </Modal>
  );
};



export default OrderDetails;
