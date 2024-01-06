import React from 'react';

const SQLAlchemyModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#3E5269",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        SQLAlchemy - це бібліотека для роботи з базами даних в мові програмування Python. Вона надає гнучкий та потужний інтерфейс для взаємодії з різними системами управління базами даних (СУБД) та використовує об'єктно-реляційний мапінг (ORM) для зручного доступу до даних.
      </p>
      <p>
        <strong>Основні можливості SQLAlchemy:</strong>
      </p>
      <ul>
        <li><strong>ORM (Object-Relational Mapping):</strong> SQLAlchemy надає ORM, яке дозволяє працювати з базою даних, використовуючи об'єктно-орієнтований підхід.</li>
        <li><strong>Мова SQL:</strong> Можливість використання мови SQL для складання складних запитів до бази даних.</li>
        <li><strong>Міграції:</strong> Підтримка механізму міграцій для управління змінами в схемі бази даних.</li>
        <li><strong>Підтримка Різних СУБД:</strong> Робота з різними системами управління базами даних, такими як PostgreSQL, MySQL, SQLite та інші.</li>
      </ul>
      <p>
        <strong>Де Вчитися SQLAlchemy:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація SQLAlchemy:</strong> <a href="https://docs.sqlalchemy.org/en/20/" target="_blank" rel="noopener noreferrer" style={linkStyles}>SQLAlchemy Docs</a></li>
        <br></br>
        <li><strong>SQLAlchemy Core Tutorial:</strong> <a href="https://docs.sqlalchemy.org/en/20/core/" target="_blank" rel="noopener noreferrer" style={linkStyles}>SQLAlchemy Core Tutorial</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>SQLAlchemy Database Library</h2>
      <p>
        SQLAlchemy is a library for working with databases in the Python programming language. It provides a flexible and powerful interface for interacting with various database management systems (DBMS) and uses object-relational mapping (ORM) for convenient data access.
      </p>
      <p>
        <strong>Key Features of SQLAlchemy:</strong>
      </p>
      <ul>
        <li><strong>ORM (Object-Relational Mapping):</strong> SQLAlchemy provides ORM, allowing you to work with the database using an object-oriented approach.</li>
        <li><strong>SQL Language:</strong> Ability to use SQL language for composing complex queries to the database.</li>
        <li><strong>Migrations:</strong> Support for a migration mechanism to manage changes in the database schema.</li>
        <li><strong>Support for Various DBMS:</strong> Working with different database management systems, such as PostgreSQL, MySQL, SQLite, and others.</li>
      </ul>
      <p>
        <strong>Where to Learn SQLAlchemy:</strong>
      </p>
      <ul>
        <li><strong>Official SQLAlchemy Documentation:</strong> <a href="https://docs.sqlalchemy.org/en/20/" target="_blank" rel="noopener noreferrer" style={linkStyles}>SQLAlchemy Docs</a></li>
        <br></br>
        <li><strong>SQLAlchemy Core Tutorial:</strong> <a href="https://docs.sqlalchemy.org/en/20/core/" target="_blank" rel="noopener noreferrer" style={linkStyles}>SQLAlchemy Core Tutorial</a></li>
      </ul>
    </>
  );

  return content;
};

export default SQLAlchemyModalContent;
