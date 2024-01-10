import React from "react";
import { createPayment } from "./PayPal";

export const SupportModal = ({ closeSupportModal }) => {
    const handleSupport = async (amount) => {
        try {
          console.log('Attempting to create payment...');
          const payment = await createPayment(amount);
          console.log('Payment created:', payment);
        } catch (error) {
          console.error('Error creating payment:', error);
        }
        closeSupportModal();
      };
      
    return (
        <div className="support-modal">
          <h2>Підтримай розробника</h2>
          <p>Ваша підтримка допоможе у розвитку проекту. Виберіть суму, яку ви готові пожертвувати:</p>
          <div className="support-buttons">
            <button onClick={() => handleSupport(1)}>1$</button>
            <button onClick={() => handleSupport(5)}>5$</button>
            <button onClick={() => handleSupport(25)}>25$</button>
          </div>
          <button onClick={closeSupportModal} className="close-support">Закрити</button>
        </div>
      );
    };