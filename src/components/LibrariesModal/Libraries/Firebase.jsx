import React from 'react';

const FirebaseModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#FFCA28",
    color: "#000",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Firebase - це облачна платформа для розробки мобільних та веб-додатків від компанії Google. Вона надає ряд інструментів та сервісів для швидкої розробки, тестування та розгортання додатків.
      </p>
      <p>
        <strong>Основні можливості Firebase:</strong>
      </p>
      <ul>
        <li><strong>База Даних в Режимі Реального Часу:</strong> Можливість зберігання та синхронізації даних в режимі реального часу для миттєвого оновлення в додатках.</li>
        <li><strong>Аутентифікація:</strong> Вбудована система аутентифікації для легкого управління користувачами та захисту даних.</li>
        <li><strong>Хостинг та Розгортання:</strong> Можливість розгортання веб-сайтів та додатків на серверах Firebase.</li>
        <li><strong>Cloud Functions:</strong> Використання серверних функцій для реакції на події та виконання функцій на стороні сервера.</li>
      </ul>
      <p>
        <strong>Застосування Firebase:</strong>
      </p>
      <p>
        Firebase використовується для розробки різноманітних додатків, включаючи соціальні мережі, електронні комерції та ігри.
      </p>
      <p>
        <strong>Де Вчитися Firebase:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Firebase:</strong> <a href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Firebase Docs</a></li>
        <br></br>
        <li><strong>Firebase в React:</strong> <a href="https://react-firebase-js.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>React Firebase</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Firebase Framework</h2>
      <p>
        Firebase is a cloud platform for developing mobile and web applications by Google. It provides a range of tools and services for rapid app development, testing, and deployment.
      </p>
      <p>
        <strong>Key Features of Firebase:</strong>
      </p>
      <ul>
        <li><strong>Realtime Database:</strong> Ability to store and synchronize data in real-time for instant updates in applications.</li>
        <li><strong>Authentication:</strong> Built-in authentication system for easy user management and data protection.</li>
        <li><strong>Hosting and Deployment:</strong> Ability to deploy websites and apps on Firebase servers.</li>
        <li><strong>Cloud Functions:</strong> Use of server functions to react to events and perform functions on the server side.</li>
      </ul>
      <p>
        <strong>Applications of Firebase:</strong>
      </p>
      <p>
        Firebase is used for developing various applications, including social networks, e-commerce, and games.
      </p>
      <p>
        <strong>Where to Learn Firebase:</strong>
      </p>
      <ul>
        <li><strong>Official Firebase Documentation:</strong> <a href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Firebase Docs</a></li>
        <br></br>
        <li><strong>Firebase in React:</strong> <a href="https://react-firebase-js.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>React Firebase</a></li>
      </ul>
    </>
  );

  return content;
};

export default FirebaseModalContent;
