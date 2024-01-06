import React from 'react';

const PassportJsModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#4B0082",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Passport.js - це middleware для автентифікації користувачів в веб-додатках на платформі Node.js. Він надає широкий вибір стратегій автентифікації, таких як локальна стратегія, стратегії соціальних мереж і багато інших, що дозволяє зручно налаштовувати автентифікацію в додатках.
      </p>
      <p>
        <strong>Основні особливості Passport.js:</strong>
      </p>
      <ul>
        <li><strong>Розширюваність:</strong> Passport.js надає модульну структуру, що дозволяє легко додавати нові стратегії та розширювати функціонал.</li>
        <li><strong>Локальна Автентифікація:</strong> Можливість використовувати локальну стратегію для автентифікації користувачів за допомогою ім'я користувача та пароля.</li>
        <li><strong>Стратегії Соціальних Мереж:</strong> Підтримка стратегій автентифікації через соціальні мережі, такі як Google, Facebook, Twitter та інші.</li>
        <li><strong>Сесії та Куки:</strong> Passport.js може зберігати інформацію про автентифікацію в сесіях та куках.</li>
      </ul>
      <p>
        <strong>Застосування Passport.js:</strong>
      </p>
      <p>
        Passport.js використовується для забезпечення зручної та безпечної системи автентифікації в веб-додатках, які побудовані на платформі Node.js.
      </p>
      <p>
        <strong>Де Вчитися Passport.js:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Passport.js:</strong> <a href="http://www.passportjs.org/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Passport.js Docs</a></li>
        <br></br>
        <li><strong>Passport.js GitHub Репозиторій:</strong> <a href="https://github.com/jaredhanson/passport" target="_blank" rel="noopener noreferrer" style={linkStyles}>Passport.js GitHub</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Passport.js Authentication Middleware</h2>
      <p>
        Passport.js is middleware for authenticating users in Node.js web applications. It provides a wide range of authentication strategies, such as local strategy, social media strategies, and many others, allowing convenient configuration of authentication in applications.
      </p>
      <p>
        <strong>Key Features of Passport.js:</strong>
      </p>
      <ul>
        <li><strong>Extensibility:</strong> Passport.js provides a modular structure, making it easy to add new strategies and extend functionality.</li>
        <li><strong>Local Authentication:</strong> Ability to use a local strategy for authenticating users using a username and password.</li>
        <li><strong>Social Media Strategies:</strong> Support for authentication strategies through social media platforms such as Google, Facebook, Twitter, and others.</li>
        <li><strong>Sessions and Cookies:</strong> Passport.js can store authentication information in sessions and cookies.</li>
      </ul>
      <p>
        <strong>Applications of Passport.js:</strong>
      </p>
      <p>
        Passport.js is used to provide a convenient and secure authentication system in web applications built on the Node.js platform.
      </p>
      <p>
        <strong>Where to Learn Passport.js:</strong>
      </p>
      <ul>
        <li><strong>Official Passport.js Documentation:</strong> <a href="http://www.passportjs.org/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Passport.js Docs</a></li>
        <br></br>
        <li><strong>Passport.js GitHub Repository:</strong> <a href="https://github.com/jaredhanson/passport" target="_blank" rel="noopener noreferrer" style={linkStyles}>Passport.js GitHub</a></li>
      </ul>
    </>
  );

  return content;
};

export default PassportJsModalContent;
