import React from 'react';

const GinModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#007599",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Gin - легкий та швидкий веб-фреймворк для мови програмування Go (Golang) із фокусом на продуктивність.
      </p>
      <p>
        <strong>Основні принципи Gin:</strong>
      </p>
      <ul>
        <li><strong>Легкість та Продуктивність:</strong> Gin створений для ефективної розробки і швидкості виконання.</li>
        <li><strong>Маршрутизація:</strong> Проста та ефективна система маршрутизації для обробки HTTP-запитів.</li>
        <li><strong>Middleware:</strong> Підтримка middleware для розширення функціоналу додатків.</li>
      </ul>
      <p>
        <strong>Основні концепції Gin:</strong>
      </p>
      <ul>
        <li><strong>Маршрути:</strong> Визначення шляхів та обробників для обробки HTTP-запитів.</li>
        <li><strong>Middleware:</strong> Додавання middleware для обробки запитів та відповідей.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Gin підходить для швидкої розробки веб-додатків на мові програмування Go з високою продуктивністю.
      </p>
      <p>
        <strong>Де вчитися Gin:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Gin:</strong> <a href="https://gin-gonic.com/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Gin</a></li>
        <br></br>
        <li><strong>Приклади та Ресурси:</strong> <a href="https://github.com/gin-gonic/examples" target="_blank" rel="noopener noreferrer" style={linkStyles}>Gin Examples</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Gin Web Framework</h2>
      <p>
        Gin is a lightweight and fast web framework for the Go programming language with a focus on productivity.
      </p>
      <p>
        <strong>Key Principles of Gin:</strong>
      </p>
      <ul>
        <li><strong>Lightweight and Productive:</strong> Gin is designed for efficient development and fast execution.</li>
        <li><strong>Routing:</strong> Simple and efficient routing system for handling HTTP requests.</li>
        <li><strong>Middleware:</strong> Supports middleware for extending the functionality of applications.</li>
      </ul>
      <p>
        <strong>Core Concepts of Gin:</strong>
      </p>
      <ul>
        <li><strong>Routes:</strong> Defining paths and handlers to process HTTP requests.</li>
        <li><strong>Middleware:</strong> Adding middleware to process requests and responses.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Gin is suitable for rapid development of web applications in the Go programming language with high performance.
      </p>
      <p>
        <strong>Where to Learn Gin:</strong>
      </p>
      <ul>
        <li><strong>Official Gin Documentation:</strong> <a href="https://gin-gonic.com/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Gin</a></li>
        <br></br>
        <li><strong>Examples and Resources:</strong> <a href="https://github.com/gin-gonic/examples" target="_blank" rel="noopener noreferrer" style={linkStyles}>Gin Examples</a></li>
      </ul>
    </>
  );

  return content;
};

export default GinModalContent;
