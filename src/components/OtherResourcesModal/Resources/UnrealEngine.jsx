import React from 'react';

const UnrealEngineModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.unrealengine.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Unreal Engine
    </a>
  ) : (
    <a href="https://www.unrealengine.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Unreal Engine Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Unreal Engine - це потужний та високоефективний ігровий движок, використовуваний для розробки якісних ігор та інтерактивних додатків. Відомий своєю графікою та реалістичністю.
      </p>
      <p>
        <strong>Основні можливості Unreal Engine:</strong>
      </p>
      <ul>
        <li><strong>Потужний Графічний Движок:</strong> Вражаючий рівень графіки та реалістичність візуальних ефектів.</li>
        <li><strong>Широкий Функціонал:</strong> Велика кількість вбудованих інструментів та можливостей.</li>
        <li><strong>Відкритий Код:</strong> Доступний вихідний код для модифікацій та власних розробок.</li>
        <li><strong>Розробка VR та AR:</strong> Підтримка віртуальної та доповненої реальності.</li>
      </ul>
      <p>
        <strong>Основні переваги Unreal Engine:</strong>
      </p>
      <ul>
        <li><strong>Графічний Потенціал:</strong> Вражаючий рівень графіки та реалістичність візуальних ефектів.</li>
        <li><strong>Широкий Функціонал:</strong> Велика кількість вбудованих інструментів та можливостей.</li>
        <li><strong>Відкритий Код:</strong> Доступний вихідний код для модифікацій та власних розробок.</li>
      </ul>
      <p><strong>Сторінка Unreal Engine:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Unreal Engine</h2>
      <p>
        Unreal Engine is a powerful and high-performance game engine used for the development of quality games and interactive applications. It is known for its graphics and realism.
      </p>
      <p>
        <strong>Key Features of Unreal Engine:</strong>
      </p>
      <ul>
        <li><strong>Powerful Graphics Engine:</strong> Impressive graphics and realism in visual effects.</li>
        <li><strong>Extensive Functionality:</strong> A large number of built-in tools and capabilities.</li>
        <li><strong>Open Source:</strong> Access to the source code for modifications and custom developments.</li>
        <li><strong>VR and AR Development:</strong> Support for virtual and augmented reality.</li>
      </ul>
      <p>
        <strong>Main Advantages of Unreal Engine:</strong>
      </p>
      <ul>
        <li><strong>Graphical Potential:</strong> Impressive graphics and realism in visual effects.</li>
        <li><strong>Extensive Functionality:</strong> A large number of built-in tools and capabilities.</li>
        <li><strong>Open Source:</strong> Access to the source code for modifications and custom developments.</li>
      </ul>
      <p><strong>Unreal Engine Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default UnrealEngineModalContent;
