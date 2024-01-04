import React from 'react';

const NestModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#E0234E",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Nest.js - це прогресивний веб-фреймворк для будівництва ефективних та масштабованих серверних додатків на мові програмування TypeScript.
      </p>
      <p>
        <strong>Основні принципи Nest.js:</strong>
      </p>
      <ul>
        <li><strong>Модульність:</strong> Використання модульної архітектури для легкості розробки та підтримки.</li>
        <li><strong>Dependency Injection:</strong> Вбудована система введення забезпечує чистий та тестований код.</li>
        <li><strong>Expressive:</strong> Забезпечує експресивний синтаксис та широкий набір функцій для швидкої розробки.</li>
      </ul>
      <p>
        <strong>Основні концепції Nest.js:</strong>
      </p>
      <ul>
        <li><strong>Контролери та Провайдери:</strong> Використання контролерів для обробки HTTP-запитів та провайдерів для управління залежностями.</li>
        <li><strong>Middleware:</strong> Впровадження middleware для обробки запитів та відповідей.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Nest.js відмінно підходить для розробки серверних додатків з використанням TypeScript та концепцій модульності.
      </p>
      <p>
        <strong>Де вчитися Nest.js:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Nest.js:</strong> <a href="https://docs.nestjs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Nest.js</a></li>
        <br></br>
        <li><strong>Курси та Ресурси:</strong> <a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Nest.js Learning</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Nest.js Web Framework</h2>
      <p>
        Nest.js is a progressive web framework for building efficient and scalable server-side applications using the TypeScript programming language.
      </p>
      <p>
        <strong>Key Principles of Nest.js:</strong>
      </p>
      <ul>
        <li><strong>Modularity:</strong> Utilizes modular architecture for ease of development and maintenance.</li>
        <li><strong>Dependency Injection:</strong> Built-in dependency injection system ensures clean and testable code.</li>
        <li><strong>Expressive:</strong> Provides an expressive syntax and a wide range of features for rapid development.</li>
      </ul>
      <p>
        <strong>Core Concepts of Nest.js:</strong>
      </p>
      <ul>
        <li><strong>Controllers and Providers:</strong> Uses controllers for handling HTTP requests and providers for managing dependencies.</li>
        <li><strong>Middleware:</strong> Implements middleware for processing requests and responses.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Nest.js is well-suited for developing server-side applications using TypeScript and modular concepts.
      </p>
      <p>
        <strong>Where to Learn Nest.js:</strong>
      </p>
      <ul>
        <li><strong>Official Nest.js Documentation:</strong> <a href="https://docs.nestjs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Nest.js</a></li>
        <br></br>
        <li><strong>Courses and Resources:</strong> <a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Nest.js Learning</a></li>
      </ul>
    </>
  );

  return content;
};

export default NestModalContent;
