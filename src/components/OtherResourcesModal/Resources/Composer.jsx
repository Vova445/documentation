import React from 'react';

const ComposerModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#885630",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Composer" : "Composer Official Page";

  const officialPageLink = (
    <a href="https://getcomposer.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Composer - це залежність для PHP, яка дозволяє керувати бібліотеками та пакетами в PHP-проектах. Використовується для завантаження, встановлення та оновлення пакетів залежностей.
      </p>
      <p>
        <strong>Основні можливості Composer:</strong>
      </p>
      <ul>
        <li><strong>Управління Залежностями:</strong> Дозволяє визначити та встановити бібліотеки, які використовуються в проекті.</li>
        <li><strong>Автоматизація Оновлення:</strong> Оновлення всіх бібліотек до останньої версії за допомогою простої команди.</li>
        <li><strong>Створення Автономних Проектів:</strong> Збереження всіх залежностей проекту в файлі composer.json.</li>
        <li><strong>Підтримка Версій:</strong> Можливість вказати конкретні версії бібліотек та пакетів для уникнення конфліктів.</li>
      </ul>
      <p>
        <strong>Основні переваги Composer:</strong>
      </p>
      <ul>
        <li><strong>Ефективне Управління Залежностями:</strong> Зручний і ефективний спосіб керування залежностями в PHP-проектах.</li>
        <li><strong>Активна Спільнота:</strong> Велика та активна спільнота розробників, що забезпечує підтримку та розвиток інструменту.</li>
        <li><strong>Гнучкість та Простота Використання:</strong> Простий синтаксис та гнучкість налаштувань для відповідності вимогам будь-якого проекту.</li>
      </ul>
      <p>
        <strong>Сторінка Composer:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Composer - Dependency Manager for PHP</h2>
      <p>
        Composer is a dependency manager for PHP that allows you to manage libraries and packages in PHP projects. It is used for downloading, installing, and updating dependency packages.
      </p>
      <p>
        <strong>Key Features of Composer:</strong>
      </p>
      <ul>
        <li><strong>Dependency Management:</strong> Allows defining and installing libraries used in the project.</li>
        <li><strong>Automated Updates:</strong> Updates all libraries to the latest version with a simple command.</li>
        <li><strong>Creating Standalone Projects:</strong> Saves all project dependencies in the composer.json file.</li>
        <li><strong>Version Support:</strong> Ability to specify specific versions of libraries and packages to avoid conflicts.</li>
      </ul>
      <p>
        <strong>Main Advantages of Composer:</strong>
      </p>
      <ul>
        <li><strong>Efficient Dependency Management:</strong> Convenient and efficient way to manage dependencies in PHP projects.</li>
        <li><strong>Active Community:</strong> Large and active developer community providing support and tool development.</li>
        <li><strong>Flexibility and Ease of Use:</strong> Simple syntax and flexible settings to meet the requirements of any project.</li>
      </ul>
      <p>
        <strong>Page Composer:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default ComposerModalContent;
