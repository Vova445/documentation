import React from 'react';

const MySQLModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#00758F",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка MySQL
    </a>
  ) : (
    <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      MySQL Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        MySQL - це відкрита реляційна система управління базами даних (RDBMS), яка надає надійне зберігання та обробку даних.
      </p>
      <p>
        <strong>Основні функції MySQL:</strong>
      </p>
      <ul>
        <li><strong>Реляційна Система:</strong> Забезпечує ефективне управління реляційними базами даних.</li>
        <li><strong>Мова SQL:</strong> Використовує мову структурованих запитів для взаємодії з базою даних.</li>
        <li><strong>Транзакції та ACID:</strong> Підтримка транзакцій для забезпечення консистентності даних.</li>
        <li><strong>Широкий Функціонал:</strong> Включає в себе різноманітні типи даних та операції.</li>
      </ul>
      <p>
        <strong>Основні переваги MySQL:</strong>
      </p>
      <ul>
        <li><strong>Відкритий Код:</strong> Безкоштовний та з відкритим вихідним кодом.</li>
        <li><strong>Висока Швидкодія:</strong> Швидке виконання операцій завдяки оптимізації коду.</li>
        <li><strong>Надійність:</strong> Довгий термін служби та стабільність в роботі.</li>
      </ul>
      <p><strong>Сторінка MySQL:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>MySQL Database</h2>
      <p>
        MySQL is an open-source relational database management system (RDBMS) that provides reliable storage and processing of data.
      </p>
      <p>
        <strong>Key Features of MySQL:</strong>
      </p>
      <ul>
        <li><strong>Relational System:</strong> Provides efficient management of relational databases.</li>
        <li><strong>SQL Language:</strong> Uses the structured query language for interacting with the database.</li>
        <li><strong>Transactions and ACID:</strong> Supports transactions to ensure data consistency.</li>
        <li><strong>Wide Functionality:</strong> Includes various data types and operations.</li>
      </ul>
      <p>
        <strong>Main Advantages of MySQL:</strong>
      </p>
      <ul>
        <li><strong>Open Source:</strong> Free and open-source.</li>
        <li><strong>High Performance:</strong> Fast execution of operations due to code optimization.</li>
        <li><strong>Reliability:</strong> Long service life and stability in operation.</li>
      </ul>
      <p><strong>MySQL Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default MySQLModalContent;
