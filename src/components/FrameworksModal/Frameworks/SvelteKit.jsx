import React from 'react';

const SvelteKitModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#FF3E00",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        SvelteKit - це фреймворк для створення веб-додатків на мові програмування JavaScript, який пропонує простий та ефективний підхід до розробки.
      </p>
      <p>
        <strong>Основні принципи SvelteKit:</strong>
      </p>
      <ul>
        <li><strong>Компонентна архітектура:</strong> Використовує компоненти для організації логіки та інтерфейсу додатку.</li>
        <li><strong>Нульовий конфіг:</strong> Мінімізує необхідність великої конфігурації, пропонуючи стандартні налаштування за замовчуванням.</li>
        <li><strong>Розширюваність:</strong> Дозволяє легко розширювати функціонал додатку за допомогою різноманітних плагінів.</li>
      </ul>
      <p>
        <strong>Основні концепції SvelteKit:</strong>
      </p>
      <ul>
        <li><strong>Синтаксис Svelte:</strong> Використовує простий синтаксис Svelte для створення реактивних компонентів.</li>
        <li><strong>Роутинг:</strong> Надає зручний механізм для визначення маршрутів та їх обробки.</li>
        <li><strong>Попереднє рендеринг:</strong> Підтримує попереднє рендеринг для поліпшення швидкодії додатків.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        SvelteKit підходить для швидкого створення веб-додатків за допомогою простого синтаксису та компонентної архітектури.
      </p>
      <p>
        <strong>Де вчитися SvelteKit:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація SvelteKit:</strong> <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>SvelteKit</a></li>
        <br></br>
        <li><strong>Приклади та Ресурси:</strong> <a href="https://github.com/sveltejs/kit" target="_blank" rel="noopener noreferrer" style={linkStyles}>SvelteKit GitHub Repository</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>SvelteKit Web Framework</h2>
      <p>
        SvelteKit is a framework for building web applications using the JavaScript programming language, offering a simple and efficient approach to development.
      </p>
      <p>
        <strong>Key Principles of SvelteKit:</strong>
      </p>
      <ul>
        <li><strong>Component Architecture:</strong> Utilizes components to organize the logic and interface of the application.</li>
        <li><strong>Zero Configuration:</strong> Minimizes the need for extensive configuration by providing standard defaults.</li>
        <li><strong>Scalability:</strong> Allows easy extension of application functionality through various plugins.</li>
      </ul>
      <p>
        <strong>Core Concepts of SvelteKit:</strong>
      </p>
      <ul>
        <li><strong>Svelte Syntax:</strong> Uses the simple Svelte syntax to create reactive components.</li>
        <li><strong>Routing:</strong> Provides a convenient mechanism for defining and handling routes.</li>
        <li><strong>Pre-rendering:</strong> Supports pre-rendering to enhance application performance.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        SvelteKit is suitable for rapidly creating web applications using a simple syntax and component-based architecture.
      </p>
      <p>
        <strong>Where to Learn SvelteKit:</strong>
      </p>
      <ul>
        <li><strong>Official SvelteKit Documentation:</strong> <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>SvelteKit</a></li>
        <br></br>
        <li><strong>Examples and Resources:</strong> <a href="https://github.com/sveltejs/kit" target="_blank" rel="noopener noreferrer" style={linkStyles}>SvelteKit GitHub Repository</a></li>
      </ul>
    </>
  );

  return content;
};

export default SvelteKitModalContent;
