// paypalApi.js
import axios from 'axios';

const paypalApi = axios.create({
  baseURL: 'https://sandbox.paypal.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ARM7mTk6F86izZ_MrpakuZdXOZLcxszrm_8oCBVEDPdeZ_0oC6UR78NB7XVInO-dZCHTUPtmnHh-Wxya', 
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
