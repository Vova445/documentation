import React from 'react';

const RocketModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#FF3D00",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Rocket - це веб-фреймворк для мови програмування Rust, спроектований для швидкості та простоти використання.
      </p>
      <p>
        <strong>Основні принципи Rocket:</strong>
      </p>
      <ul>
        <li><strong>Безпека та Швидкість:</strong> Rocket робить акцент на безпеці та швидкості виконання.</li>
        <li><strong>Простота використання:</strong> Чистий та зрозумілий синтаксис для швидкого створення веб-додатків.</li>
        <li><strong>Модульність:</strong> Підтримка модульної структури для організації коду.</li>
      </ul>
      <p>
        <strong>Основні концепції Rocket:</strong>
      </p>
      <ul>
        <li><strong>Маршрутизація:</strong> Використання атрибутів для визначення маршрутів та обробників.</li>
        <li><strong>Стан:</strong> Використання стану для зберігання даних між HTTP-запитами.</li>
        <li><strong>Фільтри:</strong> Використання фільтрів для валідації та обробки HTTP-запитів.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Rocket ідеально підходить для розробки веб-додатків на мові програмування Rust, з орієнтацією на швидкість та безпеку.
      </p>
      <p>
        <strong>Де вчитися Rocket:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Rocket:</strong> <a href="https://rocket.rs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Rocket</a></li>
        <br></br>
        <li><strong>Приклади та Ресурси:</strong> <a href="https://github.com/rwf2/Rocket" target="_blank" rel="noopener noreferrer" style={linkStyles}>Rocket Examples</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Rocket Web Framework</h2>
      <p>
        Rocket is a web framework for the Rust programming language designed for speed and ease of use.
      </p>
      <p>
        <strong>Key Principles of Rocket:</strong>
      </p>
      <ul>
        <li><strong>Safety and Speed:</strong> Rocket emphasizes safety and execution speed.</li>
        <li><strong>Ease of Use:</strong> Clean and understandable syntax for quickly creating web applications.</li>
        <li><strong>Modularity:</strong> Support for a modular structure to organize code.</li>
      </ul>
      <p>
        <strong>Core Concepts of Rocket:</strong>
      </p>
      <ul>
        <li><strong>Routing:</strong> Use attributes to define routes and handlers.</li>
        <li><strong>State:</strong> Use state to store data between HTTP requests.</li>
        <li><strong>Filters:</strong> Use filters for validation and processing of HTTP requests.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Rocket is ideal for developing web applications in the Rust programming language, with a focus on speed and safety.
      </p>
      <p>
        <strong>Where to Learn Rocket:</strong>
      </p>
      <ul>
        <li><strong>Official Rocket Documentation:</strong> <a href="https://rocket.rs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Rocket</a></li>
        <br></br>
        <li><strong>Examples and Resources:</strong> <a href="https://github.com/rwf2/Rocket" target="_blank" rel="noopener noreferrer" style={linkStyles}>Rocket Examples</a></li>
      </ul>
    </>
  );

  return content;
};

export default RocketModalContent;
