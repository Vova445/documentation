import React from 'react';

const GitLabModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#FC6D26",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка GitLab
    </a>
  ) : (
    <a href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      GitLab Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        GitLab - це веб-платформа для керування проектами та спільної роботи розробників, яка включає в себе систему керування версіями Git та різноманітні інструменти для розробки.
      </p>
      <p>
        <strong>Основні функції GitLab:</strong>
      </p>
      <ul>
        <li><strong>Репозиторії:</strong> Управління та збереження кодових проектів з використанням Git.</li>
        <li><strong>CI/CD Пайплайни:</strong> Автоматизовані процеси збірки, тестування та розгортання коду.</li>
        <li><strong>Інтеграція Засобів Розробки:</strong> Інтеграція засобів для спрощення розробки та спільної роботи.</li>
        <li><strong>Моніторинг та Звітність:</strong> Інструменти для моніторингу та аналізу продуктивності проектів.</li>
      </ul>
      <p>
        <strong>Основні переваги GitLab:</strong>
      </p>
      <ul>
        <li><strong>Інтегрована CI/CD:</strong> Автоматизовані процеси збірки та розгортання коду безпосередньо з платформи.</li>
        <li><strong>Велика Спільнота:</strong> Активна спільнота розробників та розширені можливості співпраці.</li>
        <li><strong>Відкритий Код:</strong> Засновано на принципах відкритого програмного забезпечення.</li>
      </ul>
      <p>
        <strong>Сторінка GitLab:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>GitLab Platform</h2>
      <p>
        GitLab is a web platform for project management and collaboration among developers, including the Git version control system and various tools for development.
      </p>
      <p>
        <strong>Key Features of GitLab:</strong>
      </p>
      <ul>
        <li><strong>Repositories:</strong> Management and storage of code projects using Git.</li>
        <li><strong>CI/CD Pipelines:</strong> Automated processes for building, testing, and deploying code.</li>
        <li><strong>Integration of Development Tools:</strong> Integration of tools to simplify development and collaboration.</li>
        <li><strong>Monitoring and Reporting:</strong> Tools for monitoring and analyzing project performance.</li>
      </ul>
      <p>
        <strong>Main Advantages of GitLab:</strong>
      </p>
      <ul>
        <li><strong>Integrated CI/CD:</strong> Automated processes for building and deploying code directly from the platform.</li>
        <li><strong>Large Community:</strong> Active community of developers and extensive collaboration capabilities.</li>
        <li><strong>Open Source:</strong> Based on the principles of open-source software.</li>
      </ul>
      <p>
        <strong>GitLab Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default GitLabModalContent;
