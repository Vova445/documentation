import React from 'react';

const JQueryModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#0769ad",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        jQuery - це швидкий і легкий JavaScript-фреймворк, який спрощує взаємодію з HTML-документами, обробку подій, анімації та взаємодію з AJAX для веб-розробки.
      </p>
      <p>
        <strong>Основні можливості jQuery:</strong>
      </p>
      <ul>
        <li><strong>Вибір елементів:</strong> Простий синтаксис для вибору HTML-елементів та їх маніпуляції.</li>
        <li><strong>Обробка Подій:</strong> Легка обробка подій, таких як клік, наведення, зміна значення.</li>
        <li><strong>Анімація:</strong> Можливості створення анімацій та зміни стилів елементів.</li>
        <li><strong>AJAX:</strong> Вбудовані функції для асинхронного обміну даними з сервером.</li>
      </ul>
      <p>
        <strong>Застосування jQuery:</strong>
      </p>
      <p>
        jQuery був широко використаний для спрощення складних задач веб-розробки, хоча сучасні проекти можуть використовувати більш сучасні та ефективні рішення.
      </p>
      <p>
        <strong>Де Вчитися jQuery:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація jQuery:</strong> <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>jQuery Docs</a></li>
        <br></br>
        <li><strong>Курс "Learn jQuery" на Codecademy:</strong> <a href="https://www.codecademy.com/learn/learn-jquery" target="_blank" rel="noopener noreferrer" style={linkStyles}>Codecademy</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>jQuery Library</h2>
      <p>
        jQuery is a fast and lightweight JavaScript framework that simplifies interaction with HTML documents, event handling, animation, and AJAX interaction for web development.
      </p>
      <p>
        <strong>Key Features of jQuery:</strong>
      </p>
      <ul>
        <li><strong>Element Selection:</strong> Simple syntax for selecting HTML elements and manipulating them.</li>
        <li><strong>Event Handling:</strong> Easy event handling, such as click, hover, and value change.</li>
        <li><strong>Animation:</strong> Capabilities for creating animations and changing styles of elements.</li>
        <li><strong>AJAX:</strong> Built-in functions for asynchronous data exchange with the server.</li>
      </ul>
      <p>
        <strong>Applications of jQuery:</strong>
      </p>
      <p>
        jQuery was widely used to simplify complex web development tasks, although modern projects may use more contemporary and efficient solutions.
      </p>
      <p>
        <strong>Where to Learn jQuery:</strong>
      </p>
      <ul>
        <li><strong>Official jQuery Documentation:</strong> <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>jQuery Docs</a></li>
        <br></br>
        <li><strong>"Learn jQuery" Course on Codecademy:</strong> <a href="https://www.codecademy.com/learn/learn-jquery" target="_blank" rel="noopener noreferrer" style={linkStyles}>Codecademy</a></li>
      </ul>
    </>
  );

  return content;
};

export default JQueryModalContent;
