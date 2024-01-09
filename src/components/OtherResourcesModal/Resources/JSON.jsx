import React from 'react';

const JsonModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.json.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка JSON
    </a>
  ) : (
    <a href="https://www.json.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      JSON Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        JSON (JavaScript Object Notation) - це легкий формат обміну даними, заснований на синтаксисі мови JavaScript.
      </p>
      <p>
        <strong>Основні особливості JSON:</strong>
      </p>
      <ul>
        <li><strong>Простота та Легкість Застосування:</strong> Легко читається та розуміється як людиною, так і комп'ютерами.</li>
        <li><strong>Незалежність від Мови:</strong> Може бути використаний з будь-якою мовою програмування.</li>
        <li><strong>Єдність та Зручність:</strong> Компактний та однозначний для представлення структурованих даних.</li>
      </ul>
      <p>
        <strong>Де Вчитися JSON:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>JSON (JavaScript Object Notation)</h2>
      <p>
        JSON is a lightweight data interchange format based on the syntax of the JavaScript language.
      </p>
      <p>
        <strong>Key Features of JSON:</strong>
      </p>
      <ul>
        <li><strong>Simplicity and Ease of Use:</strong> Easily readable and understandable by both humans and computers.</li>
        <li><strong>Language Independence:</strong> Can be used with any programming language.</li>
        <li><strong>Consistency and Convenience:</strong> Compact and unambiguous for representing structured data.</li>
      </ul>
      <p>
        <strong>Where to Learn JSON:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default JsonModalContent;
