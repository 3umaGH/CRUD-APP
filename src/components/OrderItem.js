import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import OrderListAction from "./OrderListAction";

const OrderItem = ({order, index, openDetails,}) => {
  
  return (
    <TableRow key={index}>
      <TableCell>{order.orderNo}</TableCell>
      <TableCell>{order.date}</TableCell>
      <TableCell>{order.customer}</TableCell>
      <TableCell>{order.trackingNo}</TableCell>
      <TableCell>{order.status}</TableCell>
      <TableCell>{order.consignee}</TableCell>
      <TableCell>
        <OrderListAction order={order} index={index} openDetails={openDetails} />
      </TableCell>
    </TableRow>
  );
};

export default OrderItem;
