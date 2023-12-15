import React from 'react';

const ElixirModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Elixir - це функціональна мова програмування, яка спроектована для розробки масштабованих та підтримуваних систем. Заснована на Erlang, Elixir додає сучасний синтаксис та інструменти для створення надійних розподілених додатків.
      </p>
      <p>
        <strong>Застосування Elixir:</strong>
      </p>
      <ul>
        <li><strong>Розробка Розподілених Систем:</strong> Elixir ідеально підходить для створення розподілених та паралельних додатків.</li>
        <li><strong>Веб-розробка:</strong> Phoenix, веб-фреймворк для Elixir, дозволяє ефективно створювати високопродуктивні веб-додатки.</li>
        <li><strong>Реальний Час:</strong> Завдяки платформі Erlang, Elixir може бути використаний для реалізації систем реального часу.</li>
        <li><strong>Мікросервісна Архітектура:</strong> Elixir підтримує мікросервісну архітектуру та легко масштабується.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Elixir набуває популярності завдяки своїй продуктивності, гнучкості та здатності до побудови надійних систем.
      </p>
      <p>
        <strong>Де Вчити Elixir:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Elixir:</strong> <a href="https://elixir-lang.org/docs.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Elixir Documentation</a></li>
        <li><strong>Phoenix Framework - Офіційна Документація:</strong> <a href="https://hexdocs.pm/phoenix/overview.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Phoenix Framework Documentation</a></li>
      </ul>
      <p>
        <strong>Особливості Elixir:</strong>
      </p>
      <ul>
        <li><strong>Велика Продуктивність:</strong> Elixir гарантує високу продуктивність завдяки вбудованій конкурентності та обробці подій.</li>
        <li><strong>Система Перевірки Типів:</strong> Elixir - нединамічна мова програмування, але вона дозволяє використовувати панель інструментів Dialyzer для перевірки типів.</li>
        <li><strong>Масштабованість:</strong> Заснована на Erlang, Elixir дозволяє легко створювати масштабовані системи.</li>
      </ul>
      <p>
        Elixir - це чудовий вибір для розробників, які працюють над розподіленими та надійними системами.
      </p>
    </>
  ) : (
    <>
      <p>
        Elixir is a functional programming language designed for building scalable and maintainable systems. Built on Erlang, Elixir adds a modern syntax and tools for creating reliable distributed applications.
      </p>
      <p>
        <strong>Applications of Elixir:</strong>
      </p>
      <ul>
        <li><strong>Distributed Systems Development:</strong> Elixir is well-suited for creating distributed and parallel applications.</li>
        <li><strong>Web Development:</strong> Phoenix, the web framework for Elixir, allows for efficient development of high-performance web applications.</li>
        <li><strong>Real-time:</strong> Leveraging the Erlang platform, Elixir can be used for implementing real-time systems.</li>
        <li><strong>Microservices Architecture:</strong> Elixir supports microservices architecture and scales easily.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Elixir is gaining popularity due to its productivity, flexibility, and the ability to build reliable systems.
      </p>
      <p>
        <strong>Where to Learn Elixir:</strong>
      </p>
      <ul>
        <li><strong>Official Elixir Documentation:</strong> <a href="https://elixir-lang.org/docs.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Elixir Documentation</a></li>
        <li><strong>Phoenix Framework - Official Documentation:</strong> <a href="https://hexdocs.pm/phoenix/overview.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Phoenix Framework Documentation</a></li>
      </ul>
      <p>
        <strong>Features of Elixir:</strong>
      </p>
      <ul>
        <li><strong>High Productivity:</strong> Elixir ensures high productivity with built-in concurrency and event handling.</li>
        <li><strong>Type Checking System:</strong> While Elixir is a non-dynamic language, it allows using the Dialyzer tool for type checking.</li>
        <li><strong>Scalability:</strong> Built on Erlang, Elixir allows for easy creation of scalable systems.</li>
      </ul>
      <p>
        Elixir is an excellent choice for developers working on distributed and reliable systems.
      </p>
    </>
  );

  return content;
};

export default ElixirModalContent;
