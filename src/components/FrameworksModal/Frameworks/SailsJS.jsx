import React from 'react';

const SailsJSModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#007ACC",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Sails.js - це фреймворк для створення серверних додатків на мові програмування JavaScript. Він базується на концепції моделі-вид-контролер (MVC) та надає інструменти для швидкої розробки додатків.
      </p>
      <p>
        <strong>Основні принципи Sails.js:</strong>
      </p>
      <ul>
        <li><strong>Модель-Вид-Контролер (MVC):</strong> Використання стандартної архітектури для розподілу відповідальностей між компонентами додатку.</li>
        <li><strong>WebSocket:</strong> Підтримка вбудованої реалізації WebSocket для обміну даними в реальному часі.</li>
        <li><strong>Генератори:</strong> Автоматизація створення коду за допомогою генераторів для швидкої розробки.</li>
      </ul>
      <p>
        <strong>Основні концепції Sails.js:</strong>
      </p>
      <ul>
        <li><strong>Blueprints:</strong> Використання синтаксису REST API для автоматичного створення CRUD-операцій для моделей.</li>
        <li><strong>WebSocket:</strong> Вбудована підтримка WebSocket для багатонаправленого обміну даними в режимі реального часу.</li>
        <li><strong>Поліпшення продуктивності:</strong> Інструменти та практики для швидкої та зручної розробки.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Sails.js підходить для швидкої розробки серверних додатків з використанням JavaScript та забезпечує ефективну роботу з базами даних та реального часу.
      </p>
      <p>
        <strong>Де вчитися Sails.js:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Sails.js:</strong> <a href="https://sailsjs.com/documentation" target="_blank" rel="noopener noreferrer" style={linkStyles}>Sails.js</a></li>
        <br></br>
        <li><strong>Приклади та Ресурси:</strong> <a href="https://github.com/balderdashy/sails-docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Sails.js GitHub</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Sails.js Framework</h2>
      <p>
        Sails.js is a framework for building server-side applications using the JavaScript programming language. It is based on the Model-View-Controller (MVC) architecture and provides tools for rapid application development.
      </p>
      <p>
        <strong>Key Principles of Sails.js:</strong>
      </p>
      <ul>
        <li><strong>Model-View-Controller (MVC):</strong> Using a standard architecture for distributing responsibilities among application components.</li>
        <li><strong>WebSocket:</strong> Support for built-in WebSocket implementation for real-time data exchange.</li>
        <li><strong>Generators:</strong> Automation of code generation using generators for fast development.</li>
      </ul>
      <p>
        <strong>Core Concepts of Sails.js:</strong>
      </p>
      <ul>
        <li><strong>Blueprints:</strong> Using REST API syntax for automatic generation of CRUD operations for models.</li>
        <li><strong>WebSocket:</strong> Built-in WebSocket support for bidirectional real-time data exchange.</li>
        <li><strong>Productivity Enhancements:</strong> Tools and practices for fast and convenient development.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Sails.js is suitable for rapid development of server-side applications using JavaScript and provides efficient handling of databases and real-time functionality.
      </p>
      <p>
        <strong>Where to Learn Sails.js:</strong>
      </p>
      <ul>
        <li><strong>Official Sails.js Documentation:</strong> <a href="https://sailsjs.com/documentation" target="_blank" rel="noopener noreferrer" style={linkStyles}>Sails.js</a></li>
        <br></br>
        <li><strong>Examples and Resources:</strong> <a href="https://github.com/balderdashy/sails-docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Sails.js GitHub</a></li>
      </ul>
    </>
  );

  return content;
};

export default SailsJSModalContent;
