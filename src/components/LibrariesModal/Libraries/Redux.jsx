import React from 'react';

const ReduxModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#764abc",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Redux - це бібліотека управління станом для JavaScript-додатків. Вона широко використовується в реактивному програмуванні та в основному спрощує управління станом додатку.
      </p>
      <p>
        <strong>Основні поняття Redux:</strong>
      </p>
      <ul>
        <li><strong>Store (Сховище):</strong> Одне головне сховище, що містить весь стан додатку.</li>
        <li><strong>Actions (Дії):</strong> Події, які викликають зміни у стані через редуктори.</li>
        <li><strong>Reducers (Редуктори):</strong> Чисті функції, які визначають, які зміни будуть застосовані до стану відповідно до дій.</li>
        <li><strong>Dispatch (Відправка):</strong> Метод для відправлення дій до Redux для зміни стану.</li>
      </ul>
      <p>
        <strong>Основні переваги Redux:</strong>
      </p>
      <ul>
        <li><strong>Прозорість Стану:</strong> Весь стан знаходиться в одному місці, що полегшує відладку.</li>
        <li><strong>Простота Тестування:</strong> Легко тестувати, оскільки дії та редуктори є чистими функціями.</li>
        <li><strong>Централізоване Управління Станом:</strong> Одне централізоване сховище для управління станом.</li>
      </ul>
      <p>
        <strong>Де Вчитися Redux:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Redux:</strong> <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Redux Docs</a></li>
        <br></br>
        </ul>
    </>
  ) : (
    <>
      <h2>Redux Library</h2>
      <p>
        Redux is a state management library for JavaScript applications. It is widely used in reactive programming and primarily simplifies application state management.
      </p>
      <p>
        <strong>Key Concepts of Redux:</strong>
      </p>
      <ul>
        <li><strong>Store:</strong> A single centralized store that holds the entire application state.</li>
        <li><strong>Actions:</strong> Events that trigger changes in the state through reducers.</li>
        <li><strong>Reducers:</strong> Pure functions that define how changes will be applied to the state based on actions.</li>
        <li><strong>Dispatch:</strong> Method for sending actions to Redux to modify the state.</li>
      </ul>
      <p>
        <strong>Main Advantages of Redux:</strong>
      </p>
      <ul>
        <li><strong>State Transparency:</strong> The entire state is in one place, making debugging easier.</li>
        <li><strong>Testing Simplicity:</strong> Easy to test as actions and reducers are pure functions.</li>
        <li><strong>Centralized State Management:</strong> One centralized store for state management.</li>
      </ul>
      <p>
        <strong>Where to Learn Redux:</strong>
      </p>
      <ul>
        <li><strong>Official Redux Documentation:</strong> <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Redux Docs</a></li>
        <br></br>
        </ul>
    </>
  );

  return content;
};

export default ReduxModalContent;
