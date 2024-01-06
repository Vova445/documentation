import React from 'react';

const TwilioModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#F22F46",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Twilio - це платформа для забезпечення засобами зв'язку в програмах. Вона дозволяє розробникам інтегрувати голосовий, повідомлення та інші засоби зв'язку в свої додатки.
      </p>
      <p>
        <strong>Основні можливості Twilio:</strong>
      </p>
      <ul>
        <li><strong>СМС та ММС Сповіщення:</strong> Надсилання текстових та мультимедійних повідомлень в програмах.</li>
        <li><strong>Голосовий Зв'язок:</strong> Інтеграція голосового зв'язку для дзвінків та інших голосових функцій.</li>
        <li><strong>Відео Зв'язок:</strong> Забезпечення відеозв'язку в додатках.</li>
        <li><strong>Cloud Communications:</strong> Використання хмарної інфраструктури для забезпечення стійкого зв'язку.</li>
      </ul>
      <p>
        <strong>Застосування Twilio:</strong>
      </p>
      <p>
        Twilio використовується для розробки різноманітних додатків, включаючи месенджери, додатки з відеозв'язком та платформи сповіщень.
      </p>
      <p>
        <strong>Де Вчитися Twilio:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Twilio:</strong> <a href="https://www.twilio.com/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Twilio Docs</a></li>
        <br></br>
        </ul>
    </>
  ) : (
    <>
      <h2>Twilio Framework</h2>
      <p>
        Twilio is a platform that provides communication capabilities in applications. It allows developers to integrate voice, messaging, and other communication tools into their applications.
      </p>
      <p>
        <strong>Key Features of Twilio:</strong>
      </p>
      <ul>
        <li><strong>SMS and MMS Notifications:</strong> Sending text and multimedia messages in applications.</li>
        <li><strong>Voice Communication:</strong> Integration of voice communication for calls and other voice features.</li>
        <li><strong>Video Communication:</strong> Providing video communication in applications.</li>
        <li><strong>Cloud Communications:</strong> Using cloud infrastructure to ensure reliable communication.</li>
      </ul>
      <p>
        <strong>Applications of Twilio:</strong>
      </p>
      <p>
        Twilio is used for developing various applications, including messengers, video communication apps, and notification platforms.
      </p>
      <p>
        <strong>Where to Learn Twilio:</strong>
      </p>
      <ul>
        <li><strong>Official Twilio Documentation:</strong> <a href="https://www.twilio.com/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Twilio Docs</a></li>
        <br></br>
        </ul>
    </>
  );

  return content;
};

export default TwilioModalContent;
