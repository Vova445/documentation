import React from 'react';

const AkkaModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "green",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://akka.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Akka
    </a>
  ) : (
    <a href="https://akka.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Akka Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Akka - це набір бібліотек та інструментів для побудови розподілених та паралельних систем на базі акторної моделі.
      </p>
      <p>
        <strong>Основні поняття Akka:</strong>
      </p>
      <ul>
        <li><strong>Актори:</strong> Основні будівельні блоки, які обмінюються повідомленнями в акторній моделі.</li>
        <li><strong>Система Акторів:</strong> Колекція акторів, які працюють разом для виконання завдань.</li>
        <li><strong>Життєвий Цикл Актора:</strong> Актори мають свій власний цикл життя та можуть відновлюватися в разі помилок.</li>
        <li><strong>Паралелізм та Розподіленість:</strong> Можливість працювати паралельно та розподілено для ефективного використання ресурсів.</li>
      </ul>
      <p>
        <strong>Основні переваги Akka:</strong>
      </p>
      <ul>
        <li><strong>Акторна Модель:</strong> Ефективне управління паралельністю та розподіленістю.</li>
        <li><strong>Легкість Розробки:</strong> Забезпечує простоту розробки розподілених систем.</li>
        <li><strong>Висока Надійність:</strong> Можливість відновлення після виникнення помилок.</li>
      </ul>
      <p>
        <strong>Сторінка Akka:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <p>
        Akka is a set of libraries and tools for building distributed and parallel systems based on the actor model.
      </p>
      <p>
        <strong>Key Concepts of Akka:</strong>
      </p>
      <ul>
        <li><strong>Actors:</strong> Fundamental building blocks that exchange messages in the actor model.</li>
        <li><strong>Actor System:</strong> Collection of actors working together to accomplish tasks.</li>
        <li><strong>Actor Lifecycle:</strong> Actors have their own lifecycle and can recover from errors.</li>
        <li><strong>Parallelism and Distribution:</strong> Ability to work in parallel and distribute work for efficient resource utilization.</li>
      </ul>
      <p>
        <strong>Main Advantages of Akka:</strong>
      </p>
      <ul>
        <li><strong>Actor Model:</strong> Efficiently manages parallelism and distribution.</li>
        <li><strong>Development Simplicity:</strong> Provides simplicity in developing distributed systems.</li>
        <li><strong>High Reliability:</strong> Ability to recover from errors.</li>
      </ul>
      <p>
        <strong>Page Akka:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default AkkaModalContent;
