import React from 'react';

const EmberModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#F05E1B",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Ember.js - це фреймворк для створення амбітних веб-додатків, який надає структуру та інструменти для швидкої та
        ефективної розробки.
      </p>
      <p>
        <strong>Основні принципи Ember.js:</strong>
      </p>
      <ul>
        <li><strong>Конвенція перед Конфігурацією:</strong> Використовується конвенція для зменшення необхідності в
          конфігуруванні.</li>
        <li><strong>Об'єктно-Орієнтований Підхід:</strong> Використовує парадигму об'єктно-орієнтованого програмування для
          розробки.</li>
        <li><strong>Магістраль Шаблонів:</strong> Використовує магістраль для автоматичного оновлення інтерфейсу користувача
          при зміні даних.</li>
      </ul>
      <p>
        <strong>Основні концепції Ember.js:</strong>
      </p>
      <ul>
        <li><strong>Маршрутизація:</strong> Система маршрутизації для визначення станів додатка та URL-адрес.</li>
        <li><strong>Компоненти:</strong> Використання компонентів для розділення інтерфейсу на малі, самодостатні блоки.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Ember.js підходить для розробки великих та амбітних веб-додатків з використанням стандартів та кращих практик.
      </p>
      <p>
        <strong>Де вчитися Ember.js:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Ember.js:</strong> <a href="https://guides.emberjs.com/release/"
            target="_blank" rel="noopener noreferrer" style={linkStyles}>Ember.js</a></li>
        <br></br>
        <li><strong>Відмінний Підручник:</strong> <a href="https://yoember.com/" target="_blank"
            rel="noopener noreferrer" style={linkStyles}>Yoember</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Ember.js Framework</h2>
      <p>
        Ember.js is a framework for building ambitious web applications that provides structure and tools for rapid and
        efficient development.
      </p>
      <p>
        <strong>Key Principles of Ember.js:</strong>
      </p>
      <ul>
        <li><strong>Convention over Configuration:</strong> Utilizes convention to reduce the need for configuration.</li>
        <li><strong>Object-Oriented Approach:</strong> Uses the object-oriented programming paradigm for development.</li>
        <li><strong>Handlebars Templating:</strong> Uses Handlebars templating engine for automatic UI updates when data
          changes.</li>
      </ul>
      <p>
        <strong>Core Concepts of Ember.js:</strong>
      </p>
      <ul>
        <li><strong>Routing:</strong> Routing system to define the states of the application and URLs.</li>
        <li><strong>Components:</strong> Use of components to break down the interface into small, self-contained
          blocks.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Ember.js is suitable for developing large and ambitious web applications using standards and best practices.
      </p>
      <p>
        <strong>Where to Learn Ember.js:</strong>
      </p>
      <ul>
        <li><strong>Official Ember.js Documentation:</strong> <a href="https://guides.emberjs.com/release/"
            target="_blank" rel="noopener noreferrer" style={linkStyles}>Ember.js</a></li>
        <br></br>
        <li><strong>Excellent Tutorial:</strong> <a href="https://yoember.com/" target="_blank"
            rel="noopener noreferrer" style={linkStyles}>Yoember</a></li>
      </ul>
    </>
  );

  return content;
};

export default EmberModalContent;
