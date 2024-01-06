import React from 'react';

const NumPyModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#4C8BF5",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        NumPy - це потужна бібліотека для мови програмування Python, яка надає підтримку для роботи з великими, багатовимірними масивами та матрицями, разом із великою колекцією функцій високого рівня для операцій над цими масивами.
      </p>
      <p>
        <strong>Основні особливості NumPy:</strong>
      </p>
      <ul>
        <li><strong>Масиви та Матриці:</strong> NumPy надає потужний об'єкт масиву, що дозволяє ефективно виконувати операції над великими масивами даних.</li>
        <li><strong>Трансляція Операцій:</strong> Можливість виконувати операції на масивах без необхідності явного написання циклів.</li>
        <li><strong>Функції Лінійної Алгебри:</strong> Підтримка основних операцій лінійної алгебри, таких як розв'язання систем лінійних рівнянь і обчислення власних чисел.</li>
        <li><strong>Генерація Випадкових Чисел:</strong> Можливість генерації випадкових чисел та створення випадкових масивів.</li>
      </ul>
      <p>
        <strong>Застосування NumPy:</strong>
      </p>
      <ul>
        <li><strong>Наукові та Інженерні Обчислення:</strong> Використовується для наукових та інженерних обчислень через широкий функціонал для роботи з даними.</li>
        <li><strong>Машинне Навчання та Аналіз Даних:</strong> Застосовується у сферах машинного навчання та аналізу даних через ефективні операції над масивами.</li>
        <li><strong>Обробка Зображень та Сигналів:</strong> Використовується для обробки зображень та сигналів через підтримку масивів.</li>
      </ul>
      <p>
        <strong>Де Вчитися NumPy:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація NumPy:</strong> <a href="https://numpy.org/doc/" target="_blank" rel="noopener noreferrer" style={linkStyles}>NumPy Documentation</a></li>
        <br></br>
        <li><strong>Інтерактивний Підручник NumPy:</strong> <a href="https://numpy.org/learn/" target="_blank" rel="noopener noreferrer" style={linkStyles}>NumPy Quickstart Tutorial</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>NumPy Library for Python</h2>
      <p>
        NumPy is a powerful library for the Python programming language that provides support for working with large, multidimensional arrays and matrices, along with a collection of high-level functions for operations on these arrays.
      </p>
      <p>
        <strong>Key Features of NumPy:</strong>
      </p>
      <ul>
        <li><strong>Arrays and Matrices:</strong> NumPy provides a powerful array object that allows efficient operations on large data arrays.</li>
        <li><strong>Broadcasting:</strong> The ability to perform operations on arrays without the need for explicit loops.</li>
        <li><strong>Linear Algebra Functions:</strong> Support for basic linear algebra operations, such as solving linear equations systems and computing eigenvalues.</li>
        <li><strong>Random Number Generation:</strong> The ability to generate random numbers and create random arrays.</li>
      </ul>
      <p>
        <strong>Applications of NumPy:</strong>
      </p>
      <ul>
        <li><strong>Scientific and Engineering Computing:</strong> Used for scientific and engineering computations due to its extensive functionality for working with data.</li>
        <li><strong>Machine Learning and Data Analysis:</strong> Applied in machine learning and data analysis for efficient array operations.</li>
        <li><strong>Image and Signal Processing:</strong> Utilized for image and signal processing due to its array support.</li>
      </ul>
      <p>
        <strong>Where to Learn NumPy:</strong>
      </p>
      <ul>
        <li><strong>Official NumPy Documentation:</strong> <a href="https://numpy.org/doc/" target="_blank" rel="noopener noreferrer" style={linkStyles}>NumPy Documentation</a></li>
        <br></br>
        <li><strong>Interactive NumPy Tutorial:</strong> <a href="https://numpy.org/learn/" target="_blank" rel="noopener noreferrer" style={linkStyles}>NumPy Quickstart Tutorial</a></li>
      </ul>
    </>
  );

  return content;
};

export default NumPyModalContent;
