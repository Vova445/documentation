import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalDonate = ({ amount, onSuccess, onError }) => {
  const CLIENT_ID = 'AUnaSqE4MHRybTEg_BaTy852k6SMj8xK3BsQTxtzoOsx5Ll5n-Dfj4THFlVPRBqWApTXu9Lx-EvA6U8c';

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
            currency_code: "USD",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      onSuccess(details);
    });
  };

  return (
    <PayPalButtons
      amount={amount}
      onSuccess={onSuccess}
      createOrder={createOrder}
      onApprove={onApprove}
      catchError={onError}
      onError={onError}
      options={{
        clientId: CLIENT_ID,
      }}
    />
  );
};

export default PayPalDonate;
