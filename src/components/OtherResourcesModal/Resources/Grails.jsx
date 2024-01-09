import React from 'react';

const GrailsModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#dea77e",
    color: "#333",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://grails.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Grails
    </a>
  ) : (
    <a href="https://grails.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Grails Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Grails - це фреймворк для розробки веб-додатків, який працює на платформі Java та базується на мові програмування Groovy.
      </p>
      <p>
        <strong>Основні функції Grails:</strong>
      </p>
      <ul>
        <li><strong>Висока Продуктивність:</strong> Швидка розробка завдяки конвенціям над конфігураціями.</li>
        <li><strong>Гнучкість та Інтеграція:</strong> Легко інтегрується з іншими технологіями та бібліотеками Java.</li>
        <li><strong>Готові Компоненти:</strong> Велика кількість готових компонентів для реалізації різних функціональностей.</li>
        <li><strong>Підтримка Groovy:</strong> Використовує мову програмування Groovy для створення ефективного та лаконічного коду.</li>
      </ul>
      <p>
        <strong>Основні переваги Grails:</strong>
      </p>
      <ul>
        <li><strong>Швидкість Розробки:</strong> Зручність та швидкість завдяки конвенціям.</li>
        <li><strong>Інтеграція з Java:</strong> Легка інтеграція з існуючими Java-бібліотеками та фреймворками.</li>
        <li><strong>Гнучкість та Масштабованість:</strong> Гнучка архітектура та можливість масштабування додатків.</li>
      </ul>
      <p>
        <strong>Сторінка Grails:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Grails Framework</h2>
      <p>
        Grails is a web application framework for the Java platform, built on the Groovy programming language.
      </p>
      <p>
        <strong>Key Features of Grails:</strong>
      </p>
      <ul>
        <li><strong>High Productivity:</strong> Fast development due to conventions over configurations.</li>
        <li><strong>Flexibility and Integration:</strong> Easily integrates with other Java technologies and libraries.</li>
        <li><strong>Ready-Made Components:</strong> Abundance of ready-made components for implementing various functionalities.</li>
        <li><strong>Groovy Support:</strong> Utilizes the Groovy programming language for efficient and concise code.</li>
      </ul>
      <p>
        <strong>Main Advantages of Grails:</strong>
      </p>
      <ul>
        <li><strong>Rapid Development:</strong> Convenience and speed thanks to conventions.</li>
        <li><strong>Java Integration:</strong> Seamless integration with existing Java libraries and frameworks.</li>
        <li><strong>Flexibility and Scalability:</strong> Flexible architecture and scalability options.</li>
      </ul>
      <p>
        <strong>Grails Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default GrailsModalContent;
