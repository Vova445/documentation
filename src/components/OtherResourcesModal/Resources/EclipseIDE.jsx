import React from 'react';

const EclipseModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#292c31",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.eclipse.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Eclipse IDE
    </a>
  ) : (
    <a href="https://www.eclipse.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Eclipse IDE Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Eclipse IDE - це інтегроване середовище розробки (IDE), що використовується для програмування в різних мовах, таких як Java, C++, PHP, та інші.
      </p>
      <p>
        <strong>Основні поняття Eclipse IDE:</strong>
      </p>
      <ul>
        <li><strong>Робоче Середовище (Workspace):</strong> Директорія, яка містить всі ваші проекти та налаштування.</li>
        <li><strong>Проекти:</strong> Сукупність ресурсів та файлів, які спільно працюють над конкретною задачею.</li>
        <li><strong>Плагіни:</strong> Розширення, які надають підтримку різних мов та функціональностей.</li>
        <li><strong>Перспективи:</strong> Розкладки та набори відкритих вікон та видів робочого середовища.</li>
      </ul>
      <p>
        <strong>Основні переваги Eclipse IDE:</strong>
      </p>
      <ul>
        <li><strong>Універсальність:</strong> Підтримка різних мов та фреймворків.</li>
        <li><strong>Розширюваність:</strong> Велика кількість плагінів для розширення функціональності.</li>
        <li><strong>Відкрите Джерело:</strong> Розповсюджується за ліцензією Eclipse Public License.</li>
      </ul>
      <p>
        <strong>Сторінка Eclipse IDE:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Eclipse Integrated Development Environment (IDE)</h2>
      <p>
        Eclipse IDE is an integrated development environment used for programming in various languages such as Java, C++, PHP, and others.
      </p>
      <p>
        <strong>Key Concepts of Eclipse IDE:</strong>
      </p>
      <ul>
        <li><strong>Workspace:</strong> Directory containing all your projects and configurations.</li>
        <li><strong>Projects:</strong> Collection of resources and files working together on a specific task.</li>
        <li><strong>Plugins:</strong> Extensions providing support for different languages and functionalities.</li>
        <li><strong>Perspectives:</strong> Layouts and sets of open windows and views in the workspace.</li>
      </ul>
      <p>
        <strong>Main Advantages of Eclipse IDE:</strong>
      </p>
      <ul>
        <li><strong>Versatility:</strong> Support for various languages and frameworks.</li>
        <li><strong>Extensibility:</strong> Large number of plugins to extend functionality.</li>
        <li><strong>Open Source:</strong> Distributed under the Eclipse Public License.</li>
      </ul>
      <p>
        <strong>Eclipse IDE Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default EclipseModalContent;
