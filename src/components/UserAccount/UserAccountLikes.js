import React from "react";

import { useEffect, useState } from "react";
import { UserAccountOrdersCountiner } from "../styles/UserAccount/UserAccountOrders.styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import {
  UserAccountContentHeader,
  UserAccountContentHeaderText,
  UserAccountLikesImgCountiner,
  UserAccountLikesImg,
} from "../styles/UserAccount/UserAccount.styled";
import { useDispatch, useSelector } from "react-redux";
import { getLikesByUser } from "../../store/thunk-slice";

const UserAccountLikes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stateLikes = useSelector((state) => state.likes.likesArray);
  const [pageSize, setPageSize] = useState(5);
  const [productClick, setProductClick] = useState({
    isClick: false,
    number: 0,
  });

  const columns = [
    { field: "productId", headerName: "Product Id", width: 350 },
    { field: "price", headerName: "Price", width: 350 },
    { field: "shortTitle", headerName: "Short Title", width: 350 },
    {
      field: "",
      width: 350,
      renderCell: (params) => {
        return (
          <UserAccountLikesImgCountiner>
            <UserAccountLikesImg src={params.row.img} alt="" />
          </UserAccountLikesImgCountiner>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(getLikesByUser());
  }, []);
  useEffect(() => {
    if (productClick.isClick) navigate(`/product/${productClick.number}`);
  }, [productClick]);

  const handleRowClick = (productId) => {
    setProductClick({
      isClick: true,
      number: productId,
    });
  };

  return (
    <UserAccountOrdersCountiner>
      <UserAccountContentHeader>
        <UserAccountContentHeaderText>My Likes</UserAccountContentHeaderText>
        <FavoriteIcon style={{ margin: "0.2rem 0 0 0.5rem" }} />
      </UserAccountContentHeader>

      <Box
        sx={{
          height: 400,
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <DataGrid
          disableSelectionOnClick={true}
          checkboxSelection
          autoHeight
          columns={columns}
          rows={stateLikes}
          getRowId={(row) => row._id}
          pageSizeOptions={[5, 10, 20, 100]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onRowClick={(rowData) => handleRowClick(rowData.row.productId)}
          sx={{
            ".MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold !important",
              overflow: "visible !important",
            },
            "& .MuiDataGrid-row:hover": {
              cursor: "pointer",
            },
          }}
        />
      </Box>

      {/* {productClick.isClick
        ? navigate(`/product/${productClick.number}`)
        : null} */}
    </UserAccountOrdersCountiner>
  );
};

export default UserAccountLikes;
