import React from 'react';

const MongoDBModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#13AA52",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка MongoDB
    </a>
  ) : (
    <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      MongoDB Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        MongoDB - це документо-орієнтована база даних, яка забезпечує гнучку та ефективну роботу з великими обсягами даних.
      </p>
      <p>
        <strong>Основні функції MongoDB:</strong>
      </p>
      <ul>
        <li><strong>Гнучка Схема Даних:</strong> Здатність зберігати дані різної структури без строго заданої схеми.</li>
        <li><strong>Масштабованість:</strong> Забезпечення росту бази даних за рахунок горизонтального масштабування.</li>
        <li><strong>Можливості Пошуку:</strong> Розширені можливості для здійснення різноманітних запитів та пошуку.</li>
        <li><strong>Вбудована Реплікація та Шардування:</strong> Забезпечення надійності та високої доступності системи.</li>
      </ul>
      <p>
        <strong>Основні переваги MongoDB:</strong>
      </p>
      <ul>
        <li><strong>Гнучкість:</strong> Можливість зберігання та обробки різноманітних типів даних.</li>
        <li><strong>Швидкість Розробки:</strong> Прискорення розробки завдяки відсутності строго визначеної схеми даних.</li>
        <li><strong>Спрощене Управління:</strong> Зручне адміністрування бази даних через консоль та графічний інтерфейс.</li>
      </ul>
      <p><strong>Сторінка MongoDB:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>MongoDB</h2>
      <p>
        MongoDB is a document-oriented database that provides flexible and efficient handling of large volumes of data.
      </p>
      <p>
        <strong>Key Features of MongoDB:</strong>
      </p>
      <ul>
        <li><strong>Flexible Data Schema:</strong> Ability to store data of different structures without a strictly defined schema.</li>
        <li><strong>Scalability:</strong> Ensuring database growth through horizontal scaling.</li>
        <li><strong>Search Capabilities:</strong> Advanced capabilities for making various queries and searches.</li>
        <li><strong>Built-in Replication and Sharding:</strong> Providing system reliability and high availability.</li>
      </ul>
      <p>
        <strong>Main Advantages of MongoDB:</strong>
      </p>
      <ul>
        <li><strong>Flexibility:</strong> Ability to store and process various types of data.</li>
        <li><strong>Rapid Development:</strong> Accelerated development due to the absence of a strictly defined data schema.</li>
        <li><strong>Simplified Management:</strong> Convenient database administration through the console and graphical interface.</li>
      </ul>
      <p><strong>MongoDB Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default MongoDBModalContent;
