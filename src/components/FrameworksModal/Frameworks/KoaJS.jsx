import React from 'react';

const KoaJsModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Koa - легкий та елегантний веб-фреймворк для Node.js, розроблений командою, яка стояла за Express.js. 
        Він використовує асинхронний підхід та генератори, щоб спростити розробку високопродуктивних додатків.
      </p>
      <p>
        <strong>Основні принципи Koa:</strong>
      </p>
      <ul>
        <li><strong>Асинхронність та Генератори:</strong> Використання асинхронного підходу та генераторів для спрощення коду.</li>
        <li><strong>Middleware:</strong> Проста система middleware для обробки HTTP-запитів та відповідей.</li>
        <li><strong>Модульність:</strong> Розділення функціональності на малий модулі та застосування їх за необхідністю.</li>
      </ul>
      <p>
        <strong>Основні концепції Koa:</strong>
      </p>
      <ul>
        <li><strong>Контекст та Контекстний Стек:</strong> Використання об'єкта контексту для передачі даних між middleware.</li>
        <li><strong>Асинхронні Middleware:</strong> Підтримка асинхронних middleware для роботи з асинхронним кодом.</li>
        <li><strong>Робочий Об'єкт Запиту та Відповіді:</strong> Використання об'єктів запиту та відповіді для зручного керування HTTP-запитами.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Koa підходить для розробки високопродуктивних та модульних веб-додатків на платформі Node.js.
      </p>
      <p>
        <strong>Де вчитися Koa:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Koa:</strong> <a href="https://koajs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Koa</a></li>
        <br></br>
        <li><strong>Приклади та Ресурси:</strong> <a href="https://github.com/koajs/examples" target="_blank" rel="noopener noreferrer" style={linkStyles}>Koa Examples</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Koa Web Framework</h2>
      <p>
        Koa is a lightweight and elegant web framework for Node.js, developed by the team behind Express.js. 
        It uses an asynchronous approach and generators to simplify the development of high-performance applications.
      </p>
      <p>
        <strong>Key Principles of Koa:</strong>
      </p>
      <ul>
        <li><strong>Asynchrony and Generators:</strong> Using asynchronous approach and generators to simplify code.</li>
        <li><strong>Middleware:</strong> Simple middleware system for handling HTTP requests and responses.</li>
        <li><strong>Modularity:</strong> Separating functionality into small modules and applying them as needed.</li>
      </ul>
      <p>
        <strong>Core Concepts of Koa:</strong>
      </p>
      <ul>
        <li><strong>Context and Context Stack:</strong> Using the context object to pass data between middleware.</li>
        <li><strong>Asynchronous Middleware:</strong> Supporting asynchronous middleware to work with asynchronous code.</li>
        <li><strong>Request and Response Working Objects:</strong> Using request and response objects for convenient management of HTTP requests.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Koa is suitable for developing high-performance and modular web applications on the Node.js platform.
      </p>
      <p>
        <strong>Where to Learn Koa:</strong>
      </p>
      <ul>
        <li><strong>Official Koa Documentation:</strong> <a href="https://koajs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Koa</a></li>
        <br></br>
        <li><strong>Examples and Resources:</strong> <a href="https://github.com/koajs/examples" target="_blank" rel="noopener noreferrer" style={linkStyles}>Koa Examples</a></li>
      </ul>
    </>
  );

  return content;
};

export default KoaJsModalContent;
