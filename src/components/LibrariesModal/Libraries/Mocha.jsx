import React from 'react';

const MochaModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#8D6748",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Mocha - це фреймворк для тестування JavaScript, який підтримує запуск тестів як в браузері, так і в середовищі Node.js. Він відомий своєю гнучкістю та потужністю, що робить його популярним вибором для розробників у галузі тестування.
      </p>
      <p>
        <strong>Основні особливості Mocha:</strong>
      </p>
      <ul>
        <li><strong>Різноманітні Способи Тестування:</strong> Mocha підтримує різні стилі тестування, такі як BDD (Behavior-Driven Development), TDD (Test-Driven Development) та інші.</li>
        <li><strong>Асинхронне Тестування:</strong> Повна підтримка асинхронних тестів, що робить його ефективним для тестування Node.js додатків.</li>
        <li><strong>Запуск Тестів в Браузері та Node.js:</strong> Можливість запускати тести як у веб-браузері, так і в середовищі Node.js.</li>
        <li><strong>Розширюваність:</strong> Широкі можливості розширення за допомогою плагінів.</li>
      </ul>
      <p>
        <strong>Застосування Mocha:</strong>
      </p>
      <p>
        Mocha використовується для написання та виконання тестів в JavaScript-проектах будь-якої складності, надаючи зручність та читабельність коду тестів.
      </p>
      <p>
        <strong>Де Вчитися Mocha:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Mocha:</strong> <a href="https://mochajs.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Mocha Docs</a></li>
        <br></br>
        <li><strong>Mocha GitHub Репозиторій:</strong> <a href="https://github.com/mochajs/mocha" target="_blank" rel="noopener noreferrer" style={linkStyles}>Mocha GitHub</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Mocha JavaScript Testing Framework</h2>
      <p>
        Mocha is a JavaScript testing framework that supports running tests in both the browser and Node.js environment. It is known for its flexibility and power, making it a popular choice among developers in the testing domain.
      </p>
      <p>
        <strong>Key Features of Mocha:</strong>
      </p>
      <ul>
        <li><strong>Variety of Testing Styles:</strong> Mocha supports various testing styles, including BDD (Behavior-Driven Development), TDD (Test-Driven Development), and others.</li>
        <li><strong>Asynchronous Testing:</strong> Full support for asynchronous tests, making it effective for testing Node.js applications.</li>
        <li><strong>Run Tests in Browser and Node.js:</strong> Ability to run tests in both the web browser and Node.js environment.</li>
        <li><strong>Extensibility:</strong> Wide extension capabilities through plugins.</li>
      </ul>
      <p>
        <strong>Applications of Mocha:</strong>
      </p>
      <p>
        Mocha is used for writing and executing tests in JavaScript projects of any complexity, providing convenience and readability of test code.
      </p>
      <p>
        <strong>Where to Learn Mocha:</strong>
      </p>
      <ul>
        <li><strong>Official Mocha Documentation:</strong> <a href="https://mochajs.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Mocha Docs</a></li>
        <br></br>
        <li><strong>Mocha GitHub Repository:</strong> <a href="https://github.com/mochajs/mocha" target="_blank" rel="noopener noreferrer" style={linkStyles}>Mocha GitHub</a></li>
      </ul>
    </>
  );

  return content;
};

export default MochaModalContent;
