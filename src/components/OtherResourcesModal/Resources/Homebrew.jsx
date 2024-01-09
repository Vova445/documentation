import React from 'react';

const HomebrewModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#FBB040",
    color: "#000",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://brew.sh/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Homebrew
    </a>
  ) : (
    <a href="https://brew.sh/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Homebrew Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Homebrew - це менеджер пакетів для macOS та Linux, який дозволяє легко встановлювати, оновлювати та керувати пакетами
        та програмним забезпеченням з командного рядка. Він забезпечує зручний спосіб управління пакетами та їх залежностями.
      </p>
      <p>
        <strong>Основні функції Homebrew:</strong>
      </p>
      <ul>
        <li><strong>Інсталяція Пакетів:</strong> Легка установка пакетів та програм з командного рядка.</li>
        <li><strong>Оновлення Пакетів:</strong> Можливість швидкого оновлення встановлених пакетів.</li>
        <li><strong>Керування Залежностями:</strong> Автоматичне вирішення та управління залежностями пакетів.</li>
        <li><strong>Простий Синтаксис:</strong> Зручний та простий у використанні синтаксис команд.</li>
      </ul>
      <p>
        <strong>Основні переваги Homebrew:</strong>
      </p>
      <ul>
        <li><strong>Легкість Використання:</strong> Простий та інтуітивний інтерфейс командного рядка.</li>
        <li><strong>Активна Спільнота:</strong> Активна спільнота користувачів та підтримка для багатьох пакетів.</li>
        <li><strong>Гнучкість:</strong> Можливість додавання власних формул та розширення функціоналу.</li>
      </ul>
      <p>
        <strong>Сторінка Homebrew:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Homebrew</h2>
      <p>
        Homebrew is a package manager for macOS and Linux that allows easy installation, updating, and management of packages
        and software from the command line. It provides a convenient way to manage packages and their dependencies.
      </p>
      <p>
        <strong>Key Features of Homebrew:</strong>
      </p>
      <ul>
        <li><strong>Package Installation:</strong> Easy installation of packages and software from the command line.</li>
        <li><strong>Package Updates:</strong> Ability to quickly update installed packages.</li>
        <li><strong>Dependency Management:</strong> Automatic resolution and management of package dependencies.</li>
        <li><strong>Simple Syntax:</strong> Convenient and easy-to-use command syntax.</li>
      </ul>
      <p>
        <strong>Main Advantages of Homebrew:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> Simple and intuitive command-line interface.</li>
        <li><strong>Active Community:</strong> Active user community and support for many packages.</li>
        <li><strong>Flexibility:</strong> Ability to add custom formulas and extend functionality.</li>
      </ul>
      <p>
        <strong>Homebrew Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default HomebrewModalContent;
