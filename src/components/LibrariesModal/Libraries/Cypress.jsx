import React from 'react';

const CypressModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#17202A",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Cypress - це фреймворк для енд-ту-енд тестування веб-додатків. Він відомий своєю простотою налаштування та потужністю при написанні та виконанні тестів. Cypress дозволяє вам створювати тести, які можуть імітувати дії користувача та взаємодію з елементами веб-сторінок.
      </p>
      <p>
        <strong>Основні особливості Cypress:</strong>
      </p>
      <ul>
        <li><strong>Енд-ту-енд Тестування:</strong> Cypress спрощує написання та виконання енд-ту-енд тестів для веб-додатків.</li>
        <li><strong>Простота Використання:</strong> Легко налаштовується та має зрозумілий синтаксис для тестування.</li>
        <li><strong>Інтерактивний Режим:</strong> Можливість переглядати кроки виконання тестів в реальному часі.</li>
        <li><strong>Автоматичне Очікування:</strong> Cypress автоматично очікує завантаження елементів на сторінці.</li>
      </ul>
      <p>
        <strong>Застосування Cypress:</strong>
      </p>
      <p>
        Cypress використовується для тестування веб-додатків та забезпечення якості їхнього функціоналу в реальних умовах використання.
      </p>
      <p>
        <strong>Де Вчитися Cypress:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Cypress:</strong> <a href="https://docs.cypress.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Cypress Docs</a></li>
        <br></br>
        <li><strong>Cypress GitHub Репозиторій:</strong> <a href="https://github.com/cypress-io/cypress" target="_blank" rel="noopener noreferrer" style={linkStyles}>Cypress GitHub</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Cypress End-to-End Testing Framework</h2>
      <p>
        Cypress is an end-to-end testing framework for web applications, known for its ease of setup and powerful capabilities when writing and executing tests. Cypress allows you to create tests that can simulate user actions and interact with elements on web pages.
      </p>
      <p>
        <strong>Key Features of Cypress:</strong>
      </p>
      <ul>
        <li><strong>End-to-End Testing:</strong> Cypress simplifies the process of writing and executing end-to-end tests for web applications.</li>
        <li><strong>Easy to Use:</strong> Easily configurable and has a clear syntax for testing.</li>
        <li><strong>Interactive Mode:</strong> Ability to view test execution steps in real-time.</li>
        <li><strong>Automatic Waiting:</strong> Cypress automatically waits for page elements to load.</li>
      </ul>
      <p>
        <strong>Applications of Cypress:</strong>
      </p>
      <p>
        Cypress is used for testing web applications and ensuring the quality of their functionality under real usage conditions.
      </p>
      <p>
        <strong>Where to Learn Cypress:</strong>
      </p>
      <ul>
        <li><strong>Official Cypress Documentation:</strong> <a href="https://docs.cypress.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Cypress Docs</a></li>
        <br></br>
        <li><strong>Cypress GitHub Repository:</strong> <a href="https://github.com/cypress-io/cypress" target="_blank" rel="noopener noreferrer" style={linkStyles}>Cypress GitHub</a></li>
      </ul>
    </>
  );

  return content;
};

export default CypressModalContent;
