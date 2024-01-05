import React from 'react';

const SlimModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#44AA4E",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Slim - легкий PHP-фреймворк для розробки веб-додатків. Його основна мета - надати мінімальну кількість
        інструментів, необхідних для ефективної розробки, при цьому залишаючись легким і простим у використанні.
      </p>
      <p>
        <strong>Основні принципи Slim:</strong>
      </p>
      <ul>
        <li><strong>Мінімалізм:</strong> Slim ставить перед собою завдання надати мінімальну, але ефективну функціональність.</li>
        <li><strong>Маршрутизація:</strong> Проста та ефективна система маршрутизації для обробки HTTP-запитів.</li>
        <li><strong>Middleware:</strong> Підтримка middleware для розширення функціоналу додатків.</li>
      </ul>
      <p>
        <strong>Основні концепції Slim:</strong>
      </p>
      <ul>
        <li><strong>Маршрути:</strong> Визначення шляхів та обробників для обробки HTTP-запитів.</li>
        <li><strong>Middleware:</strong> Додавання middleware для обробки запитів та відповідей.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Slim відмінно підходить для розробки легких веб-додатків на мові програмування PHP.
      </p>
      <p>
        <strong>Де вчитися Slim:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Slim:</strong> <a href="https://www.slimframework.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Slim</a></li>
        <br></br>
        <li><strong>Приклади та Ресурси:</strong> <a href="https://www.slimframework.com/docs/v4/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Slim Documentation</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Slim PHP Framework</h2>
      <p>
        Slim is a lightweight PHP framework for web application development. Its main goal is to provide a minimal set
        of tools necessary for efficient development while remaining lightweight and easy to use.
      </p>
      <p>
        <strong>Key Principles of Slim:</strong>
      </p>
      <ul>
        <li><strong>Minimalism:</strong> Slim aims to provide minimal but effective functionality.</li>
        <li><strong>Routing:</strong> Simple and efficient routing system for handling HTTP requests.</li>
        <li><strong>Middleware:</strong> Supports middleware for extending the functionality of applications.</li>
      </ul>
      <p>
        <strong>Core Concepts of Slim:</strong>
      </p>
      <ul>
        <li><strong>Routes:</strong> Defining paths and handlers to process HTTP requests.</li>
        <li><strong>Middleware:</strong> Adding middleware to process requests and responses.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Slim is well-suited for developing lightweight web applications in the PHP programming language.
      </p>
      <p>
        <strong>Where to Learn Slim:</strong>
      </p>
      <ul>
        <li><strong>Official Slim Documentation:</strong> <a href="https://www.slimframework.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Slim</a></li>
        <br></br>
        <li><strong>Examples and Resources:</strong> <a href="https://www.slimframework.com/docs/v4/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Slim Documentation</a></li>
      </ul>
    </>
  );

  return content;
};

export default SlimModalContent;
