import React from 'react';

const PascalModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            Pascal - мова програмування, яка була створена Ніклаусом Віртом в 1970 році.
          </p>
          <p>
            <strong>Застосування Pascal:</strong>
          </p>
          <ul>
            <li><strong>Навчання програмуванню:</strong> Pascal часто використовується для навчання основам програмування та алгоритмізації.</li>
            <li><strong>Розробка програмного забезпечення:</strong> Pascal використовується для створення різноманітних програм та додатків.</li>
            <li><strong>Наукові обчислення:</strong> Pascal може використовуватися для наукових обчислень та інженерних задач.</li>
            <li><strong>Системне програмування:</strong> Pascal може використовуватися для розробки системних програм та операційних систем.</li>
          </ul>
          <p>
            <strong>Місце в програмуванні:</strong>
          </p>
          <p>
            Pascal відомий своєю простотою та структурованістю, і використовується в навчанні та розробці програмного забезпечення.
          </p>
          <p>
            <strong>Де вчити Pascal:</strong>
          </p>
          <ul>
            <li><strong>Free Pascal Documentation:</strong> <a href="https://www.freepascal.org/docs.html" target="_blank" rel="noopener noreferrer">Free Pascal Documentation</a></li>
          </ul>
          <p>
            <strong>Унікальні риси Pascal:</strong>
          </p>
          <ul>
            <li><strong>Структурованість:</strong> Pascal відзначається структурованістю, що полегшує розробку та читання коду.</li>
            <li><strong>Безпека:</strong> Pascal має строгу систему типізації, що допомагає у виявленні помилок на етапі компіляції.</li>
            <li><strong>Легкість вивчення:</strong> Pascal є добрим вибором для початківців через його простоту та ясність.</li>
          </ul>
          <p>
            Pascal залишається важливою мовою для навчання та деяких областей розробки програмного забезпечення.
          </p>
        </>
      ) : (
        <>
          <p>
            Pascal is a programming language created by Niklaus Wirth in 1970.
          </p>
          <p>
            <strong>Applications of Pascal:</strong>
          </p>
          <ul>
            <li><strong>Programming Education:</strong> Pascal is often used for teaching the fundamentals of programming and algorithmization.</li>
            <li><strong>Software Development:</strong> Pascal is used for creating various programs and applications.</li>
            <li><strong>Scientific Computing:</strong> Pascal can be used for scientific computing and engineering tasks.</li>
            <li><strong>System Programming:</strong> Pascal can be used for developing system programs and operating systems.</li>
          </ul>
          <p>
            <strong>Place in Programming:</strong>
          </p>
          <p>
            Pascal is known for its simplicity and structured programming, and it is used in education and software development.
          </p>
          <p>
            <strong>Where to Learn Pascal:</strong>
          </p>
          <ul>
            <li><strong>Free Pascal Documentation:</strong> <a href="https://www.freepascal.org/docs.html" target="_blank" rel="noopener noreferrer">Free Pascal Documentation</a></li>
          </ul>
          <p>
            <strong>Unique Features of Pascal:</strong>
          </p>
          <ul>
            <li><strong>Structuredness:</strong> Pascal is known for its structured programming, making development and code readability easier.</li>
            <li><strong>Safety:</strong> Pascal has a strict typing system, helping to detect errors at compile time.</li>
            <li><strong>Ease of Learning:</strong> Pascal is a good choice for beginners due to its simplicity and clarity.</li>
          </ul>
          <p>
            Pascal remains a significant language for education and certain areas of software development.
          </p>
        </>
      )}
    </div>
  );
};

export default PascalModalContent;
