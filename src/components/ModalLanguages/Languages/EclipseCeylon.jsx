import React from 'react';

const CeylonModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Eclipse Ceylon - це сучасна мова програмування, яка створена для роботи на віртуальній машині Java (JVM). Вона спроектована для полегшення розробки сучасних додатків, зокрема великих та розподілених систем.
      </p>
      <p>
        <strong>Основні риси Eclipse Ceylon:</strong>
      </p>
      <ul>
        <li><strong>Статична Типізація:</strong> Ceylon використовує статичну типізацію для забезпечення безпеки та надійності коду.</li>
        <li><strong>Сучасний Синтаксис:</strong> Мова має чистий та сучасний синтаксис, що полегшує читання та написання коду.</li>
        <li><strong>Компонентна Модель:</strong> Ceylon використовує модель компонентів, що дозволяє краще організовувати та управляти складністю проектів.</li>
        <li><strong>Розширена Підтримка Функціонального Програмування:</strong> Мова надає засоби для функціонального програмування, такі як анонімні функції та зразки (pattern matching).</li>
      </ul>
      <p>
        <strong>Застосування Eclipse Ceylon:</strong>
      </p>
      <ul>
        <li><strong>Розробка Великих Проектів:</strong> Ceylon підходить для розробки великих програмних проектів та систем з високою рівнем складності.</li>
        <li><strong>Розподілені Системи:</strong> Мова спроектована для розробки розподілених систем, включаючи обробку великих обсягів даних.</li>
        <li><strong>Веб-Розробка:</strong> Ceylon може використовуватися для веб-розробки, включаючи створення серверних додатків.</li>
        <li><strong>Інтеграція з Java:</strong> Завдяки віртуальній машині Java, Ceylon легко інтегрується з існуючими Java-додатками та бібліотеками.</li>
      </ul>
      <p>
        <strong>Де Вчити Eclipse Ceylon:</strong>
      </p>
      <ul>
        <li><strong>Ceylon Documentation:</strong> <a href="https://ceylon-lang.org/documentation/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Офіційна Документація Ceylon</a></li>
      </ul>
      <p>
        Eclipse Ceylon - це інноваційна мова програмування, яка дозволяє розробникам творчо підходити до створення сучасних програмних рішень.
      </p>
    </>
  ) : (
    <>
      <p>
        Eclipse Ceylon is a modern programming language designed to run on the Java Virtual Machine (JVM). It is crafted to facilitate the development of contemporary applications, especially large and distributed systems.
      </p>
      <p>
        <strong>Key Features of Eclipse Ceylon:</strong>
      </p>
      <ul>
        <li><strong>Static Typing:</strong> Ceylon employs static typing to ensure code safety and reliability.</li>
        <li><strong>Modern Syntax:</strong> The language features a clean and modern syntax, making code reading and writing more straightforward.</li>
        <li><strong>Component Model:</strong> Ceylon uses a component model that aids in better organizing and managing project complexity.</li>
        <li><strong>Enhanced Functional Programming Support:</strong> The language provides features for functional programming, such as anonymous functions and pattern matching.</li>
      </ul>
      <p>
        <strong>Applications of Eclipse Ceylon:</strong>
      </p>
      <ul>
        <li><strong>Development of Large Projects:</strong> Ceylon is suitable for the development of large software projects and systems with a high level of complexity.</li>
        <li><strong>Distributed Systems:</strong> The language is designed for developing distributed systems, including handling large volumes of data.</li>
        <li><strong>Web Development:</strong> Ceylon can be used for web development, including the creation of server-side applications.</li>
        <li><strong>Integration with Java:</strong> Thanks to the Java Virtual Machine, Ceylon seamlessly integrates with existing Java applications and libraries.</li>
      </ul>
      <p>
        <strong>Where to Learn Eclipse Ceylon:</strong>
      </p>
      <ul>
        <li><strong>Ceylon Documentation:</strong> <a href="https://ceylon-lang.org/documentation/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Official Ceylon Documentation</a></li>
      </ul>
      <p>
        Eclipse Ceylon is an innovative programming language that empowers developers to creatively approach the creation of modern software solutions.
      </p>
    </>
  );

  return content;
};

export default CeylonModalContent;
