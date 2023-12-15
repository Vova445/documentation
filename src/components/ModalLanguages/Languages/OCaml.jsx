import React from 'react';

const OCamlModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        OCaml - мова програмування загального призначення, яка поєднує в собі функціональні, імперативні та об'єктно-орієнтовані парадигми. Вона використовується для розробки високоефективних та безпечних програм.
      </p>
      <p>
        <strong>Застосування OCaml:</strong>
      </p>
      <ul>
        <li><strong>Розробка Компіляторів та Інтерпретаторів:</strong> OCaml використовується для розробки компіляторів та інтерпретаторів програмних мов.</li>
        <li><strong>Розробка Вбудованих та Системних Програм:</strong> Мова підходить для розробки вбудованих та системних програм, де важлива ефективність та безпека.</li>
        <li><strong>Розробка Програм для Обробки та Аналізу Даних:</strong> OCaml часто використовується для розробки програм для обробки та аналізу великих обсягів даних.</li>
        <li><strong>Розробка Серверних Додатків:</strong> Мова підходить для розробки серверних додатків з високою продуктивністю.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        OCaml знаменита своєю сильною статичною типізацією та підтримкою функціонального програмування, що робить її популярною для розробки надійних та швидких систем.
      </p>
      <p>
        <strong>Де Вчити OCaml:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація OCaml:</strong> <a href="https://ocaml.org/docs/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>OCaml Documentation</a></li>
        <li><strong>Real World OCaml:</strong> <a href="https://dev.realworldocaml.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Real World OCaml</a></li>
        <li><strong>Try OCaml - Online OCaml Compiler:</strong> <a href="https://try.ocamlpro.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Try OCaml</a></li>
      </ul>
      <p>
        <strong>Особливості OCaml:</strong>
      </p>
      <ul>
        <li><strong>Сильна Статична Типізація:</strong> OCaml використовує сильну статичну типізацію для запобігання багатьом видам помилок.</li>
        <li><strong>Механізм Винятків:</strong> Мова має ефективний механізм обробки винятків.</li>
        <li><strong>Поліморфізм:</strong> OCaml підтримує поліморфізм, що дозволяє створювати загальні та гнучкі функції.</li>
      </ul>
      <p>
        OCaml - це мова, яка пропонує високий рівень ефективності та надійності для розробки різноманітних програм.
      </p>
    </>
  ) : (
    <>
      <p>
        OCaml is a general-purpose programming language that combines functional, imperative, and object-oriented paradigms. It is used for developing highly efficient and safe programs.
      </p>
      <p>
        <strong>Applications of OCaml:</strong>
      </p>
      <ul>
        <li><strong>Compiler and Interpreter Development:</strong> OCaml is used for developing compilers and interpreters for programming languages.</li>
        <li><strong>Embedded and System Programs:</strong> The language is suitable for developing embedded and system programs where efficiency and safety are crucial.</li>
        <li><strong>Data Processing and Analysis Programs:</strong> OCaml is often used for developing programs for processing and analyzing large volumes of data.</li>
        <li><strong>Server-Side Application Development:</strong> The language is well-suited for developing server-side applications with high performance.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        OCaml is renowned for its strong static typing and support for functional programming, making it popular for developing reliable and fast systems.
      </p>
      <p>
        <strong>Where to Learn OCaml:</strong>
      </p>
      <ul>
        <li><strong>Official OCaml Documentation:</strong> <a href="https://ocaml.org/docs/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>OCaml Documentation</a></li>
        <li><strong>Real World OCaml:</strong> <a href="https://dev.realworldocaml.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Real World OCaml</a></li>
        <li><strong>Try OCaml - Online OCaml Compiler:</strong> <a href="https://try.ocamlpro.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Try OCaml</a></li>
      </ul>
      <p>
        <strong>Features of OCaml:</strong>
      </p>
      <ul>
        <li><strong>Strong Static Typing:</strong> OCaml uses strong static typing to prevent many types of errors.</li>
        <li><strong>Exception Handling Mechanism:</strong> The language has an efficient exception handling mechanism.</li>
        <li><strong>Polymorphism:</strong> OCaml supports polymorphism, allowing the creation of generic and flexible functions.</li>
      </ul>
      <p>
        OCaml is a language that offers a high level of efficiency and reliability for the development of various programs.
      </p>
    </>
  );

  return content;
};

export default OCamlModalContent;
