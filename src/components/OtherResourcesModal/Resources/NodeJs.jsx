import React from 'react';

const NodeJsModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#8CC84B",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Node.js
    </a>
  ) : (
    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Node.js Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Node.js - це платформа для виконання JavaScript коду на сервері, яка дозволяє створювати швидкі та масштабовані мережеві застосунки.
      </p>
      <p>
        <strong>Основні функції Node.js:</strong>
      </p>
      <ul>
        <li><strong>Платформа JavaScript:</strong> Використання JavaScript для створення серверних застосунків.</li>
        <li><strong>Асинхронний Ввід/Вивід:</strong> Ефективне використання ресурсів завдяки асинхронному вводу/виводу.</li>
        <li><strong>Модульність:</strong> Розділення функціональності на модулі для простоти розробки та підтримки.</li>
        <li><strong>Підтримка Пакетного Менеджера npm:</strong> Велика кількість готових пакетів для розширення функціоналу.</li>
      </ul>
      <p>
        <strong>Основні переваги Node.js:</strong>
      </p>
      <ul>
        <li><strong>Швидкодія:</strong> Висока швидкодія завдяки використанню движка V8.</li>
        <li><strong>Масштабованість:</strong> Здатність обробки великої кількості одночасних підключень.</li>
        <li><strong>Активна Спільнота:</strong> Велика та активна спільнота розробників та підтримка.</li>
      </ul>
      <p><strong>Сторінка Node.js:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Node.js Platform</h2>
      <p>
        Node.js is a platform for executing JavaScript code on the server, allowing the creation of fast and scalable network applications.
      </p>
      <p>
        <strong>Key Features of Node.js:</strong>
      </p>
      <ul>
        <li><strong>JavaScript Platform:</strong> Using JavaScript to create server-side applications.</li>
        <li><strong>Asynchronous I/O:</strong> Efficient resource usage through asynchronous input/output.</li>
        <li><strong>Modularity:</strong> Division of functionality into modules for simplicity of development and maintenance.</li>
        <li><strong>npm Package Manager Support:</strong> Large number of ready-made packages to extend functionality.</li>
      </ul>
      <p>
        <strong>Main Advantages of Node.js:</strong>
      </p>
      <ul>
        <li><strong>Speed:</strong> High-speed performance thanks to the use of the V8 engine.</li>
        <li><strong>Scalability:</strong> Ability to handle a large number of concurrent connections.</li>
        <li><strong>Active Community:</strong> Large and active community of developers and support.</li>
      </ul>
      <p><strong>Node.js Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default NodeJsModalContent;
