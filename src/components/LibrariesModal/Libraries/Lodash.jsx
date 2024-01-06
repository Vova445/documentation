import React from 'react';

const LodashModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#7952b3",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Lodash - це бібліотека утиліт для маніпулювання та обробки даних в мові програмування JavaScript. Вона надає численні функції для спрощення роботи з масивами, об'єктами, рядками та іншими типами даних.
      </p>
      <p>
        <strong>Основні можливості Lodash:</strong>
      </p>
      <ul>
        <li><strong>Функції для Маніпулювання Масивами:</strong> Lodash надає багато функцій для роботи з масивами, такі як сортування, фільтрація, обрізка тощо.</li>
        <li><strong>Операції з Об'єктами:</strong> Легко виконувати операції над об'єктами, такі як копіювання, порівняння та об'єднання.</li>
        <li><strong>Робота з Рядками та Колекціями:</strong> Функції для обробки рядків та інших колекцій даних.</li>
        <li><strong>Функції Високого Порядку:</strong> Підтримка функцій високого порядку для більш гнучкого програмування.</li>
      </ul>
      <p>
        <strong>Застосування Lodash:</strong>
      </p>
      <p>
        Lodash широко використовується для оптимізації та полегшення роботи з даними в JavaScript-проектах. Відмінно підходить для великих та складних додатків.
      </p>
      <p>
        <strong>Де Вчитися Lodash:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Lodash:</strong> <a href="https://lodash.com/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Lodash Docs</a></li>
        <br></br>
        </ul>
    </>
  ) : (
    <>
      <h2>Lodash Library</h2>
      <p>
        Lodash is a utility library for manipulating and processing data in the JavaScript programming language. It provides numerous functions to simplify working with arrays, objects, strings, and other data types.
      </p>
      <p>
        <strong>Key Features of Lodash:</strong>
      </p>
      <ul>
        <li><strong>Array Manipulation Functions:</strong> Lodash offers many functions for working with arrays, such as sorting, filtering, slicing, etc.</li>
        <li><strong>Object Operations:</strong> Easily perform operations on objects, such as copying, comparing, and merging.</li>
        <li><strong>String and Collection Handling:</strong> Functions for processing strings and other collections of data.</li>
        <li><strong>Higher-Order Functions:</strong> Support for higher-order functions for more flexible programming.</li>
      </ul>
      <p>
        <strong>Applications of Lodash:</strong>
      </p>
      <p>
        Lodash is widely used for optimizing and simplifying data manipulation in JavaScript projects. It is well-suited for large and complex applications.
      </p>
      <p>
        <strong>Where to Learn Lodash:</strong>
      </p>
      <ul>
        <li><strong>Official Lodash Documentation:</strong> <a href="https://lodash.com/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Lodash Docs</a></li>
        <br></br>
        </ul>
    </>
  );

  return content;
};

export default LodashModalContent;
