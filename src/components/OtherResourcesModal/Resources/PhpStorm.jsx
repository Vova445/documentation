import React from 'react';

const PhpStormModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.jetbrains.com/phpstorm/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка PhpStorm
    </a>
  ) : (
    <a href="https://www.jetbrains.com/phpstorm/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      PhpStorm Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        PhpStorm - це інтегроване середовище розробки (IDE) для мови програмування PHP, яке надає розширений функціонал для комфортної розробки проектів.
      </p>
      <p>
        <strong>Основні функції PhpStorm:</strong>
      </p>
      <ul>
        <li><strong>Підтримка PHP та Інших Мов:</strong> Розширена підтримка PHP, HTML, CSS, JavaScript та інших мов програмування.</li>
        <li><strong>Рефакторинг:</strong> Вбудовані інструменти для полегшення рефакторингу коду.</li>
        <li><strong>Вбудована Термінал:</strong> Вбудований термінал для виконання команд безпосередньо з IDE.</li>
        <li><strong>Підтримка Фреймворків:</strong> Вбудована підтримка популярних PHP-фреймворків.</li>
      </ul>
      <p>
        <strong>Основні переваги PhpStorm:</strong>
      </p>
      <ul>
        <li><strong>Зручний Інтерфейс:</strong> Інтуїтивно зрозумілий інтерфейс для зручної розробки.</li>
        <li><strong>Аналіз Коду:</strong> Вбудовані інструменти для аналізу та виявлення помилок в коді.</li>
        <li><strong>Розширені Інструменти:</strong> Багатофункціональні інструменти для розширеної розробки та рефакторингу.</li>
      </ul>
      <p><strong>Сторінка PhpStorm:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>PhpStorm Integrated Development Environment (IDE)</h2>
      <p>
        PhpStorm is an integrated development environment (IDE) for the PHP programming language, providing advanced features for comfortable project development.
      </p>
      <p>
        <strong>Key Features of PhpStorm:</strong>
      </p>
      <ul>
        <li><strong>PHP and Other Language Support:</strong> Advanced support for PHP, HTML, CSS, JavaScript, and other programming languages.</li>
        <li><strong>Refactoring:</strong> Built-in tools to facilitate code refactoring.</li>
        <li><strong>Built-in Terminal:</strong> Integrated terminal for executing commands directly from the IDE.</li>
        <li><strong>Framework Support:</strong> Built-in support for popular PHP frameworks.</li>
      </ul>
      <p>
        <strong>Main Advantages of PhpStorm:</strong>
      </p>
      <ul>
        <li><strong>User-Friendly Interface:</strong> Intuitive interface for convenient development.</li>
        <li><strong>Code Analysis:</strong> Built-in tools for code analysis and error detection.</li>
        <li><strong>Advanced Tools:</strong> Multifunctional tools for advanced development and refactoring.</li>
      </ul>
      <p><strong>PhpStorm Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default PhpStormModalContent;
