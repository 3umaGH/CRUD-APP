import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { OrdersContext } from "../contexts/OrdersContext";
import OrderItem from "./OrderItem";

import { getKeyTitle } from "../settings/ORDER_STRUCTURE";

const OrdersList = ({ openDetails }) => {
  const { orders } = useContext(OrdersContext);

  return (
    <React.Fragment>
      {orders.length > 0 && (
        <Table size="small">
          <TableHead>
            <TableRow>
              {Object.keys(orders[0]).map((key, index) => {
                return (
                  <TableCell key={`column_${key}`}>
                    {getKeyTitle(key)}
                  </TableCell>
                );
              })}
              <TableCell>Actions</TableCell>
              {/*For buttons*/}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <OrderItem
                key={`row_${index}`}
                order={order}
                openDetails={openDetails}
              />
            ))}
          </TableBody>
        </Table>
      )}
    </React.Fragment>
  );
};

export default OrdersList;
