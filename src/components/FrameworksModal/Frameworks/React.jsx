import React from 'react';

const ReactModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <h2>Мова програмування React</h2>
      <p>
        Мова програмування React - бібліотека JavaScript для створення користувацьких інтерфейсів, яка дозволяє розробникам будувати ефективні та масштабовані веб-додатки.
      </p>
      <p>
        <strong>Основні принципи React:</strong>
      </p>
      <ul>
        <li><strong>Компоненти:</strong> Реакт-додаток будується на основі компонентів, які є незалежними, повторно використовуваними блоками.</li>
        <li><strong>Віртуальний DOM:</strong> React використовує віртуальний DOM для оптимізації оновлення інтерфейсу та зменшення витрат ресурсів.</li>
        <li><strong>Односторонній потік даних:</strong> Дані в React передаються вниз по ієрархії компонентів, забезпечуючи простий потік даних.</li>
      </ul>
      <p>
        <strong>Основні концепції React:</strong>
      </p>
      <ul>
        <li><strong>JSX:</strong> Синтаксис, що нагадує HTML, використовується для опису компонентів React.</li>
        <li><strong>Стан та властивості:</strong> React використовує стан та властивості для управління динамічністю та передачі даних між компонентами.</li>
        <li><strong>Життєвий цикл компонентів:</strong> Компоненти React мають різні етапи життєвого циклу, такі як `componentDidMount` і `componentWillUnmount`.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        React став однією з найпопулярніших технологій для розробки веб-інтерфейсів завдяки своїй простоті та продуктивності.
      </p>
      <p>
        <strong>Де вчити React:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація React:</strong> <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React</a></li>
        <li><strong>React Tutorial:</strong> <a href="https://react-tutorial.app/app.html" target="_blank" rel="noopener noreferrer">React Tutorial</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>React Programming Language</h2>
      <p>
        The React programming language is a JavaScript library for building user interfaces, allowing developers to create efficient and scalable web applications.
      </p>
      <p>
        <strong>Key Principles of React:</strong>
      </p>
      <ul>
        <li><strong>Components:</strong> A React application is built on components, which are independent, reusable building blocks.</li>
        <li><strong>Virtual DOM:</strong> React uses a virtual DOM to optimize interface updates and reduce resource consumption.</li>
        <li><strong>Unidirectional Data Flow:</strong> Data in React is passed down the component hierarchy, ensuring a simple data flow.</li>
      </ul>
      <p>
        <strong>Core Concepts of React:</strong>
      </p>
      <ul>
        <li><strong>JSX:</strong> A syntax resembling HTML is used to describe React components.</li>
        <li><strong>State and Props:</strong> React uses state and props to manage dynamic behavior and data passing between components.</li>
        <li><strong>Component Lifecycle:</strong> React components have various lifecycle stages, such as `componentDidMount` and `componentWillUnmount`.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        React has become one of the most popular technologies for web interface development due to its simplicity and productivity.
      </p>
      <p>
        <strong>Where to Learn React:</strong>
      </p>
      <ul>
        <li><strong>Official React Documentation:</strong> <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React</a></li>
        <li><strong>React Tutorial:</strong> <a href="https://react-tutorial.app/app.html" target="_blank" rel="noopener noreferrer">React Tutorial</a></li>
      </ul>
    </>
  );

  return content;
};

export default ReactModalContent;
