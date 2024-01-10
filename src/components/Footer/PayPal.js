import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OWrjAB1riNc82tBHQaX8NIuOWXqj34QkUw2xn72m69Plp7fffJr9LtG6rrZ5qxZl3l4JlLzXzJJUz473wyXV3R600fmZ47RZw'); 

export const createPayment = async (amount) => {
  const stripe = await stripePromise;

  try {
    const cardElement = stripe.elements().getElement('card');
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      throw new Error(error.message);
    }
    const paymentIntent = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payment_method: paymentMethod.id,
        amount: amount,
      }),
    }).then((res) => res.json());

    return paymentIntent.client_secret;
  } catch (error) {
    console.error('Error creating payment:', error);
    throw error;
  }
};
