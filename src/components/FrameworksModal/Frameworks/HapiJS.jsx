import React from 'react';

const HapiJSModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#785447",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Hapi.js - це фреймворк для створення серверів та веб-додатків на мові програмування JavaScript. Він відомий своєю гнучкістю та високою розширюваністю.
      </p>
      <p>
        <strong>Основні принципи Hapi.js:</strong>
      </p>
      <ul>
        <li><strong>Конфігурація над конвенцією:</strong> Hapi покладає наголос на конфігурацію над конвенціями, надаючи розробникам більше контролю.</li>
        <li><strong>Розширюваність:</strong> Вбудована система плагінів робить Hapi дуже розширюваним та модульним.</li>
        <li><strong>Валідація та Входження:</strong> Надійні засоби для валідації даних та обробки вхідних параметрів.</li>
      </ul>
      <p>
        <strong>Основні концепції Hapi.js:</strong>
      </p>
      <ul>
        <li><strong>Маршрутизація:</strong> Визначення маршрутів для обробки HTTP-запитів.</li>
        <li><strong>Плагіни:</strong> Використання плагінів для розширення функціоналу.</li>
        <li><strong>Відгуки та Відображення:</strong> Можливості для виведення відгуків та створення веб-сторінок.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Hapi.js підходить для створення серверів та веб-додатків з акцентом на конфігурацію та розширюваність.
      </p>
      <p>
        <strong>Де вчитися Hapi.js:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Hapi.js:</strong> <a href="https://hapi.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Hapi.js</a></li>
        <br></br>
        <li><strong>Приклади та Ресурси:</strong> <a href="https://github.com/hapijs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Hapi.js GitHub</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Hapi.js Web Framework</h2>
      <p>
        Hapi.js is a framework for building servers and web applications using the JavaScript programming language. It is known for its flexibility and high extensibility.
      </p>
      <p>
        <strong>Key Principles of Hapi.js:</strong>
      </p>
      <ul>
        <li><strong>Configuration over Convention:</strong> Hapi emphasizes configuration over conventions, giving developers more control.</li>
        <li><strong>Extensibility:</strong> Built-in plugin system makes Hapi highly extensible and modular.</li>
        <li><strong>Validation and Input Handling:</strong> Reliable tools for data validation and input parameter processing.</li>
      </ul>
      <p>
        <strong>Core Concepts of Hapi.js:</strong>
      </p>
      <ul>
        <li><strong>Routing:</strong> Defining routes to handle HTTP requests.</li>
        <li><strong>Plugins:</strong> Using plugins to extend functionality.</li>
        <li><strong>Responses and Views:</strong> Capabilities for handling responses and creating web pages.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Hapi.js is suitable for building servers and web applications with a focus on configuration and extensibility.
      </p>
      <p>
        <strong>Where to Learn Hapi.js:</strong>
      </p>
      <ul>
        <li><strong>Official Hapi.js Documentation:</strong> <a href="https://hapi.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Hapi.js</a></li>
        <br></br>
        <li><strong>Examples and Resources:</strong> <a href="https://github.com/hapijs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Hapi.js GitHub</a></li>
      </ul>
    </>
  );

  return content;
};

export default HapiJSModalContent;
