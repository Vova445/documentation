import React from 'react';

const JetBrainsModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка JetBrains
    </a>
  ) : (
    <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      JetBrains Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        JetBrains - це компанія, яка розробляє інтегровані середовища розробки (IDE) для різних мов програмування.
      </p>
      <p>
        <strong>Основні продукти JetBrains:</strong>
      </p>
      <ul>
        <li><strong>IntelliJ IDEA:</strong> Інтегроване середовище розробки для Java, Kotlin, Groovy та інших мов.</li>
        <li><strong>PyCharm:</strong> IDE для розробки на мові Python.</li>
        <li><strong>WebStorm:</strong> IDE для розробки веб-додатків (JavaScript, TypeScript, HTML, CSS).</li>
        <li><strong>CLion:</strong> Інтегроване середовище для розробки на мові C и C++.</li>
        <li><strong>Rider:</strong> Інтегроване середовище для розробки на мові C#.</li>
      </ul>
      <p>
        <strong>Основні переваги продуктів JetBrains:</strong>
      </p>
      <ul>
        <li><strong>Підтримка Багатьох Мов:</strong> Широкі можливості для розробки на різних мовах програмування.</li>
        <li><strong>Автоматичне Доповнення Коду:</strong> Інтелектуальне автодоповнення коду та підказки.</li>
        <li><strong>Інструменти Рефакторингу:</strong> Засоби для покращення структури коду.</li>
        <li><strong>Інтеграція з Системами Керування Версіями:</strong> Зручна робота з Git, SVN та іншими системами.</li>
      </ul>
      <p>
        <strong>Сторінка JetBrains:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>JetBrains</h2>
      <p>
        JetBrains is a company that develops integrated development environments (IDEs) for various programming languages.
      </p>
      <p>
        <strong>Main JetBrains Products:</strong>
      </p>
      <ul>
        <li><strong>IntelliJ IDEA:</strong> Integrated development environment for Java, Kotlin, Groovy, and other languages.</li>
        <li><strong>PyCharm:</strong> IDE for Python development.</li>
        <li><strong>WebStorm:</strong> IDE for web development (JavaScript, TypeScript, HTML, CSS).</li>
        <li><strong>CLion:</strong> Integrated environment for C and C++ development.</li>
        <li><strong>Rider:</strong> Integrated environment for C# development.</li>
      </ul>
      <p>
        <strong>Main Advantages of JetBrains Products:</strong>
      </p>
      <ul>
        <li><strong>Support for Multiple Languages:</strong> Extensive capabilities for development in various programming languages.</li>
        <li><strong>Automatic Code Completion:</strong> Intelligent code autocompletion and suggestions.</li>
        <li><strong>Refactoring Tools:</strong> Tools for improving code structure.</li>
        <li><strong>Integration with Version Control Systems:</strong> Convenient integration with Git, SVN, and other systems.</li>
      </ul>
      <p>
        <strong>JetBrains Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default JetBrainsModalContent;
