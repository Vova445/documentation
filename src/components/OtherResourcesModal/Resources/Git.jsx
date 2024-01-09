import React from 'react';

const GitModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#F05032",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Git
    </a>
  ) : (
    <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Git Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Git - це розподілена система керування версіями, яка дозволяє відстежувати зміни в коді проекту та спільно працювати над ним у команді.
      </p>
      <p>
        <strong>Основні поняття Git:</strong>
      </p>
      <ul>
        <li><strong>Репозиторій (Repository):</strong> Каталог або збірник файлів, що містить проект та його історію.</li>
        <li><strong>Коміт (Commit):</strong> Зафіксовані зміни в коді з описом, що робить їх легкозрозумілими.</li>
        <li><strong>Вітка (Branch):</strong> Окрема лінія розвитку проекту, дозволяє вносити та тестувати зміни незалежно від інших відгалужень.</li>
        <li><strong>Злиття (Merge):</strong> Об'єднання змін з однієї гілки в іншу для збереження єдності проекту.</li>
      </ul>
      <p>
        <strong>Основні переваги Git:</strong>
      </p>
      <ul>
        <li><strong>Розподіленість:</strong> Кожен учасник має повний резерв копії репозиторію.</li>
        <li><strong>Гнучкість Відгалуження:</strong> Можливість робити відгалуження для незалежної роботи над функціоналом.</li>
        <li><strong>Швидкість та Продуктивність:</strong> Швидке відстеження та злиття змін.</li>
      </ul>
      <p>
        <strong>Сторінка Git:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Git Version Control</h2>
      <p>
        Git is a distributed version control system that allows tracking changes in the project's code and collaborating on it within a team.
      </p>
      <p>
        <strong>Key Concepts of Git:</strong>
      </p>
      <ul>
        <li><strong>Repository:</strong> A directory or collection of files containing the project and its history.</li>
        <li><strong>Commit:</strong> Recorded changes in the code with a descriptive message for clarity.</li>
        <li><strong>Branch:</strong> A separate line of development that allows making and testing changes independently of other branches.</li>
        <li><strong>Merge:</strong> Combining changes from one branch into another to maintain project unity.</li>
      </ul>
      <p>
        <strong>Main Advantages of Git:</strong>
      </p>
      <ul>
        <li><strong>Distributed Nature:</strong> Each participant has a complete backup copy of the repository.</li>
        <li><strong>Branching Flexibility:</strong> The ability to create branches for independent feature development.</li>
        <li><strong>Speed and Productivity:</strong> Fast tracking and merging of changes.</li>
      </ul>
      <p>
        <strong>Git Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default GitModalContent;
