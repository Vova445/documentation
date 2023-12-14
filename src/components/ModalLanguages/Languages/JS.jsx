import React from 'react';

const JavascriptModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        JavaScript - високорівнева, інтерпретована мова програмування, що використовується для розробки динамічних веб-сторінок та взаємодії з користувачем на стороні клієнта.
      </p>
      <p>
        <strong>Застосування JavaScript:</strong>
      </p>
      <ul>
        <li><strong>Взаємодія з DOM:</strong> JavaScript дозволяє змінювати структуру та стилізацію веб-сторінок, взаємодіючи з Document Object Model (DOM).</li>
        <li><strong>Обробка подій:</strong> JavaScript використовується для обробки подій, таких як клікання мишею, натискання клавіш, тощо.</li>
        <li><strong>Взаємодія з сервером:</strong> За допомогою технологій, таких як AJAX, JavaScript дозволяє взаємодіяти з сервером без перезавантаження сторінки.</li>
        <li><strong>Анімації та ефекти:</strong> JavaScript використовується для створення анімацій та візуальних ефектів на веб-сторінках.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        JavaScript є однією з основних мов для розробки веб-додатків, співпрацюючи з HTML та CSS.
      </p>
      <p>
        <strong>Де вчити JavaScript:</strong>
      </p>
      <ul>
        <li><strong>MDN Web Docs:</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">MDN JavaScript</a></li>
        <li><strong>W3Schools:</strong> <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">W3Schools JavaScript Tutorial</a></li>
      </ul>
      <p>
        <strong>Унікальні риси JavaScript:</strong>
      </p>
      <ul>
        <li><strong>Клієнтська взаємодія:</strong> JavaScript є основною мовою для взаємодії з користувачем на стороні клієнта.</li>
        <li><strong>Асинхронність:</strong> З введенням обіцянок та асинхронних функцій, JavaScript став більш ефективним для роботи з асинхронним кодом.</li>
        <li><strong>Екосистема:</strong> Існує велика екосистема бібліотек та фреймворків, таких як React, Angular та Vue, що полегшують розробку веб-додатків.</li>
      </ul>
      <p>
        JavaScript відіграє важливу роль у веб-розробці та забезпечує динаміку та взаємодію на веб-сторінках.
      </p>
    </>
  ) : (
    <>
      <p>
        JavaScript is a high-level, interpreted programming language used for developing dynamic web pages and interacting with users on the client side.
      </p>
      <p>
        <strong>Applications of JavaScript:</strong>
      </p>
      <ul>
        <li><strong>DOM Manipulation:</strong> JavaScript allows changing the structure and styling of web pages by interacting with the Document Object Model (DOM).</li>
        <li><strong>Event Handling:</strong> JavaScript is used for handling events such as mouse clicks, keypresses, etc.</li>
        <li><strong>Server-Side Interaction:</strong> Using technologies like AJAX, JavaScript enables interaction with the server without page reload.</li>
        <li><strong>Animations and Effects:</strong> JavaScript is used for creating animations and visual effects on web pages.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        JavaScript is one of the core languages for web application development, working in conjunction with HTML and CSS.
      </p>
      <p>
        <strong>Where to Learn JavaScript:</strong>
      </p>
      <ul>
        <li><strong>MDN Web Docs:</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">MDN JavaScript</a></li>
        <li><strong>W3Schools:</strong> <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">W3Schools JavaScript Tutorial</a></li>
      </ul>
      <p>
        <strong>Unique Features of JavaScript:</strong>
      </p>
      <ul>
        <li><strong>Client-Side Interaction:</strong> JavaScript is a key language for user interaction on the client side.</li>
        <li><strong>Asynchronicity:</strong> With the introduction of promises and asynchronous functions, JavaScript became more efficient for working with asynchronous code.</li>
        <li><strong>Ecosystem:</strong> There is a large ecosystem of libraries and frameworks, such as React, Angular, and Vue, that facilitate web application development.</li>
      </ul>
      <p>
        JavaScript plays a crucial role in web development, providing dynamism and interaction on web pages.
      </p>
    </>
  );
  return content;
};

export default JavascriptModalContent;
