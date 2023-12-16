import React from 'react';

const Modula2ModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            Modula-2 - мова програмування, розроблена як покращення мови Modula. Вона визначається чистотою дизайну та підтримкою структурного програмування.
          </p>
          <p>
            <strong>Застосування Modula-2:</strong>
          </p>
          <ul>
            <li><strong>Вбудовані системи:</strong> Modula-2 використовується для програмування вбудованих систем, таких як мікроконтролери та системи реального часу.</li>
            <li><strong>Навчання програмуванню:</strong> Мова Modula-2 є популярним вибором для викладання основ програмування.</li>
            <li><strong>Системне програмування:</strong> Modula-2 може бути використана для написання системних програм для операційних систем або драйверів пристроїв.</li>
            <li><strong>Створення бібліотек:</strong> За допомогою Modula-2 можна створювати структуровані та надійні бібліотеки для використання в інших програмах.</li>
          </ul>
          <p>
            <strong>Місце в програмуванні:</strong>
          </p>
          <p>
            Modula-2 визначається своєю простотою та структурністю, роблячи її популярним вибором для системного та вбудованого програмування.
          </p>
          <p>
            <strong>Де вчити Modula-2:</strong>
          </p>
          <ul>
            <li><strong>Modula-2 Language Report:</strong> <a href="https://en.wikipedia.org/wiki/Modula-2" target="_blank" rel="noopener noreferrer">Modula-2 Language Report</a></li>
            <li><strong>Programming in Modula-2 by Niklaus Wirth:</strong> Книга від творця мови Modula-2, Ніклауса Вірта.</li>
          </ul>
          <p>
            <strong>Унікальні риси Modula-2:</strong>
          </p>
          <ul>
            <li><strong>Структурне програмування:</strong> Мова Modula-2 акцентує на структурному програмуванні та модульності.</li>
            <li><strong>Системна ефективність:</strong> Мова призначена для системного програмування, що дозволяє писати ефективний та надійний код.</li>
          </ul>
          <p>
            Modula-2 залишається потужним інструментом для програмування в різних контекстах.
          </p>
        </>
      ) : (
        <>
          <p>
            Modula-2 is a programming language developed as an improvement to the Modula language. It is characterized by clean design and support for structured programming.
          </p>
          <p>
            <strong>Applications of Modula-2:</strong>
          </p>
          <ul>
            <li><strong>Embedded Systems:</strong> Modula-2 is used for programming embedded systems such as microcontrollers and real-time systems.</li>
            <li><strong>Programming Education:</strong> The Modula-2 language is a popular choice for teaching the fundamentals of programming.</li>
            <li><strong>System Programming:</strong> Modula-2 can be used for writing system programs for operating systems or device drivers.</li>
            <li><strong>Library Creation:</strong> Modula-2 allows the creation of structured and reliable libraries for use in other programs.</li>
          </ul>
          <p>
            <strong>Place in Programming:</strong>
          </p>
          <p>
            Modula-2 is defined by its simplicity and structure, making it a popular choice for system and embedded programming.
          </p>
          <p>
            <strong>Where to Learn Modula-2:</strong>
          </p>
          <ul>
            <li><strong>Modula-2 Language Report:</strong> <a href="https://en.wikipedia.org/wiki/Modula-2" target="_blank" rel="noopener noreferrer">Modula-2 Language Report</a></li>
            <li><strong>Programming in Modula-2 by Niklaus Wirth:</strong> A book by the creator of Modula-2, Niklaus Wirth.</li>
          </ul>
          <p>
            <strong>Unique Features of Modula-2:</strong>
          </p>
          <ul>
            <li><strong>Structured Programming:</strong> The Modula-2 language emphasizes structured programming and modularity.</li>
            <li><strong>System Efficiency:</strong> The language is designed for system programming, allowing the writing of efficient and reliable code.</li>
          </ul>
          <p>
            Modula-2 remains a powerful tool for programming in various contexts.
          </p>
        </>
      )}
    </div>
  );
};

export default Modula2ModalContent;
