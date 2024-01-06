import React from 'react';

const ReduxSagaModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#7248B6",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Redux Saga - це бібліотека для управління побічними ефектами в Redux додатках. Вона дозволяє обробляти асинхронні дії, такі як запити до сервера або здійснення асинхронних операцій, у більш зручний та декларативний спосіб.
      </p>
      <p>
        <strong>Основні можливості Redux Saga:</strong>
      </p>
      <ul>
        <li><strong>Генераторні Функції:</strong> Використання генераторних функцій для управління потоками дій та побічних ефектів.</li>
        <li><strong>Декларативний Спосіб Опису:</strong> Задання потоків побічних ефектів у вигляді декларативних описів.</li>
        <li><strong>Обробка Асинхронності:</strong> Легке та потужне розв'язання для обробки асинхронних операцій.</li>
        <li><strong>Синхронізація З Діями Redux:</strong> Координація асинхронних операцій з діями Redux за допомогою генераторів.</li>
      </ul>
      <p>
        <strong>Де Вчитися Redux Saga:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Redux Saga:</strong> <a href="https://redux-saga.js.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Redux Saga Docs</a></li>
        <br></br>
        <li><strong>Вступ до Redux Saga:</strong> <a href="https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Beginner Tutorial</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Redux Saga Library</h2>
      <p>
        Redux Saga is a library for managing side effects in Redux applications. It allows handling asynchronous actions, such as server requests or performing asynchronous operations, in a more convenient and declarative way.
      </p>
      <p>
        <strong>Key Features of Redux Saga:</strong>
      </p>
      <ul>
        <li><strong>Generator Functions:</strong> Use of generator functions to manage action flows and side effects.</li>
        <li><strong>Declarative Description:</strong> Specify side effect flows in the form of declarative descriptions.</li>
        <li><strong>Handling Asynchrony:</strong> Lightweight and powerful solution for handling asynchronous operations.</li>
        <li><strong>Synchronization with Redux Actions:</strong> Coordinate asynchronous operations with Redux actions using generators.</li>
      </ul>
      <p>
        <strong>Where to Learn Redux Saga:</strong>
      </p>
      <ul>
        <li><strong>Official Redux Saga Documentation:</strong> <a href="https://redux-saga.js.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Redux Saga Docs</a></li>
        <br></br>
        <li><strong>Introduction to Redux Saga:</strong> <a href="https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Beginner Tutorial</a></li>
      </ul>
    </>
  );

  return content;
};

export default ReduxSagaModalContent;
