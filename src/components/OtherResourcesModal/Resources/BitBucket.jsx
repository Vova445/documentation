import React from 'react';

const BitbucketModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#205081",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Bitbucket" : "Bitbucket Official Page";

  const officialPageLink = (
    <a href="https://bitbucket.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Bitbucket - це веб-платформа для управління репозиторіями Git та Mercurial. Вона надає інструменти для спільної роботи, відстеження проблем, автоматизованого CI/CD та багато іншого. Bitbucket є популярним вибором для розробників та команд, що ведуть проекти з відкритим вихідним кодом.
      </p>
      <p>
        <strong>Основні поняття Bitbucket:</strong>
      </p>
      <ul>
        <li><strong>Репозиторії:</strong> Зберігають код та історію змін за допомогою Git або Mercurial.</li>
        <li><strong>Вітки (Branches):</strong> Відокремлені версії репозиторію для роботи над конкретними функціями чи виправленнями.</li>
        <li><strong>Пул-запити (Pull Requests):</strong> Механізм для обговорення та злиття змін між вітками.</li>
        <li><strong>Інтеграція з CI/CD:</strong> Можливість налаштування автоматизованого процесу збірки та розгортання.</li>
      </ul>
      <p>
        <strong>Основні переваги Bitbucket:</strong>
      </p>
      <ul>
        <li><strong>Спільна Робота:</strong> Можливість ефективної спільної роботи над проектами з допомогою різних інструментів.</li>
        <li><strong>Вбудовані Інструменти:</strong> Наявність інструментів для ведення списку завдань, обговорень та інших аспектів розробки.</li>
        <li><strong>Гнучкість Інтеграції:</strong> Легкість інтеграції з іншими інструментами розробки через API.</li>
      </ul>
      <p>
        <strong>Сторінка Bitbucket:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Bitbucket Version Control</h2>
      <p>
        Bitbucket is a web-based platform for managing Git and Mercurial repositories. It provides tools for collaboration, issue tracking, automated CI/CD, and more. Bitbucket is a popular choice for developers and teams working on open-source projects.
      </p>
      <p>
        <strong>Key Concepts of Bitbucket:</strong>
      </p>
      <ul>
        <li><strong>Repositories:</strong> Store code and change history using Git or Mercurial.</li>
        <li><strong>Branches:</strong> Isolated versions of the repository for working on specific features or fixes.</li>
        <li><strong>Pull Requests:</strong> Mechanism for discussing and merging changes between branches.</li>
        <li><strong>CI/CD Integration:</strong> Ability to configure automated build and deployment processes.</li>
      </ul>
      <p>
        <strong>Main Advantages of Bitbucket:</strong>
      </p>
      <ul>
        <li><strong>Collaboration:</strong> Efficient collaboration on projects using various development tools.</li>
        <li><strong>Built-in Tools:</strong> Availability of tools for task tracking, discussions, and other development aspects.</li>
        <li><strong>Flexible Integration:</strong> Easy integration with other development tools through API.</li>
      </ul>
      <p>
        <strong>Page Bitbucket:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default BitbucketModalContent;
