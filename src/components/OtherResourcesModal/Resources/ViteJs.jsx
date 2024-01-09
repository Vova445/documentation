import React from 'react';

const ViteModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#646CFF",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Vite
    </a>
  ) : (
    <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Vite Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Vite - це легкий та швидкий інструмент для розробки веб-додатків з використанням сучасних технологій. Він базується на концепції "безпечного за замовчуванням" (Zero-Config) та підтримує різні фреймворки, такі як Vue.js, React, та інші.
      </p>
      <p>
        <strong>Основні функції Vite:</strong>
      </p>
      <ul>
        <li><strong>Швидка Розробка:</strong> Забезпечує швидку ініціалізацію та перезавантаження в реальному часі (Hot Module Replacement).</li>
        <li><strong>Підтримка Сучасних Фреймворків:</strong> Підтримка Vue.js, React, Preact, та інших фреймворків.</li>
        <li><strong>Вбудований Server:</strong> Вбудований сервер для локального розробки з підтримкою HTTP/2.</li>
        <li><strong>Миттєва Ініціалізація:</strong> Можливість використання import за потреби, замість завантаження всього проекту в пам'ять.</li>
      </ul>
      <p>
        <strong>Основні переваги Vite:</strong>
      </p>
      <ul>
        <li><strong>Швидкість Розробки:</strong> Швидка ініціалізація та перезавантаження в реальному часі полегшують розробку.</li>
        <li><strong>Ефективність:</strong> Миттєва ініціалізація та використання import призводять до ефективного використання ресурсів.</li>
        <li><strong>Розширюваність:</strong> Підтримка різних фреймворків для більшої гнучкості.</li>
      </ul>
      <p><strong>Сторінка Vite:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Vite.js</h2>
      <p>
        Vite is a lightweight and fast tool for developing web applications using modern technologies. It is based on the "Zero-Config" concept by default and supports various frameworks such as Vue.js, React, and others.
      </p>
      <p>
        <strong>Key Features of Vite:</strong>
      </p>
      <ul>
        <li><strong>Fast Development:</strong> Provides fast initialization and real-time reloading (Hot Module Replacement).</li>
        <li><strong>Support for Modern Frameworks:</strong> Supports Vue.js, React, Preact, and other frameworks.</li>
        <li><strong>Built-in Server:</strong> Built-in server for local development with HTTP/2 support.</li>
        <li><strong>Instant Initialization:</strong> Ability to use import on demand instead of loading the entire project into memory.</li>
      </ul>
      <p>
        <strong>Main Advantages of Vite:</strong>
      </p>
      <ul>
        <li><strong>Development Speed:</strong> Fast initialization and real-time reloading make development easier.</li>
        <li><strong>Efficiency:</strong> Instant initialization and use of import lead to efficient resource utilization.</li>
        <li><strong>Scalability:</strong> Supports various frameworks for greater flexibility.</li>
      </ul>
      <p><strong>Vite Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default ViteModalContent;
