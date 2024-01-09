import React from 'react';

const JupyterModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#F37626",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Jupyter
    </a>
  ) : (
    <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Jupyter Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Jupyter - це вільне програмне забезпечення, яке дозволяє створювати та редагувати документи, які містять живий код, рівень групування та візуалізацію даних.
      </p>
      <p>
        <strong>Основні особливості Jupyter:</strong>
      </p>
      <ul>
        <li><strong>Інтерактивні Ноутбуки:</strong> Можливість виконання коду у вигляді окремих клітинок (нотаток) та перегляд результатів.</li>
        <li><strong>Підтримка Багатьох Мов:</strong> Підтримка різних мов програмування, таких як Python, R, Julia та інші.</li>
        <li><strong>Візуалізація Даних:</strong> Зручні можливості для візуалізації даних за допомогою вбудованих графіків та бібліотек.</li>
        <li><strong>Розширюваність:</strong> Велика кількість розширень для роботи з різними типами даних та завдань.</li>
      </ul>
      <p>
        <strong>Сторінка Jupyter:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Jupyter Notebooks</h2>
      <p>
        Jupyter is free software that allows you to create and edit documents containing live code, equations, visualizations, and narrative text.
      </p>
      <p>
        <strong>Key Features of Jupyter:</strong>
      </p>
      <ul>
        <li><strong>Interactive Notebooks:</strong> Ability to execute code in the form of cells (notes) and view the results.</li>
        <li><strong>Support for Multiple Languages:</strong> Support for various programming languages such as Python, R, Julia, and more.</li>
        <li><strong>Data Visualization:</strong> Convenient features for data visualization using built-in plots and libraries.</li>
        <li><strong>Extensibility:</strong> A wide range of extensions for working with different types of data and tasks.</li>
      </ul>
      <p>
        <strong>Jupyter Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default JupyterModalContent;
