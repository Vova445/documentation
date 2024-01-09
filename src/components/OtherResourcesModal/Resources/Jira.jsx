import React from 'react';

const JiraModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#0052CC",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Jira
    </a>
  ) : (
    <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Jira Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Jira - це популярний інструмент управління проектами та задачами, розроблений компанією Atlassian.
      </p>
      <p>
        <strong>Основні можливості Jira:</strong>
      </p>
      <ul>
        <li><strong>Створення Завдань:</strong> Можливість створювати, призначати та відстежувати завдання.</li>
        <li><strong>Спрощений Процес Розробки:</strong> Управління задачами за допомогою Scrum або Kanban.</li>
        <li><strong>Планування Термінів:</strong> Визначення та відстеження термінів виконання проекту.</li>
        <li><strong>Звітність та Аналітика:</strong> Генерація звітів та аналіз ефективності.</li>
      </ul>
      <p>
        <strong>Основні переваги Jira:</strong>
      </p>
      <ul>
        <li><strong>Гнучкість та Розширюваність:</strong> Можливість налаштування для різних типів проектів.</li>
        <li><strong>Інтеграція з Іншими Інструментами:</strong> Можливість інтеграції з різними іншими інструментами розробки.</li>
        <li><strong>Широкий Вибір Додатків:</strong> Наявність різноманітних додатків та розширень.</li>
      </ul>
      <p>
        <strong>Сторінка Jira:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Jira</h2>
      <p>
        Jira is a popular project and task management tool developed by Atlassian.
      </p>
      <p>
        <strong>Key Features of Jira:</strong>
      </p>
      <ul>
        <li><strong>Task Creation:</strong> Ability to create, assign, and track tasks.</li>
        <li><strong>Simplified Development Process:</strong> Task management using Scrum or Kanban.</li>
        <li><strong>Timeline Planning:</strong> Definition and tracking of project timelines.</li>
        <li><strong>Reporting and Analytics:</strong> Report generation and performance analysis.</li>
      </ul>
      <p>
        <strong>Main Advantages of Jira:</strong>
      </p>
      <ul>
        <li><strong>Flexibility and Extensibility:</strong> Configurability for different types of projects.</li>
        <li><strong>Integration with Other Tools:</strong> Ability to integrate with various other development tools.</li>
        <li><strong>Wide Selection of Apps:</strong> Availability of various apps and extensions.</li>
      </ul>
      <p>
        <strong>Jira Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default JiraModalContent;
