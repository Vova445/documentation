import React from 'react';

const MatplotlibModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#11557c",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Matplotlib - це бібліотека для створення графіків та візуалізації даних за допомогою мови програмування Python.
      </p>
      <p>
        <strong>Основні характеристики Matplotlib:</strong>
      </p>
      <ul>
        <li><strong>Гнучкість та Розширюваність:</strong> Matplotlib надає широкі можливості для створення різноманітних видів графіків та діаграм.</li>
        <li><strong>Інтерактивність:</strong> Можливість створення інтерактивних графіків для подальшого вивчення даних.</li>
        <li><strong>Підтримка Різних Форматів:</strong> Виведення графіків у різних форматах, таких як PNG, PDF, SVG, тощо.</li>
        <li><strong>Велика Спільнота:</strong> Широка спільнота користувачів Matplotlib та наявність різноманітних ресурсів.</li>
      </ul>
      <p>
        <strong>Використання Matplotlib:</strong>
      </p>
      <p>
        Matplotlib використовується для створення графіків, діаграм, гістограм та інших видів візуалізації даних у наукових дослідженнях, аналізі даних та інших галузях.
      </p>
      <p>
        <strong>Де Вчитися Matplotlib:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Matplotlib:</strong> <a href="https://matplotlib.org/stable/contents.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Matplotlib Docs</a></li>
        <br></br>
        <li><strong>Matplotlib Tutorial:</strong> <a href="https://matplotlib.org/stable/tutorials/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Matplotlib Tutorial</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Matplotlib Framework</h2>
      <p>
        Matplotlib is a library for creating plots and visualizations of data using the Python programming language.
      </p>
      <p>
        <strong>Key Features of Matplotlib:</strong>
      </p>
      <ul>
        <li><strong>Flexibility and Extensibility:</strong> Matplotlib provides extensive capabilities for creating various types of plots and charts.</li>
        <li><strong>Interactivity:</strong> Ability to create interactive plots for further data exploration.</li>
        <li><strong>Support for Various Formats:</strong> Outputting plots in various formats such as PNG, PDF, SVG, etc.</li>
        <li><strong>Large Community:</strong> Matplotlib has a large user community and a variety of available resources.</li>
      </ul>
      <p>
        <strong>Applications of Matplotlib:</strong>
      </p>
      <p>
        Matplotlib is used for creating plots, charts, histograms, and other types of data visualizations in scientific research, data analysis, and other fields.
      </p>
      <p>
        <strong>Where to Learn Matplotlib:</strong>
      </p>
      <ul>
        <li><strong>Official Matplotlib Documentation:</strong> <a href="https://matplotlib.org/stable/contents.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Matplotlib Docs</a></li>
        <br></br>
        <li><strong>Matplotlib Tutorial:</strong> <a href="https://matplotlib.org/stable/tutorials/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Matplotlib Tutorial</a></li>
      </ul>
    </>
  );

  return content;
};

export default MatplotlibModalContent;
