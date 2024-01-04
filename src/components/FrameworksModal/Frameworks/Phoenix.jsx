import React from 'react';

const PhoenixModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#4E5D94",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Phoenix - це веб-фреймворк для розробки сучасних та ефективних веб-додатків на мові програмування Elixir.
      </p>
      <p>
        <strong>Основні принципи Phoenix:</strong>
      </p>
      <ul>
        <li><strong>Масштабованість та Висока Продуктивність:</strong> Phoenix побудований для обробки великих навантажень та швидкості відгуку.</li>
        <li><strong>Real-Time:</strong> Підтримка реального часу для миттєвого оновлення стану додатків.</li>
        <li><strong>Модульність та Конвенції:</strong> Використання конвенцій та модульної структури для легкості розробки та супроводу.</li>
      </ul>
      <p>
        <strong>Основні концепції Phoenix:</strong>
      </p>
      <ul>
        <li><strong>Channels:</strong> Механізм для побудови реального часу додатків.</li>
        <li><strong>Маршрутизація:</strong> Керування шляхами та взаємодія з контролерами.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Phoenix чудово підходить для розробки сучасних веб-додатків, зокрема тих, які вимагають реального часу та великої продуктивності.
      </p>
      <p>
        <strong>Де вчитися Phoenix:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Phoenix:</strong> <a href="https://hexdocs.pm/phoenix" target="_blank" rel="noopener noreferrer" style={linkStyles}>Phoenix</a></li>
        <br></br>
        <li><strong>Phoenix посібник на Elixir School:</strong> <a href="https://elixirschool.com/en" target="_blank" rel="noopener noreferrer" style={linkStyles}>Elixir School</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Phoenix Web Framework</h2>
      <p>
        Phoenix is a web framework for building modern and efficient web applications using the Elixir programming language.
      </p>
      <p>
        <strong>Key Principles of Phoenix:</strong>
      </p>
      <ul>
        <li><strong>Scalability and High Performance:</strong> Phoenix is built to handle large workloads and provide fast response times.</li>
        <li><strong>Real-Time:</strong> Support for real-time functionality for instant updates in applications.</li>
        <li><strong>Modularity and Conventions:</strong> Utilizes conventions and modular structure for ease of development and maintenance.</li>
      </ul>
      <p>
        <strong>Core Concepts of Phoenix:</strong>
      </p>
      <ul>
        <li><strong>Channels:</strong> Mechanism for building real-time applications.</li>
        <li><strong>Routing:</strong> Managing routes and interacting with controllers.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Phoenix is well-suited for developing modern web applications, especially those requiring real-time capabilities and high performance.
      </p>
      <p>
        <strong>Where to Learn Phoenix:</strong>
      </p>
      <ul>
        <li><strong>Official Phoenix Documentation:</strong> <a href="https://hexdocs.pm/phoenix" target="_blank" rel="noopener noreferrer" style={linkStyles}>Phoenix</a></li>
        <br></br>
        <li><strong>Phoenix Guide on Elixir School:</strong> <a href="https://elixirschool.com/en" target="_blank" rel="noopener noreferrer" style={linkStyles}>Elixir School</a></li>
      </ul>
    </>
  );

  return content;
};

export default PhoenixModalContent;
