import React from 'react';

const SQLModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        SQL (Structured Query Language) - це мова запитів, яка використовується для управління та взаємодії з реляційними базами даних. SQL дозволяє виконувати різноманітні операції, такі як вставка, оновлення, видалення та вибірка даних з бази даних.
      </p>
      <p>
        <strong>Застосування SQL:</strong>
      </p>
      <ul>
        <li><strong>Створення Таблиць та Баз Даних:</strong> SQL використовується для створення таблиць та баз даних.</li>
        <li><strong>Запити та Фільтрація Даних:</strong> SQL дозволяє виконувати складні запити та фільтрацію даних.</li>
        <li><strong>Оновлення та Видалення Даних:</strong> SQL використовується для оновлення та видалення існуючих даних.</li>
        <li><strong>Індексація та Оптимізація:</strong> SQL дозволяє створювати індекси для поліпшення швидкодії операцій.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        SQL використовується всюди, де потрібно зберігати та отримувати дані з реляційних баз даних. Він є невід'ємною частиною розробки програмного забезпечення.
      </p>
      <p>
        <strong>Де Вчити SQL:</strong>
      </p>
      <ul>
        <li><strong>W3Schools SQL Tutorial:</strong> <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>W3Schools SQL Tutorial</a></li>
        <li><strong>Codecademy SQL Course:</strong> <a href="https://www.codecademy.com/learn/learn-sql" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Codecademy SQL Course</a></li>
        <li><strong>SQLZoo Interactive SQL Tutorial:</strong> <a href="https://sqlzoo.net/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>SQLZoo Interactive SQL Tutorial</a></li>
      </ul>
      <p>
        <strong>Особливості SQL:</strong>
      </p>
      <ul>
        <li><strong>Декларативний Синтаксис:</strong> SQL використовує декларативний підхід до опису операцій з базою даних.</li>
        <li><strong>Транзакції та Захист Даних:</strong> SQL підтримує транзакції для забезпечення цілісності даних.</li>
        <li><strong>Широкі Можливості Запитів:</strong> SQL дозволяє виконувати різноманітні та складні запити для отримання потрібної інформації.</li>
      </ul>
      <p>
        SQL - це необхідний інструмент для розробників та аналітиків, які працюють з реляційними базами даних.
      </p>
    </>
  ) : (
    <>
      <p>
        SQL (Structured Query Language) is a query language used for managing and interacting with relational databases. SQL allows performing various operations such as inserting, updating, deleting, and selecting data from a database.
      </p>
      <p>
        <strong>Applications of SQL:</strong>
      </p>
      <ul>
        <li><strong>Creating Tables and Databases:</strong> SQL is used for creating tables and databases.</li>
        <li><strong>Queries and Data Filtering:</strong> SQL allows executing complex queries and filtering data.</li>
        <li><strong>Updating and Deleting Data:</strong> SQL is used for updating and deleting existing data.</li>
        <li><strong>Indexing and Optimization:</strong> SQL allows creating indexes to improve the performance of operations.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        SQL is used wherever there is a need to store and retrieve data from relational databases. It is an integral part of software development.
      </p>
      <p>
        <strong>Where to Learn SQL:</strong>
      </p>
      <ul>
        <li><strong>W3Schools SQL Tutorial:</strong> <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>W3Schools SQL Tutorial</a></li>
        <li><strong>Codecademy SQL Course:</strong> <a href="https://www.codecademy.com/learn/learn-sql" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Codecademy SQL Course</a></li>
        <li><strong>SQLZoo Interactive SQL Tutorial:</strong> <a href="https://sqlzoo.net/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>SQLZoo Interactive SQL Tutorial</a></li>
      </ul>
      <p>
        <strong>Features of SQL:</strong>
      </p>
      <ul>
        <li><strong>Declarative Syntax:</strong> SQL uses a declarative approach to describe database operations.</li>
        <li><strong>Transactions and Data Protection:</strong> SQL supports transactions to ensure data integrity.</li>
        <li><strong>Wide Range of Query Capabilities:</strong> SQL allows executing various and complex queries to obtain the required information.</li>
      </ul>
      <p>
        SQL is an essential tool for developers and analysts working with relational databases.
      </p>
    </>
  );

  return content;
};

export default SQLModalContent;
