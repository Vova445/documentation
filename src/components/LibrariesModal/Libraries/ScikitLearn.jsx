import React from 'react';

const ScikitLearnModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#F7931E",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        scikit-learn - це бібліотека машинного навчання для мови програмування Python. Вона надає прості та ефективні інструменти для аналізу даних та моделювання, включаючи класифікацію, регресію, кластеризацію та багато іншого.
      </p>
      <p>
        <strong>Основні функції scikit-learn:</strong>
      </p>
      <ul>
        <li><strong>Класифікація та Регресія:</strong> Моделі для вирішення задач класифікації та регресії.</li>
        <li><strong>Кластеризація:</strong> Алгоритми для групування схожих об'єктів у кластери.</li>
        <li><strong>Вимірювання Продуктивності:</strong> Інструменти для визначення ефективності моделей та підбору параметрів.</li>
        <li><strong>Підтримка Векторів:</strong> Підтримка роботи з векторами та матрицями.</li>
      </ul>
      <p>
        <strong>Застосування scikit-learn:</strong>
      </p>
      <p>
        scikit-learn використовується для різних завдань машинного навчання, включаючи аналіз даних, розпізнавання образів та прогнозування.
      </p>
      <p>
        <strong>Де Вчитися scikit-learn:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація scikit-learn:</strong> <a href="https://scikit-learn.org/stable/documentation.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>scikit-learn Docs</a></li>
        <br></br>
        <li><strong>scikit-learn Tutorials:</strong> <a href="https://scikit-learn.org/stable/tutorial/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>scikit-learn Tutorials</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>scikit-learn Library</h2>
      <p>
        scikit-learn is a machine learning library for the Python programming language. It provides simple and efficient tools for data analysis and modeling, including classification, regression, clustering, and much more.
      </p>
      <p>
        <strong>Key Features of scikit-learn:</strong>
      </p>
      <ul>
        <li><strong>Classification and Regression:</strong> Models for solving classification and regression tasks.</li>
        <li><strong>Clustering:</strong> Algorithms for grouping similar objects into clusters.</li>
        <li><strong>Performance Metrics:</strong> Tools for determining model performance and parameter tuning.</li>
        <li><strong>Vector Support:</strong> Support for working with vectors and matrices.</li>
      </ul>
      <p>
        <strong>Applications of scikit-learn:</strong>
      </p>
      <p>
        scikit-learn is used for various machine learning tasks, including data analysis, pattern recognition, and prediction.
      </p>
      <p>
        <strong>Where to Learn scikit-learn:</strong>
      </p>
      <ul>
        <li><strong>Official scikit-learn Documentation:</strong> <a href="https://scikit-learn.org/stable/documentation.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>scikit-learn Docs</a></li>
        <br></br>
        <li><strong>scikit-learn Tutorials:</strong> <a href="https://scikit-learn.org/stable/tutorial/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>scikit-learn Tutorials</a></li>
      </ul>
    </>
  );

  return content;
};

export default ScikitLearnModalContent;
