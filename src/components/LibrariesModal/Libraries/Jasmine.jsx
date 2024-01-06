import React from 'react';

const JasmineModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#8A4182",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Jasmine - це фреймворк для тестування JavaScript, спрямований на полегшення процесу написання та виконання тестів. Він підтримує стиль BDD (Behavior-Driven Development) і володіє приязним синтаксисом, що дозволяє створювати зрозумілі та читабельні тести.
      </p>
      <p>
        <strong>Основні особливості Jasmine:</strong>
      </p>
      <ul>
        <li><strong>BDD Синтаксис:</strong> Використання синтаксису BDD для створення зрозумілих описових тестів.</li>
        <li><strong>Спрощений Спосіб Тестування:</strong> Jasmine надає простий та зручний спосіб написання та виконання тестів.</li>
        <li><strong>Можливості Спостереження (Spying):</strong> Вбудовані можливості спостереження за функціями для тестування.</li>
        <li><strong>Підтримка Асинхронних Тестів:</strong> Jasmine дозволяє легко тестувати асинхронний код.</li>
      </ul>
      <p>
        <strong>Застосування Jasmine:</strong>
      </p>
      <p>
        Jasmine використовується для тестування JavaScript-проектів будь-якої складності, забезпечуючи при цьому читабельний та детальний звітність тестів.
      </p>
      <p>
        <strong>Де Вчитися Jasmine:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Jasmine:</strong> <a href="https://jasmine.github.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Jasmine Docs</a></li>
        <br></br>
        <li><strong>Jasmine GitHub Репозиторій:</strong> <a href="https://github.com/jasmine/jasmine" target="_blank" rel="noopener noreferrer" style={linkStyles}>Jasmine GitHub</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Jasmine JavaScript Testing Framework</h2>
      <p>
        Jasmine is a JavaScript testing framework aimed at simplifying the process of writing and executing tests. It supports the BDD (Behavior-Driven Development) style and features a friendly syntax that allows for the creation of understandable and readable tests.
      </p>
      <p>
        <strong>Key Features of Jasmine:</strong>
      </p>
      <ul>
        <li><strong>BDD Syntax:</strong> Use of BDD syntax to create descriptive and understandable tests.</li>
        <li><strong>Simplified Testing Approach:</strong> Jasmine provides a simple and convenient way to write and execute tests.</li>
        <li><strong>Spies Functionality:</strong> Built-in spying capabilities for function testing.</li>
        <li><strong>Support for Asynchronous Tests:</strong> Jasmine makes it easy to test asynchronous code.</li>
      </ul>
      <p>
        <strong>Applications of Jasmine:</strong>
      </p>
      <p>
        Jasmine is used for testing JavaScript projects of any complexity, providing readable and detailed test reports.
      </p>
      <p>
        <strong>Where to Learn Jasmine:</strong>
      </p>
      <ul>
        <li><strong>Official Jasmine Documentation:</strong> <a href="https://jasmine.github.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Jasmine Docs</a></li>
        <br></br>
        <li><strong>Jasmine GitHub Repository:</strong> <a href="https://github.com/jasmine/jasmine" target="_blank" rel="noopener noreferrer" style={linkStyles}>Jasmine GitHub</a></li>
      </ul>
    </>
  );

  return content;
};

export default JasmineModalContent;
