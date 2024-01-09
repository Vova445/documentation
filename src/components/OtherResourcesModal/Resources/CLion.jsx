import React from 'react';

const CLionModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка CLion" : "CLion Official Page";

  const officialPageLink = (
    <a href="https://www.jetbrains.com/clion/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        CLion - це інтегроване середовище розробки (IDE) від компанії JetBrains, спеціалізоване на розробці програмного забезпечення на мові програмування C++.
      </p>
      <p>
        <strong>Основні можливості CLion:</strong>
      </p>
      <ul>
        <li><strong>Інтелектуальне Автодоповнення:</strong> Автоматичне доповнення коду та підказки в реальному часі.</li>
        <li><strong>Аналіз Коду:</strong> Вбудовані засоби аналізу коду для виявлення помилок та підвищення якості коду.</li>
        <li><strong>Навігація та Рефакторинг:</strong> Зручна навігація по проекту та можливості рефакторингу коду.</li>
        <li><strong>Інтеграція з Іншими Засобами Розробки:</strong> Сумісність з системами контролю версій та іншими інструментами.</li>
      </ul>
      <p>
        <strong>Основні переваги CLion:</strong>
      </p>
      <ul>
        <li><strong>Підтримка C++:</strong> Спеціалізована IDE для роботи з мовою програмування C++.</li>
        <li><strong>Інтеграція з Іншими Засобами Розробки:</strong> Можливість інтеграції з різними інструментами та системами контролю версій.</li>
        <li><strong>Підтримка Сучасних Стандартів:</strong> Відповідність сучасним стандартам розробки на C++.</li>
      </ul>
      <p>
        <strong>Сторінка CLion:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>CLion IDE</h2>
      <p>
        CLion is an integrated development environment (IDE) from JetBrains, specialized in software development using the C++ programming language.
      </p>
      <p>
        <strong>Key Features of CLion:</strong>
      </p>
      <ul>
        <li><strong>Intelligent Code Completion:</strong> Automatic code completion and real-time suggestions.</li>
        <li><strong>Code Analysis:</strong> Built-in code analysis tools to detect errors and improve code quality.</li>
        <li><strong>Navigation and Refactoring:</strong> Convenient project navigation and code refactoring capabilities.</li>
        <li><strong>Integration with Other Development Tools:</strong> Compatibility with version control systems and other tools.</li>
      </ul>
      <p>
        <strong>Main Advantages of CLion:</strong>
      </p>
      <ul>
        <li><strong>C++ Support:</strong> Specialized IDE for working with the C++ programming language.</li>
        <li><strong>Integration with Other Development Tools:</strong> Ability to integrate with various tools and version control systems.</li>
        <li><strong>Support for Modern Standards:</strong> Compliance with modern C++ development standards.</li>
      </ul>
      <p>
        <strong>Page CLion:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default CLionModalContent;
