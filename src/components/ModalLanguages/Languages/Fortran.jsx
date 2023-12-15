import React from 'react';

const FortranModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Fortran - це стара, але все ще використовувана мова програмування високого рівня, яка в основному використовується для наукових обчислень та інженерних застосувань.
      </p>
      <p>
        <strong>Застосування Fortran:</strong>
      </p>
      <ul>
        <li><strong>Наукові Обчислення:</strong> Fortran широко використовується у вчених та інженерах для проведення наукових обчислень та числових симуляцій.</li>
        <li><strong>Обробка Даних:</strong> Мова Fortran може бути застосована для обробки великих обсягів даних та виконання математичних операцій.</li>
        <li><strong>Програмування Учених:</strong> Fortran є популярним вибором серед учених, які займаються числовими обчисленнями та науковими дослідженнями.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Fortran має своє місце в програмуванні як основний інструмент для проведення числових розрахунків та наукових експериментів.
      </p>
      <p>
        <strong>Де Вчити Fortran:</strong>
      </p>
      <ul>
        <li><strong>Fortran Programming - Tutorialspoint:</strong> <a href="https://www.tutorialspoint.com/fortran/index.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow' }}>Fortran Tutorial on TutorialsPoint</a></li>
      </ul>
      <p>
        <strong>Особливості Fortran:</strong>
      </p>
      <ul>
        <li><strong>Орієнтований на Математику:</strong> Fortran спеціалізується на виконанні математичних операцій та наукових обчислень.</li>
        <li><strong>Широкий Вибір Математичних Функцій:</strong> Мова має широкий спектр вбудованих математичних функцій для обробки числових даних.</li>
        <li><strong>Історична Важливість:</strong> Fortran є однією з перших мов програмування та має багато історичних аспектів.</li>
      </ul>
      <p>
        Fortran залишається інструментом важливого значення для наукового співтовариства та інженерії.
      </p>
    </>
  ) : (
    <>
      <p>
        Fortran is an old but still widely used high-level programming language primarily used for scientific computing and engineering applications.
      </p>
      <p>
        <strong>Applications of Fortran:</strong>
      </p>
      <ul>
        <li><strong>Scientific Computing:</strong> Fortran is extensively used by scientists and engineers for scientific computing and numerical simulations.</li>
        <li><strong>Data Processing:</strong> Fortran can be applied for processing large volumes of data and performing mathematical operations.</li>
        <li><strong>Academic Programming:</strong> Fortran is a popular choice among academics engaged in numerical computations and scientific research.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Fortran has its place in programming as a primary tool for numerical computations and scientific experiments.
      </p>
      <p>
        <strong>Where to Learn Fortran:</strong>
      </p>
      <ul>
        <li><strong>Fortran Programming - Tutorialspoint:</strong> <a href="https://www.tutorialspoint.com/fortran/index.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow' }}>Fortran Tutorial on TutorialsPoint</a></li>
      </ul>
      <p>
        <strong>Features of Fortran:</strong>
      </p>
      <ul>
        <li><strong>Mathematical Focus:</strong> Fortran specializes in performing mathematical operations and scientific calculations.</li>
        <li><strong>Wide Range of Mathematical Functions:</strong> The language has a broad set of built-in mathematical functions for handling numerical data.</li>
        <li><strong>Historical Significance:</strong> Fortran is one of the earliest programming languages with significant historical aspects.</li>
      </ul>
      <p>
        Fortran remains a significant tool for the scientific community and engineering.
      </p>
    </>
  );

  return content;
};

export default FortranModalContent;
