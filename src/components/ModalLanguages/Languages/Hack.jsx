import React from 'react';

const HackModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Hack - це статично типізована мова програмування, яка є доповненням до PHP. Створена Facebook, Hack додає статичну типізацію, об'єктно-орієнтований підхід та інші покращення до PHP для полегшення розробки великих проектів.
      </p>
      <p>
        <strong>Застосування Hack:</strong>
      </p>
      <ul>
        <li><strong>Веб-розробка:</strong> Hack часто використовується для розробки веб-додатків на базі PHP.</li>
        <li><strong>Серверна розробка:</strong> Мова може бути використана для створення серверних додатків.</li>
        <li><strong>Розробка Facebook:</strong> Hack поширено використовується для розробки Facebook і асоційованих проектів.</li>
        <li><strong>Безпека та Надійність:</strong> Статична типізація допомагає уникнути багатьох помилок і покращує безпеку коду.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Hack займає важливе місце в розробці великих веб-проектів, де важлива безпека та надійність коду.
      </p>
      <p>
        <strong>Де Вчити Hack:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Hack:</strong> <a href="https://docs.hhvm.com/hack/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Hack Documentation</a></li>
      </ul>
      <p>
        <strong>Особливості Hack:</strong>
      </p>
      <ul>
        <li><strong>Статична Типізація:</strong> Hack дозволяє використовувати статичну типізацію для поліпшення безпеки та читабельності коду.</li>
        <li><strong>Сумісність з PHP:</strong> Hack є розширенням для PHP і зберігає сумісність з вихідним кодом PHP.</li>
        <li><strong>Колекції та Асинхронність:</strong> Мова має зручні засоби для роботи з колекціями та асинхронним програмуванням.</li>
      </ul>
      <p>
        Hack - це потужний інструмент для розробників, які працюють з PHP і шукають засоби для покращення безпеки та структури коду.
      </p>
    </>
  ) : (
    <>
      <p>
        Hack is a statically typed programming language that serves as a complement to PHP. Created by Facebook, Hack adds static typing, object-oriented features, and other enhancements to PHP to facilitate the development of large projects.
      </p>
      <p>
        <strong>Applications of Hack:</strong>
      </p>
      <ul>
        <li><strong>Web Development:</strong> Hack is commonly used for developing web applications based on PHP.</li>
        <li><strong>Server-Side Development:</strong> The language can be used to create server-side applications.</li>
        <li><strong>Facebook Development:</strong> Hack is widely used for developing Facebook and associated projects.</li>
        <li><strong>Security and Reliability:</strong> Static typing helps avoid many errors and enhances code security.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Hack occupies an important place in the development of large web projects, where code security and reliability are crucial.
      </p>
      <p>
        <strong>Where to Learn Hack:</strong>
      </p>
      <ul>
        <li><strong>Official Hack Documentation:</strong> <a href="https://docs.hhvm.com/hack/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Hack Documentation</a></li>
      </ul>
      <p>
        <strong>Features of Hack:</strong>
      </p>
      <ul>
        <li><strong>Static Typing:</strong> Hack allows the use of static typing to improve code safety and readability.</li>
        <li><strong>Compatibility with PHP:</strong> Hack is an extension for PHP and maintains compatibility with PHP source code.</li>
        <li><strong>Collections and Asynchrony:</strong> The language provides convenient tools for working with collections and asynchronous programming.</li>
      </ul>
      <p>
        Hack is a powerful tool for developers working with PHP and seeking ways to improve code security and structure.
      </p>
    </>
  );

  return content;
};

export default HackModalContent;
