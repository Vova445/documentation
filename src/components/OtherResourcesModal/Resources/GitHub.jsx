import React from 'react';

const GitHubModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#181717",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка GitHub
    </a>
  ) : (
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      GitHub Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        GitHub - це веб-платформа для спільної роботи над проектами з використанням системи керування версіями Git. Вона надає інструменти для співпраці, відстеження змін та управління кодовими проектами.
      </p>
      <p>
        <strong>Основні функції GitHub:</strong>
      </p>
      <ul>
        <li><strong>Репозиторії:</strong> Зберігання та управління кодовими проектами за допомогою Git.</li>
        <li><strong>Проблеми та Завдання:</strong> Відстеження проблем, завдань та змін в коді.</li>
        <li><strong>Гілки та Злиття (Merge):</strong> Робота з гілками коду та об'єднання їх з основною гілкою.</li>
        <li><strong>Співпраця:</strong> Можливість спільно працювати над проектами в команді.</li>
      </ul>
      <p>
        <strong>Основні переваги GitHub:</strong>
      </p>
      <ul>
        <li><strong>Спільна Робота:</strong> Можливість спільно працювати над проектами з будь-якої точки світу.</li>
        <li><strong>Відкритий Код:</strong> Підтримка відкритого коду та вільного програмного забезпечення.</li>
        <li><strong>Інтеграція Засобів:</strong> Засоби для автоматизації тестування, розгортання та інші.</li>
      </ul>
      <p>
        <strong>Сторінка GitHub:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>GitHub Platform</h2>
      <p>
        GitHub is a web platform for collaborating on projects using the Git version control system. It provides tools for collaboration, change tracking, and project management.
      </p>
      <p>
        <strong>Key Features of GitHub:</strong>
      </p>
      <ul>
        <li><strong>Repositories:</strong> Storage and management of code projects using Git.</li>
        <li><strong>Issues and Tasks:</strong> Tracking issues, tasks, and code changes.</li>
        <li><strong>Branches and Merge:</strong> Working with code branches and merging them into the main branch.</li>
        <li><strong>Collaboration:</strong> Ability to collaborate on projects as a team.</li>
      </ul>
      <p>
        <strong>Main Advantages of GitHub:</strong>
      </p>
      <ul>
        <li><strong>Collaboration:</strong> Ability to collaborate on projects from anywhere in the world.</li>
        <li><strong>Open Source:</strong> Support for open-source and free software.</li>
        <li><strong>Integration of Tools:</strong> Tools for automation of testing, deployment, and more.</li>
      </ul>
      <p>
        <strong>GitHub Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default GitHubModalContent;
