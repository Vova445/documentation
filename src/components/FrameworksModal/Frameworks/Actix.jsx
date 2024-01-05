import React from 'react';

const ActixModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#34495E",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Actix - це високопродуктивний веб-фреймворк для мови програмування Rust, спроектований з фокусом на низьку
        латентність та масштабованість.
      </p>
      <p>
        <strong>Основні принципи Actix:</strong>
      </p>
      <ul>
        <li><strong>Латентність:</strong> Максимально низька латентність завдяки асинхронному та не блокуючому вводу/виводу.</li>
        <li><strong>Масштабованість:</strong> Підтримка масштабованих та розподілених систем.</li>
        <li><strong>Безпека:</strong> Вбудована система безпеки для захисту від різноманітних атак.</li>
      </ul>
      <p>
        <strong>Основні концепції Actix:</strong>
      </p>
      <ul>
        <li><strong>Акторська модель:</strong> Використання акторської моделі для обробки конкурентних запитів.</li>
        <li><strong>Асинхронність:</strong> Підтримка асинхронних операцій для ефективної роботи із великою кількістю одночасних підключень.</li>
        <li><strong>Маршрутизація:</strong> Проста та потужна система маршрутизації для обробки HTTP-запитів.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Actix є відмінним вибором для розробників Rust, які цінують високу продуктивність та розробку з ефективним
        використанням ресурсів.
      </p>
      <p>
        <strong>Де вчитися Actix:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Actix:</strong> <a href="https://actix.rs/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Actix</a></li>
        <br></br>
        <li><strong>Приклади та Ресурси:</strong> <a href="https://github.com/actix/examples" target="_blank" rel="noopener noreferrer" style={linkStyles}>Actix Examples</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Actix Web Framework</h2>
      <p>
        Actix is a high-performance web framework for the Rust programming language, designed with a focus on low
        latency and scalability.
      </p>
      <p>
        <strong>Key Principles of Actix:</strong>
      </p>
      <ul>
        <li><strong>Latency:</strong> Extremely low latency due to asynchronous and non-blocking I/O.</li>
        <li><strong>Scalability:</strong> Support for scalable and distributed systems.</li>
        <li><strong>Security:</strong> Built-in security system to protect against various attacks.</li>
      </ul>
      <p>
        <strong>Core Concepts of Actix:</strong>
      </p>
      <ul>
        <li><strong>Actor Model:</strong> Utilization of the actor model for handling concurrent requests.</li>
        <li><strong>Asynchronicity:</strong> Support for asynchronous operations for efficient handling of a large number of simultaneous connections.</li>
        <li><strong>Routing:</strong> Simple and powerful routing system for handling HTTP requests.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Actix is an excellent choice for Rust developers who value high performance and resource-efficient development.
      </p>
      <p>
        <strong>Where to Learn Actix:</strong>
      </p>
      <ul>
        <li><strong>Official Actix Documentation:</strong> <a href="https://actix.rs/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Actix</a></li>
        <br></br>
        <li><strong>Examples and Resources:</strong> <a href="https://github.com/actix/examples" target="_blank" rel="noopener noreferrer" style={linkStyles}>Actix Examples</a></li>
      </ul>
    </>
  );

  return content;
};

export default ActixModalContent;
