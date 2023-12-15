import React from 'react';

const RacketModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Racket - це мова програмування та середовище розробки, що базується на мові Scheme. Racket надає розширення для розвитку власних мов програмування та підтримує функціональне та об'єктно-орієнтоване програмування.
      </p>
      <p>
        <strong>Застосування Racket:</strong>
      </p>
      <ul>
        <li><strong>Викладання та Навчання:</strong> Racket використовується для викладання основ програмування та комп'ютерних наук.</li>
        <li><strong>Розробка Мов Програмування:</strong> Мова підтримує розробку власних мов програмування та DSL.</li>
        <li><strong>Функціональне Програмування:</strong> Racket підтримує функціональні парадигми програмування.</li>
        <li><strong>Об'єктно-Орієнтоване Програмування:</strong> Мова також підтримує об'єктно-орієнтовані концепції програмування.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Racket визначається своєю гнучкістю та здатністю до створення власних мов програмування.
      </p>
      <p>
        <strong>Де Вчити Racket:</strong>
      </p>
      <ul>
        <li><strong>Racket - Офіційна Документація:</strong> <a href="https://docs.racket-lang.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Racket Documentation</a></li>
        <li><strong>How to Design Programs - Книга:</strong> <a href="https://htdp.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>How to Design Programs</a></li>
      </ul>
      <p>
        <strong>Особливості Racket:</strong>
      </p>
      <ul>
        <li><strong>Мова Програмування за Вашим Замовчуванням:</strong> Racket розглядається як платформа для розробки власних мов програмування.</li>
        <li><strong>Система Типів:</strong> Мова підтримує інтерпретацію зі змінними типами.</li>
        <li><strong>Багатий Функціонал:</strong> Racket постачається з багатим набором бібліотек та інструментів.</li>
      </ul>
      <p>
        Racket - це потужний інструмент для експериментів та розвитку власних концепцій мов програмування.
      </p>
    </>
  ) : (
    <>
      <p>
        Racket is a programming language and development environment based on the Scheme language. Racket provides extensions for developing custom programming languages and supports functional and object-oriented programming.
      </p>
      <p>
        <strong>Applications of Racket:</strong>
      </p>
      <ul>
        <li><strong>Teaching and Learning:</strong> Racket is used for teaching the fundamentals of programming and computer science.</li>
        <li><strong>Programming Language Development:</strong> The language supports the development of custom programming languages and DSLs.</li>
        <li><strong>Functional Programming:</strong> Racket supports functional programming paradigms.</li>
        <li><strong>Object-Oriented Programming:</strong> The language also supports object-oriented programming concepts.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Racket is known for its flexibility and the ability to create custom programming languages.
      </p>
      <p>
        <strong>Where to Learn Racket:</strong>
      </p>
      <ul>
        <li><strong>Racket - Official Documentation:</strong> <a href="https://docs.racket-lang.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Racket Documentation</a></li>
        <li><strong>How to Design Programs - Book:</strong> <a href="https://htdp.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>How to Design Programs</a></li>
      </ul>
      <p>
        <strong>Features of Racket:</strong>
      </p>
      <ul>
        <li><strong>Your Language: </strong>Racket is considered a platform for developing your own programming languages.</li>
        <li><strong>Type System:</strong> The language supports both typed and untyped interpretation.</li>
        <li><strong>Rich Functionality:</strong> Racket comes with a rich set of libraries and tools.</li>
      </ul>
      <p>
        Racket is a powerful tool for experimentation and the development of custom programming language concepts.
      </p>
    </>
  );

  return content;
};

export default RacketModalContent;
