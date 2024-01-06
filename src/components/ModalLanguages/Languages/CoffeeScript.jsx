import React from 'react';

const CoffeeScriptModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        CoffeeScript - це мова програмування, що компілюється в JavaScript. Вона створена для полегшення та прискорення написання коду на JavaScript, забезпечуючи чистий та елегантний синтаксис.
      </p>
      <p>
        <strong>Основні риси CoffeeScript:</strong>
      </p>
      <ul>
        <li><strong>Синтаксис, Близький до Python:</strong> CoffeeScript використовує синтаксис, що нагадує синтаксис Python, що робить його зрозумілішим і зручнішим для розробників.</li>
        <li><strong>Автоматична Вставка Крапок та Дужок:</strong> Мова визначає блоки коду автоматично за допомогою відступів, спрощуючи структуру програми.</li>
        <li><strong>Компіляція в JavaScript:</strong> CoffeeScript код компілюється в ефективний та оптимізований JavaScript код, який виконується в усіх сучасних браузерах та середовищах виконання JavaScript.</li>
        <li><strong>Підтримка Функціонального Програмування:</strong> CoffeeScript включає функціональні конструкції, такі як анонімні функції та замикання (closures).</li>
      </ul>
      <p>
        <strong>Застосування CoffeeScript:</strong>
      </p>
      <ul>
        <li><strong>Веб-Розробка:</strong> CoffeeScript широко використовується в веб-розробці для написання клієнтського JavaScript коду.</li>
        <li><strong>Проєкти На Node.js:</strong> Мова може бути використана для розробки проєктів, які виконуються в середовищі виконання Node.js.</li>
        <li><strong>Розробка Мобільних Додатків:</strong> CoffeeScript може бути використаний для розробки мобільних додатків з використанням фреймворків, таких як React Native.</li>
      </ul>
      <p>
        <strong>Де Вчити CoffeeScript:</strong>
      </p>
      <ul>
        <li><strong>Офіційний Сайт CoffeeScript:</strong> <a href="https://coffeescript.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Офіційний Сайт CoffeeScript</a></li>
        <li><strong>CoffeeScript Cookbook:</strong> <a href="https://coffeescript-cookbook.github.io/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>CoffeeScript Cookbook</a></li>
      </ul>
      <p>
        CoffeeScript - це інструмент для розробників, які шукають спрощений синтаксис та бажають зробити процес написання JavaScript коду більш ефективним.
      </p>
    </>
  ) : (
    <>
      <p>
        CoffeeScript is a programming language that compiles into JavaScript. It is designed to simplify and speed up the process of writing JavaScript code by providing a clean and elegant syntax.
      </p>
      <p>
        <strong>Key Features of CoffeeScript:</strong>
      </p>
      <ul>
        <li><strong>Python-Like Syntax:</strong> CoffeeScript uses a syntax that resembles Python, making it more understandable and convenient for developers.</li>
        <li><strong>Automatic Indentation and Parentheses:</strong> The language defines code blocks automatically based on indentation, simplifying program structure.</li>
        <li><strong>Compilation to JavaScript:</strong> CoffeeScript code is compiled into efficient and optimized JavaScript code that runs in all modern browsers and JavaScript runtime environments.</li>
        <li><strong>Functional Programming Support:</strong> CoffeeScript includes functional programming constructs such as anonymous functions and closures.</li>
      </ul>
      <p>
        <strong>Applications of CoffeeScript:</strong>
      </p>
      <ul>
        <li><strong>Web Development:</strong> CoffeeScript is widely used in web development for writing client-side JavaScript code.</li>
        <li><strong>Node.js Projects:</strong> The language can be used for developing projects that run in the Node.js runtime environment.</li>
        <li><strong>Mobile App Development:</strong> CoffeeScript can be employed for developing mobile apps using frameworks like React Native.</li>
      </ul>
      <p>
        <strong>Where to Learn CoffeeScript:</strong>
      </p>
      <ul>
        <li><strong>Official CoffeeScript Website:</strong> <a href="https://coffeescript.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Official CoffeeScript Website</a></li>
        <li><strong>CoffeeScript Cookbook:</strong> <a href="https://coffeescript-cookbook.github.io/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>CoffeeScript Cookbook</a></li>
      </ul>
      <p>
        CoffeeScript is a tool for developers seeking a streamlined syntax and aiming to make the process of writing JavaScript code more efficient.
      </p>
    </>
  );

  return content;
};

export default CoffeeScriptModalContent;
