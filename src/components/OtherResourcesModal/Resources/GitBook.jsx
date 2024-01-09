import React from 'react';

const GitBookModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#1A75CF",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.gitbook.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка GitBook
    </a>
  ) : (
    <a href="https://www.gitbook.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      GitBook Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        GitBook - це сервіс для створення та публікації книг за допомогою системи керування версіями Git. Він надає зручний інтерфейс для написання та форматування книг у Markdown.
      </p>
      <p>
        <strong>Основні функції GitBook:</strong>
      </p>
      <ul>
        <li><strong>Редактор Markdown:</strong> Легкий у використанні редактор для написання книг у форматі Markdown.</li>
        <li><strong>Git Integration:</strong> Інтеграція з Git дозволяє відстежувати та контролювати зміни в книзі.</li>
        <li><strong>Спільна Робота:</strong> Можливість спільно працювати над книгою в команді.</li>
        <li><strong>Експорт та Публікація:</strong> Зручні інструменти для експорту та публікації книги в різних форматах.</li>
      </ul>
      <p>
        <strong>Основні переваги GitBook:</strong>
      </p>
      <ul>
        <li><strong>Простота Використання:</strong> Легкий у використанні інтерфейс для авторів та читачів.</li>
        <li><strong>Гнучкість Форматування:</strong> Можливість форматувати книгу з використанням Markdown.</li>
        <li><strong>Інтеграція Git:</strong> Зберігання та відстеження змін в книзі за допомогою системи керування версіями Git.</li>
      </ul>
      <p>
        <strong>Сторінка GitBook:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>GitBook Platform</h2>
      <p>
        GitBook is a service for creating and publishing books using the Git version control system. It provides a user-friendly interface for writing and formatting books in Markdown.
      </p>
      <p>
        <strong>Key Features of GitBook:</strong>
      </p>
      <ul>
        <li><strong>Markdown Editor:</strong> Easy-to-use editor for writing books in Markdown format.</li>
        <li><strong>Git Integration:</strong> Integration with Git allows tracking and controlling changes in the book.</li>
        <li><strong>Collaboration:</strong> Ability to collaborate on the book as a team.</li>
        <li><strong>Export and Publication:</strong> Convenient tools for exporting and publishing the book in various formats.</li>
      </ul>
      <p>
        <strong>Main Advantages of GitBook:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> User-friendly interface for authors and readers.</li>
        <li><strong>Formatting Flexibility:</strong> Ability to format the book using Markdown.</li>
        <li><strong>Git Integration:</strong> Storage and tracking of changes in the book using the Git version control system.</li>
      </ul>
      <p>
        <strong>GitBook Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default GitBookModalContent;
