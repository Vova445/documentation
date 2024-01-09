import React from 'react';

const DBeaverModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#004080",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка DBeaver" : "DBeaver Official Page";

  const officialPageLink = (
    <a href="https://dbeaver.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        DBeaver - це універсальний інструмент для роботи з базами даних, який підтримує багато різних систем управління базами даних (СУБД). Він надає зручний інтерфейс для роботи з базами даних, включаючи можливості виконання SQL-запитів, візуального аналізу даних та управління структурою бази даних.
      </p>
      <p>
        <strong>Основні можливості DBeaver:</strong>
      </p>
      <ul>
        <li><strong>Підтримка Різних СУБД:</strong> Підтримка багатьох популярних систем управління базами даних.</li>
        <li><strong>Візуальний Запитний Редактор:</strong> Зручний візуальний інтерфейс для написання та виконання SQL-запитів.</li>
        <li><strong>Адміністрування Баз Даних:</strong> Можливості управління базами даних, включаючи створення, редагування та видалення об'єктів бази даних.</li>
        <li><strong>Експорт та Імпорт Даних:</strong> Функціонал для зручного експорту та імпорту даних.</li>
      </ul>
      <p>
        <strong>Основні переваги DBeaver:</strong>
      </p>
      <ul>
        <li><strong>Безкоштовність та Відкритий Код:</strong> DBeaver є безкоштовним та відкритим програмним забезпеченням.</li>
        <li><strong>Кросплатформенність:</strong> Підтримка роботи на різних операційних системах, включаючи Windows, macOS та Linux.</li>
        <li><strong>Активна Спільнота:</strong> Наявність активної спільноти користувачів та розробників.</li>
      </ul>
      <p>
        <strong>Сторінка DBeaver:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>DBeaver - Universal Database Tool</h2>
      <p>
        DBeaver is a universal database tool that supports many different database management systems (DBMS). It provides a convenient interface for working with databases, including the ability to execute SQL queries, visually analyze data, and manage the database structure.
      </p>
      <p>
        <strong>Key Features of DBeaver:</strong>
      </p>
      <ul>
        <li><strong>Support for Various DBMS:</strong> Support for many popular database management systems.</li>
        <li><strong>Visual Query Editor:</strong> Convenient visual interface for writing and executing SQL queries.</li>
        <li><strong>Database Administration:</strong> Database management capabilities, including creating, editing, and deleting database objects.</li>
        <li><strong>Data Export and Import:</strong> Functionality for easy data export and import.</li>
      </ul>
      <p>
        <strong>Main Advantages of DBeaver:</strong>
      </p>
      <ul>
        <li><strong>Free and Open Source:</strong> DBeaver is free and open-source software.</li>
        <li><strong>Cross-Platform:</strong> Support for operation on different operating systems, including Windows, macOS, and Linux.</li>
        <li><strong>Active Community:</strong> Presence of an active community of users and developers.</li>
      </ul>
      <p>
        <strong>DBeaver Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default DBeaverModalContent;
