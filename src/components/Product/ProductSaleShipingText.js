import { useState } from "react";
import {
  ProductSaleShipingTextCountiner,
  ProductSaleShipingTextButton,
  ProductSaleShipingTextButtonTitle,
  ProductSaleShipingTextContent,
  ProductSaleShipingTextContentLine,
} from "../styles/Product/Product.styled";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const ProductSaleShipingText = () => {
  const [showShipment, setShowShipment] = useState(false);

  const handleShowShiping = () => {
    setShowShipment(!showShipment);
  };
  return (
    <ProductSaleShipingTextCountiner>
      <ProductSaleShipingTextButton onClick={handleShowShiping}>
        <ProductSaleShipingTextButtonTitle>
          Free Shipping on all orders $49 and up*
        </ProductSaleShipingTextButtonTitle>
        {showShipment ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </ProductSaleShipingTextButton>
      {showShipment && (
        <ProductSaleShipingTextContent>
          *Offer applies to standard shipping to one location in the contiguous
          U.S. A $10 shipping surcharge on domestic orders applies to customers
          living outside the contiguous United States: Hawaii, Alaska.
        </ProductSaleShipingTextContent>
      )}
      <ProductSaleShipingTextContentLine />
    </ProductSaleShipingTextCountiner>
  );
};

export default ProductSaleShipingText;
