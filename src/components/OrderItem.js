import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import OrderListAction from "./OrderListAction";

const OrderItem = ({ order, index, openDetails }) => {
  return (
    <TableRow>
      {Object.entries(order).map(([key, value]) => {
        return <TableCell key={`orderItem_${key}`}>{value}</TableCell>;
      })}
      <TableCell>
        <OrderListAction
          order={order}
          index={index}
          openDetails={openDetails}
        />
      </TableCell>
    </TableRow>
  );
};

export default OrderItem;
