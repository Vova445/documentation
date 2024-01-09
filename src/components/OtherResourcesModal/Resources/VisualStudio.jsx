import React from 'react';

const VisualStudioModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#5C2D91",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://visualstudio.microsoft.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Visual Studio
    </a>
  ) : (
    <a href="https://visualstudio.microsoft.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Visual Studio Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Visual Studio - інтегроване середовище розробки (IDE) від Microsoft, яке підтримує різні мови програмування та технології. Це потужний інструмент для створення різноманітних додатків.
      </p>
      <p>
        <strong>Основні можливості Visual Studio:</strong>
      </p>
      <ul>
        <li><strong>Підтримка Мов Програмування:</strong> Робота з різними мовами програмування, такими як C#, C++, Python, та інші.</li>
        <li><strong>Широкі Можливості Розробки:</strong> Інструменти для створення десктопних, веб- та мобільних додатків.</li>
        <li><strong>Вбудовані Інструменти Тестування:</strong> Засоби для тестування та налагодження програмного коду.</li>
        <li><strong>Розширюваність:</strong> Можливість розширення функціоналу за допомогою розширень та плагінів.</li>
      </ul>
      <p>
        <strong>Основні переваги Visual Studio:</strong>
      </p>
      <ul>
        <li><strong>Широкий Спектр Підтримуваних Мов:</strong> Робота з різними мовами програмування та технологіями.</li>
        <li><strong>Розширені Інструменти Розробки:</strong> Можливості для створення різноманітних додатків.</li>
        <li><strong>Інтегровані Засоби Тестування:</strong> Зручні інструменти для тестування та налагодження коду.</li>
      </ul>
      <p><strong>Сторінка Visual Studio:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Visual Studio</h2>
      <p>
        Visual Studio is an integrated development environment (IDE) from Microsoft that supports various programming languages and technologies. It is a powerful tool for creating diverse applications.
      </p>
      <p>
        <strong>Key Features of Visual Studio:</strong>
      </p>
      <ul>
        <li><strong>Language Support:</strong> Support for various programming languages such as C#, C++, Python, and more.</li>
        <li><strong>Broad Development Capabilities:</strong> Tools for creating desktop, web, and mobile applications.</li>
        <li><strong>Built-in Testing Tools:</strong> Facilities for testing and debugging code.</li>
        <li><strong>Extensibility:</strong> Ability to extend functionality through extensions and plugins.</li>
      </ul>
      <p>
        <strong>Main Advantages of Visual Studio:</strong>
      </p>
      <ul>
        <li><strong>Wide Range of Supported Languages:</strong> Support for various programming languages and technologies.</li>
        <li><strong>Advanced Development Tools:</strong> Capabilities for creating diverse applications.</li>
        <li><strong>Integrated Testing Tools:</strong> Convenient tools for testing and debugging code.</li>
      </ul>
      <p><strong>Visual Studio Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default VisualStudioModalContent;
