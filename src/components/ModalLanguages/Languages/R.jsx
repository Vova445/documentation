import React from 'react';

const RModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        R - це мова програмування та середовище для виконання статистичних обчислень та графічного представлення даних. Широко використовується в статистичних дослідженнях, аналізі даних та наукових дослідженнях.
      </p>
      <p>
        <strong>Застосування R:</strong>
      </p>
      <ul>
        <li><strong>Статистичні Обчислення:</strong> R надає потужні інструменти для виконання різноманітних статистичних обчислень та аналізу даних.</li>
        <li><strong>Графічне Представлення Даних:</strong> R дозволяє легко створювати високоякісні графіки та візуалізації для аналізу результатів.</li>
        <li><strong>Машинне Навчання:</strong> R використовується для розробки моделей машинного навчання та прогнозування.</li>
        <li><strong>Наукові Дослідження:</strong> Використовується в різних галузях наукових досліджень для обробки та аналізу даних.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        R є популярним інструментом серед дослідників та аналітиків для виконання статистичних обчислень та аналізу даних.
      </p>
      <p>
        <strong>Де Вчити R:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація R:</strong> <a href="https://www.rdocumentation.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>R Documentation</a></li>
        <li><strong>DataCamp Курс "Intermediate R":</strong> <a href="https://www.datacamp.com/courses/intermediate-r" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Intermediate R</a></li>
      </ul>
      <p>
        <strong>Особливості R:</strong>
      </p>
      <ul>
        <li><strong>Розширені Функції для Статистики:</strong> R має багатий набір функцій для виконання різноманітних статистичних обчислень.</li>
        <li><strong>Спільнота та Пакети:</strong> R має активну спільноту розробників та широкий вибір пакетів для різних завдань.</li>
        <li><strong>Інтеграція з Іншими Мовами:</strong> R може бути легко інтегровано з іншими мовами програмування, що дозволяє розширити його можливості.</li>
      </ul>
      <p>
        R є потужним інструментом для аналізу та візуалізації даних, а також для виконання статистичних обчислень в різних областях науки та досліджень.
      </p>
    </>
  ) : (
    <>
      <p>
        R is a programming language and environment for performing statistical computations and graphical representation of data. Widely used in statistical research, data analysis, and scientific research.
      </p>
      <p>
        <strong>Applications of R:</strong>
      </p>
      <ul>
        <li><strong>Statistical Computations:</strong> R provides powerful tools for performing various statistical computations and data analysis.</li>
        <li><strong>Graphical Data Representation:</strong> R allows easy creation of high-quality graphics and visualizations for analyzing results.</li>
        <li><strong>Machine Learning:</strong> R is used for developing machine learning models and prediction.</li>
        <li><strong>Scientific Research:</strong> Used in various fields of scientific research for data processing and analysis.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        R is a popular tool among researchers and analysts for performing statistical computations and data analysis.
      </p>
      <p>
        <strong>Where to Learn R:</strong>
      </p>
      <ul>
        <li><strong>Official R Documentation:</strong> <a href="https://www.rdocumentation.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>R Documentation</a></li>
        <li><strong>DataCamp Course "Intermediate R":</strong> <a href="https://www.datacamp.com/courses/intermediate-r" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Intermediate R</a></li>
      </ul>
      <p>
        <strong>Features of R:</strong>
      </p>
      <ul>
        <li><strong>Advanced Functions for Statistics:</strong> R has a rich set of functions for performing various statistical computations.</li>
        <li><strong>Community and Packages:</strong> R has an active developer community and a wide range of packages for various tasks.</li>
        <li><strong>Integration with Other Languages:</strong> R can be easily integrated with other programming languages, expanding its capabilities.</li>
      </ul>
      <p>
        R is a powerful tool for data analysis and visualization, as well as for performing statistical computations in various areas of science and research.
      </p>
    </>
  );

  return content;
};

export default RModalContent;
