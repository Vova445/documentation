import React from 'react';

const ConfluenceModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#205072",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Confluence" : "Confluence Official Page";

  const officialPageLink = (
    <a href="https://www.atlassian.com/software/confluence" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Confluence - це веб-платформа для спільної роботи та обміну інформацією в команді. Розроблена компанією Atlassian, Confluence надає засоби для створення вікі-сторінок, спільної роботи над документами та організації знань в організації.
      </p>
      <p>
        <strong>Основні можливості Confluence:</strong>
      </p>
      <ul>
        <li><strong>Вікі-Спільнота:</strong> Створення та редагування вікі-сторінок для зберігання знань команди.</li>
        <li><strong>Спільна Робота:</strong> Можливість одночасного редагування документів та спільної роботи над проектами.</li>
        <li><strong>Інтеграція з Іншими Інструментами:</strong> Підтримка інтеграції з іншими інструментами Atlassian та сторонніми додатками.</li>
        <li><strong>Керування Знаннями:</strong> Система організації та зберігання знань для підтримки ефективності робочих процесів.</li>
      </ul>
      <p>
        <strong>Основні переваги Confluence:</strong>
      </p>
      <ul>
        <li><strong>Спільна Робота:</strong> Підтримка ефективної командної роботи та обміну інформацією.</li>
        <li><strong>Легкість Використання:</strong> Інтуїтивний інтерфейс для швидкого створення та редагування вмісту.</li>
        <li><strong>Розширені Можливості:</strong> Широкі можливості налаштувань та розширень для адаптації до потреб команди.</li>
      </ul>
      <p>
        <strong>Сторінка Confluence:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Confluence - Collaboration and Documentation Platform</h2>
      <p>
        Confluence is a web-based platform for collaboration and information sharing within a team. Developed by Atlassian, Confluence provides tools for creating wiki pages, collaborating on documents, and organizing knowledge within an organization.
      </p>
      <p>
        <strong>Key Features of Confluence:</strong>
      </p>
      <ul>
        <li><strong>Wiki Collaboration:</strong> Creating and editing wiki pages to store team knowledge.</li>
        <li><strong>Collaborative Work:</strong> Simultaneous editing of documents and collaboration on projects.</li>
        <li><strong>Integration with Other Tools:</strong> Support for integration with other Atlassian tools and third-party add-ons.</li>
        <li><strong>Knowledge Management:</strong> System for organizing and storing knowledge to support efficient work processes.</li>
      </ul>
      <p>
        <strong>Main Advantages of Confluence:</strong>
      </p>
      <ul>
        <li><strong>Collaborative Work:</strong> Support for effective team collaboration and information exchange.</li>
        <li><strong>Ease of Use:</strong> Intuitive interface for quick content creation and editing.</li>
        <li><strong>Advanced Capabilities:</strong> Extensive customization options and extensions to adapt to team needs.</li>
      </ul>
      <p>
        <strong>Page Confluence:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default ConfluenceModalContent;
