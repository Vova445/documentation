import React from 'react';

const ObjectiveJModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Objective-J - це об'єктно-орієнтована мова програмування, яка є розширенням мови JavaScript. Розроблена компанією Aptana, Objective-J використовує синтаксис Objective-C та додає його до JavaScript, щоб полегшити розробку веб-додатків та інших проектів.
      </p>
      <p>
        <strong>Застосування Objective-J:</strong>
      </p>
      <ul>
        <li><strong>Розробка веб-інтерфейсів:</strong> Objective-J часто використовується для створення багатофункціональних веб-додатків та інтерактивних інтерфейсів.</li>
        <li><strong>Розробка мобільних додатків:</strong> Мова може бути використана для створення мобільних додатків разом із фреймворками, такими як PhoneGap.</li>
        <li><strong>Об'єктно-орієнтований підхід:</strong> Objective-J пропонує потужні можливості об'єктно-орієнтованого програмування.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Objective-J забезпечує розширення мови JavaScript, що робить його потужним інструментом для створення веб-додатків з багатофункціональними інтерфейсами.
      </p>
      <p>
        <strong>Де Вчити Objective-J:</strong>
      </p>
      <ul>
        <li><strong>Додаткові Ресурси на GitHub:</strong> <a href="https://github.com/cappuccino/cappuccino" target="_blank" rel="noopener noreferrer" style={{ color: 'red' }}>Objective-J on GitHub</a></li>
      </ul>
      <p>
        <strong>Особливості Objective-J:</strong>
      </p>
      <ul>
        <li><strong>Розширення JavaScript:</strong> Objective-J розширює мову JavaScript, додаючи синтаксис Objective-C.</li>
        <li><strong>Можливості Objective-C:</strong> Мова позичає синтаксис та патерни проектування з Objective-C.</li>
        <li><strong>Фреймворк Cappuccino:</strong> Objective-J використовується разом із фреймворком Cappuccino для швидкої розробки веб-додатків.</li>
      </ul>
      <p>
        Objective-J - це інструмент для розробників, які шукають можливості об'єктно-орієнтованого програмування в контексті веб-розробки.
      </p>
    </>
  ) : (
    <>
      <p>
        Objective-J is an object-oriented programming language that serves as an extension of the JavaScript language. Developed by Aptana, Objective-J uses the syntax of Objective-C and adds it to JavaScript to facilitate the development of web applications and other projects.
      </p>
      <p>
        <strong>Applications of Objective-J:</strong>
      </p>
      <ul>
        <li><strong>Web Interface Development:</strong> Objective-J is often used to create multifunctional web applications and interactive interfaces.</li>
        <li><strong>Mobile App Development:</strong> The language can be used to create mobile apps alongside frameworks like PhoneGap.</li>
        <li><strong>Object-Oriented Approach:</strong> Objective-J offers powerful capabilities of object-oriented programming.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Objective-J provides an extension of the JavaScript language, making it a powerful tool for creating web applications with multifunctional interfaces.
      </p>
      <p>
        <strong>Where to Learn Objective-J:</strong>
      </p>
      <ul>
        <li><strong>Additional Resources on GitHub:</strong> <a href="https://github.com/cappuccino/cappuccino" target="_blank" rel="noopener noreferrer" style={{ color: 'red' }}>Objective-J on GitHub</a></li>
      </ul>
      <p>
        <strong>Features of Objective-J:</strong>
      </p>
      <ul>
        <li><strong>Extension of JavaScript:</strong> Objective-J extends the JavaScript language by adding the syntax of Objective-C.</li>
        <li><strong>Objective-C Capabilities:</strong> The language borrows syntax and design patterns from Objective-C.</li>
        <li><strong>Cappuccino Framework:</strong> Objective-J is used in conjunction with the Cappuccino framework for rapid web application development.</li>
      </ul>
      <p>
        Objective-J is a tool for developers seeking object-oriented programming capabilities in the context of web development.
      </p>
    </>
  );

  return content;
};

export default ObjectiveJModalContent;
