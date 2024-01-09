import React from 'react';

const DataGripModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#336791",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка DataGrip" : "DataGrip Official Page";

  const officialPageLink = (
    <a href="https://www.jetbrains.com/datagrip/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        DataGrip - це інтегроване середовище розробки баз даних, розроблене компанією JetBrains. Воно підтримує різні системи управління базами даних, такі як MySQL, PostgreSQL, Microsoft SQL Server, SQLite та інші.
      </p>
      <p>
        <strong>Основні можливості DataGrip:</strong>
      </p>
      <ul>
        <li><strong>Підтримка Різних Систем БД:</strong> Підтримка роботи з різними СУБД, що полегшує роботу з різними проектами.</li>
        <li><strong>Візуальний Запитовий Редактор:</strong> Зручний редактор для написання та відлагодження SQL-запитів.</li>
        <li><strong>Автокомплітація та Валідація SQL:</strong> Підказка та перевірка SQL-запитів на вірність під час написання.</li>
        <li><strong>Управління Базами Даних:</strong> Можливість перегляду та редагування структури бази даних.</li>
      </ul>
      <p>
        <strong>Основні переваги DataGrip:</strong>
      </p>
      <ul>
        <li><strong>Інтеграція з Іншими Продуктами JetBrains:</strong> Взаємодія з іншими інструментами розробки від JetBrains.</li>
        <li><strong>Підтримка Розширень:</strong> Можливість розширення функціоналу за допомогою плагінів.</li>
        <li><strong>Оновлення та Підтримка:</strong> Регулярні оновлення та технічна підтримка від розробників.</li>
      </ul>
      <p>
        <strong>Сторінка DataGrip:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>DataGrip - Integrated Database Development Environment</h2>
      <p>
        DataGrip is an integrated development environment for databases developed by JetBrains. It supports various database management systems such as MySQL, PostgreSQL, Microsoft SQL Server, SQLite, and more.
      </p>
      <p>
        <strong>Key Features of DataGrip:</strong>
      </p>
      <ul>
        <li><strong>Support for Various DBMS:</strong> Support for working with different DBMS, making it easy to work with various projects.</li>
        <li><strong>Visual Query Editor:</strong> Convenient editor for writing and debugging SQL queries.</li>
        <li><strong>SQL Autocompletion and Validation:</strong> Prompt and validation of SQL queries for accuracy during writing.</li>
        <li><strong>Database Management:</strong> Ability to view and edit the structure of the database.</li>
      </ul>
      <p>
        <strong>Main Advantages of DataGrip:</strong>
      </p>
      <ul>
        <li><strong>Integration with Other JetBrains Products:</strong> Interaction with other development tools from JetBrains.</li>
        <li><strong>Support for Extensions:</strong> Ability to extend functionality through plugins.</li>
        <li><strong>Updates and Support:</strong> Regular updates and technical support from developers.</li>
      </ul>
      <p>
        <strong>DataGrip Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default DataGripModalContent;
