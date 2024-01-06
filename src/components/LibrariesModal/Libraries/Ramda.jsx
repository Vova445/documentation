import React from 'react';

const RamdaModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#7B68EE",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Ramda - це бібліотека функціонального програмування для мови JavaScript. Вона спрощує роботу зі списками та об'єктами, надаючи функції, які працюють в стилі чистих функцій.
      </p>
      <p>
        <strong>Основні концепції Ramda:</strong>
      </p>
      <ul>
        <li><strong>Невеликі Функції:</strong> Ramda пропонує функції, які роблять одне - і роблять його добре.</li>
        <li><strong>Нестрокові Параметри:</strong> Багато функцій Ramda приймають дані перед функцією, щоб забезпечити більшу композицію та зручність.</li>
        <li><strong>Автокарі:</strong> В Ramda використовуються автокарі, щоб обгорнути функції, щоб вони могли працювати зі списками, а не тільки зі значеннями.</li>
      </ul>
      <p>
        <strong>Основні Переваги Ramda:</strong>
      </p>
      <ul>
        <li><strong>Функціональний Стиль:</strong> Підтримка функціонального стилю програмування.</li>
        <li><strong>Імутабельні Дані:</strong> Заохочення використання імутабельних структур даних.</li>
        <li><strong>Легка Композиція:</strong> Зручні функції для композиції та обробки даних.</li>
      </ul>
      <p>
        <strong>Де Вчитися Ramda:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Ramda:</strong> <a href="https://ramdajs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Ramda Docs</a></li>
        <br></br>
        </ul>
    </>
  ) : (
    <>
      <h2>Ramda Functional Library</h2>
      <p>
        Ramda is a functional programming library for the JavaScript language. It simplifies working with lists and objects by providing functions that operate in a pure functional style.
      </p>
      <p>
        <strong>Key Concepts of Ramda:</strong>
      </p>
      <ul>
        <li><strong>Small Functions:</strong> Ramda offers functions that do one thing - and do it well.</li>
        <li><strong>Curried Parameters:</strong> Many Ramda functions take data before the function to enable greater composition and convenience.</li>
        <li><strong>Auto-Currying:</strong> Auto-currying is used in Ramda to wrap functions so that they can work with lists, not just values.</li>
      </ul>
      <p>
        <strong>Main Advantages of Ramda:</strong>
      </p>
      <ul>
        <li><strong>Functional Style:</strong> Support for functional programming style.</li>
        <li><strong>Immutable Data:</strong> Encourages the use of immutable data structures.</li>
        <li><strong>Easy Composition:</strong> Convenient functions for composing and processing data.</li>
      </ul>
      <p>
        <strong>Where to Learn Ramda:</strong>
      </p>
      <ul>
        <li><strong>Official Ramda Documentation:</strong> <a href="https://ramdajs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Ramda Docs</a></li>
        <br></br>
        </ul>
    </>
  );

  return content;
};

export default RamdaModalContent;
