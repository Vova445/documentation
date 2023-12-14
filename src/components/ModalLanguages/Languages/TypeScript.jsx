import React from 'react';

const TypeScriptModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        TypeScript - це синтаксичний суперсет JavaScript, який додає статичні типи до мови. Розроблений компанією Microsoft, TypeScript полегшує розробку складних програм та поліпшує їх безпеку.
      </p>
      <p>
        <strong>Застосування TypeScript:</strong>
      </p>
      <ul>
        <li><strong>Розробка веб-додатків:</strong> TypeScript часто використовується для створення великих та складних веб-додатків.</li>
        <li><strong>Розробка Node.js додатків:</strong> TypeScript може бути використаний для створення серверних додатків на платформі Node.js.</li>
        <li><strong>Розробка мобільних додатків:</strong> TypeScript може бути використаний для розробки мобільних додатків разом із фреймворками, такими як React Native.</li>
        <li><strong>Розробка бібліотек та фреймворків:</strong> Багато великих проектів та бібліотек використовують TypeScript для поліпшення структури та надійності коду.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        TypeScript стає все більш популярною в розробці великих проектів, де статичні типи допомагають уникнути багатьох помилок.
      </p>
      <p>
        <strong>Де вчити TypeScript:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація TypeScript:</strong> <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>TypeScript Documentation</a></li>
        <li><strong>Курси на платформі Udemy:</strong> <a href="https://www.udemy.com/course/typescript-the-complete-developers-guide/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Udemy TypeScript Course</a></li>
      </ul>
      <p>
        <strong>Особливості TypeScript:</strong>
      </p>
      <ul>
        <li><strong>Статичні типи:</strong> TypeScript додає статичні типи до JavaScript, полегшуючи виявлення та усунення помилок.</li>
        <li><strong>Підтримка сучасних функцій JavaScript:</strong> TypeScript підтримує всі сучасні функції JavaScript та постійно оновлюється разом із мовою.</li>
        <li><strong>Велика спільнота:</strong> TypeScript користується підтримкою великої та активної спільноти розробників.</li>
      </ul>
      <p>
        TypeScript - це потужний інструмент для розробників, які шукають ефективні засоби розробки великих та надійних програм.
      </p>
    </>
  ) : (
    <>
      <p>
        TypeScript is a syntactic superset of JavaScript that adds static typing to the language. Developed by Microsoft, TypeScript facilitates the development of complex programs and improves their safety.
      </p>
      <p>
        <strong>Applications of TypeScript:</strong>
      </p>
      <ul>
        <li><strong>Web Application Development:</strong> TypeScript is often used to create large and complex web applications.</li>
        <li><strong>Node.js Application Development:</strong> TypeScript can be used to build server-side applications on the Node.js platform.</li>
        <li><strong>Mobile App Development:</strong> TypeScript can be used for developing mobile apps alongside frameworks like React Native.</li>
        <li><strong>Library and Framework Development:</strong> Many large projects and libraries use TypeScript to enhance code structure and reliability.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        TypeScript is becoming increasingly popular in the development of large projects where static types help prevent many errors.
      </p>
      <p>
        <strong>Where to Learn TypeScript:</strong>
      </p>
      <ul>
        <li><strong>Official TypeScript Documentation:</strong> <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>TypeScript Documentation</a></li>
        <li><strong>Courses on Udemy:</strong> <a href="https://www.udemy.com/course/typescript-the-complete-developers-guide/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Udemy TypeScript Course</a></li>
      </ul>
      <p>
        <strong>Features of TypeScript:</strong>
      </p>
      <ul>
        <li><strong>Static Types:</strong> TypeScript adds static types to JavaScript, making it easier to detect and eliminate errors.</li>
        <li><strong>Support for Modern JavaScript Features:</strong> TypeScript supports all modern JavaScript features and is continually updated with the language.</li>
        <li><strong>Large Community Support:</strong> TypeScript enjoys support from a large and active community of developers.</li>
      </ul>
      <p>
        TypeScript is a powerful tool for developers looking for effective means of developing large and reliable programs.
      </p>
    </>
  );

  return content;
};

export default TypeScriptModalContent;
