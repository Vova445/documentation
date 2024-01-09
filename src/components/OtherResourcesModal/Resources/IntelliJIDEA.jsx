import React from 'react';

const IntelliJIDEAModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка IntelliJ IDEA
    </a>
  ) : (
    <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      IntelliJ IDEA Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        IntelliJ IDEA - це інтегроване середовище розробки (IDE) для Java та інших мов програмування, що надає широкий
        функціонал для комфортної та продуктивної розробки програмного забезпечення.
      </p>
      <p>
        <strong>Основні функції IntelliJ IDEA:</strong>
      </p>
      <ul>
        <li><strong>Розумний Код:</strong> Автоматичні підказки, рефакторинг та підтримка різних мов програмування.</li>
        <li><strong>Вбудовані Інструменти Розробки:</strong> Вбудовані інструменти для розробки, тестування та налагодження коду.</li>
        <li><strong>Підтримка Фреймворків:</strong> Широкий вибір підтримуваних фреймворків для різних мов програмування.</li>
        <li><strong>Система Контролю Версій:</strong> Інтеграція з системами контролю версій, такими як Git та SVN.</li>
      </ul>
      <p>
        <strong>Основні переваги IntelliJ IDEA:</strong>
      </p>
      <ul>
        <li><strong>Широкі Можливості Розробки:</strong> Розширені засоби для комфортної та продуктивної розробки.</li>
        <li><strong>Підтримка Різних Мов:</strong> Підтримка різних мов програмування та фреймворків.</li>
        <li><strong>Активне Оновлення:</strong> Регулярні оновлення та підтримка нових технологій.</li>
      </ul>
      <p>
        <strong>Сторінка IntelliJ IDEA:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>IntelliJ IDEA Integrated Development Environment</h2>
      <p>
        IntelliJ IDEA is an integrated development environment (IDE) for Java and other programming languages, providing a wide
        range of features for comfortable and productive software development.
      </p>
      <p>
        <strong>Key Features of IntelliJ IDEA:</strong>
      </p>
      <ul>
        <li><strong>Smart Code:</strong> Automatic suggestions, refactoring, and support for various programming languages.</li>
        <li><strong>Built-in Development Tools:</strong> Integrated tools for coding, testing, and debugging.</li>
        <li><strong>Framework Support:</strong> Extensive support for various frameworks in different programming languages.</li>
        <li><strong>Version Control System:</strong> Integration with version control systems like Git and SVN.</li>
      </ul>
      <p>
        <strong>Main Advantages of IntelliJ IDEA:</strong>
      </p>
      <ul>
        <li><strong>Extensive Development Capabilities:</strong> Advanced tools for comfortable and productive development.</li>
        <li><strong>Multi-Language Support:</strong> Support for various programming languages and frameworks.</li>
        <li><strong>Active Updates:</strong> Regular updates and support for new technologies.</li>
      </ul>
      <p>
        <strong>IntelliJ IDEA Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default IntelliJIDEAModalContent;
