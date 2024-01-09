import React from 'react';

const DenoModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://deno.land/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Deno
    </a>
  ) : (
    <a href="https://deno.land/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Deno Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Deno - це середовище виконання для JavaScript та TypeScript, яке створене Райаном Далем (Ryan Dahl), також творцем Node.js. Deno розробляється з урахуванням недоліків та досвіду використання Node.js, пропонуючи безпечніше за замовчуванням та модульне середовище для виконання JavaScript.
      </p>
      <p>
        <strong>Основні можливості Deno:</strong>
      </p>
      <ul>
        <li><strong>Безпека за Замовчуванням:</strong> Відсутність необхідності використання флагів для включення безпеки.</li>
        <li><strong>Модульність:</strong> Вбудована підтримка модулів, яка покращує організацію коду.</li>
        <li><strong>Вбудована Підтримка TypeScript:</strong> Можливість використання TypeScript без додаткових конфігурацій.</li>
        <li><strong>Використання Promise Замість Callbacks:</strong> Використання промісів для полегшення асинхронного коду.</li>
      </ul>
      <p>
        <strong>Основні переваги Deno:</strong>
      </p>
      <ul>
        <li><strong>Безпека за Замовчуванням:</strong> Має обмежені права доступу за замовчуванням для підвищення безпеки.</li>
        <li><strong>Модульність:</strong> Забезпечує чітку систему модульності для кращого управління залежностями.</li>
        <li><strong>Вбудована Підтримка TypeScript:</strong> Підтримка TypeScript без потреби в додаткових конфігураціях.</li>
      </ul>
      <p>
        <strong>Сторінка Deno:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Deno - Secure JavaScript and TypeScript Runtime</h2>
      <p>
        Deno is a runtime environment for JavaScript and TypeScript created by Ryan Dahl, the original creator of Node.js. Deno is developed taking into account the shortcomings and lessons learned from using Node.js, offering security by default and a modular environment for executing JavaScript.
      </p>
      <p>
        <strong>Key Features of Deno:</strong>
      </p>
      <ul>
        <li><strong>Security by Default:</strong> No need to use flags to enable security features.</li>
        <li><strong>Modularity:</strong> Built-in support for modules, improving code organization.</li>
        <li><strong>Built-in TypeScript Support:</strong> Ability to use TypeScript without additional configurations.</li>
        <li><strong>Use of Promises Instead of Callbacks:</strong> Use of promises for easier asynchronous code.</li>
      </ul>
      <p>
        <strong>Main Advantages of Deno:</strong>
      </p>
      <ul>
        <li><strong>Security by Default:</strong> Has limited access rights by default to enhance security.</li>
        <li><strong>Modularity:</strong> Provides a clear module system for better dependency management.</li>
        <li><strong>Built-in TypeScript Support:</strong> Supports TypeScript without the need for additional configurations.</li>
      </ul>
      <p>
        <strong>Deno Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default DenoModalContent;
