import React from 'react';

const GoLandModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#00acd7",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.jetbrains.com/go/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка GoLand
    </a>
  ) : (
    <a href="https://www.jetbrains.com/go/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      GoLand Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        GoLand - це інтегроване середовище розробки (IDE) від компанії JetBrains, спеціалізоване на мові програмування Go.
      </p>
      <p>
        <strong>Основні функції GoLand:</strong>
      </p>
      <ul>
        <li><strong>Підтримка Мови Go:</strong> Повна підтримка мови програмування Go з усіма її особливостями.</li>
        <li><strong>Інтеграція з Інструментами:</strong> Інтеграція з різними інструментами та фреймворками для розробки на Go.</li>
        <li><strong>Розширена Автодоповнення:</strong> Розширені можливості автодоповнення коду та рефакторингу.</li>
        <li><strong>Вбудований Тестувальник:</strong> Зручний інструментарій для написання та запуску тестів.</li>
      </ul>
      <p>
        <strong>Основні переваги GoLand:</strong>
      </p>
      <ul>
        <li><strong>Продуктивність:</strong> Забезпечує високу продуктивність при розробці на мові програмування Go.</li>
        <li><strong>Широкі Можливості:</strong> Різноманітні інструменти та функції для розширення можливостей розробників.</li>
        <li><strong>Вбудована Документація:</strong> Доступ до документації та інструментів прямо в IDE.</li>
      </ul>
      <p>
        <strong>Сторінка GoLand:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>GoLand IDE</h2>
      <p>
        GoLand is an integrated development environment (IDE) by JetBrains, specialized for the Go programming language.
      </p>
      <p>
        <strong>Key Features of GoLand:</strong>
      </p>
      <ul>
        <li><strong>Go Language Support:</strong> Full support for the Go programming language with all its features.</li>
        <li><strong>Integration with Tools:</strong> Integration with various tools and frameworks for Go development.</li>
        <li><strong>Advanced Code Completion:</strong> Advanced code completion and refactoring capabilities.</li>
        <li><strong>Built-in Tester:</strong> Convenient tools for writing and running tests.</li>
      </ul>
      <p>
        <strong>Main Advantages of GoLand:</strong>
      </p>
      <ul>
        <li><strong>Productivity:</strong> Provides high productivity for Go language development.</li>
        <li><strong>Extensive Features:</strong> Various tools and features to extend developers' capabilities.</li>
        <li><strong>Built-in Documentation:</strong> Access to documentation and tools right within the IDE.</li>
      </ul>
      <p>
        <strong>GoLand Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default GoLandModalContent;
