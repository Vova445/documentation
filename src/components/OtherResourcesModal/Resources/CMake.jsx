import React from 'react';

const CMakeModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#064f8b",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка CMake" : "CMake Official Page";

  const officialPageLink = (
    <a href="https://cmake.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        CMake - це кросплатформенний інструмент для автоматизації процесу збирання та конфігурації програмного забезпечення.
      </p>
      <p>
        <strong>Основні можливості CMake:</strong>
      </p>
      <ul>
        <li><strong>Кросплатформенні Сценарії Збирання:</strong> Можливість описувати процес збирання для різних операційних систем.</li>
        <li><strong>Інтеграція з Різними Засобами Розробки:</strong> Сумісність та інтеграція з різними інструментами та IDE.</li>
        <li><strong>Можливості Конфігурації Проекту:</strong> Гнучкі засоби конфігурації та налаштування проекту.</li>
        <li><strong>Генерація Конфігураційних Файлів:</strong> Автоматична генерація файлів для збирання та конфігурації проектів.</li>
      </ul>
      <p>
        <strong>Основні переваги CMake:</strong>
      </p>
      <ul>
        <li><strong>Кросплатформенність:</strong> Підтримка роботи на різних операційних системах.</li>
        <li><strong>Гнучкість та Розширюваність:</strong> Можливість розробки складних конфігурацій та розширення функціоналу.</li>
        <li><strong>Інтеграція з Різними Засобами Розробки:</strong> Зручна робота з різними інструментами та середовищами розробки.</li>
      </ul>
      <p>
        <strong>Сторінка CMake:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>CMake Build System</h2>
      <p>
        CMake is a cross-platform tool designed to automate the process of building and configuring software.
      </p>
      <p>
        <strong>Key Features of CMake:</strong>
      </p>
      <ul>
        <li><strong>Cross-Platform Build Scripts:</strong> Ability to describe the build process for different operating systems.</li>
        <li><strong>Integration with Various Development Tools:</strong> Compatibility and integration with various tools and IDEs.</li>
        <li><strong>Project Configuration Capabilities:</strong> Flexible project configuration and customization options.</li>
        <li><strong>Configuration File Generation:</strong> Automatic generation of files for building and configuring projects.</li>
      </ul>
      <p>
        <strong>Main Advantages of CMake:</strong>
      </p>
      <ul>
        <li><strong>Cross-Platform Support:</strong> Ability to work on different operating systems.</li>
        <li><strong>Flexibility and Extensibility:</strong> Capability to develop complex configurations and extend functionality.</li>
        <li><strong>Integration with Various Development Tools:</strong> Convenient work with different development tools and environments.</li>
      </ul>
      <p>
        <strong>Page CMake:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default CMakeModalContent;
