import React from 'react';

const JModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        J - це мова програмування високого рівня, спрямована на векторні обчислення та обробку даних. Вона відзначається зручним синтаксисом для роботи з масивами та числовими даними, а також потужними засобами функціонального програмування.
      </p>
      <p>
        <strong>Застосування J:</strong>
      </p>
      <ul>
        <li><strong>Математичні Обчислення:</strong> J часто використовується для числових обчислень, включаючи лінійну алгебру та статистику.</li>
        <li><strong>Обробка Даних:</strong> Вона добре підходить для операцій з великими масивами даних та здійснення векторизованих операцій.</li>
        <li><strong>Функціональне Програмування:</strong> J підтримує функціональний стиль програмування, що полегшує роботу з функціями вищого порядку.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        J забезпечує ефективні та компактні засоби для роботи з числовими даними, що робить його популярним для задач, пов'язаних із науковими обчисленнями та аналізом даних.
      </p>
      <p>
        <strong>Де Вчити J:</strong>
      </p>
      <ul>
        <li><strong>J Wiki:</strong> <a href="https://code.jsoftware.com/wiki/Main_Page" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>J Wiki</a></li>
      </ul>
      <p>
        <strong>Особливості J:</strong>
      </p>
      <ul>
        <li><strong>Векторизовані Операції:</strong> J дозволяє виконувати операції одночасно над цілими масивами даних.</li>
        <li><strong>Функціональні Конструкції:</strong> Підтримка функцій вищого порядку та інших концепцій функціонального програмування.</li>
        <li><strong>Компактний Синтаксис:</strong> J має короткий та виразний синтаксис для вираження складних операцій.</li>
      </ul>
      <p>
        J - це потужна мова для роботи з числовими даними та векторними операціями у світі наукових обчислень.
      </p>
    </>
  ) : (
    <>
      <p>
        J is a high-level programming language aimed at vector computations and data processing. It features a convenient syntax for working with arrays and numerical data, as well as powerful functional programming capabilities.
      </p>
      <p>
        <strong>Applications of J:</strong>
      </p>
      <ul>
        <li><strong>Mathematical Computations:</strong> J is often used for numerical computations, including linear algebra and statistics.</li>
        <li><strong>Data Processing:</strong> It is well-suited for operations on large arrays of data and performing vectorized operations.</li>
        <li><strong>Functional Programming:</strong> J supports a functional programming style, making it easy to work with higher-order functions.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        J provides efficient and compact means for working with numerical data, making it popular for tasks related to scientific computing and data analysis.
      </p>
      <p>
        <strong>Where to Learn J:</strong>
      </p>
      <ul>
        <li><strong>J Wiki:</strong> <a href="https://code.jsoftware.com/wiki/Main_Page" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>J Wiki</a></li>
      </ul>
      <p>
        <strong>Features of J:</strong>
      </p>
      <ul>
        <li><strong>Vectorized Operations:</strong> J allows performing operations simultaneously on entire arrays of data.</li>
        <li><strong>Functional Constructs:</strong> Support for higher-order functions and other functional programming concepts.</li>
        <li><strong>Compact Syntax:</strong> J has a concise and expressive syntax for expressing complex operations.</li>
      </ul>
      <p>
        J is a powerful language for working with numerical data and vector operations in the realm of scientific computing.
      </p>
    </>
  );

  return content;
};

export default JModalContent;
