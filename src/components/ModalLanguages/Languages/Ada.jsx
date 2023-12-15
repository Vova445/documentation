import React from 'react';

const AdaModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Ada - це структурна, статично типізована, вбудована, паралельна мова програмування загального призначення, яка була спеціально розроблена для високих вимог до надійності та ефективності вбудованих систем.
      </p>
      <p>
        <strong>Застосування Ada:</strong>
      </p>
      <ul>
        <li><strong>Вбудовані Системи:</strong> Ada використовується для розробки вбудованих систем з високими вимогами до надійності.</li>
        <li><strong>Аерокосмічна Промисловість:</strong> Мова Ada застосовується в аерокосмічній промисловості для розробки програмного забезпечення.</li>
        <li><strong>Здоров'я та Медицина:</strong> Ada використовується у проектах, пов'язаних із здоров'ям та медициною.</li>
        <li><strong>Телекомунікації:</strong> Мова Ada може бути використана для розробки програмного забезпечення у сфері телекомунікацій.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Ada займає важливе місце в розробці вбудованих систем, де вимоги до надійності та безпеки вельми важливі.
      </p>
      <p>
        <strong>Де Вчити Ada:</strong>
      </p>
      <ul>
        <li><strong>Ada Programming - Wikibooks:</strong> <a href="https://en.wikibooks.org/wiki/Ada_Programming" target="_blank" rel="noopener noreferrer" style={{ color: 'gray' }}>Ada Programming on Wikibooks</a></li>
      </ul>
      <p>
        <strong>Особливості Ada:</strong>
      </p>
      <ul>
        <li><strong>Статична Типізація:</strong> Ada використовує статичну типізацію для забезпечення безпеки та надійності коду.</li>
        <li><strong>Підтримка Паралельності:</strong> Мова Ada має вбудовану підтримку паралельного програмування.</li>
        <li><strong>Високий Рівень Абстракції:</strong> Ada дозволяє працювати на високому рівні абстракції для полегшення розробки.</li>
      </ul>
      <p>
        Ada - це важливий інструмент для розробників, які працюють у галузі вбудованих систем та додробних проектах.
      </p>
    </>
  ) : (
    <>
      <p>
        Ada is a structured, statically typed, embedded, parallel programming language designed specifically for high demands on reliability and efficiency in embedded systems.
      </p>
      <p>
        <strong>Applications of Ada:</strong>
      </p>
      <ul>
        <li><strong>Embedded Systems:</strong> Ada is used for developing embedded systems with high reliability requirements.</li>
        <li><strong>Aerospace Industry:</strong> Ada is applied in the aerospace industry for software development.</li>
        <li><strong>Health and Medicine:</strong> Ada is used in projects related to health and medicine.</li>
        <li><strong>Telecommunications:</strong> Ada can be employed for software development in the telecommunications sector.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Ada holds a crucial place in embedded system development, where requirements for reliability and safety are paramount.
      </p>
      <p>
        <strong>Where to Learn Ada:</strong>
      </p>
      <ul>
        <li><strong>Ada Programming - Wikibooks:</strong> <a href="https://en.wikibooks.org/wiki/Ada_Programming" target="_blank" rel="noopener noreferrer" style={{ color: 'gray' }}>Ada Programming on Wikibooks</a></li>
      </ul>
      <p>
        <strong>Features of Ada:</strong>
      </p>
      <ul>
        <li><strong>Static Typing:</strong> Ada uses static typing to ensure code safety and reliability.</li>
        <li><strong>Parallelism Support:</strong> Ada has built-in support for parallel programming.</li>
        <li><strong>High-Level Abstraction:</strong> Ada allows working at a high level of abstraction for easier development.</li>
      </ul>
      <p>
        Ada is a significant tool for developers working in the field of embedded systems and detailed projects.
      </p>
    </>
  );

  return content;
};

export default AdaModalContent;
