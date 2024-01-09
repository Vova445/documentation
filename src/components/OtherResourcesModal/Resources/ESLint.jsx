import React from 'react';

const ESLintModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#4B32C3",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка ESLint
    </a>
  ) : (
    <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      ESLint Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        ESLint - це статичний аналізатор коду для ідентифікації та виправлення проблем в коді JavaScript.
      </p>
      <p>
        <strong>Основні поняття ESLint:</strong>
      </p>
      <ul>
        <li><strong>Правила:</strong> Набір конфігурованих правил для визначення стилю та якості коду.</li>
        <li><strong>Конфігурація:</strong> Налаштування, що визначають, які правила використовувати та як їх застосовувати.</li>
        <li><strong>Плагіни:</strong> Розширення для включення додаткових правил та функціональності.</li>
        <li><strong>Фіксація Помилок:</strong> Можливість автоматичної виправлення деяких виділених проблем.</li>
      </ul>
      <p>
        <strong>Основні переваги ESLint:</strong>
      </p>
      <ul>
        <li><strong>Стандартизація Коду:</strong> Допомагає визначити та дотримуватися стандартів коду.</li>
        <li><strong>Виявлення Помилок:</strong> Визначає потенційні проблеми та помилки в коді.</li>
        <li><strong>Автоматична Корекція:</strong> Здатність автоматично виправляти частину знайдених проблем.</li>
      </ul>
      <p>
        <strong>Сторінка ESLint:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>ESLint</h2>
      <p>
        ESLint is a static code analyzer for identifying and fixing issues in JavaScript code.
      </p>
      <p>
        <strong>Key Concepts of ESLint:</strong>
      </p>
      <ul>
        <li><strong>Rules:</strong> A set of configurable rules to define coding style and quality.</li>
        <li><strong>Configuration:</strong> Settings that determine which rules to use and how to apply them.</li>
        <li><strong>Plugins:</strong> Extensions to include additional rules and functionality.</li>
        <li><strong>Error Fixing:</strong> Ability to automatically fix some identified issues.</li>
      </ul>
      <p>
        <strong>Main Advantages of ESLint:</strong>
      </p>
      <ul>
        <li><strong>Code Standardization:</strong> Helps define and adhere to coding standards.</li>
        <li><strong>Error Detection:</strong> Identifies potential issues and errors in the code.</li>
        <li><strong>Automatic Correction:</strong> Ability to automatically fix some of the identified issues.</li>
      </ul>
      <p>
        <strong>ESLint Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default ESLintModalContent;
