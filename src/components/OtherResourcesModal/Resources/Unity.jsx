import React from 'react';

const UnityModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://unity.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Unity
    </a>
  ) : (
    <a href="https://unity.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Unity Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Unity - це популярний інтегрований двигун для розробки ігор та інших інтерактивних додатків. Використовується для створення як 2D, так і 3D ігор на різних платформах.
      </p>
      <p>
        <strong>Основні можливості Unity:</strong>
      </p>
      <ul>
        <li><strong>Широкий Вибір Платформ:</strong> Розробка для різних платформ, таких як PC, мобільні пристрої, консолі та інші.</li>
        <li><strong>Система Візуальної Розробки:</strong> Використання візуальної системи для створення ігрового середовища.</li>
        <li><strong>Активна Спільнота:</strong> Велика та активна спільнота розробників та ресурсів для вивчення.</li>
        <li><strong>Можливості VR та AR:</strong> Підтримка розробки віртуальної та доповненої реальності.</li>
      </ul>
      <p>
        <strong>Основні переваги Unity:</strong>
      </p>
      <ul>
        <li><strong>Кросплатформеність:</strong> Можливість розробки для різних платформ з однієї кодової бази.</li>
        <li><strong>Велика Спільнота:</strong> Активна спільнота розробників та широкий вибір ресурсів для навчання.</li>
        <li><strong>Візуальний Редактор:</strong> Зручний візуальний інтерфейс для швидкого розгортання ігор.</li>
      </ul>
      <p><strong>Сторінка Unity:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Unity Game Development</h2>
      <p>
        Unity is a popular integrated engine for game development and interactive applications. It is used for creating both 2D and 3D games on various platforms.
      </p>
      <p>
        <strong>Key Features of Unity:</strong>
      </p>
      <ul>
        <li><strong>Wide Range of Platforms:</strong> Development for various platforms such as PC, mobile devices, consoles, and more.</li>
        <li><strong>Visual Development System:</strong> Utilizes a visual system for creating the game environment.</li>
        <li><strong>Active Community:</strong> Large and active community of developers with abundant learning resources.</li>
        <li><strong>VR and AR Capabilities:</strong> Support for virtual and augmented reality development.</li>
      </ul>
      <p>
        <strong>Main Advantages of Unity:</strong>
      </p>
      <ul>
        <li><strong>Cross-Platform:</strong> Ability to develop for different platforms from a single codebase.</li>
        <li><strong>Large Community:</strong> Active developer community and a wide range of learning resources.</li>
        <li><strong>Visual Editor:</strong> Convenient visual interface for rapid game development.</li>
      </ul>
      <p><strong>Unity Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default UnityModalContent;
