import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Footer.css";

const Footer = ({ isUkrainian }) => {
  const [name, setName] = useState(""); // Додано стан для імені користувача
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    if (!name || !email || !comment) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    const templateParams = {
      from_name: name, // Включено ім'я користувача
      from_email: email,
      to_email: "vvvmikhnov@gmail.com",
      message_html: comment,
    };

    try {
      await emailjs.send(
        "service_f25nvic",
        "template_cy19hv9",
        templateParams,
        "X8dWmczyFVEG8YTUq"
      );

      console.log("Email sent successfully!");
      setErrorMessage("");
    } catch (error) {
      console.error("Failed to send email:", error);
      setErrorMessage("Failed to send email. Please try again later.");
    }

    setName(""); // Очищення імені користувача
    setEmail("");
    setComment("");
  };

  return (
    <footer className="footer">
      <div className="back">
        <div className="footer-content">
          <div className="footer-section comment-section">
            <h3 className="h3Footer">
              {isUkrainian
                ? "Залиште коментар про сторінку"
                : "Leave a Comment about the Page"}
            </h3>
            <label>{isUkrainian ? "Ім'я:" : "Name:"}</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="styled-input"
            />
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="styled-input"
            />
            <label>{isUkrainian ? "Коментар" : "Comment"}:</label>
            <textarea
              rows={5}
              value={comment}
              onChange={handleCommentChange}
              className="styled-textarea"
            />
            <button onClick={handleSubmit} className="styled-button">
              {isUkrainian ? "Надіслати" : "Submit"}
            </button>
            {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
          </div>
          <div className="footer-section social-section">
            
            <p className="pFooter">
              {isUkrainian
                ? "Ви можете слідкувати за мною:"
                : "You can follow me:"}
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/Vova445"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/volodymyr-mikhnov/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/vova_mikhnov/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 {isUkrainian ? "Міхнов Володимир" : "Mikhnov Volodymyr"}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
