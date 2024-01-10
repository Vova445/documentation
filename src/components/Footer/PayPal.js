// paypalApi.js
import axios from 'axios';

const paypalApi = axios.create({
  baseURL: 'https://api.paypal.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer AbrDMpz7iyp_esJs-r26kqlXhlVkLgw6BKlhYld3fWZyjeVYE-3h0jdRg_-YeJ-gMg-oECvblO_p0Fc-', 
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
