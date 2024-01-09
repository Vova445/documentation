import React from 'react';

const CodePenModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка CodePen" : "CodePen Official Page";

  const officialPageLink = (
    <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        CodePen - це веб-платформа для розробки та демонстрації фронтенд-коду. Вона надає зручне середовище для написання HTML, CSS та JavaScript коду прямо в браузері та миттєвого перегляду результатів.
      </p>
      <p>
        <strong>Основні можливості CodePen:</strong>
      </p>
      <ul>
        <li><strong>Онлайн Редактор Коду:</strong> Можливість писати та редагувати код прямо в браузері.</li>
        <li><strong>Миттєвий Перегляд Змін:</strong> Реальний час показу результатів змін у коді.</li>
        <li><strong>Спільнота та Відкриті Збірки:</strong> Можливість ділитися своїм кодом та взяти участь у спільноті розробників.</li>
        <li><strong>Відлагодження та Профілактика Помилок:</strong> Вбудовані засоби для відлагодження та виправлення помилок в коді.</li>
      </ul>
      <p>
        <strong>Основні переваги CodePen:</strong>
      </p>
      <ul>
        <li><strong>Швидкість Розробки:</strong> Швидка і зручна розробка фронтенд-коду в онлайн середовищі.</li>
        <li><strong>Спільнота та Взаємодія:</strong> Можливість обговорювати та ділитися кодом з іншими розробниками.</li>
        <li><strong>Можливості Демонстрації:</strong> Показ та демонстрація свого фронтенд-коду в реальному часі.</li>
      </ul>
      <p>
        <strong>Сторінка CodePen:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>CodePen - Frontend Development Playground</h2>
      <p>
        CodePen is a web platform for developing and showcasing frontend code. It provides a convenient environment for writing HTML, CSS, and JavaScript code directly in the browser with instant preview of the results.
      </p>
      <p>
        <strong>Key Features of CodePen:</strong>
      </p>
      <ul>
        <li><strong>Online Code Editor:</strong> Ability to write and edit code directly in the browser.</li>
        <li><strong>Real-time Preview of Changes:</strong> Real-time display of results as you make changes to the code.</li>
        <li><strong>Community and Open Collections:</strong> Ability to share your code and participate in the developer community.</li>
        <li><strong>Debugging and Error Prevention:</strong> Built-in tools for debugging and fixing errors in the code.</li>
      </ul>
      <p>
        <strong>Main Advantages of CodePen:</strong>
      </p>
      <ul>
        <li><strong>Rapid Development:</strong> Fast and convenient frontend code development in an online environment.</li>
        <li><strong>Community and Interaction:</strong> Ability to discuss and share code with other developers.</li>
        <li><strong>Demonstration Capabilities:</strong> Showcasing and demonstrating frontend code in real-time.</li>
      </ul>
      <p>
        <strong>Page CodePen:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default CodePenModalContent;
