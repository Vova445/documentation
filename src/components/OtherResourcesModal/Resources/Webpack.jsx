import React from 'react';

const WebpackModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#8DD6F9",
    color: "#000",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Webpack
    </a>
  ) : (
    <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Webpack Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Webpack - це популярний модульний збірник для сучасних JavaScript додатків. Він використовується для збирання ресурсів, таких як JavaScript, стилі, зображення та інші, у зручний для розгортання формат.
      </p>
      <p>
        <strong>Основні функції Webpack:</strong>
      </p>
      <ul>
        <li><strong>Модульність:</strong> Підтримка модульної розробки та імпорт різних типів файлів.</li>
        <li><strong>Лоадери (Loaders):</strong> Використовуються для обробки різних типів файлів перед додаванням їх до проекту.</li>
        <li><strong>Плагіни (Plugins):</strong> Розширення функціональності Webpack за допомогою плагінів.</li>
        <li><strong>Code Splitting:</strong> Можливість розділення коду на менші фрагменти для оптимізації завантаження.</li>
      </ul>
      <p>
        <strong>Основні переваги Webpack:</strong>
      </p>
      <ul>
        <li><strong>Модульність:</strong> Підтримка модульної розробки для легкості управління кодом.</li>
        <li><strong>Розширюваність:</strong> Розширення функціональності через використання лоадерів та плагінів.</li>
        <li><strong>Оптимізація Завантаження:</strong> Можливість використання Code Splitting для ефективного завантаження сторінок.</li>
      </ul>
      <p><strong>Сторінка Webpack:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Webpack</h2>
      <p>
        Webpack is a popular module bundler for modern JavaScript applications. It is used to bundle resources such as JavaScript, styles, images, and others into a deployable format.
      </p>
      <p>
        <strong>Key Features of Webpack:</strong>
      </p>
      <ul>
        <li><strong>Modularity:</strong> Support for modular development and importing various types of files.</li>
        <li><strong>Loaders:</strong> Used to process different types of files before adding them to the project.</li>
        <li><strong>Plugins:</strong> Extends Webpack functionality through plugins.</li>
        <li><strong>Code Splitting:</strong> Ability to split code into smaller chunks for optimized loading.</li>
      </ul>
      <p>
        <strong>Main Advantages of Webpack:</strong>
      </p>
      <ul>
        <li><strong>Modularity:</strong> Support for modular development for code manageability.</li>
        <li><strong>Extensibility:</strong> Extend functionality through the use of loaders and plugins.</li>
        <li><strong>Optimized Loading:</strong> Ability to use Code Splitting for efficient page loading.</li>
      </ul>
      <p><strong>Webpack Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default WebpackModalContent;
