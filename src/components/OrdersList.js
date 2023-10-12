import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { OrdersContext } from "../contexts/OrdersContext";
import OrderItem from "./OrderItem";

const OrdersList = ({ openDetails }) => {
  const { orders } = useContext(OrdersContext);

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Order Number</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Tracking Number</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Consignee</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <OrderItem key={index} order={order} openDetails={openDetails}/>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default OrdersList;
