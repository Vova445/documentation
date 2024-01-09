import React from 'react';

const BunModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "gray",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Bun" : "Bun Official Page";

  const officialPageLink = (
    <a href="https://bun.sh/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Bun - це модульний бандлер для JavaScript проектів. Він забезпечує зручний та ефективний спосіб збірки та оптимізації ресурсів вашого проекту. Bun підтримує сучасні можливості JavaScript, такі як ES modules, та дозволяє легко налаштовувати різні аспекти збірки.
      </p>
      <p>
        <strong>Основні поняття Bun:</strong>
      </p>
      <ul>
        <li><strong>Модульність:</strong> Розділена система налаштувань та плагіни для зручного використання.</li>
        <li><strong>Підтримка ES Modules:</strong> Підтримка сучасного синтаксису модулів JavaScript.</li>
        <li><strong>Ефективність:</strong> Забезпечує швидку та ефективну збірку ресурсів проекту.</li>
        <li><strong>Конфігурація:</strong> Легко налаштовується та розширюється за допомогою конфігураційних файлів.</li>
      </ul>
      <p>
        <strong>Основні переваги Bun:</strong>
      </p>
      <ul>
        <li><strong>Модульність та Розширюваність:</strong> Зручний підхід до конфігурації та розширення функціоналу.</li>
        <li><strong>Підтримка Сучасного JavaScript:</strong> Підтримка ES Modules та інших сучасних можливостей JS.</li>
        <li><strong>Швидкість Збірки:</strong> Швидка та ефективна збірка ресурсів проекту.</li>
      </ul>
      <p>
        <strong>Сторінка Bun:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Bun JavaScript Bundler</h2>
      <p>
        Bun is a modular JavaScript bundler for projects. It provides a convenient and efficient way to bundle and optimize your project's resources. Bun supports modern JavaScript features such as ES modules and allows easy configuration of various build aspects.
      </p>
      <p>
        <strong>Key Concepts of Bun:</strong>
      </p>
      <ul>
        <li><strong>Modularity:</strong> Modular system of settings and plugins for convenient use.</li>
        <li><strong>ES Modules Support:</strong> Support for modern JavaScript module syntax.</li>
        <li><strong>Efficiency:</strong> Ensures fast and efficient bundling of project resources.</li>
        <li><strong>Configuration:</strong> Easily configurable and extensible through configuration files.</li>
      </ul>
      <p>
        <strong>Main Advantages of Bun:</strong>
      </p>
      <ul>
        <li><strong>Modularity and Extensibility:</strong> Convenient approach to configuration and functionality extension.</li>
        <li><strong>Support for Modern JavaScript:</strong> Support for ES Modules and other modern JS features.</li>
        <li><strong>Build Speed:</strong> Fast and efficient bundling of project resources.</li>
      </ul>
      <p>
        <strong>Page Bun:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default BunModalContent;
