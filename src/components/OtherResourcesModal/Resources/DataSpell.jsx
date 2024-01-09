import React from 'react';

const DataSpellModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#336791",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка DataSpell" : "DataSpell Official Page";

  const officialPageLink = (
    <a href="https://www.jetbrains.com/dataspell/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        DataSpell - це інтегроване середовище розробки для аналізу даних, розроблене компанією JetBrains. Воно надає зручні інструменти для вивчення та відлагодження коду Python, а також велику кількість бібліотек для аналізу даних та машинного навчання.
      </p>
      <p>
        <strong>Основні можливості DataSpell:</strong>
      </p>
      <ul>
        <li><strong>Відлагодження Коду:</strong> Зручний інтерфейс для відлагодження Python-коду.</li>
        <li><strong>Підтримка Jupyter Notebooks:</strong> Інтеграція з Jupyter Notebooks для проведення досліджень та аналізу даних.</li>
        <li><strong>Автоматичне Завершення Коду:</strong> Функціонал автоматичного завершення коду для полегшення роботи.</li>
        <li><strong>Інтеграція з Бібліотеками для Аналізу Даних:</strong> Вбудована підтримка популярних бібліотек для аналізу даних та машинного навчання.</li>
      </ul>
      <p>
        <strong>Основні переваги DataSpell:</strong>
      </p>
      <ul>
        <li><strong>Зручний Інтерфейс:</strong> Інтуїтивно зрозумілий інтерфейс для ефективної роботи з аналізом даних.</li>
        <li><strong>Підтримка Python:</strong> Повна підтримка мови програмування Python та інтеграція з іншими інструментами від JetBrains.</li>
        <li><strong>Оновлення та Підтримка:</strong> Регулярні оновлення та технічна підтримка від розробників.</li>
      </ul>
      <p>
        <strong>Сторінка DataSpell:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>DataSpell - Integrated Development Environment for Data Analysis</h2>
      <p>
        DataSpell is an integrated development environment for data analysis developed by JetBrains. It provides convenient tools for exploring and debugging Python code, as well as a large number of libraries for data analysis and machine learning.
      </p>
      <p>
        <strong>Key Features of DataSpell:</strong>
      </p>
      <ul>
        <li><strong>Code Debugging:</strong> Convenient interface for debugging Python code.</li>
        <li><strong>Jupyter Notebooks Support:</strong> Integration with Jupyter Notebooks for research and data analysis.</li>
        <li><strong>Code Autocompletion:</strong> Code autocompletion functionality for ease of use.</li>
        <li><strong>Integration with Data Analysis Libraries:</strong> Built-in support for popular libraries for data analysis and machine learning.</li>
      </ul>
      <p>
        <strong>Main Advantages of DataSpell:</strong>
      </p>
      <ul>
        <li><strong>User-Friendly Interface:</strong> Intuitive interface for effective work with data analysis.</li>
        <li><strong>Python Support:</strong> Full support for the Python programming language and integration with other JetBrains tools.</li>
        <li><strong>Updates and Support:</strong> Regular updates and technical support from developers.</li>
      </ul>
      <p>
        <strong>DataSpell Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default DataSpellModalContent;
