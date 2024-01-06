import React from 'react';

const MomentJsModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#006400c",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Moment.js - це бібліотека для роботи з датами та часом в JavaScript. Вона надає зручний та потужний інтерфейс для розбору, валідації, маніпуляції та відображення дат і часу.
      </p>
      <p>
        <strong>Основні можливості Moment.js:</strong>
      </p>
      <ul>
        <li><strong>Розбір та Відображення Дат:</strong> Зручні методи для розбору та форматування дат і часу.</li>
        <li><strong>Маніпуляція з Датами:</strong> Легкі засоби для додавання, віднімання та інших маніпуляцій з датами.</li>
        <li><strong>Валідація:</strong> Можливість перевірки коректності дат та часу.</li>
        <li><strong>Локалізація:</strong> Підтримка локалізації для відображення дат та часу в різних мовах та форматах.</li>
      </ul>
      <p>
        <strong>Застосування Moment.js:</strong>
      </p>
      <p>
        Moment.js широко використовується в веб-розробці для управління датами та часом в інтерактивних веб-додатках.
      </p>
      <p>
        <strong>Де Вчитися Moment.js:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Moment.js:</strong> <a href="https://momentjs.com/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Moment.js Docs</a></li>
        <br></br>
        <li><strong>Інтерактивний Посібник Moment.js:</strong> <a href="https://github.com/you-dont-need/You-Dont-Need-Momentjs#readme" target="_blank" rel="noopener noreferrer" style={linkStyles}>You Don't Need Moment.js</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Moment.js Library</h2>
      <p>
        Moment.js is a library for working with dates and times in JavaScript. It provides a convenient and powerful interface for parsing, validating, manipulating, and displaying dates and times.
      </p>
      <p>
        <strong>Key Features of Moment.js:</strong>
      </p>
      <ul>
        <li><strong>Parsing and Displaying Dates:</strong> Convenient methods for parsing and formatting dates and times.</li>
        <li><strong>Date Manipulation:</strong> Easy-to-use tools for adding, subtracting, and performing other manipulations with dates.</li>
        <li><strong>Validation:</strong> Ability to check the correctness of dates and times.</li>
        <li><strong>Localization:</strong> Support for localization to display dates and times in different languages and formats.</li>
      </ul>
      <p>
        <strong>Applications of Moment.js:</strong>
      </p>
      <p>
        Moment.js is widely used in web development for managing dates and times in interactive web applications.
      </p>
      <p>
        <strong>Where to Learn Moment.js:</strong>
      </p>
      <ul>
        <li><strong>Official Moment.js Documentation:</strong> <a href="https://momentjs.com/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Moment.js Docs</a></li>
        <br></br>
        <li><strong>Interactive Guide "You Don't Need Moment.js":</strong> <a href="https://github.com/you-dont-need/You-Dont-Need-Momentjs#readme" target="_blank" rel="noopener noreferrer" style={linkStyles}>You Don't Need Moment.js</a></li>
      </ul>
    </>
  );

  return content;
};

export default MomentJsModalContent;
