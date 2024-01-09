import React from 'react';

const CircleCIModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#343434",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка CircleCI" : "CircleCI Official Page";

  const officialPageLink = (
    <a href="https://circleci.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        CircleCI - це платформа для автоматизації процесів поставки програмного забезпечення (CI/CD). Вона дозволяє автоматизувати тестування та розгортання програмного коду в різних середовищах.
      </p>
      <p>
        <strong>Основні можливості CircleCI:</strong>
      </p>
      <ul>
        <li><strong>CI/CD Пайплайни:</strong> Створення автоматизованих пайплайнів для тестування та розгортання коду.</li>
        <li><strong>Інтеграція з Іншими Інструментами:</strong> Сумісність та інтеграція з різними інструментами розробки.</li>
        <li><strong>Швидкість та Надійність:</strong> Швидке виконання завдань та стабільна робота платформи.</li>
        <li><strong>Масштабованість:</strong> Здатність пристосовуватися до зростання обсягу роботи та проектів.</li>
      </ul>
      <p>
        <strong>Основні переваги CircleCI:</strong>
      </p>
      <ul>
        <li><strong>Автоматизація CI/CD:</strong> Забезпечення автоматичної поставки програмного забезпечення.</li>
        <li><strong>Інтеграція з Іншими Інструментами:</strong> Можливість використовувати разом з різними інструментами розробки.</li>
        <li><strong>Інтуїтивний Інтерфейс:</strong> Зручний інтерфейс для налаштування та відстеження пайплайнів.</li>
      </ul>
      <p>
        <strong>Сторінка CircleCI:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>CircleCI Automation Platform</h2>
      <p>
        CircleCI is a platform for automating software delivery processes (CI/CD). It allows automating code testing and deployment in various environments.
      </p>
      <p>
        <strong>Key Features of CircleCI:</strong>
      </p>
      <ul>
        <li><strong>CI/CD Pipelines:</strong> Creation of automated pipelines for code testing and deployment.</li>
        <li><strong>Integration with Other Tools:</strong> Compatibility and integration with various development tools.</li>
        <li><strong>Speed and Reliability:</strong> Fast task execution and stable platform performance.</li>
        <li><strong>Scalability:</strong> Ability to adapt to growing workloads and projects.</li>
      </ul>
      <p>
        <strong>Main Advantages of CircleCI:</strong>
      </p>
      <ul>
        <li><strong>CI/CD Automation:</strong> Ensuring automatic software delivery.</li>
        <li><strong>Integration with Other Tools:</strong> Ability to use together with various development tools.</li>
        <li><strong>Intuitive Interface:</strong> Convenient interface for configuring and monitoring pipelines.</li>
      </ul>
      <p>
        <strong>Page CircleCI:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default CircleCIModalContent;
