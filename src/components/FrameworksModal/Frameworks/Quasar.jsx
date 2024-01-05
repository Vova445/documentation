import React from 'react';

const QuasarModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#027BE3",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Quasar - це фреймворк для створення сучасних веб-додатків та мобільних додатків на базі Vue.js. Він надає набір інструментів та компонентів для ефективної розробки.
      </p>
      <p>
        <strong>Основні принципи Quasar:</strong>
      </p>
      <ul>
        <li><strong>Всебічність:</strong> Підтримка розробки веб-додатків, мобільних додатків та додатків для настільних платформ.</li>
        <li><strong>Компоненти та Керування Станом:</strong> Велика бібліотека готових компонентів та потужні інструменти для керування станом додатку.</li>
        <li><strong>Material Design та iOS Сумісність:</strong> Гармонійний дизайн, сумісний з Material Design та iOS.</li>
      </ul>
      <p>
        <strong>Основні концепції Quasar:</strong>
      </p>
      <ul>
        <li><strong>Layouts та Переходи:</strong> Визначення макетів та анімацій для покращення користувацького досвіду.</li>
        <li><strong>Розширюваність:</strong> Використання плагінів та розширень для додаткової функціональності.</li>
        <li><strong>Оптимізація та Продуктивність:</strong> Інструменти для оптимізації та підвищення продуктивності додатку.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Quasar є відмінним вибором для розробників, які хочуть створювати універсальні додатки з використанням Vue.js.
      </p>
      <p>
        <strong>Де вчитися Quasar:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Quasar:</strong> <a href="https://quasar.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Quasar</a></li>
        <br></br>
        <li><strong>Відеоуроки та Матеріали:</strong> <a href="https://v1.quasar.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Початок роботи з Quasar</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Quasar Framework</h2>
      <p>
        Quasar is a framework for building modern web and mobile applications based on Vue.js. It provides a set of tools and components for efficient development.
      </p>
      <p>
        <strong>Key Principles of Quasar:</strong>
      </p>
      <ul>
        <li><strong>Universality:</strong> Support for developing web applications, mobile applications, and desktop applications.</li>
        <li><strong>Components and State Management:</strong> Large library of ready-made components and powerful tools for state management.</li>
        <li><strong>Material Design and iOS Compatibility:</strong> Harmonious design compatible with Material Design and iOS.</li>
      </ul>
      <p>
        <strong>Core Concepts of Quasar:</strong>
      </p>
      <ul>
        <li><strong>Layouts and Transitions:</strong> Defining layouts and animations to enhance the user experience.</li>
        <li><strong>Extensibility:</strong> Using plugins and extensions for additional functionality.</li>
        <li><strong>Optimization and Productivity:</strong> Tools for optimizing and improving application performance.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Quasar is an excellent choice for developers looking to create universal applications using Vue.js.
      </p>
      <p>
        <strong>Where to Learn Quasar:</strong>
      </p>
      <ul>
        <li><strong>Official Quasar Documentation:</strong> <a href="https://quasar.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Quasar</a></li>
        <br></br>
        <li><strong>Video Tutorials and Resources:</strong> <a href="https://v1.quasar.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Getting Started with Quasar</a></li>
      </ul>
    </>
  );

  return content;
};

export default QuasarModalContent;
