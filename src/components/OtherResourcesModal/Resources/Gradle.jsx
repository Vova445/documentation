import React from 'react';

const GradleModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#02303A",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://gradle.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Gradle
    </a>
  ) : (
    <a href="https://gradle.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Gradle Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Gradle - це система автоматизації збирання та управління залежностями, яка використовує мову DSL для конфігурації проектів.
      </p>
      <p>
        <strong>Основні функції Gradle:</strong>
      </p>
      <ul>
        <li><strong>Гнучка Конфігурація:</strong> Можливість використання DSL для зручної конфігурації проектів.</li>
        <li><strong>Ефективне Збирання:</strong> Прискорене збирання завдяки інкрементальному підходу та оптимізаціям.</li>
        <li><strong>Управління Залежностями:</strong> Зручний механізм для визначення та управління залежностями проекту.</li>
        <li><strong>Розширювані Плагіни:</strong> Велика кількість розширюваних плагінів для різноманітних задач.</li>
      </ul>
      <p>
        <strong>Основні переваги Gradle:</strong>
      </p>
      <ul>
        <li><strong>Гнучкість:</strong> Можливість налаштування системи під конкретні потреби проекту.</li>
        <li><strong>Продуктивність:</strong> Швидке та ефективне збирання завдяки ряду оптимізацій.</li>
        <li><strong>Розширюваність:</strong> Великий вибір розширюваних плагінів для вирішення різних завдань.</li>
      </ul>
      <p>
        <strong>Сторінка Gradle:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Gradle Build System</h2>
      <p>
        Gradle is an automation system for building and managing dependencies that uses a DSL (Domain-Specific Language) for project configuration.
      </p>
      <p>
        <strong>Key Features of Gradle:</strong>
      </p>
      <ul>
        <li><strong>Flexible Configuration:</strong> Ability to use DSL for convenient project configuration.</li>
        <li><strong>Efficient Build:</strong> Accelerated build process with incremental builds and optimizations.</li>
        <li><strong>Dependency Management:</strong> Convenient mechanism for defining and managing project dependencies.</li>
        <li><strong>Extensible Plugins:</strong> A wide range of extensible plugins for various tasks.</li>
      </ul>
      <p>
        <strong>Main Advantages of Gradle:</strong>
      </p>
      <ul>
        <li><strong>Flexibility:</strong> Ability to customize the system to the specific needs of the project.</li>
        <li><strong>Performance:</strong> Fast and efficient build process with a variety of optimizations.</li>
        <li><strong>Scalability:</strong> A large selection of extensible plugins to address different tasks.</li>
      </ul>
      <p>
        <strong>Gradle Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default GradleModalContent;
