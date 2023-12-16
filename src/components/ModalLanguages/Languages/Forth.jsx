import React from 'react';

const ForthModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            Forth - мова програмування, яка була розроблена Чарльзом Муром в 1970 році.
          </p>
          <p>
            <strong>Застосування Forth:</strong>
          </p>
          <ul>
            <li><strong>Вбудовані системи:</strong> Forth часто використовується для програмування вбудованих систем і мікроконтролерів.</li>
            <li><strong>Реальний час:</strong> Forth відомий своєю ефективністю та використовується для розробки систем реального часу.</li>
            <li><strong>Наукові дослідження:</strong> Forth може використовуватися для прототипування та дослідження через свою гнучкість.</li>
            <li><strong>Створення мов програмування:</strong> Forth використовується для розробки власних мов програмування та інтерпретаторів.</li>
          </ul>
          <p>
            <strong>Місце в програмуванні:</strong>
          </p>
          <p>
            Forth є стеково-орієнтованою мовою програмування з простим синтаксисом та використовується в різних областях.
          </p>
          <p>
            <strong>Де вчити Forth:</strong>
          </p>
          <ul>
            <li><strong>repl.it - Forth:</strong> <a href="https://replit.com/languages/forth" target="_blank" rel="noopener noreferrer">repl.it - Forth</a></li>
            <li><strong>Forth Foundation:</strong> <a href="https://www.forth.com/" target="_blank" rel="noopener noreferrer">Forth Foundation</a></li>
          </ul>
          <p>
            <strong>Унікальні риси Forth:</strong>
          </p>
          <ul>
            <li><strong>Стекова машина:</strong> Forth використовує стек для організації і виконання коду.</li>
            <li><strong>Простий синтаксис:</strong> Forth відзначається простим та гнучким синтаксисом програмування.</li>
            <li><strong>Кросплатформеність:</strong> Багато реалізацій Forth можуть працювати на різних архітектурах та операційних системах.</li>
          </ul>
          <p>
            Forth залишається цікавою мовою для вивчення та ефективної розробки в різних областях.
          </p>
        </>
      ) : (
        <>
          <p>
            Forth is a programming language developed by Charles Moore in 1970.
          </p>
          <p>
            <strong>Applications of Forth:</strong>
          </p>
          <ul>
            <li><strong>Embedded Systems:</strong> Forth is often used for programming embedded systems and microcontrollers.</li>
            <li><strong>Real-Time Systems:</strong> Forth is known for its efficiency and is used in the development of real-time systems.</li>
            <li><strong>Scientific Research:</strong> Forth can be used for prototyping and research due to its flexibility.</li>
            <li><strong>Language Development:</strong> Forth is used for developing custom programming languages and interpreters.</li>
          </ul>
          <p>
            <strong>Place in Programming:</strong>
          </p>
          <p>
            Forth is a stack-oriented programming language with a simple syntax and is used in various fields.
          </p>
          <p>
            <strong>Where to Learn Forth:</strong>
          </p>
          <ul>
            <li><strong>repl.it - Forth:</strong> <a href="https://replit.com/languages/forth" target="_blank" rel="noopener noreferrer">repl.it - Forth</a></li>
            <li><strong>Forth Foundation:</strong> <a href="https://www.forth.com/" target="_blank" rel="noopener noreferrer">Forth Foundation</a></li>
          </ul>
          <p>
            <strong>Unique Features of Forth:</strong>
          </p>
          <ul>
            <li><strong>Stack Machine:</strong> Forth uses a stack for organizing and executing code.</li>
            <li><strong>Simple Syntax:</strong> Forth is characterized by a simple and flexible programming syntax.</li>
            <li><strong>Cross-Platform:</strong> Many Forth implementations can work on different architectures and operating systems.</li>
          </ul>
          <p>
            Forth remains an interesting language for learning and effective development in various domains.
          </p>
        </>
      )}
    </div>
  );
};

export default ForthModalContent;
