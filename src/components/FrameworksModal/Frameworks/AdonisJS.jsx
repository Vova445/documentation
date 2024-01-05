import React from 'react';

const AdonisJsModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#220052",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        AdonisJS - це потужний веб-фреймворк для Node.js, який дозволяє легко будувати ефективні та масштабовані веб-додатки.
      </p>
      <p>
        <strong>Основні принципи AdonisJS:</strong>
      </p>
      <ul>
        <li><strong>MVC Архітектура:</strong> Використання моделей, видів та контролерів для побудови структурованих додатків.</li>
        <li><strong>ORM та Міграції:</strong> Вбудована система моделювання даних та міграцій для легкої роботи з базою даних.</li>
        <li><strong>Middleware:</strong> Підтримка middleware для обробки HTTP-запитів та відповідей.</li>
      </ul>
      <p>
        <strong>Основні концепції AdonisJS:</strong>
      </p>
      <ul>
        <li><strong>Керування Маршрутами:</strong> Визначення маршрутів для обробки HTTP-запитів та виклик контролерів.</li>
        <li><strong>Lucid ORM:</strong> Використання Lucid ORM для ефективної взаємодії з базою даних.</li>
        <li><strong>Автентифікація та Авторизація:</strong> Гнучка система автентифікації та авторизації для захисту додатків.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        AdonisJS відмінно підходить для розробки веб-додатків на Node.js, забезпечуючи зручний та потужний інструментарій.
      </p>
      <p>
        <strong>Де вчитися AdonisJS:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація AdonisJS:</strong> <a href="https://adonisjs.com/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>AdonisJS</a></li>
        </ul>
    </>
  ) : (
    <>
      <h2>AdonisJS Web Framework</h2>
      <p>
        AdonisJS is a powerful Node.js web framework that allows easy building of efficient and scalable web applications.
      </p>
      <p>
        <strong>Key Principles of AdonisJS:</strong>
      </p>
      <ul>
        <li><strong>MVC Architecture:</strong> Using models, views, and controllers to build structured applications.</li>
        <li><strong>ORM and Migrations:</strong> Built-in data modeling and migration system for easy database handling.</li>
        <li><strong>Middleware:</strong> Support for middleware to handle HTTP requests and responses.</li>
      </ul>
      <p>
        <strong>Core Concepts of AdonisJS:</strong>
      </p>
      <ul>
        <li><strong>Route Management:</strong> Defining routes to handle HTTP requests and invoke controllers.</li>
        <li><strong>Lucid ORM:</strong> Using Lucid ORM for efficient database interaction.</li>
        <li><strong>Authentication and Authorization:</strong> Flexible authentication and authorization system for application security.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        AdonisJS is well-suited for developing web applications in Node.js, providing a convenient and powerful toolkit.
      </p>
      <p>
        <strong>Where to Learn AdonisJS:</strong>
      </p>
      <ul>
        <li><strong>Official AdonisJS Documentation:</strong> <a href="https://adonisjs.com/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>AdonisJS</a></li>
        </ul>
    </>
  );

  return content;
};

export default AdonisJsModalContent;
