import React from 'react';

const StrutsModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#8B2022",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Struts - це відкритий веб-фреймворк для розробки веб-додатків на мові Java. Він надає інфраструктуру для розробки,
        налагаючи при цьому стандартні патерни та допомагаючи зменшити кількість коду, необхідного для створення веб-додатків.
      </p>
      <p>
        <strong>Основні принципи Struts:</strong>
      </p>
      <ul>
        <li><strong>Модель-Вид-Контролер (MVC):</strong> Struts використовує архітектурний патерн MVC для розділення компонентів додатку.</li>
        <li><strong>Конфігурація через XML:</strong> Конфігурація багатьох аспектів додатку відбувається через XML-файли.</li>
        <li><strong>Валідація та Обробка помилок:</strong> Struts надає засоби для валідації введених даних та обробки помилок.</li>
      </ul>
      <p>
        <strong>Основні концепції Struts:</strong>
      </p>
      <ul>
        <li><strong>Дії (Actions):</strong> Обробники, які викликаються для виконання певних дій у веб-додатку.</li>
        <li><strong>Пакети та Конфігурація:</strong> Компоненти додатку групуються в пакети, а конфігурація відбувається через XML.</li>
        <li><strong>Міграція:</strong> Підтримка міграції існуючих проектів на Struts.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Struts ідеально підходить для розробки веб-додатків на Java, особливо тих, які вимагають використання архітектурного патерну MVC.
      </p>
      <p>
        <strong>Де вчитися Struts:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Struts:</strong> <a href="https://struts.apache.org/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Struts</a></li>
        <br></br>
        <li><strong>Приклади та Ресурси:</strong> <a href="https://github.com/apache/struts-examples" target="_blank" rel="noopener noreferrer" style={linkStyles}>Struts Examples</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Struts Web Framework</h2>
      <p>
        Struts is an open-source web framework for developing web applications in Java. It provides infrastructure for development,
        imposing standard patterns, and helping reduce the amount of code needed to create web applications.
      </p>
      <p>
        <strong>Key Principles of Struts:</strong>
      </p>
      <ul>
        <li><strong>Model-View-Controller (MVC):</strong> Struts uses the MVC architectural pattern to separate components of the application.</li>
        <li><strong>Configuration via XML:</strong> Configuration of many aspects of the application is done through XML files.</li>
        <li><strong>Validation and Error Handling:</strong> Struts provides tools for validating input data and handling errors.</li>
      </ul>
      <p>
        <strong>Core Concepts of Struts:</strong>
      </p>
      <ul>
        <li><strong>Actions:</strong> Handlers called to perform specific actions in the web application.</li>
        <li><strong>Packages and Configuration:</strong> Application components are grouped into packages, and configuration is done through XML.</li>
        <li><strong>Migration:</strong> Support for migrating existing projects to Struts.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Struts is ideal for developing web applications in Java, especially those that require the use of the MVC architectural pattern.
      </p>
      <p>
        <strong>Where to Learn Struts:</strong>
      </p>
      <ul>
        <li><strong>Official Struts Documentation:</strong> <a href="https://struts.apache.org/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Struts</a></li>
        <br></br>
        <li><strong>Examples and Resources:</strong> <a href="https://github.com/apache/struts-examples" target="_blank" rel="noopener noreferrer" style={linkStyles}>Struts Examples</a></li>
      </ul>
    </>
  );

  return content;
};

export default StrutsModalContent;
