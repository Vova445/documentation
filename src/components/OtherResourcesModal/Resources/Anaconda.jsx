import React from 'react';

const AnacondaModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "green",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.anaconda.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Anaconda
    </a>
  ) : (
    <a href="https://www.anaconda.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Anaconda Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Anaconda - це платформа для управління пакетами та середовищами для мов програмування Python та R.
      </p>
      <p>
        <strong>Основні поняття Anaconda:</strong>
      </p>
      <ul>
        <li><strong>Conda:</strong> Система управління пакетами, яка дозволяє легко встановлювати, оновлювати та керувати залежностями пакетів.</li>
        <li><strong>Середовище (Environment):</strong> Ізольоване середовище, в якому можна встановлювати та використовувати різні версії пакетів.</li>
        <li><strong>Jupyter Notebooks:</strong> Інтерактивні блокноти для виконання коду, візуалізації та аналізу даних.</li>
      </ul>
      <p>
        <strong>Основні переваги Anaconda:</strong>
      </p>
      <ul>
        <li><strong>Легкість Установки:</strong> Проста установка та управління пакетами.</li>
        <li><strong>Середовища для Проектів:</strong> Можливість створювати власні середовища для різних проектів.</li>
        <li><strong>Jupyter Notebooks:</strong> Зручний інтерактивний інтерфейс для роботи з кодом та даними.</li>
      </ul>
      <p>
        <strong>Сторінка Anaconda:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Anaconda Platform</h2>
      <p>
        Anaconda is a platform for managing packages and environments for the Python and R programming languages.
      </p>
      <p>
        <strong>Key Concepts of Anaconda:</strong>
      </p>
      <ul>
        <li><strong>Conda:</strong> Package management system that allows easy installation, updates, and dependency management.</li>
        <li><strong>Environment:</strong> Isolated environment where different versions of packages can be installed and used.</li>
        <li><strong>Jupyter Notebooks:</strong> Interactive notebooks for executing code, visualization, and data analysis.</li>
      </ul>
      <p>
        <strong>Main Advantages of Anaconda:</strong>
      </p>
      <ul>
        <li><strong>Easy Installation:</strong> Simple installation and package management.</li>
        <li><strong>Project Environments:</strong> Ability to create separate environments for different projects.</li>
        <li><strong>Jupyter Notebooks:</strong> Convenient interactive interface for working with code and data.</li>
      </ul>
      <p>
        <strong>Page Anaconda:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default AnacondaModalContent;
