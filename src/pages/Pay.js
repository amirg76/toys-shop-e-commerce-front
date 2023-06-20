// import StripeCheckout from "react-stripe-checkout";
import Logo from "../components/Logo";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  PayContainer,
  PayButton,
} from "../components/styles/Payment/payment.styled";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5000/payment", {
          tokenId: stripeToken.id,
          amount: 2000,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <PayContainer>
      <StripeCheckout
        name="Shop&Fun&Kids"
        image="assets/images/logo.png"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      >
        <PayButton>Pay Now</PayButton>
      </StripeCheckout>
    </PayContainer>
  );
};

export default Pay;
