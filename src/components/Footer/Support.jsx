import React, { useState } from "react";
import PayPalDonate from "./PayPal";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const SupportModal = ({ closeSupportModal, isUkrainian }) => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSuccess = (details) => {
    console.log("Donation successful:", details);
    setSuccessMessage(isUkrainian ? "Дякуємо за вашу підтримку!" : "Thank you for your support!");
  };

  const handleError = (error) => {
    console.error("Error during donation:", error);
    setErrorMessage(
      isUkrainian
        ? "Помилка під час обробки донату. Будь ласка, спробуйте ще раз."
        : "Error processing donation. Please try again."
    );
  };

  const handleSupport = (amount) => {
    setDonationAmount(amount);
  };

  const handleClose = () => {
    setDonationAmount(0);
    closeSupportModal();
  };

  return (
    <div className="support-modal">
      <h2>{isUkrainian ? "Підтримай розробника" : "Support the Developer"}</h2>
      <p>
        {isUkrainian
          ? "Ваша підтримка допоможе у розвитку проекту. Виберіть суму, яку ви готові пожертвувати:"
          : "Your support will help in the development of the project. Choose the amount you are willing to donate:"}
      </p>
      <div className="support-buttons">
        <button className="support-btn" onClick={() => handleSupport(1)}>
          1$
        </button>
        <button className="support-btn" onClick={() => handleSupport(5)}>
          5$
        </button>
        <button className="support-btn" onClick={() => handleSupport(25)}>
          25$
        </button>
        <button className="support-btn" onClick={() => handleSupport(60)}>
          60$
        </button>
        <button className="support-btn" onClick={() => handleSupport(150)}>
          150$
        </button>
      </div>
      {donationAmount > 0 && (
        <PayPalScriptProvider options={{ "client-id": "AUnaSqE4MHRybTEg_BaTy852k6SMj8xK3BsQTxtzoOsx5Ll5n-Dfj4THFlVPRBqWApTXu9Lx-EvA6U8c" }}>
          <div className="paypal-donate-container">
            <PayPalDonate amount={donationAmount} onSuccess={handleSuccess} onError={handleError} />
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </PayPalScriptProvider>
      )}
      <button onClick={handleClose} className="close-support">
        {isUkrainian ? "Закрити" : "Close"}
      </button>
    </div>
  );
};

export default SupportModal;
