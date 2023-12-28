import React from 'react';

const AngularModalContent = ({ isUkrainian }) => {
    const linkStyles = {
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: "10px",
        textDecoration: 'none',
        padding: '3px'
      };
  const content = isUkrainian ? (
    <>
      <p>
        Angular - це фреймворк JavaScript для створення потужних веб-додатків та односторонній потік даних.
      </p>
      <p>
        <strong>Основні принципи Angular:</strong>
      </p>
      <ul>
        <li><strong>Модульність:</strong> Angular дозволяє будувати додатки, розділені на модулі для кращої організації та управління кодом.</li>
        <li><strong>Компоненти та Шаблони:</strong> Angular використовує компонентний підхід для побудови користувацьких інтерфейсів, де кожен компонент має свій власний шаблон.</li>
        <li><strong>Сервіси та Залежності:</strong> Angular використовує сервіси для об'єднання логіки, а залежності для ефективного взаємодії компонентів.</li>
      </ul>
      <p>
        <strong>Основні концепції Angular:</strong>
      </p>
      <ul>
        <li><strong>Typescript:</strong> Angular написаний на TypeScript, який додає статичну типізацію та інші функції до JavaScript.</li>
        <li><strong>Двостороннє зв'язування даних:</strong> Angular забезпечує зручний механізм для автоматичного оновлення інтерфейсу при зміні даних.</li>
        <li><strong>Життєвий цикл компонентів:</strong> Компоненти Angular мають свій власний життєвий цикл, де можна впроваджувати логіку на різних етапах.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Angular використовується для створення великих та складних веб-додатків, де потрібна велика модульність та підтримка багатьох функцій.
      </p>
      <p>
        <strong>Де вчити Angular:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Angular:</strong> <a href="https://angular.io/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Angular</a></li>
        <br></br>
        <li><strong>Angular Tutorial:</strong> <a href="https://angular.io/start" target="_blank" rel="noopener noreferrer" style={linkStyles}>Angular Tutorial</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Angular Programming Language</h2>
      <p>
        The Angular programming language is a JavaScript framework for building powerful web applications with two-way data binding.
      </p>
      <p>
        <strong>Key Principles of Angular:</strong>
      </p>
      <ul>
        <li><strong>Modularity:</strong> Angular allows building applications divided into modules for better organization and code management.</li>
        <li><strong>Components and Templates:</strong> Angular uses a component-based approach to construct user interfaces, where each component has its own template.</li>
        <li><strong>Services and Dependencies:</strong> Angular employs services to encapsulate logic, and dependencies for efficient component interaction.</li>
      </ul>
      <p>
        <strong>Core Concepts of Angular:</strong>
      </p>
      <ul>
        <li><strong>TypeScript:</strong> Angular is written in TypeScript, which adds static typing and other features to JavaScript.</li>
        <li><strong>Two-Way Data Binding:</strong> Angular provides a convenient mechanism for automatically updating the interface when data changes.</li>
        <li><strong>Component Lifecycle:</strong> Angular components have their own lifecycle, where logic can be implemented at different stages.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Angular is used for building large and complex web applications, where extensive modularity and support for many features are required.
      </p>
      <p>
        <strong>Where to Learn Angular:</strong>
      </p>
      <ul>
        <li><strong>Official Angular Documentation:</strong> <a href="https://angular.io/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Angular</a></li>
        <br>    </br>
        <li><strong>Angular Tutorial:</strong> <a href="https://angular.io/start" target="_blank" rel="noopener noreferrer" style={linkStyles}>Angular Tutorial</a></li>
      </ul>
    </>
  );

  return content;
};

export default AngularModalContent;
