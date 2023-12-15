import React from 'react';

const JuliaModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Julia - це мова програмування високого рівня, яка призначена для розрахункових наук, статистики та наукового програмування. Вона володіє високою продуктивністю та ефективністю завдяки вбудованим оптимізаціям.
      </p>
      <p>
        <strong>Застосування Julia:</strong>
      </p>
      <ul>
        <li><strong>Наукове Програмування:</strong> Julia часто використовується для наукового програмування та розв'язання математичних задач.</li>
        <li><strong>Статистика та Аналіз Даних:</strong> Julia підтримує широкі можливості для статистичного аналізу та обробки даних.</li>
        <li><strong>Машинне Навчання:</strong> Julia може бути використана для розробки моделей машинного навчання.</li>
        <li><strong>Високопродуктивні Обчислення:</strong> Завдяки своїй продуктивності, Julia ідеально підходить для високопродуктивних обчислень та обробки великих обсягів даних.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Julia стає популярною серед вчених та інженерів, які потребують ефективного інструменту для наукового програмування та обчислень.
      </p>
      <p>
        <strong>Де Вчити Julia:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Julia:</strong> <a href="https://docs.julialang.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Julia Documentation</a></li>
      </ul>
      <p>
        <strong>Особливості Julia:</strong>
      </p>
      <ul>
        <li><strong>Висока Продуктивність:</strong> Julia надає високу швидкість виконання завдяки вбудованим оптимізаціям та JIT-компіляції.</li>
        <li><strong>Широкі Можливості:</strong> Мова підтримує широкий спектр математичних операцій та функцій для наукового програмування.</li>
        <li><strong>Сумісність з Іншими Мовами:</strong> Julia може взаємодіяти з кодом, написаним на інших мовах програмування, таких як C, Fortran та Python.</li>
      </ul>
      <p>
        Julia - ідеальний вибір для тих, хто шукає мову програмування для наукових обчислень та досліджень.
      </p>
    </>
  ) : (
    <>
      <p>
        Julia is a high-level programming language designed for scientific computing, statistics, and scientific programming. It boasts high productivity and efficiency due to built-in optimizations.
      </p>
      <p>
        <strong>Applications of Julia:</strong>
      </p>
      <ul>
        <li><strong>Scientific Programming:</strong> Julia is commonly used for scientific programming and solving mathematical problems.</li>
        <li><strong>Statistics and Data Analysis:</strong> Julia supports extensive capabilities for statistical analysis and data processing.</li>
        <li><strong>Machine Learning:</strong> Julia can be used for developing machine learning models.</li>
        <li><strong>High-Performance Computing:</strong> Thanks to its productivity, Julia is ideal for high-performance computing and processing large volumes of data.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Julia is becoming popular among scientists and engineers who need an efficient tool for scientific programming and computations.
      </p>
      <p>
        <strong>Where to Learn Julia:</strong>
      </p>
      <ul>
        <li><strong>Official Julia Documentation:</strong> <a href="https://docs.julialang.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Julia Documentation</a></li>
      </ul>
      <p>
        <strong>Features of Julia:</strong>
      </p>
      <ul>
        <li><strong>High Productivity:</strong> Julia provides high execution speed due to built-in optimizations and JIT compilation.</li>
        <li><strong>Extensive Capabilities:</strong> The language supports a wide range of mathematical operations and functions for scientific programming.</li>
        <li><strong>Compatibility with Other Languages:</strong> Julia can interact with code written in other programming languages such as C, Fortran, and Python.</li>
      </ul>
      <p>
        Julia is an excellent choice for those seeking a programming language for scientific computations and research.
      </p>
    </>
  );

  return content;
};

export default JuliaModalContent;
