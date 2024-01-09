import React from 'react';

const DockerModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#0db7ed",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Docker
    </a>
  ) : (
    <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Docker Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Docker - це платформа для розробки, доставки та експлуатації програмного забезпечення у контейнерах. Контейнер - це легковаговий та самодостатній пакет, який включає в себе все необхідне для виконання програми, включаючи код, середовище виконання, бібліотеки та залежності.
      </p>
      <p>
        <strong>Основні поняття Docker:</strong>
      </p>
      <ul>
        <li><strong>Контейнери:</strong> Стандартизовані виконавчі середовища, які включають в себе програми та всі їх залежності.</li>
        <li><strong>Імеджі:</strong> Зображення, що включає в себе код, середовище виконання та інші необхідні компоненти для створення контейнера.</li>
        <li><strong>Dockerfile:</strong> Скрипт, який містить інструкції для автоматизованого створення Docker імеджів.</li>
        <li><strong>Compose:</strong> Інструмент для визначення та запуску багатоконтейнерних Docker застосунків.</li>
        <li><strong>Swarm:</strong> Інструмент для оркестрації та управління контейнерами в розподіленому середовищі.</li>
      </ul>
      <p>
        <strong>Основні переваги Docker:</strong>
      </p>
      <ul>
        <li><strong>Легкість Переносу:</strong> Контейнери можна використовувати на будь-якому сервері, підтримуючи однакове середовище.</li>
        <li><strong>Швидкість Розгортання:</strong> Контейнери запускаються миттєво та мають низький рівень накладних витрат.</li>
        <li><strong>Ізоляція:</strong> Кожен контейнер ізольований, не впливає на інші контейнери та систему в цілому.</li>
      </ul>
      <p>
        <strong>Сторінка Docker:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Docker - Containerization Platform</h2>
      <p>
        Docker is a platform for developing, shipping, and running software in containers. A container is a lightweight and self-sufficient package that includes everything needed to run a program, including the code, runtime, libraries, and dependencies.
      </p>
      <p>
        <strong>Key Concepts of Docker:</strong>
      </p>
      <ul>
        <li><strong>Containers:</strong> Standardized executable environments that include applications and all their dependencies.</li>
        <li><strong>Images:</strong> Snapshots that include code, runtime environment, and other necessary components to create a container.</li>
        <li><strong>Dockerfile:</strong> Script containing instructions for automated Docker image creation.</li>
        <li><strong>Compose:</strong> Tool for defining and running multi-container Docker applications.</li>
        <li><strong>Swarm:</strong> Tool for orchestrating and managing containers in a distributed environment.</li>
      </ul>
      <p>
        <strong>Main Advantages of Docker:</strong>
      </p>
      <ul>
        <li><strong>Portability:</strong> Containers can run on any server, maintaining a consistent environment.</li>
        <li><strong>Deployment Speed:</strong> Containers start instantly and have low overhead.</li>
        <li><strong>Isolation:</strong> Each container is isolated and does not impact other containers or the system as a whole.</li>
      </ul>
      <p>
        <strong>Docker Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default DockerModalContent;
