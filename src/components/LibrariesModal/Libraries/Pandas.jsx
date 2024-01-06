import React from 'react';

const PandasModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#150458",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Pandas - це бібліотека для обробки та аналізу даних у мові програмування Python.
      </p>
      <p>
        <strong>Основні характеристики Pandas:</strong>
      </p>
      <ul>
        <li><strong>Структури Даних:</strong> Pandas надає дві основні структури даних - DataFrame та Series - для зручної роботи з даними.</li>
        <li><strong>Маніпуляції з Даними:</strong> Високорівневі функції для ефективної обробки та маніпулювання даними.</li>
        <li><strong>Читання та Запис Даних:</strong> Підтримка різних форматів даних, таких як CSV, Excel, SQL, та інші.</li>
        <li><strong>Групування та Агрегація:</strong> Можливості групування та агрегації даних для виконання складних операцій.</li>
      </ul>
      <p>
        <strong>Використання Pandas:</strong>
      </p>
      <p>
        Pandas використовується в аналізі даних, обробці даних, підготовці даних для машинного навчання та інших сферах.
      </p>
      <p>
        <strong>Де Вчитися Pandas:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Pandas:</strong> <a href="https://pandas.pydata.org/pandas-docs/stable/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Pandas Docs</a></li>
        <br></br>
        <li><strong>Pandas Tutorials:</strong> <a href="https://pandas.pydata.org/pandas-docs/stable/getting_started/tutorials.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Pandas Tutorials</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Pandas Library</h2>
      <p>
        Pandas is a library for data manipulation and analysis in the Python programming language.
      </p>
      <p>
        <strong>Key Features of Pandas:</strong>
      </p>
      <ul>
        <li><strong>Data Structures:</strong> Pandas provides two main data structures - DataFrame and Series - for convenient data handling.</li>
        <li><strong>Data Manipulation:</strong> High-level functions for efficient data processing and manipulation.</li>
        <li><strong>Reading and Writing Data:</strong> Support for various data formats such as CSV, Excel, SQL, and more.</li>
        <li><strong>Grouping and Aggregation:</strong> Capabilities for grouping and aggregating data to perform complex operations.</li>
      </ul>
      <p>
        <strong>Applications of Pandas:</strong>
      </p>
      <p>
        Pandas is used in data analysis, data processing, preparing data for machine learning, and other domains.
      </p>
      <p>
        <strong>Where to Learn Pandas:</strong>
      </p>
      <ul>
        <li><strong>Official Pandas Documentation:</strong> <a href="https://pandas.pydata.org/pandas-docs/stable/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Pandas Docs</a></li>
        <br></br>
        <li><strong>Pandas Tutorials:</strong> <a href="https://pandas.pydata.org/pandas-docs/stable/getting_started/tutorials.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Pandas Tutorials</a></li>
      </ul>
    </>
  );

  return content;
};

export default PandasModalContent;
