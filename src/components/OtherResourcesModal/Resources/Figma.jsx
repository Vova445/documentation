import React from 'react';

const FigmaModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#2E2E2E",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Figma
    </a>
  ) : (
    <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Figma Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Figma - це відмінний інструмент для дизайну та прототипування, який працює в браузері та дозволяє командам спільно працювати над проектами.
      </p>
      <p>
        <strong>Основні функції Figma:</strong>
      </p>
      <ul>
        <li><strong>Дизайн:</strong> Створення макетів, інтерфейсів та графічного контенту.</li>
        <li><strong>Прототипування:</strong> Створення інтерактивних прототипів для тестування взаємодії.</li>
        <li><strong>Спільна Робота:</strong> Онлайн-колаборація та спільна робота команди над проектами.</li>
        <li><strong>Компоненти та Системи Дизайну:</strong> Використання готових компонентів та систем для швидкого дизайну.</li>
      </ul>
      <p>
        <strong>Основні переваги Figma:</strong>
      </p>
      <ul>
        <li><strong>Доступність:</strong> Робота в браузері, не потребує встановлення додаткового програмного забезпечення.</li>
        <li><strong>Спільна Робота в Реальному Часі:</strong> Команди можуть одночасно працювати над одним проектом.</li>
        <li><strong>Велика Спільнота та Підтримка:</strong> Активна спільнота користувачів та швидка підтримка.</li>
      </ul>
      <p>
        <strong>Сторінка Figma:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Figma</h2>
      <p>
        Figma is an excellent design and prototyping tool that works in the browser, allowing teams to collaborate on projects.
      </p>
      <p>
        <strong>Key Features of Figma:</strong>
      </p>
      <ul>
        <li><strong>Design:</strong> Creating layouts, interfaces, and graphic content.</li>
        <li><strong>Prototyping:</strong> Creating interactive prototypes for testing interactions.</li>
        <li><strong>Collaboration:</strong> Online collaboration and teamwork on projects.</li>
        <li><strong>Components and Design Systems:</strong> Using ready-made components and systems for fast design.</li>
      </ul>
      <p>
        <strong>Main Advantages of Figma:</strong>
      </p>
      <ul>
        <li><strong>Accessibility:</strong> Works in the browser, no need to install additional software.</li>
        <li><strong>Real-time Collaboration:</strong> Teams can work on the same project simultaneously.</li>
        <li><strong>Large Community and Support:</strong> Active user community and quick support.</li>
      </ul>
      <p>
        <strong>Figma Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default FigmaModalContent;
