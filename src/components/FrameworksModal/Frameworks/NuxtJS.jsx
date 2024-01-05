import React from 'react';

const NuxtModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "green",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Nuxt.js - це фреймворк для розробки універсальних (universal) та статичних веб-додатків на основі Vue.js.
        Він надає потужні інструменти для розробки, тестування та встановлення веб-додатків з високою продуктивністю.
      </p>
      <p>
        <strong>Основні принципи Nuxt.js:</strong>
      </p>
      <ul>
        <li><strong>Універсальні Додатки:</strong> Підтримка розробки універсальних (server-side rendered) веб-додатків.</li>
        <li><strong>Статичні Додатки:</strong> Можливість генерації статичних веб-сайтів для простого розгортання.</li>
        <li><strong>Модульність та Розширюваність:</strong> Використання модулів для організації та розширення функціоналу
          додатка.</li>
      </ul>
      <p>
        <strong>Основні концепції Nuxt.js:</strong>
      </p>
      <ul>
        <li><strong>Папка "pages":</strong> Автоматична маршрутизація на основі файлів у папці "pages".</li>
        <li><strong>Middleware:</strong> Додавання middleware для обробки запитів та відповідей на сервері.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Nuxt.js ідеально підходить для розробки універсальних та статичних веб-додатків на базі Vue.js з використанням
        модульної структури.
      </p>
      <p>
        <strong>Де вчитися Nuxt.js:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Nuxt.js:</strong> <a href="https://v2.nuxt.com/" target="_blank"
            rel="noopener noreferrer" style={linkStyles}>Nuxt.js</a></li>
        
      </ul>
    </>
  ) : (
    <>
      <h2>Nuxt.js Framework</h2>
      <p>
        Nuxt.js is a framework for developing universal and static web applications based on Vue.js. It provides powerful
        tools for development, testing, and deployment of web applications with high performance.
      </p>
      <p>
        <strong>Key Principles of Nuxt.js:</strong>
      </p>
      <ul>
        <li><strong>Universal Applications:</strong> Support for developing server-side rendered web applications.</li>
        <li><strong>Static Applications:</strong> Ability to generate static websites for easy deployment.</li>
        <li><strong>Modularity and Extensibility:</strong> Use of modules to organize and extend the application's
          functionality.</li>
      </ul>
      <p>
        <strong>Core Concepts of Nuxt.js:</strong>
      </p>
      <ul>
        <li><strong> "pages" Folder:</strong> Automatic routing based on files in the "pages" folder.</li>
        <li><strong>Middleware:</strong> Adding middleware to handle requests and responses on the server.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Nuxt.js is ideal for developing universal and static web applications based on Vue.js using a modular structure.
      </p>
      <p>
        <strong>Where to Learn Nuxt.js:</strong>
      </p>
      <ul>
        <li><strong>Official Nuxt.js Documentation:</strong> <a href="https://v2.nuxt.com/" target="_blank"
            rel="noopener noreferrer" style={linkStyles}>Nuxt.js</a></li>
      </ul>
    </>
  );

  return content;
};

export default NuxtModalContent;
