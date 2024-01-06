import React from 'react';

const SeleniumModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "green",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Selenium - це набір інструментів для автоматизації веб-браузерів. Він дозволяє розробникам та тестувальникам автоматизувати дії веб-браузера, такі як натискання кнопок, заповнення форм, навігація по сторінках та інші.
      </p>
      <p>
        <strong>Основні можливості Selenium:</strong>
      </p>
      <ul>
        <li><strong>Автоматизація Веб-Браузерів:</strong> Selenium дозволяє автоматизувати взаємодію з різними веб-браузерами, такими як Chrome, Firefox, та інші.</li>
        <li><strong>Мови Програмування:</strong> Підтримка різних мов програмування, таких як Java, Python, JavaScript, і інші.</li>
        <li><strong>Тестування Веб-Додатків:</strong> Використання для функціонального та автоматизованого тестування веб-додатків.</li>
        <li><strong>Широкі Можливості:</strong> Можливість використання для різних завдань, від тестування до веб-скрапінгу.</li>
      </ul>
      <p>
        <strong>Де Вчитися Selenium:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Selenium:</strong> <a href="https://www.selenium.dev/documentation/en/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Selenium Docs</a></li>
        <br></br>
        <li><strong>Selenium with Python Tutorial:</strong> <a href="https://selenium-python.readthedocs.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Selenium with Python Tutorial</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Selenium Browser Automation</h2>
      <p>
        Selenium is a set of tools for automating web browsers. It allows developers and testers to automate browser actions such as clicking buttons, filling forms, navigating pages, and more.
      </p>
      <p>
        <strong>Key Features of Selenium:</strong>
      </p>
      <ul>
        <li><strong>Browser Automation:</strong> Selenium enables the automation of interaction with various web browsers, including Chrome, Firefox, and others.</li>
        <li><strong>Programming Languages:</strong> Support for various programming languages such as Java, Python, JavaScript, and more.</li>
        <li><strong>Web Application Testing:</strong> Use for functional and automated testing of web applications.</li>
        <li><strong>Wide Capabilities:</strong> Versatility for various tasks, from testing to web scraping.</li>
      </ul>
      <p>
        <strong>Where to Learn Selenium:</strong>
      </p>
      <ul>
        <li><strong>Official Selenium Documentation:</strong> <a href="https://www.selenium.dev/documentation/en/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Selenium Docs</a></li>
        <br></br>
        <li><strong>Selenium with Python Tutorial:</strong> <a href="https://selenium-python.readthedocs.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Selenium with Python Tutorial</a></li>
      </ul>
    </>
  );

  return content;
};

export default SeleniumModalContent;
