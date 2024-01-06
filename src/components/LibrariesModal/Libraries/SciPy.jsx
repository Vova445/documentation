import React from 'react';

const SciPyModalContent = ({ isUkrainian }) => {
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
        SciPy - це безкоштовна та відкрита бібліотека для наукових та технічних обчислень. Вона базується на функціоналісті бібліотеки NumPy і надає додаткові засоби для оптимізації, обробки сигналів та зображень, статистики та інших областей.
      </p>
      <p>
        <strong>Основні особливості SciPy:</strong>
      </p>
      <ul>
        <li><strong>Модуль Оптимізації:</strong> Включає різноманітні методи оптимізації та пошуку коренів функцій.</li>
        <li><strong>Модуль Обробки Сигналів та Зображень:</strong> Надає інструменти для фільтрації, згладжування та обробки сигналів і зображень.</li>
        <li><strong>Модуль Статистики:</strong> Містить функції для виконання різних статистичних операцій.</li>
        <li><strong>Модуль Інтерполяції:</strong> Забезпечує інтерполяцію даних та апроксимацію кривих.</li>
      </ul>
      <p>
        <strong>Застосування SciPy:</strong>
      </p>
      <ul>
        <li><strong>Наукові та Технічні Обчислення:</strong> Використовується для широкого спектру наукових та технічних обчислень.</li>
        <li><strong>Обробка Сигналів та Зображень:</strong> Застосовується для обробки сигналів та зображень в реальному часі.</li>
        <li><strong>Оптимізація та Моделювання:</strong> Використовується для оптимізації функцій та моделювання систем.</li>
      </ul>
      <p>
        <strong>Де Вчитися SciPy:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація SciPy:</strong> <a href="https://docs.scipy.org/doc/scipy/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>SciPy Documentation</a></li>
        <br></br>
        </ul>
    </>
  ) : (
    <>
      <h2>SciPy Library for Scientific and Technical Computing</h2>
      <p>
        SciPy is a free and open-source library for scientific and technical computing. It builds on the functionality of the NumPy library and provides additional tools for optimization, signal and image processing, statistics, and more.
      </p>
      <p>
        <strong>Key Features of SciPy:</strong>
      </p>
      <ul>
        <li><strong>Optimization Module:</strong> Includes various optimization and root-finding methods.</li>
        <li><strong>Signal and Image Processing Module:</strong> Provides tools for filtering, smoothing, and processing signals and images.</li>
        <li><strong>Statistics Module:</strong> Contains functions for performing various statistical operations.</li>
        <li><strong>Interpolation Module:</strong> Ensures data interpolation and curve approximation.</li>
      </ul>
      <p>
        <strong>Applications of SciPy:</strong>
      </p>
      <ul>
        <li><strong>Scientific and Technical Computing:</strong> Used for a wide range of scientific and technical computations.</li>
        <li><strong>Signal and Image Processing:</strong> Applied for real-time signal and image processing.</li>
        <li><strong>Optimization and Modeling:</strong> Utilized for function optimization and system modeling.</li>
      </ul>
      <p>
        <strong>Where to Learn SciPy:</strong>
      </p>
      <ul>
        <li><strong>Official SciPy Documentation:</strong> <a href="https://docs.scipy.org/doc/scipy/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>SciPy Documentation</a></li>
        <br></br>
        </ul>
    </>
  );

  return content;
};

export default SciPyModalContent;
