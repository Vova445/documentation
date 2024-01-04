import React from 'react';

const FastAPIModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#00C7B7",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        FastAPI - це сучасний веб-фреймворк для швидкої розробки API на мові програмування Python з автоматичною генерацією документації.
      </p>
      <p>
        <strong>Основні принципи FastAPI:</strong>
      </p>
      <ul>
        <li><strong>Швидкість:</strong> Забезпечує високу швидкість виконання завдяки використанню статичного аналізу типів.</li>
        <li><strong>Автоматична Документація:</strong> Генерує документацію автоматично на основі анотацій та типів даних.</li>
        <li><strong>Безпека:</strong> Вбудована підтримка стандартів безпеки, таких як OAuth2 та JWT.</li>
      </ul>
      <p>
        <strong>Основні концепції FastAPI:</strong>
      </p>
      <ul>
        <li><strong>Залежності:</strong> Використання системи залежностей для введення та керування компонентами.</li>
        <li><strong>Pydantic Моделі:</strong> Використання Pydantic для визначення структури даних та валідації вхідних даних.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        FastAPI підходить для швидкої розробки ефективних API за допомогою мови програмування Python та автоматичної документації.
      </p>
      <p>
        <strong>Де вчитися FastAPI:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація FastAPI:</strong> <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>FastAPI</a></li>
        <br></br>
        <li><strong>FastAPI Уроки та Приклади:</strong> <a href="https://github.com/tiangolo/fastapi#user-guide" target="_blank" rel="noopener noreferrer" style={linkStyles}>GitHub - FastAPI User Guide</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>FastAPI Web Framework</h2>
      <p>
        FastAPI is a modern web framework for rapid API development in the Python programming language with automatic documentation generation.
      </p>
      <p>
        <strong>Key Principles of FastAPI:</strong>
      </p>
      <ul>
        <li><strong>Speed:</strong> Ensures high execution speed by utilizing static type analysis.</li>
        <li><strong>Automatic Documentation:</strong> Generates documentation automatically based on annotations and data types.</li>
        <li><strong>Security:</strong> Built-in support for security standards such as OAuth2 and JWT.</li>
      </ul>
      <p>
        <strong>Core Concepts of FastAPI:</strong>
      </p>
      <ul>
        <li><strong>Dependencies:</strong> Uses a dependency system for input and component management.</li>
        <li><strong>Pydantic Models:</strong> Utilizes Pydantic for defining data structures and validating input data.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        FastAPI is suitable for rapid development of efficient APIs using the Python programming language and automatic documentation.
      </p>
      <p>
        <strong>Where to Learn FastAPI:</strong>
      </p>
      <ul>
        <li><strong>Official FastAPI Documentation:</strong> <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>FastAPI</a></li>
        <br></br>
        <li><strong>FastAPI Tutorials and Examples:</strong> <a href="https://github.com/tiangolo/fastapi#user-guide" target="_blank" rel="noopener noreferrer" style={linkStyles}>GitHub - FastAPI User Guide</a></li>
      </ul>
    </>
  );

  return content;
};

export default FastAPIModalContent;
