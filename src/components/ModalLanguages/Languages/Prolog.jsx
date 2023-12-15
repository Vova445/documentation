import React from 'react';

const PrologModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Prolog - це мова програмування логічного програмування, яка базується на використанні правил логіки. Вона використовується для вирішення завдань штучного інтелекту, обробки мови та експертних систем.
      </p>
      <p>
        <strong>Застосування Prolog:</strong>
      </p>
      <ul>
        <li><strong>Штучний Інтелект:</strong> Prolog широко використовується для розробки систем штучного інтелекту.</li>
        <li><strong>Обробка Мови:</strong> Мова використовується для завдань обробки мови та розпізнавання мови.</li>
        <li><strong>Експертні Системи:</strong> Prolog добре підходить для реалізації експертних систем та систем знань.</li>
        <li><strong>Обробка Даних:</strong> Використовується для обробки та аналізу структурованих даних.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Prolog визначається своєю декларативною природою та здатністю до логічного висловлення задач.
      </p>
      <p>
        <strong>Де Вчити Prolog:</strong>
      </p>
      <ul>
        <li><strong>SWI-Prolog - Офіційна Документація:</strong> <a href="https://www.swi-prolog.org/Documentation.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>SWI-Prolog Documentation</a></li>
      </ul>
      <p>
        <strong>Особливості Prolog:</strong>
      </p>
      <ul>
        <li><strong>Логічне Програмування:</strong> Prolog базується на логіці та використовує правила для вирішення завдань.</li>
        <li><strong>Декларативність:</strong> Програми на Prolog виражають зв'язки між об'єктами, а не послідовність інструкцій.</li>
        <li><strong>Рекурсія:</strong> Мова підтримує рекурсію та рекурсивні правила.</li>
      </ul>
      <p>
        Prolog - це мова, призначена для висловлення та вирішення завдань логічного програмування.
      </p>
    </>
  ) : (
    <>
      <p>
        Prolog is a logic programming language that is based on the use of logic rules. It is used for solving artificial intelligence tasks, language processing, and expert systems.
      </p>
      <p>
        <strong>Applications of Prolog:</strong>
      </p>
      <ul>
        <li><strong>Artificial Intelligence:</strong> Prolog is widely used for developing artificial intelligence systems.</li>
        <li><strong>Language Processing:</strong> The language is used for language processing tasks and language recognition.</li>
        <li><strong>Expert Systems:</strong> Prolog is well-suited for implementing expert systems and knowledge-based systems.</li>
        <li><strong>Data Processing:</strong> It is used for processing and analyzing structured data.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Prolog is characterized by its declarative nature and the ability to express tasks logically.
      </p>
      <p>
        <strong>Where to Learn Prolog:</strong>
      </p>
      <ul>
        <li><strong>SWI-Prolog - Official Documentation:</strong> <a href="https://www.swi-prolog.org/Documentation.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>SWI-Prolog Documentation</a></li>
      </ul>
      <p>
        <strong>Features of Prolog:</strong>
      </p>
      <ul>
        <li><strong>Logic Programming:</strong> Prolog is based on logic and uses rules to solve tasks.</li>
        <li><strong>Declarativity:</strong> Programs in Prolog express relationships between objects, rather than a sequence of instructions.</li>
        <li><strong>Recursion:</strong> The language supports recursion and recursive rules.</li>
      </ul>
      <p>
        Prolog is a language designed for expressing and solving tasks in logic programming.
      </p>
    </>
  );

  return content;
};

export default PrologModalContent;
