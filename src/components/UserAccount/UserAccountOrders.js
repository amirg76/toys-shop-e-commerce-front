import { useEffect, useState } from "react";
import { UserAccountOrdersCountiner } from "../styles/UserAccount/UserAccountOrders.styled";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box } from "@mui/material";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";
import {
  UserAccountContentHeader,
  UserAccountContentHeaderText,
} from "../styles/UserAccount/UserAccount.styled";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUser } from "../../store/thunk-slice";
import { mobile } from "../../responsive";
const UserAccountOrders = () => {
  const dispatch = useDispatch();
  const stateOrders = useSelector((state) => state.orders.ordersArray);
  const [pageSize, setPageSize] = useState(5);
  const columns = [
    { field: "_id", headerName: "Order Id", width: 350 },
    { field: "amount", headerName: "Amount", width: 350 },
    { field: "status", headerName: "Status", width: 350 },
    {
      field: "createdAt",
      headerName: "Order Date",
      width: 350,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },
    // { field: "_id", headerName: "Order Id", width: 250 },
    // { field: "amount", headerName: "Amount", width: 10 },
    // { field: "status", headerName: "Status", width: 10 },
    // {
    //   field: "createdAt",
    //   headerName: "Order Date",
    //   width: 10,
    //   renderCell: (params) =>
    //     moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    // },
  ];
  useEffect(() => {
    dispatch(getOrdersByUser());
  }, [dispatch]);

  return (
    <UserAccountOrdersCountiner>
      <UserAccountContentHeader>
        <UserAccountContentHeaderText>My Orders</UserAccountContentHeaderText>
        <ShoppingCartCheckoutIcon style={{ margin: "0.2rem 0 0 0.5rem" }} />
      </UserAccountContentHeader>

      <Box
        sx={{
          height: 400,
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <DataGrid
          checkboxSelection
          autoHeight
          columns={columns}
          rows={stateOrders}
          getRowId={(row) => row._id}
          pageSizeOptions={[5, 10, 20, 100]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          sx={{
            ".MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold !important",
              overflow: "visible !important",
            },
          }}
        />
      </Box>
    </UserAccountOrdersCountiner>
  );
};

export default UserAccountOrders;
