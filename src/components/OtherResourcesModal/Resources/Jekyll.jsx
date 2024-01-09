import React from 'react';

const JekyllModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#CC0000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://jekyllrb.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Jekyll
    </a>
  ) : (
    <a href="https://jekyllrb.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Jekyll Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Jekyll - це генератор статичних веб-сайтів, який дозволяє створювати веб-сайти та блоги з використанням простого текстового опису.
      </p>
      <p>
        <strong>Основні функції Jekyll:</strong>
      </p>
      <ul>
        <li><strong>Простий Синтаксис:</strong> Використовує простий та легкий у засвоєнні синтаксис для створення контенту.</li>
        <li><strong>Локальний Розвиток:</strong> Забезпечує можливість перегляду сайту локально перед публікацією.</li>
        <li><strong>Шаблонізація:</strong> Використовує шаблонізацію для створення стандартних структур інтерфейсу.</li>
        <li><strong>Підтримка GitHub Pages:</strong> Легка інтеграція з GitHub Pages для швидкого розгортання веб-сайтів.</li>
      </ul>
      <p>
        <strong>Основні переваги Jekyll:</strong>
      </p>
      <ul>
        <li><strong>Простота Використання:</strong> Легкий у використанні для швидкого створення статичних веб-сайтів.</li>
        <li><strong>Локальний Перегляд:</strong> Можливість перегляду сайту локально для валідації змін.</li>
        <li><strong>GitHub Pages:</strong> Проста інтеграція та розгортання на GitHub Pages для загального доступу.</li>
      </ul>
      <p>
        <strong>Сторінка Jekyll:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Jekyll Static Site Generator</h2>
      <p>
        Jekyll is a static site generator that allows you to create websites and blogs using a simple text description.
      </p>
      <p>
        <strong>Key Features of Jekyll:</strong>
      </p>
      <ul>
        <li><strong>Simple Syntax:</strong> Uses a simple and easy-to-learn syntax for creating content.</li>
        <li><strong>Local Development:</strong> Provides the ability to preview the site locally before publishing.</li>
        <li><strong>Templating:</strong> Utilizes templating to create standardized interface structures.</li>
        <li><strong>GitHub Pages Support:</strong> Easy integration with GitHub Pages for quick website deployment.</li>
      </ul>
      <p>
        <strong>Main Advantages of Jekyll:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> Lightweight and easy to use for quickly building static websites.</li>
        <li><strong>Local Preview:</strong> Ability to preview the site locally for validation of changes.</li>
        <li><strong>GitHub Pages:</strong> Simple integration and deployment on GitHub Pages for public access.</li>
      </ul>
      <p>
        <strong>Jekyll Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default JekyllModalContent;
