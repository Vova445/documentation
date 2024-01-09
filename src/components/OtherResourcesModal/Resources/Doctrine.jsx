import React from 'react';

const DoctrineModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#df5320",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.doctrine-project.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Doctrine
    </a>
  ) : (
    <a href="https://www.doctrine-project.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Doctrine Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Doctrine - це набір PHP-бібліотек для роботи з реляційними базами даних. В основі лежить ORM (Object-Relational Mapping), яке надає можливість взаємодії з базою даних через об'єктно-орієнтований підхід.
      </p>
      <p>
        <strong>Основні поняття Doctrine:</strong>
      </p>
      <ul>
        <li><strong>ORM (Object-Relational Mapping):</strong> Техніка, що дозволяє взаємодіяти з базою даних за допомогою об'єктно-орієнтованого коду.</li>
        <li><strong>Entity:</strong> Об'єкт, який відображає запис в таблиці бази даних.</li>
        <li><strong>Repository:</strong> Об'єкт, який надає методи для вибірки та фільтрації даних з бази даних.</li>
        <li><strong>QueryBuilder:</strong> Клас для програмної побудови SQL-запитів.</li>
        <li><strong>Migrations:</strong> Механізм для контролю та виконання змін в схемі бази даних.</li>
      </ul>
      <p>
        <strong>Основні переваги Doctrine:</strong>
      </p>
      <ul>
        <li><strong>Об'єктно-орієнтований Підхід:</strong> Взаємодія з базою даних через об'єкти та класи.</li>
        <li><strong>Гнучкість та Розширюваність:</strong> Можливість використовувати різні стратегії відображення та розширювати функціонал.</li>
        <li><strong>Підтримка Migrations:</strong> Зручний механізм для керування змінами в схемі бази даних.</li>
      </ul>
      <p>
        <strong>Сторінка Doctrine:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Doctrine PHP Libraries</h2>
      <p>
        Doctrine is a set of PHP libraries for working with relational databases. It is built on the Object-Relational Mapping (ORM) principle, allowing interaction with the database through an object-oriented approach.
      </p>
      <p>
        <strong>Key Concepts of Doctrine:</strong>
      </p>
      <ul>
        <li><strong>ORM (Object-Relational Mapping):</strong> Technique that enables interaction with the database using object-oriented code.</li>
        <li><strong>Entity:</strong> Object representing a record in a database table.</li>
        <li><strong>Repository:</strong> Object providing methods for selecting and filtering data from the database.</li>
        <li><strong>QueryBuilder:</strong> Class for programmatically constructing SQL queries.</li>
        <li><strong>Migrations:</strong> Mechanism for controlling and executing changes in the database schema.</li>
      </ul>
      <p>
        <strong>Main Advantages of Doctrine:</strong>
      </p>
      <ul>
        <li><strong>Object-Oriented Approach:</strong> Interaction with the database through objects and classes.</li>
        <li><strong>Flexibility and Extensibility:</strong> Ability to use different mapping strategies and extend functionality.</li>
        <li><strong>Migrations Support:</strong> Convenient mechanism for managing changes in the database schema.</li>
      </ul>
      <p>
        <strong>Doctrine Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default DoctrineModalContent;
