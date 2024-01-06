import React from 'react';

const JestModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#99425B",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Jest - це фреймворк для тестування JavaScript коду, спеціально призначений для проектів, що використовують React, Vue, Angular та інші технології. Він надає зручний інтерфейс для написання та виконання тестів, а також має вбудовану підтримку для різних видів тестів.
      </p>
      <p>
        <strong>Основні можливості Jest:</strong>
      </p>
      <ul>
        <li><strong>Простота Використання:</strong> Легко встановлюється та налаштовується для швидкого старту.</li>
        <li><strong>Вбудовані Можливості:</strong> Має вбудовану підтримку для автоматичного визначення тестів та покриття коду.</li>
        <li><strong>Снапшот-Тести:</strong> Використовує снапшот-тести для візуального порівняння результатів тестів.</li>
        <li><strong>Асинхронні Тести:</strong> Підтримує зручний синтаксис для написання асинхронних тестів.</li>
      </ul>
      <p>
        <strong>Де Вчитися Jest:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Jest:</strong> <a href="https://jestjs.io/docs/en/getting-started" target="_blank" rel="noopener noreferrer" style={linkStyles}>Jest Docs</a></li>
        <br></br>
        <li><strong>Початковий Навчальний Посібник:</strong> <a href="https://jestjs.io/docs/en/snapshot-testing" target="_blank" rel="noopener noreferrer" style={linkStyles}>Snapshot Testing</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Jest Testing Framework</h2>
      <p>
        Jest is a JavaScript testing framework, specifically designed for projects using React, Vue, Angular, and other technologies. It provides a convenient interface for writing and executing tests and has built-in support for various types of tests.
      </p>
      <p>
        <strong>Key Features of Jest:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> Easy to install and set up for a quick start.</li>
        <li><strong>Built-in Features:</strong> Has built-in support for automatic test detection and code coverage.</li>
        <li><strong>Snapshot Testing:</strong> Uses snapshot tests for visual comparison of test results.</li>
        <li><strong>Asynchronous Testing:</strong> Supports a convenient syntax for writing asynchronous tests.</li>
      </ul>
      <p>
        <strong>Where to Learn Jest:</strong>
      </p>
      <ul>
        <li><strong>Official Jest Documentation:</strong> <a href="https://jestjs.io/docs/en/getting-started" target="_blank" rel="noopener noreferrer" style={linkStyles}>Jest Docs</a></li>
        <br></br>
        <li><strong>Getting Started Tutorial:</strong> <a href="https://jestjs.io/docs/en/snapshot-testing" target="_blank" rel="noopener noreferrer" style={linkStyles}>Snapshot Testing</a></li>
      </ul>
    </>
  );

  return content;
};

export default JestModalContent;
