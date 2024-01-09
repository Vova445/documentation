import React from 'react';

const VSCodeModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#007ACC",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Visual Studio Code
    </a>
  ) : (
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Visual Studio Code Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Visual Studio Code (VS Code) - це легкий, швидкий та потужний редактор коду, створений Microsoft для розробників. Він має велику кількість розширень та плагінів для роботи з різними мовами та технологіями.
      </p>
      <p>
        <strong>Основні можливості Visual Studio Code:</strong>
      </p>
      <ul>
        <li><strong>Підтримка Багатьох Мов:</strong> Робота з різними мовами програмування та інструментами.</li>
        <li><strong>Вбудовані Засоби Розробки:</strong> Легкість у використанні та потужність завдяки вбудованим інструментам.</li>
        <li><strong>Розширення та Плагіни:</strong> Велика кількість розширень для підтримки різних технологій та функціоналу.</li>
        <li><strong>Інтеграція з Git:</strong> Зручне керування версіями та інтеграція з системою контролю версій Git.</li>
      </ul>
      <p>
        <strong>Основні переваги Visual Studio Code:</strong>
      </p>
      <ul>
        <li><strong>Легкість та Швидкість:</strong> Мінімалістичний і швидкий інтерфейс редактора коду.</li>
        <li><strong>Розширені Можливості:</strong> Багатий функціонал завдяки великій кількості розширень.</li>
        <li><strong>Кросплатформеність:</strong> Робота на різних операційних системах (Windows, macOS, Linux).</li>
      </ul>
      <p><strong>Сторінка Visual Studio Code:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Visual Studio Code</h2>
      <p>
        Visual Studio Code (VS Code) is a lightweight, fast, and powerful code editor created by Microsoft for developers. It has a large number of extensions and plugins for working with various languages and technologies.
      </p>
      <p>
        <strong>Key Features of Visual Studio Code:</strong>
      </p>
      <ul>
        <li><strong>Support for Multiple Languages:</strong> Working with various programming languages and tools.</li>
        <li><strong>Built-in Development Tools:</strong> Easy-to-use and powerful thanks to built-in tools.</li>
        <li><strong>Extensions and Plugins:</strong> A large number of extensions to support different technologies and functionality.</li>
        <li><strong>Integration with Git:</strong> Convenient version control and integration with the Git version control system.</li>
      </ul>
      <p>
        <strong>Main Advantages of Visual Studio Code:</strong>
      </p>
      <ul>
        <li><strong>Lightweight and Fast:</strong> Minimalistic and fast code editor interface.</li>
        <li><strong>Advanced Features:</strong> Rich functionality thanks to a large number of extensions.</li>
        <li><strong>Cross-Platform:</strong> Works on different operating systems (Windows, macOS, Linux).</li>
      </ul>
      <p><strong>Visual Studio Code Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default VSCodeModalContent;
