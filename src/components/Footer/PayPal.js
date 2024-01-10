import axios from 'axios';

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      'https://api.paypal.com/v1/oauth2/token',
      null,
      {
        auth: {
          username: 'AUnaSqE4MHRybTEg_BaTy852k6SMj8xK3BsQTxtzoOsx5Ll5n-Dfj4THFlVPRBqWApTXu9Lx-EvA6U8c',
          password: 'EEaMIJTIz-tvsC5tCS8FqkBXXOI6ZymFPxWtja1mhh4URf33dutk4dZCRkePhPOgV28A5QBqdnr2PX-W',
        },
        params: {
          grant_type: 'client_credentials',
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    throw error.response.data;
  }
};

export const createPayment = async (amount) => {
  try {
    const accessToken = await getAccessToken();

    const paypalApi = axios.create({
      baseURL: 'https://api.paypal.com',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });

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
