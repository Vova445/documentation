import React from 'react';

const MongooseModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#68A063",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Mongoose - це бібліотека для моделювання об'єктів MongoDB для Node.js. Вона забезпечує простий та потужний спосіб взаємодії з базою даних MongoDB та використовується в багатьох Node.js проєктах для роботи з MongoDB.
      </p>
      <p>
        <strong>Основні функції Mongoose:</strong>
      </p>
      <ul>
        <li><strong>Моделювання Даних:</strong> Визначення схем та моделей для взаємодії з MongoDB.</li>
        <li><strong>Підтримка Запитів:</strong> Використання удобного API для виконання запитів до бази даних.</li>
        <li><strong>Middleware:</strong> Можливість використання middleware для вставки логіки перед та після збереження об'єктів в базу даних.</li>
        <li><strong>Валідація:</strong> Вбудована система валідації для перевірки коректності даних перед збереженням.</li>
      </ul>
      <p>
        <strong>Застосування Mongoose:</strong>
      </p>
      <p>
        Mongoose широко використовується для розробки Node.js додатків, які використовують базу даних MongoDB для зберігання та отримання даних.
      </p>
      <p>
        <strong>Де Вчитися Mongoose:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Mongoose:</strong> <a href="https://mongoosejs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Mongoose Docs</a></li>
        <br></br>
        <li><strong>Mongoose Tutorial:</strong> <a href="https://mongoosejs.com/docs/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Mongoose Tutorial</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Mongoose Library</h2>
      <p>
        Mongoose is a library for modeling MongoDB objects in Node.js. It provides a simple and powerful way to interact with the MongoDB database and is used in many Node.js projects for working with MongoDB.
      </p>
      <p>
        <strong>Key Features of Mongoose:</strong>
      </p>
      <ul>
        <li><strong>Data Modeling:</strong> Defining schemas and models for interacting with MongoDB.</li>
        <li><strong>Query Support:</strong> Using a convenient API to execute queries to the database.</li>
        <li><strong>Middleware:</strong> Ability to use middleware to insert logic before and after saving objects to the database.</li>
        <li><strong>Validation:</strong> Built-in validation system to check the correctness of data before saving.</li>
      </ul>
      <p>
        <strong>Applications of Mongoose:</strong>
      </p>
      <p>
        Mongoose is widely used for developing Node.js applications that utilize the MongoDB database for storing and retrieving data.
      </p>
      <p>
        <strong>Where to Learn Mongoose:</strong>
      </p>
      <ul>
        <li><strong>Official Mongoose Documentation:</strong> <a href="https://mongoosejs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Mongoose Docs</a></li>
        <br></br>
        <li><strong>Mongoose Tutorial:</strong> <a href="https://mongoosejs.com/docs/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Mongoose Tutorial</a></li>
      </ul>
    </>
  );

  return content;
};

export default MongooseModalContent;
