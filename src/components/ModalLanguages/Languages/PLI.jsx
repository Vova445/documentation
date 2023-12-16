import React from 'react';

const PLIModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            PL/I - мова програмування загального призначення, розроблена в IBM у 1960-х роках. Вона була спроектована для підтримки широкого спектру завдань, включаючи системне програмування, обробку даних та наукові обчислення.
          </p>
          <p>
            <strong>Застосування PL/I:</strong>
          </p>
          <ul>
            <li><strong>Широкий Спектр Завдань:</strong> PL/I призначена для вирішення різноманітних завдань, включаючи системне програмування, створення обчислювальних програм та обробку даних.</li>
            <li><strong>Промислові Програми:</strong> Мова знайшла застосування у промисловості для розробки програмного забезпечення для різноманітних завдань.</li>
            <li><strong>Системне Програмування:</strong> PL/I може використовуватися для написання системних програм та драйверів пристроїв.</li>
            <li><strong>Обробка Даних:</strong> Мова надає різноманітні засоби для роботи зі структурованими та табличними даними.</li>
          </ul>
          <p>
            <strong>Місце в Програмуванні:</strong>
          </p>
          <p>
            PL/I має багато функцій, що дозволяють виконувати різні завдання, роблячи її відмінною для широкого спектру застосувань.
          </p>
          <p>
            <strong>Основні Особливості PL/I:</strong>
          </p>
          <ul>
            <li><strong>Багатофункціональність:</strong> PL/I підтримує багато функцій для зручності програмістів.</li>
            <li><strong>Розширена Обробка Даних:</strong> Мова надає багатий набір засобів для роботи зі структурованими та табличними даними.</li>
            <li><strong>Наявність Універсальних Операторів:</strong> PL/I включає різноманітні універсальні оператори для роботи з числовими та символьними даними.</li>
          </ul>
          <p>
            PL/I залишається історичною мовою програмування, яка вносила значний вклад у світ IT.
          </p>
        </>
      ) : (
        <>
          <p>
            PL/I is a general-purpose programming language developed by IBM in the 1960s. It was designed to support a wide range of tasks, including systems programming, data processing, and scientific computing.
          </p>
          <p>
            <strong>Applications of PL/I:</strong>
          </p>
          <ul>
            <li><strong>Wide Range of Tasks:</strong> PL/I is designed to address diverse tasks, including systems programming, computational programming, and data processing.</li>
            <li><strong>Industrial Programs:</strong> The language found application in industry for developing software for various tasks.</li>
            <li><strong>Systems Programming:</strong> PL/I can be used for writing system programs and device drivers.</li>
            <li><strong>Data Processing:</strong> The language provides various facilities for working with structured and tabular data.</li>
          </ul>
          <p>
            <strong>Place in Programming:</strong>
          </p>
          <p>
            PL/I has many features that allow it to perform various tasks, making it suitable for a wide range of applications.
          </p>
          <p>
            <strong>Key Features of PL/I:</strong>
          </p>
          <ul>
            <li><strong>Multi-functionality:</strong> PL/I supports many features for programmer convenience.</li>
            <li><strong>Advanced Data Handling:</strong> The language provides a rich set of tools for working with structured and tabular data.</li>
            <li><strong>Availability of Universal Operators:</strong> PL/I includes various universal operators for working with numeric and character data.</li>
          </ul>
          <p>
            PL/I remains a historical programming language that made significant contributions to the IT world.
          </p>
        </>
      )}
    </div>
  );
};

export default PLIModalContent;
