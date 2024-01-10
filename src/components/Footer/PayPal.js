// paypalApi.js
import axios from 'axios';

const paypalApi = axios.create({
  baseURL: 'https://sandbox.paypal.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer AUnaSqE4MHRybTEg_BaTy852k6SMj8xK3BsQTxtzoOsx5Ll5n-Dfj4THFlVPRBqWApTXu9Lx-EvA6U8c', 
  },
});

export const createPayment = async (amount) => {
  try {
    const response = await paypalApi.post('/v1/payments/payment', {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      transactions: [
        {
          amount: {
            total: amount.toString(), 
            currency: 'USD',
          },
        },
      ],
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
