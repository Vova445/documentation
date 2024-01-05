import React from 'react';

const NancyModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#FF5722",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Nancy - це легкий та модульний веб-фреймворк для мови програмування C#, який дозволяє розробникам швидко створювати
        веб-додатки.
      </p>
      <p>
        <strong>Основні принципи Nancy:</strong>
      </p>
      <ul>
        <li><strong>Модульність:</strong> Nancy побудована на модульній архітектурі, що дозволяє розробляти компоненти незалежно
          один від одного.</li>
        <li><strong>Простота:</strong> Простий та інтуїтивно зрозумілий синтаксис для розробки веб-додатків.</li>
        <li><strong>Гнучкість:</strong> Можливість вибору різних підходів та розширень для роботи з різними типами додатків.</li>
      </ul>
      <p>
        <strong>Основні концепції Nancy:</strong>
      </p>
      <ul>
        <li><strong>Модулі:</strong> Використання модулів для розділення логіки додатку на окремі компоненти.</li>
        <li><strong>Роутинг:</strong> Простий та ефективний механізм роутингу для визначення URL-шляхів.</li>
        <li><strong>В'юшки:</strong> Використання в'юшок для відображення даних на сторінці.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Nancy чудово підходить для розробки веб-додатків на мові програмування C# з акцентом на модульність та простоту використання.
      </p>
      <p>
        <strong>Де вчитися Nancy:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Nancy:</strong> <a href="https://nancyfx.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Nancy</a></li>
        <br></br>
        <li><strong>Приклади та Ресурси:</strong> <a href="https://github.com/NancyFx/Nancy/wiki/Documentation" target="_blank" rel="noopener noreferrer" style={linkStyles}>Nancy Documentation</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Nancy Web Framework</h2>
      <p>
        Nancy is a lightweight and modular web framework for the C# programming language that allows developers to quickly
        create web applications.
      </p>
      <p>
        <strong>Key Principles of Nancy:</strong>
      </p>
      <ul>
        <li><strong>Modularity:</strong> Nancy is built on a modular architecture, allowing developers to develop components independently.</li>
        <li><strong>Simplicity:</strong> Simple and intuitive syntax for web application development.</li>
        <li><strong>Flexibility:</strong> Ability to choose different approaches and extensions for working with different types of applications.</li>
      </ul>
      <p>
        <strong>Core Concepts of Nancy:</strong>
      </p>
      <ul>
        <li><strong>Modules:</strong> Use modules to separate application logic into individual components.</li>
        <li><strong>Routing:</strong> Simple and effective routing mechanism for defining URL paths.</li>
        <li><strong>Views:</strong> Use views to display data on the page.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Nancy is well-suited for developing web applications in the C# programming language with an emphasis on modularity and ease of use.
      </p>
      <p>
        <strong>Where to Learn Nancy:</strong>
      </p>
      <ul>
        <li><strong>Official Nancy Documentation:</strong> <a href="https://nancyfx.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Nancy</a></li>
        <br></br>
        <li><strong>Examples and Resources:</strong> <a href="https://github.com/NancyFx/Nancy/wiki/Documentation" target="_blank" rel="noopener noreferrer" style={linkStyles}>Nancy Documentation</a></li>
      </ul>
    </>
  );

  return content;
};

export default NancyModalContent;
