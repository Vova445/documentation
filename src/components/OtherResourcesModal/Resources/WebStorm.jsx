import React from 'react';

const WebStormModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#00C7B7",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка WebStorm
    </a>
  ) : (
    <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      WebStorm Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        WebStorm - це потужний інтегрований середовище розробки (IDE) для JavaScript, HTML та CSS, яке надає розширені можливості для комфортної роботи над веб-проектами.
      </p>
      <p>
        <strong>Основні функції WebStorm:</strong>
      </p>
      <ul>
        <li><strong>Інтелектуальний Редактор Коду:</strong> Підтримка автодоповнення, перевірки помилок та рефакторингу.</li>
        <li><strong>Налаштоване Середовище:</strong> Можливість налаштування інтерфейсу та інших параметрів під власні потреби.</li>
        <li><strong>Інструменти Для Роботи З Git:</strong> Вбудовані інструменти для роботи з системою контролю версій Git.</li>
        <li><strong>Вбудовані Інструменти Тестування:</strong> Підтримка запуску та аналізу тестів безпосередньо з IDE.</li>
      </ul>
      <p>
        <strong>Основні переваги WebStorm:</strong>
      </p>
      <ul>
        <li><strong>Продуктивність Розробки:</strong> Забезпечує зручний та швидкий процес розробки веб-проектів.</li>
        <li><strong>Інтеграція З Іншими Інструментами:</strong> Підтримка інтеграції з різними інструментами та сервісами.</li>
        <li><strong>Підтримка Останніх Версій JavaScript:</strong> Надає підтримку нововведень у синтаксисі JavaScript та ECMAScript.</li>
      </ul>
      <p><strong>Сторінка WebStorm:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>WebStorm IDE</h2>
      <p>
        WebStorm is a powerful integrated development environment (IDE) for JavaScript, HTML, and CSS, providing advanced features for comfortable work on web projects.
      </p>
      <p>
        <strong>Key Features of WebStorm:</strong>
      </p>
      <ul>
        <li><strong>Intelligent Code Editor:</strong> Support for autocompletion, error checking, and refactoring.</li>
        <li><strong>Customizable Environment:</strong> Ability to customize the interface and other settings according to your needs.</li>
        <li><strong>Git Integration:</strong> Built-in tools for working with the Git version control system.</li>
        <li><strong>Built-in Testing Tools:</strong> Support for running and analyzing tests directly from the IDE.</li>
      </ul>
      <p>
        <strong>Main Advantages of WebStorm:</strong>
      </p>
      <ul>
        <li><strong>Development Productivity:</strong> Provides a convenient and fast web project development process.</li>
        <li><strong>Integration with Other Tools:</strong> Supports integration with various tools and services.</li>
        <li><strong>Support for Latest JavaScript Versions:</strong> Provides support for innovations in JavaScript and ECMAScript syntax.</li>
      </ul>
      <p><strong>WebStorm Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default WebStormModalContent;
