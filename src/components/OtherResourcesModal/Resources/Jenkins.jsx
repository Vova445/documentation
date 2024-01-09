import React from 'react';

const JenkinsModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#D24939",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Jenkins
    </a>
  ) : (
    <a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Jenkins Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Jenkins - це відкритий інструмент автоматизації в процесі розробки, який дозволяє вам автоматизувати будь-які етапи вашого процесу розробки.
      </p>
      <p>
        <strong>Основні функції Jenkins:</strong>
      </p>
      <ul>
        <li><strong>Автоматизація Збірки:</strong> Здійснює автоматизовану збірку вашого проекту з репозиторію.</li>
        <li><strong>Автоматизація Тестування:</strong> Виконує автоматизоване тестування програмного забезпечення.</li>
        <li><strong>Автоматизація Розгортання:</strong> Надає можливість автоматизувати розгортання вашого додатку.</li>
        <li><strong>Моніторинг Збірок:</strong> Забезпечує моніторинг процесу збірки та розгортання.</li>
      </ul>
      <p>
        <strong>Основні переваги Jenkins:</strong>
      </p>
      <ul>
        <li><strong>Розширюваність:</strong> Має широкий вибір плагінів для розширення функціональності.</li>
        <li><strong>Спрощена Конфігурація:</strong> Легко налаштовується через веб-інтерфейс.</li>
        <li><strong>Активна Спільнота:</strong> Має активну спільноту та підтримку.</li>
      </ul>
      <p>
        <strong>Сторінка Jenkins:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Jenkins Automation Server</h2>
      <p>
        Jenkins is an open-source automation tool that allows you to automate various stages of your software development process.
      </p>
      <p>
        <strong>Key Features of Jenkins:</strong>
      </p>
      <ul>
        <li><strong>Build Automation:</strong> Performs automated builds of your project from the repository.</li>
        <li><strong>Testing Automation:</strong> Executes automated software testing.</li>
        <li><strong>Deployment Automation:</strong> Provides the ability to automate the deployment of your application.</li>
        <li><strong>Build Monitoring:</strong> Monitors the build and deployment process.</li>
      </ul>
      <p>
        <strong>Main Advantages of Jenkins:</strong>
      </p>
      <ul>
        <li><strong>Extensibility:</strong> Has a wide selection of plugins to extend functionality.</li>
        <li><strong>Simple Configuration:</strong> Easily configured through a web interface.</li>
        <li><strong>Active Community:</strong> Has an active community and support.</li>
      </ul>
      <p>
        <strong>Jenkins Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default JenkinsModalContent;
