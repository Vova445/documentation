import React from 'react';

const CherryPyModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#7A1540",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        CherryPy - це легкий веб-фреймворк для мови програмування Python, який дозволяє швидко створювати веб-додатки.
      </p>
      <p>
        <strong>Основні принципи CherryPy:</strong>
      </p>
      <ul>
        <li><strong>Простота використання:</strong> CherryPy робить розробку веб-додатків на Python простою та зручною.</li>
        <li><strong>Вбудований сервер:</strong> Має вбудований веб-сервер, що полегшує розгортання додатків.</li>
        <li><strong>URL-маршрутизація:</strong> Забезпечує зручний механізм маршрутизації для обробки HTTP-запитів.</li>
      </ul>
      <p>
        <strong>Основні концепції CherryPy:</strong>
      </p>
      <ul>
        <li><strong>Класи-контролери:</strong> Використовуються для обробки HTTP-запитів та реалізації функціоналу додатку.</li>
        <li><strong>Сесії та Кукізи:</strong> Підтримка сесій і кукізів для збереження стану та ідентифікації користувачів.</li>
        <li><strong>Шаблонізатори:</strong> Легке використання шаблонізаторів для генерації HTML та інших видів відповідей.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        CherryPy підходить для швидкої розробки веб-додатків на Python з акцентом на простоту використання та ефективність.
      </p>
      <p>
        <strong>Де вчитися CherryPy:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація CherryPy:</strong> <a href="https://cherrypy.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>CherryPy</a></li>
        <br></br>
        <li><strong>Приклади та Ресурси:</strong> <a href="https://github.com/cherrypy/cherrypy/tree/master/cherrypy/tutorial" target="_blank" rel="noopener noreferrer" style={linkStyles}>CherryPy Tutorial</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>CherryPy Web Framework</h2>
      <p>
        CherryPy is a lightweight web framework for the Python programming language that allows for quick development of web applications.
      </p>
      <p>
        <strong>Key Principles of CherryPy:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> CherryPy makes web development in Python simple and convenient.</li>
        <li><strong>Built-in Server:</strong> Comes with a built-in web server, making deployment of applications straightforward.</li>
        <li><strong>URL Routing:</strong> Provides a convenient routing mechanism for handling HTTP requests.</li>
      </ul>
      <p>
        <strong>Core Concepts of CherryPy:</strong>
      </p>
      <ul>
        <li><strong>Controller Classes:</strong> Used to handle HTTP requests and implement application functionality.</li>
        <li><strong>Sessions and Cookies:</strong> Support for sessions and cookies to maintain state and identify users.</li>
        <li><strong>Templating:</strong> Easy use of templating engines for generating HTML and other types of responses.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        CherryPy is suitable for rapid development of web applications in Python with an emphasis on ease of use and efficiency.
      </p>
      <p>
        <strong>Where to Learn CherryPy:</strong>
      </p>
      <ul>
        <li><strong>Official CherryPy Documentation:</strong> <a href="https://cherrypy.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>CherryPy</a></li>
        <br></br>
        <li><strong>Examples and Resources:</strong> <a href="https://github.com/cherrypy/cherrypy/tree/master/cherrypy/tutorial" target="_blank" rel="noopener noreferrer" style={linkStyles}>CherryPy Tutorial</a></li>
      </ul>
    </>
  );

  return content;
};

export default CherryPyModalContent;
